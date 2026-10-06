const userInputField = document.getElementById("ans");
const resultDiv = document.getElementById("result");
const textArea = resultDiv ? resultDiv.querySelector("textarea") : null;
const submitButton = document.getElementById("submitButton");

const synth = window.speechSynthesis;

// Read the chatbot response aloud
function speakResponse(response) {
  if (!("speechSynthesis" in window)) return;

  const utterance = new SpeechSynthesisUtterance(response);
  utterance.lang = "en-US";
  synth.speak(utterance);
}

// Voice input is optional.
// This prevents the page from crashing on browsers
// that don't support SpeechRecognition.
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = null;
let voiceInputButton = null;

if (SpeechRecognition && submitButton && userInputField) {
  recognition = new SpeechRecognition();

  recognition.lang = "en-US";
  recognition.interimResults = false;

  // Create Speak button
  voiceInputButton = document.createElement("button");
  voiceInputButton.textContent = "🎤 Speak";
  voiceInputButton.type = "button";

  // Use the same styling as the Ask button
  if (submitButton.className) {
    voiceInputButton.className = submitButton.className;
  }

  // Put Ask and Speak next to each other
  const buttonContainer = document.createElement("div");

  buttonContainer.style.display = "flex";
  buttonContainer.style.alignItems = "center";
  buttonContainer.style.gap = "10px";
  buttonContainer.style.marginTop = "10px";

  submitButton.style.margin = "0";
  voiceInputButton.style.margin = "0";

  submitButton.parentNode.insertBefore(
    buttonContainer,
    submitButton
  );

  buttonContainer.appendChild(submitButton);
  buttonContainer.appendChild(voiceInputButton);

  // Start microphone
  voiceInputButton.addEventListener("click", () => {
    try {
      recognition.start();
    } catch (error) {
      console.warn(
        "Speech recognition could not start:",
        error
      );
    }
  });

  // When speech is recognized
  recognition.addEventListener("result", (event) => {
    const userInput =
      event.results[0][0].transcript.trim();

    // Put the recognized speech into the input box
    userInputField.value = userInput;

    // Automatically ask the question
    submitButton.click();
  });

  // Speech recognition error
  recognition.addEventListener("error", (event) => {
    console.error(
      "Speech recognition error:",
      event.error
    );

    alert(
      "Sorry, I couldn't understand you. Please try again."
    );
  });
}

// Ask button
if (submitButton && userInputField) {
  submitButton.addEventListener("click", async () => {
    const userInput = userInputField.value.trim();

    if (!userInput) return;

    // Prevent multiple requests while waiting
    submitButton.disabled = true;

    let chatbotResponse;

    try {
      // Send ONLY the user's question to the server
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          question: userInput
        })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          data.error || "Request failed."
        );
      }

      chatbotResponse = data.answer;

    } catch (error) {
      console.error(
        "Chatbot request failed:",
        error
      );

      chatbotResponse =
        "Sorry, I couldn't reach the chatbot server. Please try again.";

    } finally {
      submitButton.disabled = false;
    }

    // Keep the existing text box as the ONLY visible output.
    if (textArea) {
      textArea.value =
        userInput +
        "\n\nChatbot: " +
        chatbotResponse;
    }

    // Clear the input field
    userInputField.value = "";

    // Speak the chatbot's response
    speakResponse(chatbotResponse);
  });
}
