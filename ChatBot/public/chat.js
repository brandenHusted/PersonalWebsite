const userInputField = document.getElementById("ans");
const resultDiv = document.getElementById("result");
const textArea = resultDiv ? resultDiv.querySelector("textarea") : null;
const submitButton = document.getElementById("submitButton");

const synth = window.speechSynthesis;

// HAL eye
const halEye = document.getElementById("halEye");

// Track whether HAL is currently speaking
let halIsSpeaking = false;


/* =========================================
   HAL SPEAKING ANIMATION
   ========================================= */

function startHalAnimation() {
  if (!halEye) return;

  halIsSpeaking = true;
  halEye.classList.add("speaking");
}

function stopHalAnimation() {
  if (!halEye) return;

  halIsSpeaking = false;
  halEye.classList.remove("speaking");
}


/* =========================================
   READ CHATBOT RESPONSE ALOUD
   ========================================= */

function speakResponse(response) {
  if (!("speechSynthesis" in window)) return;

  // Stop anything already speaking
  synth.cancel();

  const utterance = new SpeechSynthesisUtterance(response);

  utterance.lang = "en-US";
  utterance.rate = 0.9;
  utterance.pitch = 0.8;
  utterance.volume = 1;

  // Start HAL animation when speech begins
  utterance.onstart = () => {
    startHalAnimation();
  };

  // Stop animation when HAL finishes
  utterance.onend = () => {
    stopHalAnimation();
  };

  // Also stop if speech is cancelled
  utterance.oncancel = () => {
    stopHalAnimation();
  };

  // Stop animation if speech encounters an error
  utterance.onerror = () => {
    stopHalAnimation();
  };

  synth.speak(utterance);
}


/* =========================================
   OPEN OUTLOOK COMMAND
   ========================================= */

function isOpenOutlookCommand(input) {
  const normalized = input
    .toLowerCase()
    .trim()
    .replace(/[?.!]/g, "");

  const outlookCommands = [
    "open outlook",
    "open my outlook",
    "launch outlook",
    "start outlook",
    "go to outlook",
    "open microsoft outlook",
    "open my email",
    "open email"
  ];

  return outlookCommands.includes(normalized);
}


function openOutlook() {
  const outlookUrl = "https://outlook.office.com/";

  window.open(outlookUrl, "_blank");
}


/* =========================================
   VOICE INPUT
   ========================================= */

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

  // Use same styling as Ask button
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

    // Put recognized speech into input box
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


/* =========================================
   ASK BUTTON
   ========================================= */

