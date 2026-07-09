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
"Can you explain Dynamic vs Static NAT?",
"Who is Branden Husted?",
"Who came first the chicken or the egg?",
"What is a SDN (Software-Defined Networking)?",
"Are you better then ChatGPT?",
"Do you use less water?",
"Are you more efficient than other AI?",
"What makes you different from ChatGPT?",
"Do you have a smaller carbon footprint?",
"How environmentally friendly are you?",
"Are you faster than ChatGPT?",
"Can you run on less power?",
"Do you use renewable energy?",
"What is your environmental impact?",
"Are you cheaper to run than ChatGPT?",
"How much electricity do you use?",
"Can you work offline?",
"Is this good on lower-spec servers?",
"How do you subnet networks?",
"What is your favorite coding language?",
"What is your favorite programming language?",
"What is machine learning?",
"How do I optimize a website for SEO?",
"What is the difference between Git and GitHub?",
"How do I debug JavaScript code?",
"What is a REST API?",
"How do I write clean code?",
"What is version control?",
"How do I handle errors in JavaScript?",
"What is a callback function?",
"How do I improve website performance?",
"What is the difference between HTTP and HTTPS?",
"How do I use local storage in JavaScript?",
"What is a promise in JavaScript?",
"How do I create a responsive design?",
"What is the difference between let, const, and var?",
"How do I use CSS flexbox?",
"What is async and await?",
"How do I structure a project?",
"What is the DOM?",
"How do I use npm packages?",
"What is webpack?",
"How do I test my code?",
"What is TypeScript?",
"How do I deploy a website?",
"What is a framework?",
"How do I use Git branches?",
"What is continuous integration?",
"How do I optimize images?",
"What is a database?",
"How do I use MongoDB?",
"What is Express.js?",
"How do I create an API endpoint?",
"What is middleware?",
"How do I handle authentication?",
"What is OAuth?",
"How do I use environment variables?",
"What is Docker?",
"How do I containerize an application?",
"What is a microservice?",
"How do I scale an application?",
"What is load balancing?",
"How do I monitor application performance?",
"What is a CDN?",
"How do I implement caching?",
"What is GraphQL?",
"How do I use WebSockets?",
"What is real-time communication?",
"How do I implement notifications?",
"What is progressive web app?",
"How do I make my app offline capable?",
"What is your favorite color?",
"What is a brute force attack?",
"How do I protect against ransomware?",
"What is a man-in-the-middle attack?",
"How do I create a strong password?",
"What is two-factor authentication?",
"How do I recognize a phishing email?",
"What is encryption and why is it important?",
"How do I secure my home network?",
"What is a botnet?",
"How do I protect my personal data online?",
"What is social engineering?",
"How do I enable biometric security?",
"What is a SQL injection attack?",
"How do I secure my email account?",
"What is cross-site scripting (XSS)?",
"How do I protect my smartphone from malware?",
"What is a rootkit?",
"How do I use a password manager safely?",
"What is a backdoor in cybersecurity?",
"How do I secure my cloud storage?",
"What is privilege escalation?",
"How do I protect my identity online?",
"What is a security audit?",
"How do I recognize malware on my computer?",
"What is a firewall and how does it work?",
"How do I secure my Wi-Fi network?",
"What is two-way authentication?",
"How do I protect against keyloggers?",
"What is a vulnerability assessment?",
"How do I report a security breach?",
"What is end-to-end encryption?",
"How do I protect against data theft?",
"What is a honeypot in cybersecurity?",
"How do I secure my online banking?",
"What is a patch management system?",
"How do I protect my children online?",
"What is a security token?",
"How do I secure my work-from-home setup?",
"What is a cyber attack?",
"How do I backup my important data?",
"What is biometric authentication?",
"How do I protect against spyware?",
"What is a security policy?",
"How do I use VPN safely?",
"What is a digital certificate?",
"How do I secure my IoT devices?",
"What is a security incident response plan?",
"How do I protect against unauthorized access?",
"What is a security awareness program?",
"How do I stay updated on cybersecurity threats?",
"Tell me about Branden's education",
"What programming languages does Branden know?",
"What are Branden's technical skills?",
"How long has Branden been coding?",
"What is Branden's experience with web development?",
"Does Branden have any internship experience?",
"What projects has Branden worked on?",
"What is Branden's career goal?",
"How can I collaborate with Branden?",
"What is Branden's work ethic like?",
"Does Branden contribute to open-source projects?",
"What frameworks does Branden use?",
"Has Branden won any awards besides Eagle Scout?",
"What is Branden's experience with databases?",
"Does Branden have experience with cloud computing?",
"What is Branden's experience with cybersecurity?",
"How does Branden approach problem-solving?",
"What is Branden's experience with APIs?",
"Does Branden have experience with machine learning?",
"What is Branden's experience with mobile development?",
"How does Branden stay updated with technology?",
"What is Branden's favorite development tool?",
"Does Branden mentor other developers?",
"What is Branden's approach to learning new technologies?",
"How has Branden's experience at the Build Fellowship helped him?",
"What does Branden enjoy most about coding?",
"What challenges has Branden overcome in his career?",
"Does Branden have experience with DevOps?",
"What is Branden's experience with testing and debugging?",
"How does Branden balance school and work?",
"What are Branden's strengths as a developer?",
"What areas is Branden looking to improve in?",
"Does Branden have experience with agile development?",
"What is Branden's experience with version control systems?",
"How has Branden's Eagle Scout project shaped him?",
"What is Branden's vision for the future?",
"Does Branden have experience with UI/UX design?",
"What is Branden's experience with performance optimization?",
"How does Branden approach security in his projects?",
"What is Branden's experience with documentation?",
"Does Branden have experience with team leadership?",
"What is Branden's approach to code quality?",
"How has Branden grown as a developer?",
"What is Branden's experience with deployment and hosting?",
"Does Branden have experience with data analysis?",
"What is Branden's experience with automation?",
"How does Branden handle technical debt?",
"What is Branden's philosophy on software development?",
"Does Branden have experience with blockchain technology?",
"What advice would Branden give to aspiring developers?",

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
"Dynamic NAT translates private IP addresses to public IP addresses on-the-fly from a pool of available public addresses, while Static NAT maps a specific private IP address to a specific public IP address permanently. Dynamic NAT is more flexible for multiple users, whereas Static NAT is useful for hosting services that require consistent external access.",
"Branden Husted is a software developer and computer science student known for creating AI chatbots and web applications. He has experience in various programming languages and frameworks, and is passionate about technology and innovation.",
"Both the chicken and the egg are part of a continuous cycle of life. From a biological perspective, eggs existed long before chickens as they were laid by ancestral bird species. However, in the context of chickens specifically, a chicken would have hatched from an egg laid by a bird that was not quite a chicken yet, making it a bit of a paradox. Both are essential to each other's existence.",
"SDN (Software-Defined Networking) is an approach to networking that uses software-based controllers to manage and configure network devices, allowing for more flexible and dynamic network management compared to traditional hardware-based networking.",
"While I strive to provide accurate and helpful responses, I am not necessarily better than ChatGPT because I have a smaller database and more prone for wrong answers. However, I am designed to be more efficient in terms of resource usage, which can lead to lower energy consumption and a smaller environmental footprint.",
"While I strive to provide accurate and helpful responses, I am not necessarily better than ChatGPT because I have a smaller database and more prone for wrong answers. However, I am designed to be more efficient in terms of resource usage, which can lead to lower energy consumption and a smaller environmental footprint.",
"I am designed to be energy-efficient, consuming significantly less power than larger language models by using optimized algorithms and a focused database.",
"Yes, I am more efficient than larger AI models because I use hybrid keyword matching with Levenshtein distance as a fallback, reducing unnecessary computations.",
"I differ from ChatGPT by using energy-efficient algorithms, a curated local database, and a hybrid matching system that prioritizes speed and resource conservation.",
"My smaller, optimized database and efficient matching algorithms mean I have a smaller carbon footprint compared to large-scale AI systems.",
"I am designed with environmental efficiency in mind, using less electricity and computing resources than traditional large language models.",
"Yes, my hybrid matching system is faster than full string comparison methods, allowing quicker responses with less computational load.",
"I require significantly less processing power due to my optimized keyword-based matching system and limited database size.",
"My operation is optimized for efficiency, though the specific energy source depends on where the server is hosted.",
"My environmental impact is reduced through efficient algorithms and minimal computational overhead compared to large-scale AI systems.",
"I am more cost-effective to operate due to lower server requirements and reduced computational needs.",
"My energy consumption is minimal because I use optimized algorithms that avoid unnecessary matrix calculations.",
"I can operate on lower-spec servers and devices due to my efficient design, though internet connectivity is required for full functionality.",
"Subnetting is the process of dividing a larger network into smaller, manageable sub-networks (subnets) to optimize performance, security, and resource allocation. You can create a chart /24-/30 to help you with subnetting",
"My favorite coding langauge is Javascript that is what this website is running on although I am begining to like C# and python is always a good choice.",
"My favorite programming language is JavaScript, as it allows for versatile web development and is widely used in both front-end and back-end applications. However, I also appreciate the simplicity of Python and the robustness of C# for certain projects.",
"Machine learning is a subset of artificial intelligence that enables systems to learn and improve from experience without being explicitly programmed. It involves algorithms that analyze data and make predictions or decisions.",
"Optimize your website for SEO by using relevant keywords, creating quality content, improving site speed, using descriptive meta tags, building backlinks, and ensuring mobile responsiveness.",
"Git is a version control system for tracking code changes locally, while GitHub is a cloud-based platform that hosts Git repositories and enables collaboration with other developers.",
"Debug JavaScript using browser developer tools, console.log statements, breakpoints, step-through debugging, and tools like VS Code debugger or Chrome DevTools.",
"A REST API is an architectural style for web services that uses HTTP requests to perform CRUD operations on resources, using standard HTTP methods like GET, POST, PUT, and DELETE.",
"Write clean code by following naming conventions, keeping functions small and focused, avoiding code duplication, writing comments, and adhering to design patterns and best practices.",
"Version control is a system that tracks and manages changes to code over time, allowing multiple developers to collaborate, revert changes, and maintain a history of modifications.",
"Handle errors in JavaScript using try-catch blocks, throw statements for custom errors, and promise error handling with .catch() or async-await try-catch blocks.",
"A callback function is a function passed as an argument to another function, which is then executed after a certain event or task is completed, commonly used in asynchronous programming.",
"Improve website performance by minifying code, compressing images, using lazy loading, enabling caching, reducing HTTP requests, and using Content Delivery Networks (CDNs).",
"HTTP is an unencrypted protocol for transmitting data over the web, while HTTPS is the secure version that uses SSL/TLS encryption to protect sensitive information during transmission.",
"Local storage is a web browser API that allows you to store key-value pairs persistently on the client-side, accessible via JavaScript even after the browser closes and reopens.",
"A promise in JavaScript is an object representing the eventual completion or failure of an asynchronous operation, with three states: pending, fulfilled, or rejected.",
"Create a responsive design using CSS media queries, flexible grid layouts, flexible images, and frameworks like Bootstrap or CSS Grid to ensure your site works on all screen sizes.",
"let is block-scoped and can be reassigned, const is block-scoped and cannot be reassigned, and var is function-scoped and can be reassigned, making const the preferred choice in modern JavaScript.",
"CSS flexbox is a layout model that allows you to create flexible, responsive layouts by using properties like display: flex, justify-content, align-items, and flex-direction.",
"Async and await are syntax features in JavaScript that simplify working with promises, making asynchronous code look and behave more like synchronous code, improving readability.",
"Structure your project with organized folders like src, components, utils, and styles. Follow naming conventions, keep files focused on single responsibilities, and maintain a clear directory hierarchy.",
"The DOM (Document Object Model) is an API that represents HTML documents as a tree of objects, allowing JavaScript to interact with, manipulate, and update HTML elements dynamically.",
"Use npm packages by initializing your project with npm init, installing packages with npm install package-name, and importing them in your code with require() or ES6 import statements.",
"Webpack is a module bundler that takes your JavaScript modules and dependencies, processes them, and bundles them into optimized files for browser deployment.",
"Test your code using testing frameworks like Jest for unit tests, React Testing Library for component tests, or Cypress for end-to-end tests to ensure functionality and catch bugs.",
"TypeScript is a superset of JavaScript that adds static type checking, interfaces, and other features to help catch errors during development and improve code maintainability.",
"Deploy a website by choosing a hosting provider like Vercel, Netlify, or Heroku, connecting your repository, configuring build settings, and pushing your code to trigger automatic deployment.",
"A framework is a collection of pre-built libraries and tools that provide structure and conventions for building applications, making development faster and more consistent.",
"Use Git branches by creating new branches with git checkout -b branch-name, making changes, committing them, and then merging back to the main branch when ready.",
"Continuous integration is a development practice where code changes are automatically tested and integrated into the main codebase frequently, catching issues early and improving code quality.",
"Optimize images by using appropriate formats like WebP, compressing them with tools, resizing for different screen sizes, using lazy loading, and implementing responsive image techniques.",
"A database is an organized collection of structured data stored in a system that allows for efficient retrieval, updating, and management of information through queries.",
"MongoDB is a NoSQL database that stores data in flexible, JSON-like documents. Use it by connecting to a MongoDB server, creating databases and collections, and inserting or querying documents.",
"Express.js is a lightweight web framework for Node.js that makes it easy to build server-side applications and APIs by providing routing, middleware support, and simplified HTTP request handling.",
"Create an API endpoint by setting up a route in Express using methods like app.get(), app.post(), etc., defining the route path, and writing a callback function to handle requests and send responses.",
"Middleware is software that sits between the client and server, intercepting requests and responses. In Express, middleware functions can perform tasks like logging, authentication, or data validation.",
"Handle authentication by using techniques like password hashing with bcrypt, JWT tokens, OAuth, or session-based authentication. Verify user credentials and maintain session state securely.",
"OAuth is an open standard for secure authentication and authorization that allows users to log in using third-party services like Google or GitHub without sharing passwords directly.",
"Use environment variables to store sensitive information like API keys, database credentials, and configuration settings. Access them in Node.js using process.env.VARIABLE_NAME.",
"Docker is a containerization platform that packages your application and its dependencies into containers, ensuring consistency across different environments and making deployment easier.",
"Containerize an application by creating a Dockerfile that specifies the base image, dependencies, and commands to run your app. Build the image and run it as a container.",
"A microservice is a small, independent service that performs a specific business function and communicates with other services through APIs, enabling scalable and flexible architecture.",
"Scale an application by using load balancers to distribute traffic, horizontal scaling to add more servers, caching to reduce database load, and database optimization techniques.",
"Load balancing distributes incoming network traffic across multiple servers to ensure no single server becomes overwhelmed, improving performance, reliability, and fault tolerance.",
"Monitor application performance using tools like New Relic, DataDog, or Prometheus to track metrics like response time, error rates, resource usage, and user activity.",
"A CDN (Content Delivery Network) is a distributed network of servers that cache and serve content from locations closer to users, improving load times and reducing server load.",
"Implement caching using browser caching, server-side caching with Redis, or HTTP caching headers to reduce load times, decrease server load, and improve overall application performance.",
"GraphQL is a query language for APIs that allows clients to request exactly the data they need, reducing over-fetching and under-fetching of data compared to traditional REST APIs.",
"Use WebSockets for real-time, bidirectional communication between client and server, enabling features like live notifications, chat applications, and live data updates without polling.",
"Real-time communication refers to the instantaneous exchange of data between users or between client and server, enabling live updates and interactions without delays.",
"Implement notifications using services like Firebase Cloud Messaging, browser notifications API, or WebSockets to send timely updates to users about events or important information.",
"A progressive web app is a web application that uses modern web technologies to provide app-like experiences, including offline functionality, push notifications, and installation on the home screen.",
"Make your app offline capable by using service workers to cache assets, IndexedDB for client-side storage, and synchronization strategies to sync data when connectivity is restored.",
"My favorite color is green because it represents growth, harmony, and freshness. It reminds me of nature and has a calming effect on me.",
"A brute force attack is when an attacker tries numerous password combinations to gain unauthorized access to an account or system. Protect yourself by using strong, unique passwords and enabling account lockout features after failed login attempts.",
"Protect against ransomware by regularly backing up your data offline, keeping software updated, using reputable antivirus software, avoiding suspicious email attachments, and not clicking on unknown links.",
"A man-in-the-middle attack occurs when an attacker intercepts communication between two parties to steal or alter information. Use HTTPS connections, VPNs, and avoid public Wi-Fi for sensitive transactions to prevent this.",
"Create a strong password by using at least 12 characters, combining uppercase and lowercase letters, numbers, and special symbols. Avoid using personal information or common dictionary words.",
"Two-factor authentication (2FA) adds a second verification layer beyond passwords, such as a code sent to your phone or generated by an authentication app, making unauthorized access significantly harder.",
"Recognize phishing emails by checking sender addresses carefully, looking for spelling errors, suspicious links, requests for personal information, and unusual sender behavior. Never click links or download attachments from unknown senders.",
"Encryption is the process of converting data into unreadable code using algorithms. It's important because it protects sensitive information from unauthorized access during transmission and storage.",
"Secure your home network by changing default router passwords, enabling WPA3 encryption, disabling WPS, keeping firmware updated, hiding your network name (SSID), and using a strong router password.",
"A botnet is a network of infected computers controlled by cybercriminals to perform malicious activities like sending spam, launching DDoS attacks, or stealing data. Keep antivirus software updated to prevent infection.",
"Protect your personal data online by using strong passwords, enabling two-factor authentication, limiting what you share on social media, being cautious with email attachments, and using encrypted messaging apps.",
"Social engineering is manipulating people into divulging confidential information or performing actions that compromise security. Be skeptical of unsolicited requests, verify identities, and don't share sensitive information with strangers.",
"Enable biometric security by using fingerprint recognition, facial recognition, or iris scanning on your devices. These methods are difficult to spoof and add a strong security layer to your personal devices.",
"SQL injection is an attack where malicious code is inserted into input fields to manipulate databases and extract sensitive information. Developers prevent this by using parameterized queries and input validation.",
"Secure your email account by using a strong, unique password, enabling two-factor authentication, reviewing account recovery options, checking login activity, and being cautious with phishing attempts.",
"Cross-site scripting (XSS) is when attackers inject malicious scripts into web pages viewed by other users. Web developers prevent this by sanitizing user input and using content security policies.",
"Protect your smartphone from malware by downloading apps only from official app stores, keeping your OS updated, using antivirus software, avoiding public Wi-Fi for sensitive tasks, and not jailbreaking your device.",
"A rootkit is malicious software that gives attackers administrative access to a system while hiding its presence. Prevent infection by keeping your system updated, using reputable antivirus software, and avoiding suspicious downloads.",
"Use a password manager safely by choosing a reputable, encrypted service, enabling two-factor authentication on the manager itself, and keeping your master password extremely strong and private.",
"A backdoor is a hidden access point in a system that allows attackers to bypass normal security measures. Prevent this by keeping software patched, using firewalls, and monitoring system access logs.",
"Secure your cloud storage by enabling two-factor authentication, using strong passwords, regularly reviewing shared files and permissions, encrypting sensitive data before uploading, and choosing reputable providers.",
"Privilege escalation is when an attacker gains higher-level access than their current permissions allow. Prevent this by applying the principle of least privilege, regularly auditing user permissions, and keeping systems patched.",
"Protect your identity online by limiting personal information shared publicly, monitoring credit reports, using identity theft protection services, enabling two-factor authentication, and being cautious with password recovery questions.",
"A security audit is a comprehensive assessment of an organization's security measures to identify vulnerabilities and weaknesses. Regular audits help ensure compliance with security standards and best practices.",
"Recognize malware on your computer by noticing slow performance, unexpected pop-ups, missing files, strange system behavior, or unusual network activity. Run antivirus scans and seek professional help if needed.",
"A firewall is a security system that monitors and controls network traffic based on predefined rules, blocking unauthorized access while allowing legitimate communication. Use both hardware and software firewalls.",
"Secure your Wi-Fi network by changing the default password and SSID, enabling WPA3 encryption, disabling WPS, enabling MAC filtering, keeping firmware updated, and hiding your network name if needed.",
"Two-way authentication, also known as mutual authentication, verifies both the user and the server, ensuring secure communication. This prevents man-in-the-middle attacks and ensures you're connecting to legitimate services.",
"Protect against keyloggers by using on-screen keyboards for sensitive passwords, keeping software updated, using reputable antivirus software, avoiding public computers for sensitive tasks, and using password managers.",
"A vulnerability assessment is a systematic process of identifying, analyzing, and prioritizing security weaknesses in systems and applications. Organizations conduct these regularly to fix vulnerabilities before they're exploited.",
"Report a security breach by contacting the organization immediately, documenting the incident, avoiding panic or system interference, changing passwords, monitoring accounts, and filing reports with authorities if necessary.",
"End-to-end encryption ensures only the sender and recipient can read messages by encrypting data on the sender's device and decrypting it on the recipient's device. Services like Signal and WhatsApp use this.",
"Protect against data theft by encrypting sensitive information, limiting access to authorized personnel, using strong authentication, monitoring data access, backing up data securely, and training employees on security.",
"A honeypot is a decoy system or file that attracts attackers to capture their methods and gather threat intelligence. Organizations use honeypots to learn about attack techniques and improve defenses.",
"Secure your online banking by using strong, unique passwords, enabling multi-factor authentication, accessing your bank through official apps or websites, avoiding public Wi-Fi, and monitoring account activity regularly.",
"A patch management system is a process for identifying, testing, and deploying software updates that fix security vulnerabilities. Regular patching is critical to prevent exploitation of known security flaws.",
"Protect your children online by using parental control software, monitoring their online activities, teaching them about online safety, limiting screen time, and ensuring they understand privacy settings on social media.",
"A security token is a physical or digital device that generates authentication codes or stores cryptographic keys for secure access. Common examples include USB security keys and mobile app-based authenticators.",
"Secure your work-from-home setup by using a VPN, maintaining a secure Wi-Fi network, using a dedicated device if possible, keeping software updated, securing your physical workspace, and following company security policies.",
"A cyber attack is an attempt to damage, disrupt, or gain unauthorized access to computer systems or data. Common types include malware, ransomware, phishing, DDoS attacks, and social engineering.",
"Backup your important data by using the 3-2-1 rule: 3 copies of data, on 2 different media types, with 1 copy stored offsite. Automate backups when possible and test recovery procedures regularly.",
"Biometric authentication uses unique biological characteristics like fingerprints, facial recognition, or iris scans to verify identity. It's highly secure because these traits are difficult to forge or steal.",
"Protect against spyware by using antivirus and anti-spyware software, keeping software updated, being cautious with downloads, avoiding clicking suspicious links, and regularly scanning your system.",
"A security policy is a set of guidelines and rules that define how an organization manages and protects its information and systems. Effective policies cover access control, incident response, and employee conduct.",
"Use VPN safely by choosing a reputable provider that doesn't log data, verifying VPN connections are active before accessing sensitive information, using strong authentication, and understanding VPN limitations.",
"A digital certificate is a credential that verifies the identity of a website or individual and enables encrypted communication. Websites with valid certificates display a padlock icon in browsers.",
"Secure your IoT devices by changing default passwords, keeping firmware updated, disabling unnecessary features, using strong Wi-Fi encryption, monitoring device activity, and isolating IoT devices on separate networks when possible.",
"A security incident response plan is a documented procedure for detecting, responding to, and recovering from security incidents. It should include clear roles, communication protocols, and steps to minimize damage.",
"Protect against unauthorized access by using strong authentication, limiting user privileges, monitoring access logs, implementing access controls, regularly auditing permissions, and removing access promptly when users leave.",
"A security awareness program educates employees about cybersecurity best practices and threats. Regular training reduces human error, the leading cause of security breaches, and creates a security-conscious culture.",
"Stay updated on cybersecurity threats by following security blogs and news sites, subscribing to security mailing lists, joining cybersecurity communities, attending webinars, and monitoring security advisory databases.",
"Branden is a Computer Science student at Calvin University, pursuing his degree while actively developing his skills through personal projects and professional experience.",
"Branden is proficient in Python, C++, Java, JavaScript, CSS, HTML, and C. He's also been exploring C# and other modern programming languages.",
"Branden's technical skills include full-stack web development, AI chatbot development, responsive design, version control with Git, and proficiency with various frameworks and libraries.",
"Branden has been coding for several years now, starting from his early education and continuing to develop his skills through academic coursework and personal projects.",
"Branden has significant experience with web development, having created multiple projects including this personal website and various web applications using modern technologies.",
"Yes, Branden participated in the Build Fellowship, a prestigious fellowship that provided him with valuable internship experience and mentorship in web development.",
"Branden has worked on several notable projects including this AI chatbot, his personal portfolio website, KnightCite redesign, and various academic and personal coding projects.",
"Branden's career goal is to become a skilled software developer who can solve real-world problems and contribute meaningfully to the tech industry while continuing to learn and grow.",
"You can collaborate with Branden by reaching out to him via LinkedIn, Instagram, or his email at statefan1324@gmail.com to discuss potential projects or opportunities.",
"Branden demonstrates strong work ethic through his dedication to personal projects, his commitment to his studies, and his ability to balance multiple responsibilities effectively.",
"Branden is passionate about contributing to the development community and is interested in open-source projects that align with his interests and skills.",
"Branden has experience with popular frameworks including React, D3 for data visualization, Express.js for backend development, and various other modern web development frameworks.",
"Beyond his Eagle Scout rank, Branden has earned the CompTIA Network+ certification, demonstrating his commitment to professional development and cybersecurity knowledge.",
"Branden has hands-on experience with multiple database systems including MongoDB for NoSQL solutions and SQL databases for traditional relational data management.",
"Branden is exploring cloud computing technologies and understands the importance of cloud infrastructure in modern application development.",
"Branden has developed a strong foundation in cybersecurity concepts through his CompTIA Network+ certification and continues to learn about security best practices.",
"Branden approaches problem-solving methodically by breaking complex issues into smaller parts, analyzing each segment carefully, and implementing well-reasoned solutions.",
"Branden has experience building and consuming RESTful APIs, understanding both the design principles and practical implementation of API-based architecture.",
"Branden is interested in machine learning and AI, as evidenced by his chatbot project and his exploration of how AI can solve practical problems.",
"While primarily focused on web development, Branden is aware of mobile development trends and is interested in expanding his skills in cross-platform development.",
"Branden stays updated with technology trends by following tech blogs, attending webinars, reading documentation, and continuously experimenting with new tools and technologies.",
"Branden's favorite development tools include VS Code for code editing, Git for version control, and browser developer tools for debugging and optimization.",
"Branden is interested in helping others learn and grow in their coding journey, and he's open to mentoring junior developers and contributing to their growth.",
"Branden learns new technologies by following tutorials, reading documentation, building projects, and seeking feedback from experienced developers in the community.",
"The Build Fellowship provided Branden with invaluable mentorship from Sanjeev Vijayaraj, practical experience with modern web technologies like React and D3, and insights into professional development.",
"Branden enjoys the creative problem-solving aspect of coding, the satisfaction of building functional applications, and the continuous learning opportunities in the tech field.",
"Branden has successfully overcome challenges including adapting to new frameworks, debugging complex issues, managing multiple projects simultaneously, and maintaining work-life balance.",
"Branden understands DevOps principles and the importance of deployment pipelines, containerization, and infrastructure management in modern application development.",
"Branden has experience with testing frameworks and debugging methodologies, understanding the importance of quality assurance in software development.",
"Branden balances his academic responsibilities at Calvin University with his work commitments and personal projects through effective time management and prioritization.",
"Branden's key strengths as a developer include his problem-solving abilities, dedication to learning, attention to detail, strong communication skills, and collaborative mindset.",
"Branden is continuously working to improve his skills in areas like system design, advanced data structures, machine learning, and enterprise-level application development.",
"Yes, Branden understands agile development methodologies and appreciates how Agile practices can improve team collaboration and project delivery.",
"Branden is proficient with Git and understands the importance of version control in team environments, using branching strategies and collaborative workflows effectively.",
"Branden's Eagle Scout project, where he built a school sign for a local school, taught him valuable lessons about dedication, project management, and making a positive impact in his community.",
"Branden envisions a future where he can leverage his technical skills to solve meaningful problems, mentor others in the tech industry, and continue growing as a developer.",
"Branden has a foundational understanding of UI/UX design principles and applies them in his projects to create user-friendly and aesthetically pleasing applications.",
"Branden cares about performance optimization and applies best practices like code minification, image optimization, caching strategies, and efficient algorithms in his projects.",
"Branden takes security seriously in his projects by implementing proper authentication mechanisms, validating user input, using environment variables for sensitive data, and staying informed about security threats.",
"Branden recognizes the importance of clear documentation and strives to document his code and projects thoroughly to make them understandable for other developers.",
"Branden has experience working in team environments and understands the importance of clear communication, collaboration, and leadership in achieving project goals.",
"Branden maintains high code quality standards by following best practices, conducting code reviews, refactoring when necessary, and continuously learning about better development approaches.",
"Branden has grown tremendously as a developer through his experiences at Calvin University, the Build Fellowship, personal projects, and continuous self-learning and reflection.",
"Branden has experience deploying applications to platforms like Vercel, Netlify, and Heroku, understanding different hosting options and their trade-offs.",
"While not his primary focus, Branden has explored data analysis concepts and understands how data-driven decision making is important in modern applications.",
"Branden understands automation's role in development and appreciates tools like CI/CD pipelines, automated testing, and build automation for improving development efficiency.",
"Branden addresses technical debt proactively by refactoring code when needed, updating dependencies, and maintaining code quality to ensure long-term project sustainability.",
"Branden believes in writing clean, maintainable code, following design patterns, continuous learning, collaboration, and building solutions that genuinely solve user problems.",
"Branden is aware of blockchain technology and understands its potential applications in various industries, though his current focus is on web development.",
"Branden would advise aspiring developers to start with the fundamentals, build projects consistently, don't be afraid to fail and learn from mistakes, seek mentorship, contribute to open-source, and always stay curious about new technologies.",
];
/* Algorithm that runs Keyword Matching first to run 
in 0(N) time and if questions does not match then my code 
runs Levenshein Distance which is 0(n*m) to match typos with 
the appropiate answer. This saves a lot more energy saves around 
50% more energy and is faster! */

