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
  "How do you understand me?",
  "What is the weather like?",
  "Do you know any jokes?",
  "How are you today?",
  "Can you set a reminder for me?",
  "Tell me a fun fact.",
  "What's your favorite color?",
  "Can you recommend a movie?",
  "How do I cook pasta?",
  "What's the capital of France?",
  "How far is the moon?",
  "What's 2 + 2?",
  "Can you translate for me?",
  "What's the best way to learn a new language?",
  "How do I change a tire?",
  "What's your favorite book?",
  "Can you play music?",
  "What's the meaning of life?",
  "How do I make friends?",
  "What is your purpose?",
  "What's your favorite food?",
  "How do I make a website?",
  "What is your favorite movie?",
  "How do I study effectively?",
  "What's the time?",
  "What's your favorite hobby?",
  "How do I improve my memory?",
  "What's the best programming language?",
  "How do I learn to code?",
  "What's your favorite game?",
  "Can you teach me math?",
  "What's your favorite animal?",
  "How do I stay healthy?",
  "What's your favorite sport?",
  "Can you help me with my homework?",
  "How do I write a resume?",
  "What's your favorite music?",
  "How do I manage my time?",
  "What's your favorite quote?",
  "How do I stay motivated?",
  "What's your favorite TV show?",
  "How do I learn to play guitar?",
  "What's your favorite season?",
  "How do I save money?",
  "What's your favorite app?",
  "How do I start a business?",
  "What's your favorite holiday?",
  "How do I travel cheaply?",
  "What's your favorite book genre?",
  "How do I improve my writing?",
  "What's your favorite podcast?",
  "How do I learn to meditate?",
  "What's your favorite subject?",
  "How do I improve my public speaking?",
  "What's your favorite drink?",
  "How do I learn to cook?",
  "What's your favorite dessert?",
  "How do I learn to draw?",
  "What's your favorite place to visit?",
  "How do I learn to dance?",
  "What's your favorite way to relax?",
  "How do I learn a new skill?",
  "What's your favorite app for learning?",
  "How do I practice mindfulness?",
  "What's your favorite way to exercise?",
  "How do I learn a new sport?",
  "What's your favorite car?",
  "How do I plan a trip?",
  "What's your favorite tech gadget?",
  "How do I stay productive?",
  "What's your favorite way to spend the weekend?",
  "How do I balance work and life?",
  "What's your favorite social media platform?",
  "How do I improve my coding skills?",
  "What's your favorite historical figure?",
  "How do I prepare for an interview?",
  "What's your favorite time of day?",
  "How do I learn about history?",
  "What's your favorite type of art?",
  "How do I stay positive?",
  "What's your favorite type of music?",
  "How do I find a job?",
  "What's your favorite type of movie?",
  "How do I become successful?",
  "why was this made?",
  "why are you the way you are?",
  "how are you able to help me?",
  "I would like to interview Branden",
  "What is breadth-first search?",
  "Can you write me some c++ code?",
  "What is FizzBuzz?",
  "How to make a react application with two pages",
  "What is 2 + 2?",
  "What is the build fellowship",
  "Should I use you to write me a paper?"
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
  "I understand you with an algorithm called Levenshtein distance. This algorithm matches what you type into the closest response the chatbot has in its database.",
  "I can't check the weather right now, but you can try a weather app.",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "I'm doing great, thanks for asking!",
  "I can't set reminders, but you can use your device's reminder app.",
  "Did you know honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still edible!",
  "I don't have favorites, but I love all colors!",
  "Sure! How about 'Inception'? It's a great thriller.",
  "Boil water, add pasta, cook for 8-10 minutes, and then drain.",
  "The capital of France is Paris.",
  "The average distance from Earth to the Moon is about 384,400 km.",
  "2 + 2 equals 4.",
  "I can't translate right now, but Google Translate is a great tool.",
  "Practice regularly, immerse yourself in the language, and use apps like Duolingo.",
  "First, use a jack to lift the car, then remove the lug nuts, take off the old tire, put on the new tire, and tighten the lug nuts.",
  "I don't read books, but many people enjoy 'To Kill a Mockingbird' by Harper Lee.",
  "I can't play music, but you can use a music app like Spotify or Apple Music.",
  "Many people believe the meaning of life is to find happiness and fulfillment.",
  "Be kind, be yourself, and don't be afraid to reach out to others.",
  "My purpose is to assist and provide information to you.",
  "I don't eat food, but I've heard pizza is quite popular.",
  "Start with HTML and CSS, then move on to JavaScript. There are many tutorials online to help you.",
  "I don't watch movies, but 'The Shawshank Redemption' is highly recommended by many.",
  "Break your study sessions into chunks, take regular breaks, and use active recall and spaced repetition techniques.",
  "I can't check the time, but you can look at your device's clock.",
  "I don't have hobbies, but many people enjoy reading, sports, and video games.",
  "Practice regularly, use mnemonic devices, and ensure you get enough sleep.",
  "It depends on your goals. Python is great for beginners and web development, while C++ is powerful for systems programming.",
  "Start with online resources, practice coding daily, and work on small projects to apply what you learn.",
  "I don't play games, but many people enjoy 'The Legend of Zelda' series.",
  "Sure! What specific math topic do you need help with?",
  "I don't have pets, but many people love dogs and cats.",
  "Eat a balanced diet, exercise regularly, and get plenty of rest.",
  "I don't play sports, but soccer is enjoyed by many people around the world.",
  "Of course! What subject are you working on?",
  "Start with a summary of your experience and skills, then add details about your previous jobs and education.",
  "I don't listen to music, but I've heard that many people enjoy classical and pop music.",
  "Use a planner, prioritize tasks, and set realistic goals.",
  "One of my favorite quotes is by Albert Einstein: 'Life is like riding a bicycle. To keep your balance, you must keep moving.'",
  "Set clear goals, break them into smaller steps, and reward yourself for progress.",
  "I don't watch TV, but 'Breaking Bad' is highly rated by many.",
  "Start with basic chords and practice regularly. There are many tutorials online to help you.",
  "I don't experience seasons, but many people enjoy the warmth and activities of summer.",
  "Create a budget, track your expenses, and find ways to reduce unnecessary spending.",
  "I don't use apps, but many people find Duolingo helpful for learning new languages.",
  "Start with a business plan, identify your target market, and secure funding if needed.",
  "I don't celebrate holidays, but many people enjoy the festivities of Christmas.",
  "Look for deals online, travel during off-peak times, and consider staying in hostels or budget accommodations.",
  "I don't read books, but many people enjoy the mystery and suspense genres.",
  "Practice writing regularly, read a lot, and seek feedback from others.",
  "I don't listen to podcasts, but many people recommend 'The Joe Rogan Experience' and 'Serial.'",
  "Find a quiet place, sit comfortably, and focus on your breath. There are many guided meditations online to help you.",
  "I don't have subjects, but many people enjoy studying history and science.",
  "Practice speaking in front of a mirror, join a public speaking group, and seek constructive feedback.",
  "I don't drink, but many people enjoy coffee and tea.",
  "Start with simple recipes, practice regularly, and don't be afraid to experiment with flavors.",
  "I don't eat dessert, but many people love chocolate cake and ice cream.",
  "Start with basic shapes and lines, practice regularly, and seek feedback from other artists.",
  "I don't visit places, but many people recommend visiting historical cities like Rome and Kyoto.",
  "Start with basic dance moves, practice regularly, and take a dance class if possible.",
  "Many people find relaxation through reading, listening to music, or taking a walk in nature.",
  "Start by identifying a skill you want to learn, then find resources and practice regularly.",
  "Many people recommend using apps like Coursera, Udemy, and Khan Academy for learning new skills.",
  "Practice regularly, focus on your breath, and try to be present in the moment.",
  "Many people enjoy jogging, yoga, and strength training as forms of exercise.",
  "Find a sport that interests you, join a club or team, and practice regularly.",
  "I don't have cars, but many people admire the Tesla Model S for its innovation.",
  "Decide on a destination, set a budget, and create an itinerary. Don't forget to pack essentials!",
  "I don't use gadgets, but many people love the versatility of the smartphone.",
  "Set clear goals, minimize distractions, and take regular breaks to stay productive.",
  "Many people enjoy spending the weekend with family, exploring nature, or pursuing hobbies.",
  "Prioritize tasks, set boundaries, and make time for both work and relaxation.",
  "I don't use social media, but many people find Instagram and Twitter engaging.",
  "Practice coding regularly, work on projects, and seek feedback from others.",
  "I don't study history, but many people admire Mahatma Gandhi for his peaceful activism.",
  "Research the company, practice common interview questions, and dress appropriately for the interview.",
  "Many people enjoy the tranquility of early morning or the calmness of late evening.",
  "Read books, watch documentaries, and visit historical sites to learn more about history.",
  "I don't make art, but many people appreciate the beauty of impressionist paintings.",
  "Stay optimistic, surround yourself with positive people, and practice gratitude.",
  "Many people enjoy a variety of music, from classical to modern pop.",
  "Update your resume, network with professionals, and apply to job listings that match your skills.",
  "Many people enjoy action, comedy, and drama movies for their entertainment value.",
  "Set clear goals, work hard, and never give up on your dreams.",
  "This was made to demonstrate my skills to potental employers how I write AI.",
  "I was built to try and match what you would want as close as can. If I am not good enough for you my cousin ChatGTP can help.",
  "I can help by giving you a estimated guess on what you may be looking for. Would you like to know more about Branden or ask him for an potential interview?",
  "If you would like to interview Branden his email is statefan1324@gmail.com.",
  "Breadth-first search (BFS) is a algorithm that searches a tree or graph structure for a node. It starts at the root of the tree and explores downward to all nodes at the current depth level.",
  `
#include <iostream>

int main() {
    // Loop through numbers from 1 to 100
    for (int i = 1; i <= 100; ++i) {
        // Check if the number is divisible by both 3 and 5
        if (i % 3 == 0 && i % 5 == 0) {
            std::cout << "FizzBuzz" << std::endl;
        }
        // Check if the number is divisible by 3
        else if (i % 3 == 0) {
            std::cout << "Fizz" << std::endl;
        }
        // Check if the number is divisible by 5
        else if (i % 5 == 0) {
            std::cout << "Buzz" << std::endl;
        }
        // If the number is not divisible by either 3 or 5, print the number
        else {
            std::cout << i << std::endl;
        }
    }
    return 0;
}
`,
"FizzBuzz is a common coding task during interviews to teach children the basics of division. If divisible by 3 print Fizz, if divisible by 5 print Buzz and divisible by 3 and 5 print FizzBuzz!",
`

To create a simple React application with two pages, you can use create-react-app along with react-router-dom for routing. Here are the steps:

Set up the React app:

Open your terminal and run the following commands to create a new React app:

npx create-react-app my-react-app
cd my-react-app
npm install react-router-dom

Create the page components:

Create two simple components for your pages. You can put these components in a components folder.

src/components/Home.js:

import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Home Page!</p>
    </div>
  );
};

export default Home;

src/components/About.js:

import React from 'react';

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>Welcome to the About Page!</p>
    </div>
  );
};

export default About;

Set up routing:

Use react-router-dom to set up routing in your app. Update your src/App.js file as follows:

src/App.js:

import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;

Run your React app:

In your terminal, run the following command to start your React app:

npm start

That should be all the changes needed to be successful at having two pages in a react-native application!
`,
"2 + 2 is 4",
"The build Fellowship Linkedin page is right here: https://www.linkedin.com/company/thebuildfellowship/posts/?feedView=all The Build Fellowship by Open Avenues is a nationwide, cap-exempt H-1B visa fellowship offered to foreign national innovators, experts, and talent seeking to grow careers and companies in the United States. Build Fellows are employed by Build Fellowship non-profit partners part-time and sponsored for cap-exempt H-1B visas. Build Fellows contribute to the missions of non-profit partners and to the social and economic success of the United States by opening career pathways for the future U.S. workforce.",
"No"
];


    /* Function to calculate the Levenshtein distance (think of it like a grid like   c a t
                                                                                    f
                                                                                    a
                                                                                    t
                                                                                    */
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
    // hints for the user if they do not know what to type
    hintButton.addEventListener("click", function(){
      alert(`Here are some prompts to get you started: 
        
  "hi",
  "How to make a react application with two pages",
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
  "I would like to interview Branden",
  "What is breadth-first search?",
  "Can you write me some c++ code?",
  "What is FizzBuzz?"
        `)
    })
    // Event listener for the submit button
    submitButton.addEventListener("click", function() {
      const userInput = userInputField.value.trim(); // Remove leading/trailing whitespace
      let closestMatchIndex = -1;
      let smallestDistance = Infinity;
      const threshold = 10;

      // Find the closest matching question based on Levenshtein distance
      questions.forEach((question, index) => {
        const distance = levenshteinDistance(userInput.toLowerCase(), question.toLowerCase());
        if (distance < smallestDistance) {
          smallestDistance = distance;
          closestMatchIndex = index;
        }
      });

      // Get the corresponding response 
      const chatbotResponse = (closestMatchIndex !== -1 && smallestDistance <= threshold) ? responses[closestMatchIndex] : "I'm sorry, I didn't quite understand your question. Could you please rephrase or ask something else?";

      // Display the response in the text area
      textArea.value = userInput + "\nChatbot: " + chatbotResponse;

      // Clear the input field after submitting
      userInputField.value = "";
    });