if (submitButton && userInputField) {

  submitButton.addEventListener("click", async () => {

    const userInput =
      userInputField.value.trim();

    if (!userInput) return;


    /* -----------------------------------------
       OPEN OUTLOOK LOCALLY
       ----------------------------------------- */

    if (isOpenOutlookCommand(userInput)) {

      const outlookResponse =
        "Opening Outlook.";

      if (textArea) {

        textArea.value =
          userInput +
          "\n\nHAL: " +
          outlookResponse;

      }

      // Speak first
      speakResponse(outlookResponse);

      // Open Outlook in a new tab
      openOutlook();

      // Clear input
      userInputField.value = "";

      return;
    }


    /* -----------------------------------------
       NORMAL CHATBOT REQUEST
       ----------------------------------------- */

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


    /* -----------------------------------------
       DISPLAY RESPONSE
       ----------------------------------------- */

    if (textArea) {

      textArea.value =
        userInput +
        "\n\nHAL: " +
        chatbotResponse;

    }


    // Clear input
    userInputField.value = "";


    // Speak chatbot response
    speakResponse(chatbotResponse);

  });

  // ==========================================
// ORIGINAL HAL-STYLE EYE
// Generated entirely with JavaScript
// No external image required
// ==========================================

function createHalEye() {
  // Don't create it twice
  if (document.getElementById("halCanvas")) return;

  const container = document.createElement("div");
  container.id = "halEyeContainer";

  container.innerHTML = `
      <canvas id="halCanvas" width="300" height="300"></canvas>
      <div class="hal-label">
          <span>HAL</span> <b>9000</b>
      </div>
      <div class="hal-status">
          <span></span> ONLINE
      </div>
  `;

  document.body.appendChild(container);

  const canvas = document.getElementById("halCanvas");
  const ctx = canvas.getContext("2d");

  let speaking = false;
  let animationFrame;

  function drawEye(time) {
      const t = time / 1000;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cx = 150;
      const cy = 140;

      // Idle vs speaking animation
      const pulse = speaking
          ? Math.sin(t * 9) * 5
          : Math.sin(t * 2.2) * 2;

      const glow = speaking
          ? 25 + Math.sin(t * 9) * 10
          : 15 + Math.sin(t * 2.2) * 5;

      // Red atmospheric glow
      const glowGradient = ctx.createRadialGradient(
          cx,
          cy,
          15,
          cx,
          cy,
          145
      );

      glowGradient.addColorStop(0, `rgba(255, 20, 20, ${speaking ? 0.5 : 0.3})`);
      glowGradient.addColorStop(0.35, `rgba(180, 0, 0, 0.18)`);
      glowGradient.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.fillStyle = glowGradient;
      ctx.beginPath();
      ctx.arc(cx, cy, 145, 0, Math.PI * 2);
      ctx.fill();

      // Outer metal ring
      const outerGradient = ctx.createRadialGradient(
          cx - 25,
          cy - 25,
          20,
          cx,
          cy,
          120
      );

      outerGradient.addColorStop(0, "#777");
      outerGradient.addColorStop(0.25, "#222");
      outerGradient.addColorStop(0.55, "#888");
      outerGradient.addColorStop(0.7, "#111");
      outerGradient.addColorStop(1, "#555");

      ctx.fillStyle = outerGradient;
      ctx.beginPath();
      ctx.arc(cx, cy, 105 + pulse * 0.15, 0, Math.PI * 2);
      ctx.fill();

      // Inner black glass
      const glassGradient = ctx.createRadialGradient(
          cx - 15,
          cy - 20,
          5,
          cx,
          cy,
          85
      );

      glassGradient.addColorStop(0, "#180000");
      glassGradient.addColorStop(0.45, "#080000");
      glassGradient.addColorStop(1, "#000");

      ctx.fillStyle = glassGradient;
      ctx.beginPath();
      ctx.arc(cx, cy, 86, 0, Math.PI * 2);
      ctx.fill();

      // Red eye glow
      const eyeGradient = ctx.createRadialGradient(
          cx,
          cy,
          2,
          cx,
          cy,
          48 + pulse
      );

      eyeGradient.addColorStop(
          0,
          speaking
              ? "rgba(255,255,220,1)"
              : "rgba(255,120,100,1)"
      );

      eyeGradient.addColorStop(
          0.12,
          "rgba(255,40,30,1)"
      );

      eyeGradient.addColorStop(
          0.35,
          "rgba(255,0,0,0.8)"
      );

      eyeGradient.addColorStop(
          1,
          "rgba(255,0,0,0)"
      );

      ctx.fillStyle = eyeGradient;
      ctx.beginPath();
      ctx.arc(cx, cy, 52 + pulse, 0, Math.PI * 2);
      ctx.fill();

      // Bright center
      ctx.fillStyle = speaking
          ? "#fff"
          : "#ffb0a0";

      ctx.shadowColor = "#ff0000";
      ctx.shadowBlur = glow;

      ctx.beginPath();
      ctx.arc(cx, cy, speaking ? 11 : 8, 0, Math.PI * 2);
      ctx.fill();

      ctx.shadowBlur = 0;

      // Glass reflection
      ctx.strokeStyle = "rgba(255,255,255,0.3)";
      ctx.lineWidth = 5;

      ctx.beginPath();
      ctx.arc(
          cx - 4,
          cy - 5,
          77,
          Math.PI * 1.15,
          Math.PI * 1.65
      );
      ctx.stroke();

      // Outer ring highlight
      ctx.strokeStyle = "rgba(255,255,255,0.35)";
      ctx.lineWidth = 3;

      ctx.beginPath();
      ctx.arc(
          cx,
          cy,
          101,
          Math.PI * 1.15,
          Math.PI * 1.8
      );
      ctx.stroke();

      animationFrame = requestAnimationFrame(drawEye);
  }

  animationFrame = requestAnimationFrame(drawEye);

  // Make animation controls available globally
  window.startHalAnimation = function () {
      speaking = true;
  };

  window.stopHalAnimation = function () {
      speaking = false;
  };
}


// Create the eye after the page loads
document.addEventListener("DOMContentLoaded", createHalEye);

}
