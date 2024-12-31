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
  "Should I use you to write me a paper?",
  "What is the purpose of a Build Fellowship?",  
"Should I use AI to outline my project?",  
"How do I create a personal development plan?",  
"Should I learn Python or Java first?",  
"What are the benefits of studying abroad?",  
"Should I prioritize soft skills over technical skills?",  
"What is the best way to network at events?",  
"Should I pursue a master's degree immediately after college?",  
"What is the future of artificial intelligence in education?",  
"Should I invest in cryptocurrency as a student?",  
"How do I effectively manage my time?",  
"Should I take a gap year to gain experience?",  
"What is the best strategy for learning a new language?",  
"Should I specialize or become a generalist in my career?",  
"What are the benefits of volunteering?",  
"Should I apply for an internship abroad?",  
"What is the best way to improve my writing skills?",  
"Should I start my own business in college?",  
"What is the difference between mentorship and sponsorship?",  
"Should I take online courses to advance my career?",  
"What is the importance of financial literacy?",  
"Should I join a professional association?",  
"What is the best way to prepare for a tech interview?",  
"Should I build a portfolio website?",  
"What are the benefits of participating in hackathons?",  
"Should I focus on theory or practical skills?",  
"What is the significance of networking on LinkedIn?",  
"Should I learn about cloud computing?",  
"What are the key elements of a strong resume?",  
"Should I take part in student leadership roles?",  
"What is the importance of empathy in teamwork?",  
"Should I write a research paper as an undergrad?",  
"What is the impact of internships on career growth?",  
"Should I use open-source projects to gain experience?",  
"What is the role of certifications in the tech industry?",  
"Should I attend career fairs?",  
"What are the benefits of participating in study groups?",  
"Should I develop a personal brand?",  
"What is the significance of emotional intelligence?",  
"Should I explore alternative education pathways?",  
"What is the value of a liberal arts education?",  
"Should I join professional meetups?",  
"What is the best approach to solve complex problems?",  
"Should I learn cybersecurity skills?",  
"What is the impact of social media on careers?",  
"Should I write a blog to share my expertise?",  
"What are the key aspects of critical thinking?",  
"Should I study computer science or software engineering?",  
"What is the importance of diversity in teams?",  
"Should I explore machine learning as a career path?",  
"What are the benefits of project-based learning?",  
"Should I get involved in community service?",  
"What is the significance of coding bootcamps?",  
"Should I focus on learning one programming language deeply?",  
"What are the advantages of hybrid learning?",  
"Should I prioritize work-life balance?",  
"What is the future of remote work?",  
"Should I pursue certifications in Agile or Scrum?",  
"What are the best practices for public speaking?",  
"Should I consider freelancing as a career option?",  
"What is the role of AI in healthcare?",  
"Should I take leadership training courses?",  
"What are the top soft skills for tech professionals?",  
"Should I start investing early in life?",  
"What is the importance of building a strong network?",  
"Should I create an open-source project?",  
"What are the benefits of attending conferences?",  
"Should I focus on GPA or extracurricular activities?",  
"What is the role of design thinking in innovation?",  
"Should I consider dual majors?",  
"What is the best way to avoid burnout?",  
"Should I learn about blockchain technology?",  
"What is the value of experiential learning?",  
"Should I pursue a career in data science?",  
"What are the key aspects of professional ethics?",  
"Should I participate in a cultural exchange program?",  
"What is the importance of self-reflection?",  
"Should I take part in debate competitions?",  
"What is the future of renewable energy?",  
"Should I learn to manage personal finances?",  
"What are the key elements of a strong LinkedIn profile?",  
"Should I explore the gig economy?",  
"What is the significance of lifelong learning?",  
"Should I take on a teaching assistant role?",  
"What is the role of resilience in career success?",  
"Should I join an incubator program for startups?",  
"What is the importance of curiosity in learning?",  
"Should I pursue a side hustle while studying?",  
"What is the impact of artificial intelligence on jobs?",  
"Should I learn about Internet of Things (IoT)?",  
"What is the value of mindfulness in personal development?",  
"Should I take personality assessments?",  
"What is the role of storytelling in communication?",  
"Should I participate in online coding challenges?",  
"What is the significance of a growth mindset?",  
"Should I learn to create content for social media?",  
"What are the best resources for learning to code?",  
"Should I consider a career in cloud architecture?",  
"What is the role of mentorship in career development?",  
"Should I focus on creating passive income streams?", 
"How do I participate in a Build Fellowship Project?", 
"What is KnightCite?",
"Why is Calvin the best college ever",
"How does the operating system decide where to place a program in memory?", 
"Why does paging break memory into smaller chunks, and how does this help avoid fragmentation?", 
"What happens when a program tries to access memory that it shouldn't?", 
"What is the difference between physical memory and virtual memory?", 
"Why do we need to swap out programs from memory, and what does that process look like?", 
"How does a page fault happen, and how does the operating system handle it?", 
"What is the role of the page table in virtual memory management?", 
"How does memory allocation in a heap differ from memory allocation on a stack?", 
"Why is the 'Least Recently Used' (LRU) page replacement algorithm so effective?", 
"What challenges do operating systems face when dealing with fragmentation, and how do they overcome them?",
"What is a firewall and how does it protect a network from unauthorized access?", 
"What are the main differences between symmetric and asymmetric encryption?", 
"How does multi-factor authentication enhance security?", 
"What is the purpose of a VPN and how does it ensure privacy for users?", 
"What are the common types of malware and how do they infect systems?", 
"How does an Intrusion Detection System (IDS) work to detect malicious activity?", 
"What is a denial-of-service (DoS) attack and how does it impact a system?", 
"Why is it important to keep software updated with the latest patches?", 
"How does phishing work and what are some strategies to avoid falling for phishing attacks?", 
"What is the principle of least privilege and how does it enhance security?", 
"What are the risks associated with using public Wi-Fi and how can you protect yourself?", 
"What is a zero-day exploit and how can it affect system security?", 
"What is the role of a Security Information and Event Management (SIEM) system?", 
"What are the key differences between the security models of cloud computing providers like AWS and Azure?", 
"How does a penetration test help identify vulnerabilities in a system?",

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
"No",
"My experience with the Build Project has been incredibly rewarding, providing me with both practical skills and a deeper understanding of web development using React and D3. This journey has not only strengthened my technical abilities but also reinforced my passion for problem-solving in a rapidly evolving field. Working through challenges, such as implementing dynamic user interfaces and finding workarounds for React Router, has given me invaluable insight into the importance of persistence and creative thinking in software development. I especially appreciated my time in the Build Fellowship, where I had the privilege of learning from an amazing mentor, Sanjeev Vijayaraj. His guidance was instrumental in helping me navigate complex topics and explore new areas of learning. The mentorship experience, combined with the hands-on nature of the project, has equipped me with the confidence to tackle future challenges in my career. You should participate in a Build Fellowship Project if you want to get experience in your career early on in college and see if what you are majoring in college is the right fit for you! Any more questions?",  
"Using AI can help streamline your project planning, but ensure you review and customize the outline to suit your specific needs",  
"Start by identifying your goals, assessing your strengths and weaknesses, and creating actionable steps with a timeline for progress",  
"Learn Python first if you’re a beginner due to its simplicity and versatility, but Java is also a great choice for understanding object-oriented programming",  
"Studying abroad enhances cultural understanding, offers global networking opportunities, and provides unique academic experiences",  
"Both are essential; focus on a balance depending on your career path, but remember soft skills often differentiate candidates in competitive roles",  
"Prepare by researching attendees, practice your elevator pitch, and engage in meaningful conversations followed by timely follow-ups",  
"Consider your career goals and field of interest. Gaining work experience first can help you make a more informed decision",  
"AI is transforming education by enabling personalized learning, automating administrative tasks, and improving accessibility",  
"Cryptocurrency can be volatile; invest cautiously and prioritize financial stability before exploring high-risk investments",  
"Use time management tools, set priorities with a to-do list, and eliminate distractions to stay focused on your goals",  
"A gap year can be beneficial for gaining practical experience or exploring new interests, but plan it carefully to maximize its value",  
"Practice consistently, use language apps, immerse yourself in the culture, and engage in conversations with native speakers",  
"It depends on your field and goals. Specialists excel in niche roles, while generalists adapt well to diverse opportunities",  
"Volunteering provides opportunities to develop leadership skills, build connections, and make a positive impact on the community",  
"Yes, applying for an internship abroad can provide you with unique experiences, global exposure, and the chance to broaden your perspective",  
"Improving your writing skills involves consistent practice, reading widely, and seeking constructive feedback from peers and mentors",  
"Starting your own business in college can be a valuable learning experience, but ensure you balance it with your studies and other commitments",  
"Mentorship involves guidance and advice, while sponsorship actively promotes you for opportunities—both are crucial for career growth",  
"Online courses are a flexible way to learn new skills and stay updated, but verify the credibility of the course and the platform",  
"Financial literacy helps you manage money effectively, plan for the future, and make informed decisions about savings and investments",  
"Joining a professional association can help you network, stay updated in your field, and access resources for professional growth",  
"Preparing for a tech interview involves practicing coding problems, understanding key concepts, and familiarizing yourself with common interview formats",  
"A portfolio website showcases your projects and skills, making it easier for potential employers to assess your work and capabilities",  
"Participating in hackathons helps you build teamwork skills, learn from peers, and tackle real-world problems under time constraints",  
"Focusing on practical skills helps you apply knowledge effectively, but a solid theoretical foundation is equally important for long-term growth",  
"Networking on LinkedIn allows you to connect with professionals, share insights, and explore job opportunities in your field",  
"Learning cloud computing opens up opportunities in a growing field and enhances your ability to work with modern IT infrastructures",  
"A strong resume highlights your skills, achievements, and experiences clearly and concisely, tailored to the job you’re applying for",  
"Student leadership roles help you develop communication, organization, and decision-making skills that are valuable in any career",  
"Empathy fosters better collaboration and understanding within teams, improving overall productivity and workplace harmony",  
"Writing a research paper as an undergraduate showcases your ability to conduct in-depth studies and adds value to your academic profile",  
"Internships provide hands-on experience, industry exposure, and opportunities to build professional connections early in your career",  
"Contributing to open-source projects enhances your technical skills, demonstrates initiative, and helps you build a portfolio of real-world work",  
"Certifications validate your skills and knowledge, making you stand out in the job market and increasing your career prospects. I have a few certifications of my own would you like to ask about them?",  
"Career fairs are excellent for meeting potential employers, learning about job openings, and gaining insights into industry trends",  
"Study groups encourage collaborative learning, allow you to clarify doubts, and keep you motivated through peer interaction",  
"Developing a personal brand involves showcasing your expertise, values, and unique traits to create a strong professional identity",  
"Emotional intelligence helps you manage your emotions, navigate interpersonal relationships, and handle workplace challenges effectively",  
"Alternative education pathways, like bootcamps or online certifications, offer flexible, focused learning tailored to specific career goals",  
"Liberal arts education develops critical thinking, creativity, and adaptability, preparing you for diverse career opportunities", 
"Joining professional meetups allows you to network with industry peers, gain insights into trends, and build valuable connections",  
"The best approach to solve complex problems is to break them into smaller parts, analyze each segment, and approach methodically",  
"Learning cybersecurity skills is highly recommended as they are in demand and critical for protecting digital assets",  
"Social media can enhance your career by helping you build a personal brand, but excessive use can also lead to distractions",  
"Writing a blog helps you share expertise, establish authority in your field, and attract professional opportunities",  
"Critical thinking involves analyzing information objectively, evaluating evidence, and making well-reasoned conclusions",  
"Both are excellent choices; computer science focuses on theoretical concepts, while software engineering emphasizes practical applications",  
"Diversity in teams fosters creativity, innovation, and better decision-making by incorporating varied perspectives",  
"Exploring machine learning can lead to exciting career opportunities in AI, data science, and automation",  
"Project-based learning helps you apply theoretical knowledge in real-world scenarios and develop practical skills",  
"Getting involved in community service builds empathy, enhances teamwork skills, and allows you to contribute to society I would say yes go to your local church and ask what you can do to help",  
"Coding bootcamps provide focused, intensive training, making them ideal for career transitions or skill upgrades",  
"Learning one programming language deeply builds a strong foundation, but diversifying your skills can enhance adaptability",  
"Hybrid learning combines the best of online and in-person education, offering flexibility and effective engagement",  
"Prioritizing work-life balance improves mental health, productivity, and long-term career satisfaction",  
"Remote work offers flexibility and access to global opportunities but requires strong self-discipline",  
"Certifications in Agile or Scrum demonstrate your ability to manage projects efficiently and can enhance career prospects",  
"Public speaking improves communication skills, boosts confidence, and allows you to share your ideas effectively",  
"Freelancing provides flexibility and control over your workload but requires strong time management and marketing skills",  
"AI is revolutionizing healthcare by enabling better diagnostics, personalized treatments, and operational efficiency",  
"Leadership training courses help you develop essential skills like decision-making, communication, and team management",  
"Top soft skills for tech professionals include communication, adaptability, problem-solving, and teamwork",  
"Starting to invest early in life helps you take advantage of compounding and build long-term financial stability",  
"Building a strong network opens doors to job opportunities, collaborations, and mentorship",  
"Creating an open-source project demonstrates initiative, enhances your portfolio, and allows you to collaborate with a global community",  
"Attending conferences helps you stay updated, network with professionals, and gain inspiration from industry leaders",  
"Balancing GPA and extracurricular activities ensures academic success while building essential skills and experiences",  
"Design thinking promotes innovation by focusing on user-centered solutions and encouraging creative problem-solving",  
"Dual majors allow you to diversify your skills and knowledge but require careful planning to manage the workload",  
"Avoid burnout by setting boundaries, taking breaks, and practicing stress management techniques like mindfulness",  
"Learning about blockchain technology opens up opportunities in industries like finance, supply chain, and digital security",  
"Experiential learning offers hands-on experiences that reinforce theoretical knowledge and build practical skills",  
"Data science is a promising career path with opportunities in analytics, AI, and business intelligence",  
"Professional ethics ensure integrity, build trust, and guide responsible decision-making in your career",  
"Participating in a cultural exchange program enhances cross-cultural understanding, language skills, and adaptability",  
"Self-reflection helps you identify strengths, address weaknesses, and align your goals with your values",  
"Debate competitions improve your critical thinking, public speaking, and ability to articulate ideas effectively",  
"Renewable energy has a promising future, offering sustainable solutions to global energy challenges",  
"Managing personal finances is essential for achieving financial stability and planning for future goals",  
"A strong LinkedIn profile highlights your skills, achievements, and professional interests, helping you attract opportunities",  
"Exploring the gig economy offers flexible work options but requires adaptability and financial planning",  
"Lifelong learning keeps you updated, enhances your adaptability, and helps you stay competitive in your career",  
"Taking on a teaching assistant role helps you reinforce your knowledge, gain teaching experience, and build leadership skills",  
"Resilience helps you overcome setbacks, adapt to challenges, and maintain a positive outlook in your career",  
"Joining an incubator program provides mentorship, funding opportunities, and access to resources for your startup",  
"Curiosity drives learning, fosters creativity, and helps you stay motivated in exploring new opportunities",  
"Pursuing a side hustle allows you to explore passions and earn extra income but requires careful time management",  
"Artificial intelligence is reshaping jobs by automating repetitive tasks and creating opportunities in emerging fields",  
"Learning about IoT equips you with skills to work on innovative solutions in smart devices and connected technologies",  
"Mindfulness enhances focus, reduces stress, and supports personal growth by promoting self-awareness",  
"Taking personality assessments helps you understand your strengths, weaknesses, and preferences for personal development",  
"Storytelling enhances communication by making ideas relatable, memorable, and impactful",  
"Online coding challenges improve problem-solving skills, foster learning, and prepare you for technical interviews",  
"A growth mindset helps you embrace challenges, learn from failures, and achieve continuous improvement",  
"Learning to create content for social media allows you to share your ideas, build a following, and establish an online presence",  
"Best resources for learning to code include platforms like Codecademy, freeCodeCamp, and YouTube tutorials",  
"A career in cloud architecture offers exciting opportunities to design scalable and secure cloud solutions",  
"Mentorship provides guidance, support, and insights, helping you navigate challenges and achieve career goals",  
"Focusing on passive income streams builds financial independence and long-term stability", 
"To participate in a build fellowship project you will need to identify fellowship programs aligned with your skills and interests. Look into the application process, project themes, and goals. Apply for a project that fits with you and look at their linkedin here: https://www.linkedin.com/company/thebuildfellowship/posts/?feedView=all", 
"KnightCite is a redesign project focuses on improving the usability, functionality, and design of the citation formatting tool. KnightCite supports MLA, APA, and Chicago citation styles, providing students, faculty, and researchers an easy way to format references for their research papers. The team that worked this project was Branden Husted, Clive Amoh, and Ha Dong Park. Our work is on the senior_project branch of the knightcite_devSite repository.",
"Calvin is the best school ever because Calvin University stands out as one of the best schools because of its commitment to academic excellence, faith integration, and a vibrant, supportive community. I love Calvin because of the beautiful campus and the very supportive faculty that work there and care about your career",
"The operating system uses algorithms like First Fit, Best Fit, or Worst Fit to place a program in memory, depending on the available space and the method chosen to minimize fragmentation.", 
"Paging breaks memory into fixed-size pages, helping to avoid fragmentation by ensuring that each program gets the same-sized chunks of memory, which can be easily swapped in and out.", 
"When a program tries to access memory that it shouldn't, it triggers a segmentation fault or page fault, leading the operating system to terminate or handle the error based on the type of violation.", 
"Physical memory refers to the actual RAM, while virtual memory is an abstraction that allows the system to use disk space to extend the available memory, giving the illusion of more RAM.", 
"Swapping is needed when the system runs out of physical memory. The OS moves a program or part of a program from RAM to disk (swap space) to free up memory for other processes.", 
"A page fault occurs when a program accesses a page not currently in memory. The OS handles this by fetching the page from disk into RAM, potentially swapping out another page if necessary.", 
"The page table maps virtual addresses to physical addresses, enabling the OS to translate the program's virtual memory requests into actual locations in physical memory.", 
"Memory allocation on the stack is used for function calls and local variables, while the heap is used for dynamic memory allocation, allowing variables to be created at runtime.", 
"The 'Least Recently Used' (LRU) algorithm removes the least recently used pages from memory when a page fault occurs, assuming that pages used least recently are less likely to be needed soon.", 
"Fragmentation occurs when free memory is split into small, non-contiguous blocks. The OS may use techniques like compaction or paging to overcome this and make more efficient use of memory.",
"A firewall is a security system that monitors and controls incoming and outgoing network traffic based on predetermined security rules, effectively blocking unauthorized access while allowing legitimate communication.", 
"Symmetric encryption uses the same key for both encryption and decryption, whereas asymmetric encryption uses a pair of public and private keys, offering enhanced security, especially for exchanging data over insecure networks.", 
"Multi-factor authentication (MFA) enhances security by requiring two or more forms of verification, such as a password and a fingerprint or a code sent to a mobile device, making unauthorized access more difficult.", 
"A VPN (Virtual Private Network) creates a secure, encrypted connection between a user's device and a remote server, ensuring privacy and protection of data while accessing the internet, especially on public networks.", 
"Common types of malware include viruses, worms, ransomware, and trojans. They infect systems through malicious attachments, software vulnerabilities, or social engineering tactics, often causing damage or theft of data.", 
"An Intrusion Detection System (IDS) monitors network traffic for suspicious activity and potential threats. It alerts administrators about possible security breaches but does not take action to stop the attack.", 
"A Denial-of-Service (DoS) attack floods a system or network with traffic, overwhelming it and making it unavailable to legitimate users. A Distributed DoS (DDoS) attack involves multiple compromised systems launching the attack simultaneously.", 
"Software updates and patches fix security vulnerabilities, correct bugs, and improve performance. Keeping software updated ensures that known exploits cannot be used to compromise the system.", 
"Phishing is a social engineering attack where malicious actors trick individuals into divulging sensitive information, such as passwords or credit card numbers. To avoid phishing, verify sources, look for suspicious URLs, and never click on unknown links.", 
"The principle of least privilege means granting users only the access necessary to perform their job functions, reducing the risk of unauthorized access or accidental damage to sensitive data.", 
"Public Wi-Fi networks are vulnerable to interception and attacks. To protect yourself, use a VPN, avoid accessing sensitive information, and ensure websites are encrypted (HTTPS) when connecting to public Wi-Fi.", 
"A zero-day exploit is a vulnerability in software that is unknown to the vendor and has no patch or fix available. These exploits are dangerous because they can be used by attackers before the vendor is aware and can mitigate the risk.", 
"A SIEM system collects and analyzes security data from various sources in real-time, helping organizations detect, monitor, and respond to security threats and breaches effectively through centralized logs and alerts.", 
"Cloud security models vary between providers. AWS and Azure both offer strong security frameworks, but key differences include their specific compliance certifications, encryption methods, and access controls tailored to each platform's unique environment.", 
"Penetration testing involves ethical hackers simulating attacks on a system to identify vulnerabilities. It helps organizations understand their security weaknesses, so they can patch them before malicious hackers can exploit them.",

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
  "Why is Calvin the best college ever",
  "I am working on Python",
  "What is a zero-day exploit and how can it affect system security?",
  "How does memory allocation in a heap differ from memory allocation on a stack?",
  "I am working on JavaScript",
  "Should I get involved in community service?",
  "Should I focus on creating passive income streams?",
  "What is KnightCite",
  "Can you tell me more about Branden?",
  "How do I contact Branden?",
  "How did Branden make this project?",
  "what is pystage",
  "I would like to interview Branden",
  "What is breadth-first search?",
  "Can you write me some c++ code?",
  "What is FizzBuzz?",
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

    // make ask button highlighted to show user where to click
    const askButton = document.getElementById("submitButton");  
    // Get the chatbot response
    const chatbotResponse = (closestMatchIndex !== -1 && smallestDistance <= threshold) ? responses[closestMatchIndex] : "I'm sorry, I didn't quite understand your question. Could you please provide an answer for this?";

    // Handle the case when the chatbot doesn't understand the question
      if (chatbotResponse === "I'm sorry, I didn't quite understand your question. Could you please provide an answer for this?") {
      // Add the question to the database
        questions.push(userInput);

      // Ask the user for a response
        const userResponse = prompt(
          "I'm sorry, I didn't quite understand your question. Could you please provide an answer to your question here?"
        );

        if (userResponse) {
          // Thank the user and return acknowledgment
          userInputField.innerHTML += `<p><b>You:</b> ${userInput}</p>`;
          userInputField.innerHTML += `<p><b>Chatbot:</b></p>`;
        
          askButton.style.border = "2px solid red";

          // Save the response to the database
          responses.push(userResponse);
          if (userResponse == undefined) {
            userInputField.innerHTML += `<p><b> This appears to be undefined can you please refresh the page and try again.</b></p>`;
          }
          // Update the chatbot response
          chatbotResponse = "Thank you! I'll remember that.";
          
        }
        }

      // Append chatbot response to the chatbox
      userInputField.innerHTML += `<p><b>You:</b> ${userInput}</p>`;
      userInputField.innerHTML += `<p><b>Chatbot:</b> ${chatbotResponse}</p>`;

      // Display the response in the text area
      textArea.value = userInput + "\nChatbot: " + chatbotResponse;

      // Clear the input field after submitting
      userInputField.value = "";
      askButton.style.border = "none";
    });