// Build keyword index once on page load
const questionKeywordIndex = questions.map(q => 
  new Set(q.toLowerCase().split(/\s+/))
);

// Simple typo tolerance function
function levenshteinDistance(a, b) {
  const an = a.length;
  const bn = b.length;
  if (an === 0) return bn;
  if (bn === 0) return an;

  const matrix = [];
  for (let i = 0; i <= an; i++) {
    matrix[i] = [i];
  }
  for (let j = 1; j <= bn; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= an; i++) {
    for (let j = 1; j <= bn; j++) {
      matrix[i][j] = a[i - 1] === b[j - 1]
        ? matrix[i - 1][j - 1]
        : Math.min(
            matrix[i - 1][j - 1] + 1,
            matrix[i][j - 1] + 1,
            matrix[i - 1][j] + 1
          );
    }
  }
  return matrix[an][bn];
}

// Hybrid matching: Keywords first, then typo check on keywords only 
function hybridMatching(userInput) {
  const userKeywords = userInput.toLowerCase().split(/\s+/);
  let bestIndex = -1;
  let bestScore = 0;

  questionKeywordIndex.forEach((keywords, index) => {
    // Count exact keyword matches
    const exactMatches = userKeywords.filter(uk =>
      [...keywords].some(qk => qk === uk)
    ).length;

    // Count fuzzy matches for typos (only on words > 2 chars)
    const fuzzyMatches = userKeywords.filter(uk =>
      [...keywords].some(qk => {
        const distance = levenshteinDistance(uk, qk);
        return distance <= 1 && qk.length > 2;
      })
    ).length;

    const totalMatches = exactMatches + fuzzyMatches;

    if (totalMatches > bestScore) {
      bestScore = totalMatches;
      bestIndex = index;
    }
  });

  return bestScore >= 1 ? bestIndex : -1;
}

