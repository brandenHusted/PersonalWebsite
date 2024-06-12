const userInputField = document.getElementById("ans");
const resultDiv = document.getElementById("result");
const textArea = resultDiv.querySelector("textarea"); // Get the textarea element
const submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", function() {
  const userInput = userInputField.value.trim(); // Remove leading/trailing whitespace

  // Replace this with your actual chatbot logic
  // Here's an example using pre-defined questions and responses:
  const questions = [
    "What is your name?",
    "How can I help you today?",
    "Do you have any other questions?"
  ];
  const responses = [
    "Hello! What would you like to be called?",
    "Sure, what would you like to know?",
    "Feel free to ask anything else!"
  ];

  let chatbotResponse = ""; // Initialize to avoid errors

  // Find the best matching response (optional, customize matching logic)
  questions.forEach((question, index) => {
    if (userInput.toLowerCase().includes(question.toLowerCase())) {
      chatbotResponse = responses[index];
      return; // Exit the loop if a match is found
    }
  });

  // Handle unmatched input (optional, provide more informative responses)
  if (chatbotResponse === "") {
    chatbotResponse = "I'm sorry, I didn't quite understand your question. Could you please rephrase or ask something else?";
  }

  // Display the response in the text area
  textArea.value = userInput + "\nChatbot: " + chatbotResponse;

  // Clear the input field after submitting
  userInputField.value = "";
});
