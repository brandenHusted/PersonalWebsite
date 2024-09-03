document.addEventListener('DOMContentLoaded', () => {
    const scorePercentage = document.getElementById('score-percentage');
    const answeredQuestionsContainer = document.getElementById('answered-questions')
    const score = localStorage.getItem('scorePercentage');
    if (score) {
      scorePercentage.textContent = score;
    }
    // Retrieve and display the answered questions
    const answeredQuestions = JSON.parse(localStorage.getItem('answeredQuestions')) || [];
    if (answeredQuestions.length > 0) {
      answeredQuestions.forEach(questionData => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question-item');
        questionElement.innerHTML = `
          <p><strong>Question:</strong> ${questionData.question}</p>
          <p><strong>Your Answer:</strong> ${questionData.selectedAnswer}</p>
          <p><strong>Correct Answer:</strong> ${questionData.correctAnswer}</p>
        `;
        answeredQuestionsContainer.appendChild(questionElement);
      });
    } 
  });
  