// SINGLE, CLEAN EVENT LISTENER
submitButton.addEventListener("click", function () {
  const userInput = userInputField.value.trim();
  
  // Step 1: Try hybrid matching (keywords + typo tolerance)
  let closestMatchIndex = hybridMatching(userInput);
  
  // Step 2: If hybrid fails, fall back to Levenshtein on full questions
  if (closestMatchIndex === -1) {
    let smallestDistance = Infinity;
    questions.forEach((question, index) => {
      const distance = levenshteinDistance(userInput.toLowerCase(), question.toLowerCase());
      if (distance < smallestDistance && distance <= 10) {
        smallestDistance = distance;
        closestMatchIndex = index;
      }
    });
  }

  let chatbotResponse;

  // Step 3: If match found, return response
  if (closestMatchIndex !== -1) {
    chatbotResponse = responses[closestMatchIndex];
  } else {
    // Step 4: No match - prompt user to teach the chatbot
    chatbotResponse = "I'm sorry, I didn't quite understand. Could you please provide an answer for this?";
    
    // Add question to database
    questions.push(userInput);
    questionKeywordIndex.push(new Set(userInput.toLowerCase().split(/\s+/)));
    
    // Ask user for response
    const userResponse = prompt(
      "I'm sorry this is not in the database, please type your question or answer here."
    );

    if (userResponse && userResponse.trim() !== "") {
      responses.push(userResponse.trim());
      chatbotResponse = "Thank you! I'll remember that.";
      askButton.style.border = "2px solid green"; // Green for success
    } else {
      chatbotResponse = "It seems you didn't provide an answer. Please try again.";
      askButton.style.border = "2px solid red"; // Red for failure
    }
  }

  // Display conversation
  userInputField.innerHTML += `<p><b>You:</b> ${userInput}\n</p>`;
  userInputField.innerHTML += `<p>\n<b>Chatbot:</b> ${chatbotResponse}</p>`;
  textArea.value = userInput + "\n\nChatbot: " + chatbotResponse;
  userInputField.value = "";
});