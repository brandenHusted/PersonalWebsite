const userInputField = document.getElementById("ans");
const resultDiv = document.getElementById("result");
const textArea = resultDiv.querySelector("textarea");
const submitButton = document.getElementById("submitButton");

// Pre-defined questions and responses
const questions = [
      "hi",
      "I love you",
      "Yes",
      "What is your name?",
      "How can I help you today?",
      "Do you have any other questions?",
      "Can you help me with programming?",
      "I am working on Python",
      "I am working on C++",
      "I am working on Java",
      "I am working on JavaScript",
      "I am working on CSS",
      "I am working on html",
      "I am working on C",
      "Can you tell me more about Branden?",
      "How do I contact Branden?",
      "How did Branden make this project?",
      "what is pystage",
      "Will AI take over the world?",
      "What is Branden's Biggest accomplishment?",
      "hey",
      "How do you understand me?"
    ];

const responses = [
      "Hello, how can I help you?",
      "You do? I am not a human so that means I cannot procreate. Do you want me to get you in touch with another human?",
      "Alright.",
      "Hello! What would you like to be called?",
      "Sure, what would you like to know?",
      "Feel free to ask anything else!",
      "Sure, I can try to help! What specifically are you working on?",
      "Python is a great language, here is a good place to look for Python Documentation https://www.python.org/doc/",
      "C++ is a great language, here is a good place to look for C++ Documentation https://cplusplus.com/doc/tutorial/",
      "Java is a great language!",
      "JavaScript is a great language, here is a good place to look for JavaScript Documentation https://developer.mozilla.org/en-US/docs/Web/javascript",
      "CSS is a great language, here is a good place to look for CSS Documentation https://developer.mozilla.org/en-US/docs/Web/CSS/Reference",
      "HTML is a great language, here is a good place to look for HTML Documentation https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics",
      "C is a great language, here is a good place to look for C documentation https://www.gnu.org/software/gnu-c-manual/gnu-c-manual.html",
      "Yes! Branden is a student at Calvin University studying Computer Science. He has grit and never gives up on his assignments and he loves to learn new things.",
      "You can contact Branden by going to his Instagram or LinkedIn and messaging him directly. His email is statefan1324@gmail.com.",
      "Branden made this project by spending his free time after his job and coding up his website. He used the skills he learned from class to do his personal projects.",
      "PyStage is an open-source visual programming environment designed to help users create interactive stories, games, and animations. It's similar to the popular Scratch platform but is implemented in Python, making it a valuable tool for those looking to learn Python programming in a fun and engaging way.",
      "We will have to wait and see...",
      "Branden's biggest accomplishment is earning the rank of Eagle Scout because he put his heart and soul into his Eagle Scout project, building a school sign for a small local school because someone ran over their old sign.",
      "What's up?",
      "I understand you with an algorithm called Levenshtein distance. This algorithm matches what you type into the closest response the chatbot has in its database."
    ];

    // Function to calculate the Levenshtein distance
    function levenshteinDistance(a, b) {
      const an = a.length;
      const bn = b.length;
      const matrix = [];

      // Edge cases
      if (an === 0) return bn;
      if (bn === 0) return an;

      // Initialize the matrix
      for (let i = 0; i <= an; i++) {
        matrix[i] = [];       // Initialize an empty row
        matrix[i][0] = i;     // Set the first column value
      }
      for (let j = 1; j <= bn; j++) {
        matrix[0][j] = j;
      }

      // Fill the matrix
      for (let i = 1; i <= an; i++) {
        for (let j = 1; j <= bn; j++) {
          if (a[i - 1] === b[j - 1]) {
            matrix[i][j] = matrix[i - 1][j - 1];
          } else {
            // I want to study how substitution, insertion and deletion works here
            matrix[i][j] = Math.min(
              matrix[i - 1][j - 1] + 1, // substitution
              Math.min(matrix[i][j - 1] + 1, // insertion
              matrix[i - 1][j] + 1) // deletion
            );
          }
        }
      }

      return matrix[an][bn];
    }

    // Event listener for the submit button
    submitButton.addEventListener("click", function() {
      const userInput = userInputField.value.trim(); // Remove leading/trailing whitespace
      let closestMatchIndex = -1;
      let smallestDistance = Infinity;

      // Find the closest matching question based on Levenshtein distance
      questions.forEach((question, index) => {
        const distance = levenshteinDistance(userInput.toLowerCase(), question.toLowerCase());
        if (distance < smallestDistance) {
          smallestDistance = distance;
          closestMatchIndex = index;
        }
      });

      // Get the corresponding response (should not happen in this state)
      const chatbotResponse = closestMatchIndex !== -1 ? responses[closestMatchIndex] : "I'm sorry, I didn't quite understand your question. Could you please rephrase or ask something else?";

      // Display the response in the text area
      textArea.value = userInput + "\nChatbot: " + chatbotResponse;

      // Clear the input field after submitting
      userInputField.value = "";
    });
