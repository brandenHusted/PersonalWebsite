
// mathAgent.js

// This function determines whether the user is asking
// HAL to perform a mathematical calculation.
function isMathQuestion(input) {
    const text = input.toLowerCase();

    const mathKeywords = [
        "calculate",
        "what is",
        "how much is",
        "plus",
        "minus",
        "multiply",
        "divided by",
        "percent",
        "percentage",
        "square root",
        "math"
    ];

    const hasKeyword = mathKeywords.some(keyword =>
        text.includes(keyword)
    );

    // Also recognize inputs such as 25 + 30.
    const hasMathSymbols = /[0-9]\s*[\+\-*\/%]\s*[0-9]/.test(text);

    return hasKeyword || hasMathSymbols;
}


// This function performs the actual calculation.
// It deliberately does not use eval().
function calculateMath(input) {
    const text = input.toLowerCase().trim();

    // Square root calculation.
    const squareRoot = text.match(
        /square root of\s+(-?\d+(?:\.\d+)?)/
    );

    if (squareRoot) {
        const number = Number(squareRoot[1]);

        if (number < 0) {
            return "I cannot calculate a real square root of a negative number.";
        }

        return `The square root of ${number} is ${Math.sqrt(number)}.`;
    }

    // Percentage calculation:
    // Example: What is 25% of 400?
    const percentage = text.match(
        /(-?\d+(?:\.\d+)?)\s*%\s*of\s*(-?\d+(?:\.\d+)?)/
    );

    if (percentage) {
        const percent = Number(percentage[1]);
        const number = Number(percentage[2]);

        const answer = (percent / 100) * number;

        return `${percent}% of ${number} is ${answer}.`;
    }

    // Convert written operations into mathematical symbols.
    const expression = text
        .replace(/what is|calculate|how much is/gi, "")
        .replace(/multiplied by|times/gi, "*")
        .replace(/divided by/gi, "/")
        .replace(/plus/gi, "+")
        .replace(/minus/gi, "-")
        .replace(/×/g, "*")
        .replace(/÷/g, "/")
        .trim();

    // Only allow numbers, decimal points, parentheses,
    // arithmetic operators, and whitespace.
    if (!/^[0-9+\-*/().\s]+$/.test(expression)) {
        return "I couldn't understand that calculation.";
    }

    // Parse a restricted arithmetic grammar.
    const result = parseExpression(expression);

    if (!Number.isFinite(result)) {
        return "The calculation produced an invalid result.";
    }

    return `The answer is ${result}.`;
}


// A small arithmetic parser.
// Supports +, -, *, /, parentheses, and decimals.
function parseExpression(input) {
    const tokens = input.match(
        /\d+(?:\.\d+)?|[()+\-*/]/g
    );

    if (!tokens || tokens.join("") !== input.replace(/\s/g, "")) {
        throw new Error("Invalid expression.");
    }

    let position = 0;

    function factor() {
        const token = tokens[position++];

        if (token === "+") return factor();
        if (token === "-") return -factor();

        if (token === "(") {
            const value = expression();

            if (tokens[position++] !== ")") {
                throw new Error("Missing closing parenthesis.");
            }

            return value;
        }

        const number = Number(token);

        if (!Number.isFinite(number)) {
            throw new Error("Invalid number.");
        }

        return number;
    }

    function term() {
        let value = factor();

        while (tokens[position] === "*" || tokens[position] === "/") {
            const operator = tokens[position++];

            const next = factor();

            if (operator === "/" && next === 0) {
                throw new Error("Cannot divide by zero.");
            }

            value = operator === "*" ? value * next : value / next;
        }

        return value;
    }

    function expression() {
        let value = term();

        while (tokens[position] === "+" || tokens[position] === "-") {
            const operator = tokens[position++];

            const next = term();

            value = operator === "+" ? value + next : value - next;
        }

        return value;
    }

    const result = expression();

    if (position !== tokens.length) {
        throw new Error("Unexpected input.");
    }

    return result;
}


// Export the agent functions for HAL.
module.exports = {
    isMathQuestion,
    calculateMath
};
