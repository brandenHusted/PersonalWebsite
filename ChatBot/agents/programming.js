// Programming & CS agent.
// Each entry is one question HAL knows and the answer it gives.
// Add new knowledge by adding { q, a } entries to the list below.

module.exports = {
  id: "programming",
  name: "Programming & CS",
  tagline: "Code, web development, algorithms and computer science",

  // Words and phrases that help HAL's Auto mode decide this agent should answer.
  keywords: ["code","coding","programming","program","python","java","javascript","c++","c#","css","html","react","node","express","typescript","api","apis","git","github","sql","database","databases","mongodb","algorithm","algorithms","function","functions","variable","loop","bug","debug","debugging","array","recursion","framework","npm","docker","json","regex","compiler","thread","deadlock","linked list","stack","queue","hash","binary","sorting","big o","oop","dom","frontend","backend","web","website","server","memory","paging","page table","virtual memory","operating system","fizzbuzz","bfs","dfs","dijkstra","graph","tree","refactoring","unit test"],

  // What HAL says when this agent has no good match.
  notFound: "I don't have an answer for that in my programming notes yet. Try rephrasing it, or ask about a specific language, algorithm, or tool.",

  entries: [
    {
      q: "Can you help me with programming?",
      a: "Sure, I can try to help! What specifically are you working on?"
    },
    {
      q: "I am working on Python",
      a: "Python is a great language, here is a good place to look for Python Documentation https://www.python.org/doc/"
    },
    {
      q: "I am working on C++",
      a: "C++ is a great language, here is a good place to look for C++ Documentation https://cplusplus.com/doc/tutorial/"
    },
    {
      q: "I am working on Java",
      a: "Java is a great language!"
    },
    {
      q: "I am working on JavaScript",
      a: "JavaScript is a great language, here is a good place to look for JavaScript Documentation https://developer.mozilla.org/en-US/docs/Web/javascript"
    },
    {
      q: "I am working on CSS",
      a: "CSS is a great language, here is a good place to look for CSS Documentation https://developer.mozilla.org/en-US/docs/Web/CSS/Reference"
    },
    {
      q: "I am working on html",
      a: "HTML is a great language, here is a good place to look for HTML Documentation https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics"
    },
    {
      q: "I am working on C",
      a: "C is a great language, here is a good place to look for C documentation https://www.gnu.org/software/gnu-c-manual/gnu-c-manual.html"
    },
    {
      q: "what is pystage",
      a: "PyStage is an open-source visual programming environment designed to help users create interactive stories, games, and animations. It's similar to the popular Scratch platform but is implemented in Python, making it a valuable tool for those looking to learn Python programming in a fun and engaging way."
    },
    {
      q: "How do I make a website?",
      a: "Start with HTML and CSS, then move on to JavaScript. There are many tutorials online to help you."
    },
    {
      q: "What's the best programming language?",
      a: "It depends on your goals. Python is great for beginners and web development, while C++ is powerful for systems programming."
    },
    {
      q: "How do I learn to code?",
      a: "Start with online resources, practice coding daily, and work on small projects to apply what you learn."
    },
    {
      q: "How do I improve my coding skills?",
      a: "Practice coding regularly, work on projects, and seek feedback from others."
    },
    {
      q: "What is breadth-first search?",
      a: "Breadth-first search (BFS) is a algorithm that searches a tree or graph structure for a node. It starts at the root of the tree and explores downward to all nodes at the current depth level."
    },
    {
      q: "Can you write me some c++ code?",
      a: `
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
`
    },
    {
      q: "What is FizzBuzz?",
      a: "FizzBuzz is a common coding task during interviews to teach children the basics of division. If divisible by 3 print Fizz, if divisible by 5 print Buzz and divisible by 3 and 5 print FizzBuzz!"
    },
    {
      q: "How to make a react application with two pages",
      a: `

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
`
    },
    {
      q: "What are the best resources for learning to code?",
      a: "Best resources for learning to code include platforms like Codecademy, freeCodeCamp, and YouTube tutorials"
    },
    {
      q: "How does the operating system decide where to place a program in memory?",
      a: "The operating system uses algorithms like First Fit, Best Fit, or Worst Fit to place a program in memory, depending on the available space and the method chosen to minimize fragmentation."
    },
    {
      q: "Why does paging break memory into smaller chunks, and how does this help avoid fragmentation?",
      a: "Paging breaks memory into fixed-size pages, helping to avoid fragmentation by ensuring that each program gets the same-sized chunks of memory, which can be easily swapped in and out."
    },
    {
      q: "What happens when a program tries to access memory that it shouldn't?",
      a: "When a program tries to access memory that it shouldn't, it triggers a segmentation fault or page fault, leading the operating system to terminate or handle the error based on the type of violation."
    },
    {
      q: "What is the difference between physical memory and virtual memory?",
      a: "Physical memory refers to the actual RAM, while virtual memory is an abstraction that allows the system to use disk space to extend the available memory, giving the illusion of more RAM."
    },
    {
      q: "Why do we need to swap out programs from memory, and what does that process look like?",
      a: "Swapping is needed when the system runs out of physical memory. The OS moves a program or part of a program from RAM to disk (swap space) to free up memory for other processes."
    },
    {
      q: "How does a page fault happen, and how does the operating system handle it?",
      a: "A page fault occurs when a program accesses a page not currently in memory. The OS handles this by fetching the page from disk into RAM, potentially swapping out another page if necessary."
    },
    {
      q: "What is the role of the page table in virtual memory management?",
      a: "The page table maps virtual addresses to physical addresses, enabling the OS to translate the program's virtual memory requests into actual locations in physical memory."
    },
    {
      q: "How does memory allocation in a heap differ from memory allocation on a stack?",
      a: "Memory allocation on the stack is used for function calls and local variables, while the heap is used for dynamic memory allocation, allowing variables to be created at runtime."
    },
    {
      q: "Why is the 'Least Recently Used' (LRU) page replacement algorithm so effective?",
      a: "The 'Least Recently Used' (LRU) algorithm removes the least recently used pages from memory when a page fault occurs, assuming that pages used least recently are less likely to be needed soon."
    },
    {
      q: "What challenges do operating systems face when dealing with fragmentation, and how do they overcome them?",
      a: "Fragmentation occurs when free memory is split into small, non-contiguous blocks. The OS may use techniques like compaction or paging to overcome this and make more efficient use of memory."
    },
    {
      q: "What is your favorite coding language?",
      a: "My favorite coding langauge is Javascript that is what this website is running on although I am begining to like C# and python is always a good choice."
    },
    {
      q: "What is your favorite programming language?",
      a: "My favorite programming language is JavaScript, as it allows for versatile web development and is widely used in both front-end and back-end applications. However, I also appreciate the simplicity of Python and the robustness of C# for certain projects."
    },
    {
      q: "What is machine learning?",
      a: "Machine learning is a subset of artificial intelligence that enables systems to learn and improve from experience without being explicitly programmed. It involves algorithms that analyze data and make predictions or decisions."
    },
    {
      q: "How do I optimize a website for SEO?",
      a: "Optimize your website for SEO by using relevant keywords, creating quality content, improving site speed, using descriptive meta tags, building backlinks, and ensuring mobile responsiveness."
    },
    {
      q: "What is the difference between Git and GitHub?",
      a: "Git is a version control system for tracking code changes locally, while GitHub is a cloud-based platform that hosts Git repositories and enables collaboration with other developers."
    },
    {
      q: "How do I debug JavaScript code?",
      a: "Debug JavaScript using browser developer tools, console.log statements, breakpoints, step-through debugging, and tools like VS Code debugger or Chrome DevTools."
    },
    {
      q: "What is a REST API?",
      a: "A REST API is an architectural style for web services that uses HTTP requests to perform CRUD operations on resources, using standard HTTP methods like GET, POST, PUT, and DELETE."
    },
    {
      q: "How do I write clean code?",
      a: "Write clean code by following naming conventions, keeping functions small and focused, avoiding code duplication, writing comments, and adhering to design patterns and best practices."
    },
    {
      q: "What is version control?",
      a: "Version control is a system that tracks and manages changes to code over time, allowing multiple developers to collaborate, revert changes, and maintain a history of modifications."
    },
    {
      q: "How do I handle errors in JavaScript?",
      a: "Handle errors in JavaScript using try-catch blocks, throw statements for custom errors, and promise error handling with .catch() or async-await try-catch blocks."
    },
    {
      q: "What is a callback function?",
      a: "A callback function is a function passed as an argument to another function, which is then executed after a certain event or task is completed, commonly used in asynchronous programming."
    },
    {
      q: "How do I improve website performance?",
      a: "Improve website performance by minifying code, compressing images, using lazy loading, enabling caching, reducing HTTP requests, and using Content Delivery Networks (CDNs)."
    },
    {
      q: "What is the difference between HTTP and HTTPS?",
      a: "HTTP is an unencrypted protocol for transmitting data over the web, while HTTPS is the secure version that uses SSL/TLS encryption to protect sensitive information during transmission."
    },
    {
      q: "How do I use local storage in JavaScript?",
      a: "Local storage is a web browser API that allows you to store key-value pairs persistently on the client-side, accessible via JavaScript even after the browser closes and reopens."
    },
    {
      q: "What is a promise in JavaScript?",
      a: "A promise in JavaScript is an object representing the eventual completion or failure of an asynchronous operation, with three states: pending, fulfilled, or rejected."
    },
    {
      q: "How do I create a responsive design?",
      a: "Create a responsive design using CSS media queries, flexible grid layouts, flexible images, and frameworks like Bootstrap or CSS Grid to ensure your site works on all screen sizes."
    },
    {
      q: "What is the difference between let, const, and var?",
      a: "let is block-scoped and can be reassigned, const is block-scoped and cannot be reassigned, and var is function-scoped and can be reassigned, making const the preferred choice in modern JavaScript."
    },
    {
      q: "How do I use CSS flexbox?",
      a: "CSS flexbox is a layout model that allows you to create flexible, responsive layouts by using properties like display: flex, justify-content, align-items, and flex-direction."
    },
    {
      q: "What is async and await?",
      a: "Async and await are syntax features in JavaScript that simplify working with promises, making asynchronous code look and behave more like synchronous code, improving readability."
    },
    {
      q: "How do I structure a project?",
      a: "Structure your project with organized folders like src, components, utils, and styles. Follow naming conventions, keep files focused on single responsibilities, and maintain a clear directory hierarchy."
    },
    {
      q: "What is the DOM?",
      a: "The DOM (Document Object Model) is an API that represents HTML documents as a tree of objects, allowing JavaScript to interact with, manipulate, and update HTML elements dynamically."
    },
    {
      q: "How do I use npm packages?",
      a: "Use npm packages by initializing your project with npm init, installing packages with npm install package-name, and importing them in your code with require() or ES6 import statements."
    },
    {
      q: "What is webpack?",
      a: "Webpack is a module bundler that takes your JavaScript modules and dependencies, processes them, and bundles them into optimized files for browser deployment."
    },
    {
      q: "How do I test my code?",
      a: "Test your code using testing frameworks like Jest for unit tests, React Testing Library for component tests, or Cypress for end-to-end tests to ensure functionality and catch bugs."
    },
    {
      q: "What is TypeScript?",
      a: "TypeScript is a superset of JavaScript that adds static type checking, interfaces, and other features to help catch errors during development and improve code maintainability."
    },
    {
      q: "How do I deploy a website?",
      a: "Deploy a website by choosing a hosting provider like Vercel, Netlify, or Heroku, connecting your repository, configuring build settings, and pushing your code to trigger automatic deployment."
    },
    {
      q: "What is a framework?",
      a: "A framework is a collection of pre-built libraries and tools that provide structure and conventions for building applications, making development faster and more consistent."
    },
    {
      q: "How do I use Git branches?",
      a: "Use Git branches by creating new branches with git checkout -b branch-name, making changes, committing them, and then merging back to the main branch when ready."
    },
    {
      q: "What is continuous integration?",
      a: "Continuous integration is a development practice where code changes are automatically tested and integrated into the main codebase frequently, catching issues early and improving code quality."
    },
    {
      q: "How do I optimize images?",
      a: "Optimize images by using appropriate formats like WebP, compressing them with tools, resizing for different screen sizes, using lazy loading, and implementing responsive image techniques."
    },
    {
      q: "What is a database?",
      a: "A database is an organized collection of structured data stored in a system that allows for efficient retrieval, updating, and management of information through queries."
    },
    {
      q: "How do I use MongoDB?",
      a: "MongoDB is a NoSQL database that stores data in flexible, JSON-like documents. Use it by connecting to a MongoDB server, creating databases and collections, and inserting or querying documents."
    },
    {
      q: "What is Express.js?",
      a: "Express.js is a lightweight web framework for Node.js that makes it easy to build server-side applications and APIs by providing routing, middleware support, and simplified HTTP request handling."
    },
    {
      q: "How do I create an API endpoint?",
      a: "Create an API endpoint by setting up a route in Express using methods like app.get(), app.post(), etc., defining the route path, and writing a callback function to handle requests and send responses."
    },
    {
      q: "What is middleware?",
      a: "Middleware is software that sits between the client and server, intercepting requests and responses. In Express, middleware functions can perform tasks like logging, authentication, or data validation."
    },
    {
      q: "How do I handle authentication?",
      a: "Handle authentication by using techniques like password hashing with bcrypt, JWT tokens, OAuth, or session-based authentication. Verify user credentials and maintain session state securely."
    },
    {
      q: "What is OAuth?",
      a: "OAuth is an open standard for secure authentication and authorization that allows users to log in using third-party services like Google or GitHub without sharing passwords directly."
    },
    {
      q: "How do I use environment variables?",
      a: "Use environment variables to store sensitive information like API keys, database credentials, and configuration settings. Access them in Node.js using process.env.VARIABLE_NAME."
    },
    {
      q: "What is Docker?",
      a: "Docker is a containerization platform that packages your application and its dependencies into containers, ensuring consistency across different environments and making deployment easier."
    },
    {
      q: "How do I containerize an application?",
      a: "Containerize an application by creating a Dockerfile that specifies the base image, dependencies, and commands to run your app. Build the image and run it as a container."
    },
    {
      q: "What is a microservice?",
      a: "A microservice is a small, independent service that performs a specific business function and communicates with other services through APIs, enabling scalable and flexible architecture."
    },
    {
      q: "How do I scale an application?",
      a: "Scale an application by using load balancers to distribute traffic, horizontal scaling to add more servers, caching to reduce database load, and database optimization techniques."
    },
    {
      q: "What is load balancing?",
      a: "Load balancing distributes incoming network traffic across multiple servers to ensure no single server becomes overwhelmed, improving performance, reliability, and fault tolerance."
    },
    {
      q: "How do I monitor application performance?",
      a: "Monitor application performance using tools like New Relic, DataDog, or Prometheus to track metrics like response time, error rates, resource usage, and user activity."
    },
    {
      q: "What is a CDN?",
      a: "A CDN (Content Delivery Network) is a distributed network of servers that cache and serve content from locations closer to users, improving load times and reducing server load."
    },
    {
      q: "How do I implement caching?",
      a: "Implement caching using browser caching, server-side caching with Redis, or HTTP caching headers to reduce load times, decrease server load, and improve overall application performance."
    },
    {
      q: "What is GraphQL?",
      a: "GraphQL is a query language for APIs that allows clients to request exactly the data they need, reducing over-fetching and under-fetching of data compared to traditional REST APIs."
    },
    {
      q: "How do I use WebSockets?",
      a: "Use WebSockets for real-time, bidirectional communication between client and server, enabling features like live notifications, chat applications, and live data updates without polling."
    },
    {
      q: "What is real-time communication?",
      a: "Real-time communication refers to the instantaneous exchange of data between users or between client and server, enabling live updates and interactions without delays."
    },
    {
      q: "How do I implement notifications?",
      a: "Implement notifications using services like Firebase Cloud Messaging, browser notifications API, or WebSockets to send timely updates to users about events or important information."
    },
    {
      q: "What is progressive web app?",
      a: "A progressive web app is a web application that uses modern web technologies to provide app-like experiences, including offline functionality, push notifications, and installation on the home screen."
    },
    {
      q: "How do I make my app offline capable?",
      a: "Make your app offline capable by using service workers to cache assets, IndexedDB for client-side storage, and synchronization strategies to sync data when connectivity is restored."
    },
    {
      q: "What is Python used for?",
      a: "Python is used for web development, data analysis, automation, artificial intelligence, scripting, and game development, thanks to its simple syntax and huge library ecosystem."
    },
    {
      q: "What is object-oriented programming?",
      a: "Object-oriented programming organizes code into objects that bundle data and behavior together. Its core ideas are encapsulation, inheritance, polymorphism, and abstraction."
    },
    {
      q: "What is recursion?",
      a: "Recursion is when a function calls itself to solve smaller pieces of a problem. Every recursive function needs a base case so it knows when to stop."
    },
    {
      q: "What is Big O notation?",
      a: "Big O notation describes how an algorithm's running time or memory use grows as the input gets larger. For example, O(n) grows linearly while O(n squared) grows much faster."
    },
    {
      q: "What is a linked list?",
      a: "A linked list is a data structure where each element stores a value and a pointer to the next element. It makes inserting and removing items easy but makes random access slower than an array."
    },
    {
      q: "What is the difference between an array and a linked list?",
      a: "Arrays store items in contiguous memory and allow fast access by index, while linked lists connect items with pointers and allow fast insertions and deletions."
    },
    {
      q: "What is a hash table?",
      a: "A hash table stores key-value pairs and uses a hash function to turn each key into an index, which gives average lookups in constant time."
    },
    {
      q: "What is a stack data structure?",
      a: "A stack is a last-in, first-out structure. You push items on top and pop them off the top, like a stack of plates."
    },
    {
      q: "What is a queue data structure?",
      a: "A queue is a first-in, first-out structure. Items are added at the back and removed from the front, like a line at a store."
    },
    {
      q: "What is binary search?",
      a: "Binary search finds an item in a sorted list by repeatedly checking the middle element and discarding the half that cannot contain the target. It runs in O(log n) time."
    },
    {
      q: "What is depth-first search?",
      a: "Depth-first search explores a graph or tree by going as deep as possible along one branch before backtracking. It is usually implemented with recursion or a stack."
    },
    {
      q: "What is dynamic programming?",
      a: "Dynamic programming solves big problems by breaking them into overlapping subproblems and storing the results so each subproblem is only solved once."
    },
    {
      q: "What is an API key?",
      a: "An API key is a unique string that identifies your application when it calls an API. Keep it secret and store it in an environment variable rather than in your code."
    },
    {
      q: "What is JSON?",
      a: "JSON stands for JavaScript Object Notation. It is a lightweight text format for exchanging data using key-value pairs and arrays, and it is easy for both humans and machines to read."
    },
    {
      q: "What is a SQL join?",
      a: "A SQL join combines rows from two or more tables based on a related column. Common types are inner join, left join, right join, and full outer join."
    },
    {
      q: "What is the difference between SQL and NoSQL?",
      a: "SQL databases store data in structured tables with a fixed schema, while NoSQL databases use flexible models like documents, key-value pairs, or graphs and often scale out more easily."
    },
    {
      q: "What is a primary key?",
      a: "A primary key is a column, or set of columns, that uniquely identifies each row in a database table. It cannot be empty or duplicated."
    },
    {
      q: "What is the cloud?",
      a: "The cloud means using computing resources like servers, storage, and databases over the internet from a provider instead of running them on your own hardware."
    },
    {
      q: "What is a bug in programming?",
      a: "A bug is a mistake in code that causes a program to behave in an unexpected or incorrect way. Finding and fixing bugs is called debugging."
    },
    {
      q: "What is pair programming?",
      a: "Pair programming is when two developers work together at one computer. One writes the code while the other reviews each line, which helps catch mistakes and share knowledge."
    },
    {
      q: "What is a code review?",
      a: "A code review is when teammates examine each other's code before it is merged. It improves quality, catches bugs early, and helps everyone learn."
    },
    {
      q: "What is an IDE?",
      a: "An IDE, or integrated development environment, is a program that combines a code editor, debugger, and build tools in one place. Examples include Visual Studio Code, IntelliJ, and PyCharm."
    },
    {
      q: "What is the command line?",
      a: "The command line is a text-based interface where you control your computer by typing commands. Developers use it for running programs, managing files, and using tools like Git."
    },
    {
      q: "What is open source software?",
      a: "Open source software has publicly available source code that anyone can read, use, modify, and share under its license."
    },
    {
      q: "What is an algorithm?",
      a: "An algorithm is a step-by-step set of instructions for solving a problem or completing a task."
    },
    {
      q: "What is a variable in programming?",
      a: "A variable is a named place in memory that stores a value your program can read and change while it runs."
    },
    {
      q: "What is a loop in programming?",
      a: "A loop repeats a block of code until a condition is met. Common types are for loops and while loops."
    },
    {
      q: "What is a function in programming?",
      a: "A function is a reusable block of code that performs a specific task. It can take inputs called parameters and return an output."
    },
    {
      q: "What is the difference between frontend and backend?",
      a: "The frontend is the part of an app users see and interact with in the browser, while the backend is the server-side code and database that handle logic and data behind the scenes."
    },
    {
      q: "What is full stack development?",
      a: "Full stack development means working on both the frontend and the backend of an application, including the user interface, server logic, and database."
    },
    {
      q: "What is React?",
      a: "React is a JavaScript library for building user interfaces out of reusable components. It updates the page efficiently when your data changes."
    },
    {
      q: "What is a CSS selector?",
      a: "A CSS selector tells the browser which HTML elements a style rule applies to. Examples include element names, classes with a dot, and IDs with a hash."
    },
    {
      q: "What is semantic HTML?",
      a: "Semantic HTML uses tags like header, nav, main, and article that describe the meaning of the content. It improves accessibility and helps search engines understand your page."
    },
    {
      q: "What is web accessibility?",
      a: "Web accessibility means designing websites so people with disabilities can use them. This includes alt text for images, keyboard navigation, good color contrast, and screen reader support."
    },
    {
      q: "What is a cookie in a web browser?",
      a: "A cookie is a small piece of data a website stores in your browser to remember things like login sessions and preferences."
    },
    {
      q: "What is a regular expression?",
      a: "A regular expression, or regex, is a pattern used to search for and match text. It is handy for validating input and finding or replacing strings."
    },
    {
      q: "What is the difference between a compiler and an interpreter?",
      a: "A compiler translates the whole program into machine code before it runs, while an interpreter reads and executes the code line by line as it runs."
    },
    {
      q: "What is artificial intelligence?",
      a: "Artificial intelligence is the field of building computer systems that can perform tasks that normally need human intelligence, such as understanding language, recognizing images, and making decisions."
    },
    {
      q: "What is a chatbot?",
      a: "A chatbot is a program that simulates conversation with people. Some use fixed rules and keyword matching, while others use machine learning models."
    },
    {
      q: "What is natural language processing?",
      a: "Natural language processing is a branch of AI that helps computers understand, interpret, and generate human language."
    },
    {
      q: "What is a neural network?",
      a: "A neural network is a machine learning model made of layers of connected nodes, loosely inspired by the brain, that learns patterns from data."
    },
    {
      q: "What is Levenshtein distance?",
      a: "Levenshtein distance counts the minimum number of single-character edits, such as insertions, deletions, and substitutions, needed to turn one word into another. It is used to tolerate typos."
    },
    {
      q: "What is a unit test?",
      a: "A unit test checks that one small piece of code, like a single function, works as expected. Running unit tests automatically helps catch bugs when code changes."
    },
    {
      q: "What is refactoring?",
      a: "Refactoring means restructuring existing code to make it cleaner and easier to maintain without changing what it does."
    },
    {
      q: "What is the difference between a process and a thread?",
      a: "A process is a running program with its own memory space, while a thread is a lighter unit of execution inside a process that shares the process's memory."
    },
    {
      q: "What is a deadlock?",
      a: "A deadlock happens when two or more processes each wait for a resource the other holds, so none of them can ever continue."
    },
    {
      q: "What is Git used for?",
      a: "Git is a version control system that tracks changes to your files, lets you work on features in branches, and makes it easy to collaborate and roll back mistakes."
    },
    {
      q: "What is a pull request?",
      a: "A pull request is a proposal to merge your changes into another branch on a platform like GitHub. Teammates can review, comment on, and approve it before it is merged."
    },
    {
      q: "What is Big O notation?",
      a: "Big O notation describes how an algorithm's time or memory requirements grow as its input size increases. For example, O(n) grows linearly, while O(n squared) grows quadratically."
    },
    {
      q: "What is the difference between a stack and a queue?",
      a: "A stack uses last-in, first-out ordering, so the most recently added item is removed first. A queue uses first-in, first-out ordering, so the earliest added item is removed first."
    },
    {
      q: "What is a linked list?",
      a: "A linked list is a data structure made of nodes. Each node stores data and a reference to another node, allowing elements to be connected without requiring contiguous memory."
    },
    {
      q: "What is a binary search tree?",
      a: "A binary search tree is a tree where each node has at most two children, with smaller values typically placed on the left and larger values on the right. Its performance depends on how balanced the tree is."
    },
    {
      q: "What is a hash table collision?",
      a: "A hash table collision occurs when two different keys map to the same storage location. Common solutions include chaining, which stores multiple entries together, and open addressing, which searches for another available location."
    },
    {
      q: "What is the difference between breadth-first search and depth-first search?",
      a: "Breadth-first search explores a graph level by level, typically using a queue. Depth-first search follows one path as far as possible before backtracking, typically using recursion or a stack."
    },
    {
      q: "What is Dijkstra's shortest path algorithm?",
      a: "Dijkstra's algorithm finds shortest paths from a starting vertex to other vertices in a weighted graph when edge weights are nonnegative. It repeatedly selects the closest unprocessed vertex."
    },
    {
      q: "What is dynamic programming?",
      a: "Dynamic programming solves problems by storing the results of smaller overlapping subproblems instead of repeatedly calculating them. It can use memoization or tabulation."
    },
    {
      q: "What is the difference between merge sort and quicksort?",
      a: "Merge sort divides data into smaller sections, sorts them, and merges the results; it generally runs in O(n log n) time. Quicksort partitions around a pivot and is often fast in practice, but its worst-case time is O(n squared)."
    },
    {
      q: "What is a base case in recursion?",
      a: "A base case is the condition that stops a recursive function from calling itself again. Without a reachable base case, recursion may continue until the program runs out of stack space."
    },
    {
      q: "What is database normalization?",
      a: "Database normalization organizes tables and relationships to reduce duplicated data and prevent insertion, update, and deletion anomalies. Common normal forms include first, second, and third normal form."
    },
    {
      q: "What are the ACID properties in database transactions?",
      a: "ACID stands for Atomicity, Consistency, Isolation, and Durability. These properties help ensure database transactions either complete reliably or leave the database in a valid state."
    },
    {
      q: "What is a primary key versus a foreign key?",
      a: "A primary key uniquely identifies each row in a table. A foreign key references a key in another table, helping enforce relationships between records."
    },
    {
      q: "What is the difference between an INNER JOIN and a LEFT JOIN in SQL?",
      a: "An INNER JOIN returns rows that have matching values in both tables. A LEFT JOIN returns every row from the left table and includes matching right-table values when available, using NULL when no match exists."
    },
    {
      q: "What is a database index?",
      a: "A database index is an auxiliary structure that helps the database find rows more quickly. Indexes can improve read performance but require storage and can slow down some insertions, updates, and deletions."
    },
    {
      q: "What is virtual memory?",
      a: "Virtual memory gives programs the appearance of a large, private memory space by using address translation and storage techniques. It allows the operating system to manage physical memory efficiently."
    },
    {
      q: "What is a page fault in an operating system?",
      a: "A page fault occurs when a process accesses a virtual memory page that is not currently mapped to physical memory in the required way. The operating system handles the fault, potentially loading the page from storage."
    },
    {
      q: "What is CPU scheduling?",
      a: "CPU scheduling is the operating system's process of deciding which ready process or thread should use the CPU next. Algorithms include round-robin, priority scheduling, and shortest-job-first."
    },
    {
      q: "What is a race condition in concurrent programming?",
      a: "A race condition occurs when a program's result depends on the unpredictable timing or ordering of concurrent operations. Synchronization can help prevent inconsistent results."
    },
    {
      q: "What is a mutex?",
      a: "A mutex, or mutual exclusion lock, allows only one thread at a time to access a protected section of code or shared resource. Correct locking helps prevent data races."
    },
    {
      q: "What is a system call?",
      a: "A system call is a controlled request from a program to the operating system for a service such as reading a file, creating a process, or communicating over a network."
    },
    {
      q: "What is garbage collection in programming languages?",
      a: "Garbage collection automatically identifies and reclaims memory that a program can no longer reach. It reduces manual memory-management work, although it can introduce runtime overhead."
    },
    {
      q: "What is the difference between RAM and cache memory?",
      a: "RAM holds data and instructions currently used by running programs, while cache is smaller, faster memory that keeps frequently or recently needed data close to the CPU."
    },
    {
      q: "What is the difference between a CPU and a GPU?",
      a: "A CPU executes general-purpose program instructions and coordinates system operations. A GPU contains many processing units designed to handle large numbers of parallel operations efficiently."
    },
    {
      q: "What is an instruction set architecture?",
      a: "An instruction set architecture defines the machine instructions, registers, data types, and other programmer-visible behaviors supported by a processor."
    },
    {
      q: "What is a finite state machine?",
      a: "A finite state machine is a computational model with a limited set of states and transitions triggered by inputs or events. It is useful for modeling protocols, user interfaces, and control systems."
    },
    {
      q: "What are logic gates used for?",
      a: "Logic gates perform Boolean operations on binary inputs. Common gates include AND, OR, NOT, XOR, NAND, and NOR, and they are fundamental building blocks of digital circuits."
    },
    {
      q: "What is the software development life cycle?",
      a: "The software development life cycle is a structured process for planning, designing, building, testing, deploying, and maintaining software. Teams may use approaches such as Agile or Waterfall."
    },
    {
      q: "What is continuous integration and continuous delivery?",
      a: "Continuous integration automatically builds and tests code changes as developers integrate them. Continuous delivery keeps software ready for release, while continuous deployment automatically releases qualifying changes to production."
    },
    {
      q: "What is a merge conflict in Git?",
      a: "A Git merge conflict occurs when Git cannot automatically reconcile competing changes, such as edits to the same part of a file. A developer must review the changes, resolve the conflict, and complete the merge."
    },
    {
      q: "What is the purpose of the SOLID principles?",
      a: "The SOLID principles are five object-oriented design guidelines intended to make software easier to maintain and extend: Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion."
    },
    {
      q: "What is the difference between integration testing and unit testing?",
      a: "Unit testing checks individual functions or components in isolation. Integration testing checks whether multiple components work together correctly."
    },
    {
      q: "What is technical debt in software engineering?",
      a: "Technical debt is the future maintenance cost created by choosing a quick or less-than-ideal solution instead of a more sustainable one. It can be reasonable when understood and managed, but it accumulates interest through future changes."
    },
    {
      q: "What is a design pattern in software development?",
      a: "A design pattern is a reusable approach to a recurring software design problem. Examples include Factory, Observer, Strategy, and Model-View-Controller."
    },
    {
      q: "What is a REST API?",
      a: "A REST API is a web API style that commonly exposes resources through URLs and uses HTTP methods such as GET, POST, PUT, PATCH, and DELETE. Well-designed APIs define clear request and response formats."
    },
    {
      q: "What is a mathematical proof by induction?",
      a: "A proof by induction demonstrates a statement for a sequence of cases by proving a base case and then showing that if the statement holds for one case, it holds for the next case."
    },
    {
      q: "What is a regular expression in automata theory?",
      a: "In automata theory, a regular expression describes a pattern or set of strings over an alphabet. Regular expressions can represent exactly the regular languages recognized by finite automata."
    },
    {
      q: "What is the difference between a deterministic and nondeterministic finite automaton?",
      a: "A deterministic finite automaton has exactly one defined next state for each state and input symbol. A nondeterministic finite automaton can allow multiple possible transitions or transitions that consume no input; both recognize the regular languages."
    }
  ]
};
