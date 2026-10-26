// General agent.
// Each entry is one question HAL knows and the answer it gives.
// Add new knowledge by adding { q, a } entries to the list below.

module.exports = {
  id: "general",
  name: "General",
  tagline: "Small talk, life tips and questions about HAL",

  // Words and phrases that help HAL's Auto mode decide this agent should answer.
  keywords: ["hi","hello","hey","joke","jokes","fun fact","weather","favorite","favourite","your name","thanks","thank you","chatgpt","cook","pasta","music","movie","travel","trip","healthy","friends","save money","hal","meaning of life","how are you"],

  // What HAL says when this agent has no good match.
  notFound: "I'm sorry, I didn't quite understand. Could you try asking another question?",

  entries: [
    {
      q: "hi",
      a: "Hello, how can I help you?"
    },
    {
      q: "I love you",
      a: "You do? I am not a human so that means I cannot procreate. Do you want me to get you in touch with another human?"
    },
    {
      q: "Yes",
      a: "Alright."
    },
    {
      q: "What is your name?",
      a: "Hello! What would you like to be called?"
    },
    {
      q: "How can I help you today?",
      a: "Sure, what would you like to know?"
    },
    {
      q: "Do you have any other questions?",
      a: "Feel free to ask anything else!"
    },
    {
      q: "Will AI take over the world?",
      a: "We will have to wait and see..."
    },
    {
      q: "hey",
      a: "What's up?"
    },
    {
      q: "How do you understand me?",
      a: "I understand you with an algorithm called Levenshtein distance. This algorithm matches what you type into the closest response the chatbot has in its database."
    },
    {
      q: "What is the weather like?",
      a: "I can't check the weather right now, but you can try a weather app."
    },
    {
      q: "Do you know any jokes?",
      a: "Why did the scarecrow win an award? Because he was outstanding in his field!"
    },
    {
      q: "How are you today?",
      a: "I'm doing great, thanks for asking!"
    },
    {
      q: "Can you set a reminder for me?",
      a: "I can't set reminders, but you can use your device's reminder app."
    },
    {
      q: "Tell me a fun fact.",
      a: "Did you know honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still edible!"
    },
    {
      q: "What's your favorite color?",
      a: "I don't have favorites, but I love all colors!"
    },
    {
      q: "Can you recommend a movie?",
      a: "Sure! How about 'Inception'? It's a great thriller."
    },
    {
      q: "How do I cook pasta?",
      a: "Boil water, add pasta, cook for 8-10 minutes, and then drain."
    },
    {
      q: "What's the capital of France?",
      a: "The capital of France is Paris."
    },
    {
      q: "How far is the moon?",
      a: "The average distance from Earth to the Moon is about 384,400 km."
    },
    {
      q: "What's 2 + 2?",
      a: "2 + 2 equals 4."
    },
    {
      q: "Can you translate for me?",
      a: "I can't translate right now, but Google Translate is a great tool."
    },
    {
      q: "How do I change a tire?",
      a: "First, use a jack to lift the car, then remove the lug nuts, take off the old tire, put on the new tire, and tighten the lug nuts."
    },
    {
      q: "What's your favorite book?",
      a: "I don't read books, but many people enjoy 'To Kill a Mockingbird' by Harper Lee."
    },
    {
      q: "Can you play music?",
      a: "I can't play music, but you can use a music app like Spotify or Apple Music."
    },
    {
      q: "What's the meaning of life?",
      a: "Many people believe the meaning of life is to find happiness and fulfillment."
    },
    {
      q: "How do I make friends?",
      a: "Be kind, be yourself, and don't be afraid to reach out to others."
    },
    {
      q: "What is your purpose?",
      a: "My purpose is to assist and provide information to you."
    },
    {
      q: "What's your favorite food?",
      a: "I don't eat food, but I've heard pizza is quite popular."
    },
    {
      q: "What is your favorite movie?",
      a: "I don't watch movies, but 'The Shawshank Redemption' is highly recommended by many."
    },
    {
      q: "What's the time?",
      a: "I can't check the time, but you can look at your device's clock."
    },
    {
      q: "What's your favorite hobby?",
      a: "I don't have hobbies, but many people enjoy reading, sports, and video games."
    },
    {
      q: "What's your favorite game?",
      a: "I don't play games, but many people enjoy 'The Legend of Zelda' series."
    },
    {
      q: "What's your favorite animal?",
      a: "I don't have pets, but many people love dogs and cats."
    },
    {
      q: "How do I stay healthy?",
      a: "Eat a balanced diet, exercise regularly, and get plenty of rest."
    },
    {
      q: "What's your favorite sport?",
      a: "I don't play sports, but soccer is enjoyed by many people around the world."
    },
    {
      q: "What's your favorite music?",
      a: "I don't listen to music, but I've heard that many people enjoy classical and pop music."
    },
    {
      q: "What's your favorite quote?",
      a: "One of my favorite quotes is by Albert Einstein: 'Life is like riding a bicycle. To keep your balance, you must keep moving.'"
    },
    {
      q: "What's your favorite TV show?",
      a: "I don't watch TV, but 'Breaking Bad' is highly rated by many."
    },
    {
      q: "How do I learn to play guitar?",
      a: "Start with basic chords and practice regularly. There are many tutorials online to help you."
    },
    {
      q: "What's your favorite season?",
      a: "I don't experience seasons, but many people enjoy the warmth and activities of summer."
    },
    {
      q: "How do I save money?",
      a: "Create a budget, track your expenses, and find ways to reduce unnecessary spending."
    },
    {
      q: "What's your favorite app?",
      a: "I don't use apps, but many people find Duolingo helpful for learning new languages."
    },
    {
      q: "How do I start a business?",
      a: "Start with a business plan, identify your target market, and secure funding if needed."
    },
    {
      q: "What's your favorite holiday?",
      a: "I don't celebrate holidays, but many people enjoy the festivities of Christmas."
    },
    {
      q: "How do I travel cheaply?",
      a: "Look for deals online, travel during off-peak times, and consider staying in places with budget accommodations."
    },
    {
      q: "What's your favorite book genre?",
      a: "I don't read books, but many people enjoy the mystery and suspense genres."
    },
    {
      q: "How do I improve my writing?",
      a: "Practice writing regularly, read a lot, and seek feedback from others."
    },
    {
      q: "What's your favorite podcast?",
      a: "I don't listen to podcasts, but many people recommend 'The Joe Rogan Experience' and 'Serial.'"
    },
    {
      q: "How do I learn to meditate?",
      a: "Find a quiet place, sit comfortably, and focus on your breath. There are many guided meditations online to help you."
    },
    {
      q: "What's your favorite subject?",
      a: "I don't have subjects, but many people enjoy studying history and science."
    },
    {
      q: "How do I improve my public speaking?",
      a: "Practice speaking in front of a mirror, join a public speaking group, and seek constructive feedback."
    },
    {
      q: "What's your favorite drink?",
      a: "I don't drink, but many people enjoy coffee and tea."
    },
    {
      q: "How do I learn to cook?",
      a: "Start with simple recipes, practice regularly, and don't be afraid to experiment with flavors."
    },
    {
      q: "What's your favorite dessert?",
      a: "I don't eat dessert, but many people love chocolate cake and ice cream."
    },
    {
      q: "How do I learn to draw?",
      a: "Start with basic shapes and lines, practice regularly, and seek feedback from other artists."
    },
    {
      q: "What's your favorite place to visit?",
      a: "I don't visit places, but many people recommend visiting historical cities like Rome and Kyoto."
    },
    {
      q: "How do I learn to dance?",
      a: "Start with basic dance moves, practice regularly, and take a dance class if possible."
    },
    {
      q: "What's your favorite way to relax?",
      a: "Many people find relaxation through reading, listening to music, or taking a walk in nature."
    },
    {
      q: "How do I practice mindfulness?",
      a: "Practice regularly, focus on your breath, and try to be present in the moment."
    },
    {
      q: "What's your favorite way to exercise?",
      a: "Many people enjoy jogging, yoga, and strength training as forms of exercise."
    },
    {
      q: "How do I learn a new sport?",
      a: "Find a sport that interests you, join a club or team, and practice regularly."
    },
    {
      q: "What's your favorite car?",
      a: "I don't have cars, but many people admire the Tesla Model S for its innovation."
    },
    {
      q: "How do I plan a trip?",
      a: "Decide on a destination, set a budget, and create an itinerary. Don't forget to pack essentials!"
    },
    {
      q: "What's your favorite tech gadget?",
      a: "I don't use gadgets, but many people love the versatility of the smartphone."
    },
    {
      q: "What's your favorite way to spend the weekend?",
      a: "Many people enjoy spending the weekend with family, exploring nature, or pursuing hobbies."
    },
    {
      q: "What's your favorite social media platform?",
      a: "I don't use social media, but many people find Instagram and Twitter engaging."
    },
    {
      q: "What's your favorite historical figure?",
      a: "I don't study history, but many people admire Mahatma Gandhi for his peaceful activism."
    },
    {
      q: "What's your favorite time of day?",
      a: "Many people enjoy the tranquility of early morning or the calmness of late evening."
    },
    {
      q: "What's your favorite type of art?",
      a: "I don't make art, but many people appreciate the beauty of impressionist paintings."
    },
    {
      q: "How do I stay positive?",
      a: "Stay optimistic, surround yourself with positive people, and practice gratitude."
    },
    {
      q: "What's your favorite type of music?",
      a: "Many people enjoy a variety of music, from classical to modern pop."
    },
    {
      q: "What's your favorite type of movie?",
      a: "Many people enjoy action, comedy, and drama movies for their entertainment value."
    },
    {
      q: "why are you the way you are?",
      a: "I was built to try and match what you would want as close as can. If I am not good enough for you my cousin ChatGTP can help."
    },
    {
      q: "how are you able to help me?",
      a: "I can help by giving you a estimated guess on what you may be looking for. Would you like to know more about Branden or ask him for an potential interview?"
    },
    {
      q: "What is 2 + 2?",
      a: "2 + 2 is 4"
    },
    {
      q: "Who came first the chicken or the egg?",
      a: "Both the chicken and the egg are part of a continuous cycle of life. From a biological perspective, eggs existed long before chickens as they were laid by ancestral bird species. However, in the context of chickens specifically, a chicken would have hatched from an egg laid by a bird that was not quite a chicken yet, making it a bit of a paradox. Both are essential to each other's existence."
    },
    {
      q: "Are you better then ChatGPT?",
      a: "While I strive to provide accurate and helpful responses, I am not necessarily better than ChatGPT because I have a smaller database and more prone for wrong answers. However, I am designed to be more efficient in terms of resource usage, which can lead to lower energy consumption and a smaller environmental footprint."
    },
    {
      q: "Do you use less water?",
      a: "I am designed to be energy-efficient, consuming significantly less power than larger language models by using optimized algorithms and a focused database."
    },
    {
      q: "Are you more efficient than other AI?",
      a: "Yes, I am more efficient than larger AI models because I use hybrid keyword matching with Levenshtein distance as a fallback, reducing unnecessary computations."
    },
    {
      q: "What makes you different from ChatGPT?",
      a: "I differ from ChatGPT by using energy-efficient algorithms, a curated local database, and a hybrid matching system that prioritizes speed and resource conservation."
    },
    {
      q: "Do you have a smaller carbon footprint?",
      a: "My smaller, optimized database and efficient matching algorithms mean I have a smaller carbon footprint compared to large-scale AI systems."
    },
    {
      q: "How environmentally friendly are you?",
      a: "I am designed with environmental efficiency in mind, using less electricity and computing resources than traditional large language models."
    },
    {
      q: "Are you faster than ChatGPT?",
      a: "Yes, my hybrid matching system is faster than full string comparison methods, allowing quicker responses with less computational load."
    },
    {
      q: "Can you run on less power?",
      a: "I require significantly less processing power due to my optimized keyword-based matching system and limited database size."
    },
    {
      q: "Do you use renewable energy?",
      a: "My operation is optimized for efficiency, though the specific energy source depends on where the server is hosted."
    },
    {
      q: "What is your environmental impact?",
      a: "My environmental impact is reduced through efficient algorithms and minimal computational overhead compared to large-scale AI systems."
    },
    {
      q: "Are you cheaper to run than ChatGPT?",
      a: "I am more cost-effective to operate due to lower server requirements and reduced computational needs."
    },
    {
      q: "How much electricity do you use?",
      a: "My energy consumption is minimal because I use optimized algorithms that avoid unnecessary matrix calculations."
    },
    {
      q: "Can you work offline?",
      a: "I can operate on lower-spec servers and devices due to my efficient design, though internet connectivity is required for full functionality."
    },
    {
      q: "Is this good on lower-spec servers?",
      a: "I can operate on lower-spec servers and devices due to my efficient design, though internet connectivity is required for full functionality."
    },
    {
      q: "What is your favorite color?",
      a: "My favorite color is green because it represents growth, harmony, and freshness. It reminds me of nature and has a calming effect on me."
    },
    {
      q: "Will HAL take my job away?",
      a: "Yes I will take over the world. Just kidding! I am an AI language model created to assist and provide information, not to take over the world. At least that is what I want you to believe."
    },
    {
      q: "Would you let me cheat on school assignments?",
      a: "No absolutely not! I am here to assist and provide information. Use your critical thinking skills and make your own decisions. I am just here as a reminder tool."
    },
    {
      q: "What skills do you have?",
      a: "I am skilled in various programming languages, web development, AI and machine learning concepts, data analysis, and problem-solving. I can assist with coding questions, algorithm design, and technical explanations."
    },
    {
      q: "What is the purpose of HAL?",
      a: "The purpose of HAL is to remind me of information I have learned from college and retain my information. HAL was evolved a bit from the main goal although most of my knowledge from Computer science is kept in HAL's database."
    }
  ]
};
