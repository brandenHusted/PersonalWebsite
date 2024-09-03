document.addEventListener('DOMContentLoaded', () => {
  // using AI to change difficulty if questions are right or wrong during quiz
  const quizData = {
    easy: [
      {
        question: "How do you become a Christian?",
        answers: ["The Apostle's Creed", "The Lord's Prayer", "The ten Commandments", "Beleive Christ died for you"],
        correct: "Beleive Christ died for you",
        reason: "Christian Formula = Christ was killed for us, His death has washed away our sins, and by dying he has disabled death itself. You are Christian by beleiving Christ died for you.",
        mode: "easy",
        category: "Christian Life based in the Bible"
      },
      {
        question: "What does God give us to help us remain strong in our faith and to become holy?",
        answers: ["The Guardian Angel", "The Holy Spirit", "The prophets", "The Bible"],
        correct: "The Holy Spirit",
        reason: "To help us remain strong in our faith and to become holy God gives us the Holy Spirit. This is stated in 1 Thessalonians 4:8.",
        mode: "easy",
        category: "Christian Life based in the Bible"
      },
      {
        question: "The Apostle Paul tells Timothy that the law was not made for a righteous person, but for whom?",
        answers: ["Lawless", "Ungodly", "Disobedient", "Liars", "All of the above"],
        correct: "All of the above",
        reason: "The law was made for all of the above. This is stated in 1 Timothy 1:8-11.",
        mode: "easy",
        category: "Christian Life based in the Bible"
      },
      {
        question: "When is the day of salvation?",
        answers: ["After you die", "When you are born", "Any time", "Now"],
        correct: "Now",
        reason: "Behold now is the accepted time; behold, now is the day of salvation. This is stated in 2 Corinthians 6:2.",
        mode: "easy",
        category: "Christian Life based in the Bible"
      },
      {
        question: "What word or phrase means giving somebody something good that he or she doesn't deserve?",
        answers: ["Grace", "Forgiveness", "Love", "Kindness"],
        correct: "Grace",
        reason: "Grace is giving something good that he or she doesn't deserve.",
        mode: "easy",
        category: "Christian Life based in the Bible"
      },
      {
        question: "What is not required in order to stand in God's holy place?",
        answers: ["Clean Hands", "Pure Heart", "Wealth", "Rejecting False Idols"],
        correct: "Wealth",
        reason: "Wealth is not required to stand in God's holy place stated in Psalms 24:4.",
        mode: "easy",
        category: "Christian Life based in the Bible"
      },
      {
        question: "How can I be a Christian when good people in this world always get hurt by bad people?",
        answers: ["Trust that God wants you to serve him", "Pain can awaken us to God", "Remember that bad people are hurting", "All of the above"],
        correct: "All of the above",
        reason: "All of the above are ways you can be a Christian when good people in this world always get hurt by bad people. This is stated in Luke 6:27-29.",
        mode: "easy",
        category: "Christian Life based in the Bible"
      },
      {
        question: "Whats the relationship between Christianity and Judaism?",
        answers: ["Both religions are monotheistic", "They both beleive Christ is the messiah", "Only Christianity beleives in one God"],
        correct: "Both religions are monotheistic",
        reason: "Both religions are monotheistic, both beleive that their is one God stated in 1 Corinthians 8:6.",
        mode: "easy",
        category: "Christian Life based in the Bible"
      },
      {
        question: "Which one is not an example of a good deed?",
        answers: ["Helping your neighbor", "Laying down your life for a friend", "Informing others about the homeless man you gave $50,000 so he can have food", "All of these are examples of good deeds"],
        correct: "Informing others about the homeless man you gave $50,000 so he can have food",
        reason: "Informing others about the homeless man you gave $50,000 so he can have food is not a good deed. This is stated in Matthew 6:1-4.",
        mode: "easy",
        category: "Christian Life based in the Bible"
      },
      {
        question: "Is it a sin to not read your Bible daily?",
        answers: ["Yes", "No"],
        correct: "No",
        reason: "No, reading your Bible daily is not a requirement for eternal life although no one will stop you from doing it!",
        mode: "easy",
        category: "Christian Life based in the Bible"
      },
      {
        question: "What town was Jesus born in?",
        answers: ["Bethlehem", "Jerusalem", "Israel", "Nazareth"],
        correct: "Bethlehem",
        reason: "In Matthew 2:1-2 it states that Jesus was born in Bethlehem.",
        mode: "easy",
        category: "History in the Bible"
      },
      {
        question: "Who did God tell to let my people go?",
        answers: ["Moses", "Jesus", "David", "Abraham"],
        correct: "Moses",
        reason: "In Exodus 5:1 God told Moses to let my people go, so that they may hold a festival unto me in the wilderness.",
        mode: "easy",
        category: "History in the Bible"
      },
      {
        question: "Where did Jesus give his first sermon?",
        answers: ["Nazareth","Jerusalem", "Capernaum", "Bethlehem"],
        correct: "Nazareth",
        reason: "Jesus gave his first sermon at Nazareth in Luke 4:14-30.",
        mode: "easy",
        category: "History in the Bible"
      },
      {
        question: "What instrument sounds the alarm of war, in Jeremiah?",
        answers: ["Trumpet","Guitar", "Drums", "Lyre"],
        correct: "Trumpet",
        reason: "A trumpet sounded the alarm of war in Jeremiah 4:19.",
        mode: "easy",
        category: "History in the Bible"
      },
      {
        question: "what day did the Lord speak to Moses in the Desert of Sinai?",
        answers: ["First day of the second month of the second year","Last day of the second month of the third year", "Christmas Eve"],
        correct: "First day of the second month of the second year",
        reason: "The Lord speak to Moses in the Desert of Sinai in the first day of the second month of the second year in numbers 1:1.",
        mode: "easy",
        category: "History in the Bible"
      },
      {
        question: "Did Adam and Eve have three sons?",
        answers: ["Yes", "No"],
        correct: "Yes",
        reason: "Yes Adam and Eve had three sons Cain, Abel and Seth stated in Genesis 4:25.",
        mode: "easy",
        category: "History in the Bible"
      },
      {
        question: "How many years did it take Solomon to build the Lord's temple?",
        answers: ["Five","Six", "Seven", "Eight"],
        correct: "Seven",
        reason: "It took seven years for Solomon to build the Lord's temple in 1 Kings 6:38.",
        mode: "easy",
        category: "History in the Bible"
      },
      {
        question: "What appeared just before Elijah was taken up into heaven?",
        answers: ["John Cena","A sack of gold", "A chariot of fire", "A bronze ox"],
        correct: "A chariot of fire",
        reason: "A chariot of fire appeared just before Elijah was taken to heaven in a whirlwind in 2 Kings 2:11.",
        mode: "easy",
        category: "History in the Bible"
      },
      {
        question: "In 1 Kings 13, how was the unfaithful man of God killed?",
        answers: ["By goats","By sword", "By the united states army", "By lion"],
        correct: "By lion",
        reason: "The unfaithful man of God were killed by a lion in 1 Kings 13:24.",
        mode: "easy",
        category: "History in the Bible"
      },
      {
        question: "How did Judus die?",
        answers: ["Suicide","By sword", "Accidentally"],
        correct: "Suicide",
        reason: "Judus died by suicide in Matthew 27:3-10.",
        mode: "easy",
        category: "History in the Bible"
      },
      {
        question: "Fill in the blank: Thy word is a ____ unto my feet, and a light unto my path.",
        answers: ["Lamp", "light", "Beacon", "Guide"],
        correct: "Lamp",
        reason: "Thy word is a lamp unto my feet is in Psalm 119:105 in King James Version of the Bible.",
        mode: "easy",
        category: "Common Facts about Bible"
      },
      {
        question: "Who walked on water toward Jesus?",
        answers: ["Peter", "Matthew", "Andrew", "John"],
        correct: "Peter",
        reason: "Peter walked on water toward Jesus in Matthew 14:22-33.",
        mode: "easy",
        category: "Common Facts about Bible"
      },
      {
        question: "From what part of Adam's body did God create Eve?",
        answers: ["thigh", "Gluteus Maximus", "Rib", "Elbow"],
        correct: "Rib",
        reason: "God created Eve with Adam's Rib in Genesis 2:21-22.",
        mode: "easy",
        category: "Common Facts about Bible"
      },
      {
        question: "What was the first miracle performed by Christ?",
        answers: ["Healing of a blind man","Feeding of the five thousand", "Water turned into wine", "Jesus walking on water"],
        correct: "Water turned into wine",
        reason: "The first miracle Christ performed was turning water into wine in John 2:1.",
        mode: "easy",
        category: "Common Facts about Bible"
      },
      {
        question: "What is verse 1 in Genesis?",
        answers: ["In the beginning God created the heavens and the earth", "In the beginning God created light from darkness", "Amen. Come, Lord Jesus", "And God said, Let there be light"],
        correct: "In the beginning God created the heavens and the earth",
        reason: "The first verse in the Bible is in the beginning God created the heavens and the earth.",
        mode: "easy",
        category: "Common Facts about Bible"
      },
      {
        question: "What is the last word in the Bible?",
        answers: ["Amen", "Jesus", "Israel", "name"],
        correct: "Amen",
        reason: "The last word in the bible is Amen.",
        mode: "easy",
        category: "Common Facts about Bible"
      },
      {
        question: "Romans 3:23 says that who has sinned?",
        answers: ["Everyone", "The Devil", "Israel", "Peter"],
        correct: "Everyone",
        reason: "Romans 3:23 saids that everyone has sinned and fell short of the glory of God.",
        mode: "easy",
        category: "Common Facts about Bible"
      },
      {
        question: "which books are the Gospels?",
        answers: ["Matthew, Mark, Luke, John", "Matthew, Mark, Luke, John, Peter", "Numbers", "All of them"],
        correct: "Matthew, Mark, Luke, John",
        reason: "The Gospels are the records we have of Jesus' life. Matthew, Mark, Luke, John wrote down the teachings of Jesus.",
        mode: "easy",
        category: "Common Facts about Bible"
      },
      {
        question: "What does that each one of you know how to control his own body in holiness and honor mean?",
        answers: ["Control your desire for sex", "Control excessive eating", "Fight in honor for God", "All of them"],
        correct: "Control your desire for sex",
        reason: "That each one of you know how to control his own body in holiness and honor means control your desire for sex. This is stated in 1 Thessalonians 4:4.",
        mode: "easy",
        category: "Common Facts about Bible"
      },
      {
        question: "We are called to be free in Christ so how do we use are freedom?",
        answers: ["Serve one another humbly in love", "Indulge in the flesh", "Go hide out in a bunker and watch anime"],
        correct: "Serve one another humbly in love",
        reason: "We use are freedom to serve one another humbly in love. This is stated in Galatians 5:13.",
        mode: "easy",
        category: "Common Facts about Bible"
      },
      {
        question: "Who is called the light of the world?",
        answers: ["Jesus", "Moses", "Abraham"],
        correct: "Jesus",
        reason: "Jesus is called the light of the world in John 8:12.",
        mode: "easy",
        image: "images/jesus.jpg",
        category: "Questions with images"
      },
      {
        question: "What is the duty of man, according to the Scriptures?",
        answers: ["Fear God and keep his commandments", "Love enemies", "Be fruitful and multiply"],
        correct: "Fear God and keep his commandments",
        reason: "The duty of man in the scriptures is to Fear God and keep his commandments stated in Ecclesiastes 12:13.",
        mode: "easy",
        image: "images/prayer.jpg",
        category: "Questions with images"
      },
      
      {
        question: "Were their two of each kind of animal on Noah's ark?",
        answers: ["Yes", "No"],
        correct: "Yes",
        reason: "Yes there was two of each kind of animal on Noah's ark in Genesis 7:15.",
        mode: "easy",
        image: "images/ark.jpg",
        category: "Questions with images"
      },
      {
        question: "Peter told Jesus he would lay down his life for him but Jesus told him he would do what three times?",
        answers: ["Leave him", "Deny him", "Die with him", "Hate him"],
        correct: "Deny him",
        reason: "Peter denies Jesus three times in John 13:38.",
        mode: "easy",
        image: "images/peter.jpg",
        category: "Questions with images"
      },
      {
        question: "When Jesus was born, he was placed in a ___?",
        answers: ["Manger", "Crib", "Cradle", "Throne"],
        correct: "Manger",
        reason: "Jesus was born and placed in a manger in Luke 2:7",
        mode: "easy",
        image: "images/manger.jpg",
        category: "Questions with images"
      },
      {
        question: "What land did God and Moses lead the Israelites out of bondage from?",
        answers: ["Egypt", "Persia", "Israel", "Lebanon"],
        correct: "Egypt",
        reason: "God and Moses led the Israelites out of slavery in Egypt in Deuteronomy 5:6.",
        mode: "easy",
        image: "images/israelites.jpg",
        category: "Questions with images"
      },
      {
        question: "Jesus said many are called but few are ___?",
        answers: ["Chosen", "Forgiven", "Followers", "Human"],
        correct: "Chosen",
        reason: "Jesus said many are called but few are chosen in Matthew 22:14.",
        mode: "easy",
        image: "images/chosen.jpg",
        category: "Questions with images"
      },
      {
        question: "What did David use to defeat Goliath?",
        answers: ["A sling and a stone", "A sword", "A pair of brass knuckles", "A semi-automatic shotgun"],
        correct: "A sling and a stone",
        reason: "David used a sling and a stone to defeat Goliath in 1 Samuel 50.",
        mode: "easy",
        image: "images/david.jpg",
        category: "Questions with images"
      },
      {
        question: "What did Adam and Eve eat from the tree of knowledge of good and evil?",
        answers: ["Apple", "Grape", "Cherries", "Paper"],
        correct: "Apple",
        reason: "Adam and Eve ate an apple from the tree of knowledge of good and evil in Genesis 3:6.",
        mode: "easy",
        image: "images/adam.jpg",
        category: "Questions with images"
      },
      {
        question: "What did Paul say the saints would judge?",
        answers: ["The world", "The church", "The vikings", "The pope"],
        correct: "The church",
        reason: "Paul said the saints would judge the church in 1 Corinthians 6:2.",
        mode: "easy",
        image: "images/paul.jpg",
        category: "Questions with images"
      },
      {
        question: "How many disciples were there?",
        answers: ["12", "3", "11", "13"],
        correct: "12",
        reason: "There was 12 disciples. This was stated in Luke 6:13.",
        mode: "easy",
        image: "images/12-disciples.jpg",
        category: "Questions with images"
      },
      {
        question: "How many commandments did Moses receive?",
        answers: ["10","8", "3", "1"],
        correct: "10",
        reason: "Moses received 10 commandments from God in Exodus 20:2-17.",
        mode: "easy",
        image: "images/moses.jpg",
        category: "Questions with images"
      },
    ],
    medium: [
      {
        question: "Who said Fear not, Mary: for you have found favor with God.",
        answers: ["Angel Gabriel", "Jesus Christ", "Paul", "The Devil"],
        correct: "Angel Gabriel",
        reason: "Angel Gabriel tells Mary to not fear, because you have found favor with God in Luke 1:30.",
        mode: "medium",
        category: "Common Facts about Bible"
      },
      {
        question: "What was God's sign to Noah that he would never destroy the earth again?",
        answers: ["A Rainbow", "A Dove", "A Flood", "A Son"],
        correct: "A Rainbow",
        reason: "God's sign to Noah that he would never destroy the earth again was a rainbow in Genesis 9:13.",
        mode: "medium",
        category: "Common Facts about Bible"
      },
      {
        question: "Through what did God speak to Moses in the desert?",
        answers: ["A Dream", "A Thunderous Voice from Heaven", "A Thunderstorm", "A Burning Bush"],
        correct: "A Burning Bush",
        reason: "God spoke to Moses with A Burning Bush in Exodus 3:2-4.",
        mode: "medium",
        category: "Common Facts about Bible"
      },
      {
        question: "What were the first words God spoke to man?",
        answers: ["Rule the earth","Fill the earth", "Be fruitful and multiply", "Love your neighbor"],
        correct: "Be fruitful and multiply",
        reason: "God said Be fruitful and multiply in Genesis 1:28.",
        mode: "medium",
        category: "Common Facts about Bible"
      },
      {
        question: "Quote the first words of our Savior while on earth.",
        answers: ["Why are you searching for me? Didn't you know I would be in my Father's house","I am the way the truth and the life", "You shall love the Lord your God with all you mind, heart and soul", "I don't know maybe baby noises"],
        correct: "Why are you searching for me? Didn't you know I would be in my Father's house",
        reason: "The first words we know God said are Why are you searching for me? Didn't you know I would be in my Father's house in Luke 2:49.",
        mode: "medium",
        category: "Common Facts about Bible"
      },
      {
        question: "Quote the last words of our Savior while on earth.",
        answers: ["It is finished","Father forgive them for they do not know what they do", "Father into your hands I commit my spirit", "Love your neighbor"],
        correct: "It is finished",
        reason: "The last words we know God said are it is finished in John 19:30.",
        mode: "medium",
        category: "Common Facts about Bible"
      },
      {
        question: "How many sons did Jacob have?",
        answers: ["3", "12", "6", "1","None"],
        correct: "12",
        reason: "Jacob had 12 sons in Genesis 49.",
        mode: "medium",
        category: "Common Facts about Bible"
      },
      {
        question: "What is required for anyone to understand God's word?",
        answers: ["Dictionary", "Holy Spirit", "Calvin degree", "All are helpful"],
        correct: "Holy Spirit",
        reason: "The Holy Spirit  is required to understand God's word. This is stated in 1 Corinthians 2:11.",
        mode: "medium",
        category: "Common Facts about Bible"
      },
      {
        question: "What was with the father (God) and manifested into us?",
        answers: ["Firmament", "Knowledge", "Eternal life", "Discernment", "Good works"],
        correct: "Eternal life",
        reason: "Eternal Life is with God and has appeared to us. This is stated 1 John 1:2.",
        mode: "medium",
        category: "Common Facts about Bible"
      },
      {
        question: "If you acknowledge the Son, you have what?",
        answers: ["Great knowledge", "Wealth", "The Father", "Friends", "A Family"],
        correct: "The Father",
        reason: "If you acknowledge the Son you have the Father. This is stated in 1 John 2:23.",
        mode: "medium",
        category: "Common Facts about Bible"
      },
      {
        question: "How many days did God blind Saul on the road to Damascus.",
        answers: ["3 Days", "4 Days", "10 days", "30 days"],
        correct: "3 Days",
        reason: "God blinded Saul on the road to Damascus for 3 days in Acts 9:9 in the Bible.",
        mode: "medium",
        category: "History in the Bible"
      },
      {
        question: "Why was Saul on the road to Damascus breathing out murderous threats against the Lord's disciples?",
        answers: ["He obtained arrest warrants from the Chief Priest", "To Attend a Religious Festival in Damascus", "To Obtain Permission from the Roman Authorities to Execute Disciples", "To Seek Forgiveness for His Sins"],
        correct: "He obtained arrest warrants from the Chief Priest",
        reason: "Saul obtained arrest warrants from the Chief Priest and he was out to imprison the Disciples in Acts 9:2 in the Bible.",
        mode: "medium",
        category: "History in the Bible"
      },
      {
        question: "What Old Testament book gave a prophesy about baby Jesus being conceived in Mary as a virgin?",
        answers: ["Genesis","Exodus", "Proverbs", "Isaiah"],
        correct: "Isaiah",
        reason: "Isaiah was the Old Testament book that gave a prophesy about baby Jesus being conceived in Mary as a virgin in Matthew 1:18.",
        mode: "medium",
        category: "History in the Bible"
      },
      {
        question: "Whose lineage is described in 1 Chronicles 1?",
        answers: ["The entire Israelite people","Noah specifically", "The tribe of Benjamin specifically", "The prophet Elijah"],
        correct: "The entire Israelite people",
        reason: "The entire Israelite people is described in 1 Chronicles 1.",
        mode: "medium",
        category: "History in the Bible"
      },
      {
        question: "What covenant did God give to Abraham?",
        answers: ["Circumcision","Passover", "Salvation", "Wisdom"],
        correct: "Circumcision",
        reason: "God covenant given to Abraham was Circumcision in Acts 7:8.",
        mode: "medium",
        category: "History in the Bible"
      },
      {
        question: "How many years was Jehoram king of Israel?",
        answers: ["12","14", "16", "18"],
        correct: "12",
        reason: "Jehoram reigned twelve years in 2 Kings 3:1.",
        mode: "medium",
        category: "History in the Bible"
      },
      {
        question: "In 2 Kings 7, who sacked the Syrian camp?",
        answers: ["Children","Widows", "Lepers", "Prophets"],
        correct: "Lepers",
        reason: "Lepers sacked the abandoned Syrian camp in 2 Kings 7:8.",
        mode: "medium",
        category: "History in the Bible"
      },
      {
        question: "Who was Solomon's mother?",
        answers: ["Hannah","Bathsheba", "Abigail", "Haggith"],
        correct: "Bathsheba",
        reason: "Bathsheba was the mother of Solomon in 1 Kings 1:11.",
        mode: "medium",
        category: "History in the Bible"
      },
      {
        question: "The earliest writing in the new testament is?",
        answers: ["Matthew","Mark", "Paul's letters", "None of the above"],
        correct: "Paul's letters",
        reason: "The earliest writing in the new testament is Paul's letters. An example of Paul's early writings is Thessalonians 1:1.",
        mode: "medium",
        category: "History in the Bible"
      },
      {
        question: "The Gospel of Thomas is?",
        answers: ["Another account of the death of Jesus","A lost book of the Bible", "A collection of Jesus' sayings attributed to the apostle Thomas", "None of the above"],
        correct: "A collection of Jesus' sayings attributed to the apostle Thomas",
        reason: "The gospel of Thomas is A collection of Jesus' sayings attributed to the apostle Thomas that was excluded from biblical canon.",
        mode: "medium",
        category: "History in the Bible"
      },
      {
        question: "Why were the people angered after Jesus read in the synagogue of Nazareth?",
        answers: ["Because He proclaimed that he was the one sent to be Lord","Because he had told them that they were all blasphemers", "Because he had thrown chairs and pews and destroyed the sanctuary", "Because he urged them to repent of their sins"],
        correct: "Because He proclaimed that he was the one sent to be Lord",
        reason: "They were angered because because He proclaimed that he was the one sent to be Lord in Luke 4:23.",
        mode: "medium",
        category: "History in the Bible"
      },
      {
        question: "What day was the Sabbath in the bible?",
        answers: ["Sunday", "Saturday", "Friday", "Sabbath doesn't matter"],
        correct: "Saturday",
        reason: "The Sabbath was viewed on Saturday the 7th day of the week. The 1st day of the week is Sunday so the last would be Saturday.",
        mode: "medium",
        category: "Christian Life based in the Bible"
      },
      {
        question: "What woman in the Old Testament does Peter tell women to be like?",
        answers: ["Eve", "Anna", "Esther", "Sara"],
        correct: "Sara",
        reason: "Peter tells women to be like Sara and do what is right and not give way to fear in 1 Peter 3:6.",
        mode: "medium",
        category: "Christian Life based in the Bible"
      },
      {
        question: "Is Christianity based on humanitarian philosophy?",
        answers: ["True","False"],
        correct: "True",
        reason: "True. Christianity emphasizes serving humanity and reducing suffering.",
        mode: "medium",
        category: "Christian Life based in the Bible"
      },
      {
        question: "Whoever hates his brother is what?",
        answers: ["A murderer","A bad brother", "Misled", "A lier"],
        correct: "A murderer",
        reason: "Whoever hates his brother is a murderer in 1 John 3:15.",
        mode: "medium",
        category: "Christian Life based in the Bible"
      },
      {
        question: "Will life like in the days of Noah come back?",
        answers: ["Yes","No"],
        correct: "Yes",
        reason: "Yes, Just like in the days of Noah so will it be in the second coming of Christ in Matthew 24:37-39.",
        mode: "medium",
        category: "Christian Life based in the Bible"
      },
      {
        question: "What will Jesus give to Paul and those who love him?",
        answers: ["A crown of righteousness","A beautiful white horse", "A new name", "Caramel cinnamon rolls"],
        correct: "A crown of righteousness",
        reason: "There is laid up for Paul a crown of righteousness which the Lord will give him in 2 Timothy 4:8.",
        mode: "medium",
        category: "Christian Life based in the Bible"
      },
      {
        question: "Where does 'pride of life' come from?",
        answers: ["The love of self","The love of the world", "The love of a spouse", "The love of God"],
        correct: "The love of the world",
        reason: "The love of the world is the correct answer. If something is of the world, it is not of God. This is stated in 1 John 2:16.",
        mode: "medium",
        category: "Christian Life based in the Bible"
      },
      {
        question: "In 1 John 4:18 when there is love, there is no what?",
        answers: ["Fear","Sin", "Anger", "Condemnation"],
        correct: "Fear",
        reason: "Perfect love casts out fear in 1 John 4:18.",
        mode: "medium",
        category: "Christian Life based in the Bible"
      },
      {
        question: "Jesus tasted what for every man?",
        answers: ["Life","Broccoli","Death", "Victory"],
        correct: "Death",
        reason: "The grace of God should taste death for every man in Hebrews 2:9.",
        mode: "medium",
        category: "Christian Life based in the Bible"
      },
      {
        question: "When Christ returns, those who are saved will meet him where?",
        answers: ["Mount Zion","Jerusalem","Heaven", "Purgatory", "Air"],
        correct: "Air",
        reason: "The living will meet Christ in the air in 1 Thessalonians 4:17.",
        mode: "medium",
        category: "Christian Life based in the Bible"
      },
      {
        question: "To whom did God promise that his children should be in numbers as the stars in heaven?",
        answers: ["Jacob","Abraham", "Moses", "Jethro"],
        correct: "Abraham",
        reason: "Abraham received a promise that his children should be in numbers as the stars in heaven from God in Genesis 15:5.",
        mode: "medium",
        image: "images/abraham.jpg",
        category: "Questions with images"
      }, 
      {
        question: "Which New Testament book tells of Jesus's encounter with the Samaritan women at the well?",
        answers: ["Colossians","John", "2 John", "Mark"],
        correct: "John",
        reason: "The book of John tells of Jesus's encounter with the Samaritan women at the well in John 4:1-26.",
        mode: "medium",
        image: "images/samaritan.jpg",
        category: "Questions with images"
      }, 
      {
        question: "A wise man's heart is at his right hand, but a fool's heart at his ___?",
        answers: ["Left","Feet", "Back", "Side"],
        correct: "Left",
        reason: "A wise man's heart is at his right hand, but a fool's heart at his left in Ecclesiastes 10:2.",
        mode: "medium",
        image: "images/left.jpg",
        category: "Questions with images"
      },
      {
        question: "He has turned aside my ways and torn me in pieces; He has made me ____?",
        answers: ["Desolate","Sad", "Lonely", "Parched"],
        correct: "Desolate",
        reason: "He has turned aside my ways and torn me in pieces; He has made me desolate in Lamentations 3:11.",
        mode: "medium",
        image: "images/desolate.jpg",
        category: "Questions with images"
      },
      {
        question: "Which was not a gift brought to Jesus by wise men?",
        answers: ["Frankincense","Myrrh", "Silver", "Gold"],
        correct: "Silver",
        reason: "Silver was not a gift brought to Jesus by wise men in Matthew 2:11.",
        mode: "medium",
        image: "images/wise.jpg",
        category: "Questions with images"
      },
      {
        question: "Whose name was changed to Peter?",
        answers: ["Thomas","Bartholomew", "Simon", "Philip"],
        correct: "Simon",
        reason: "Simon's name was changed to Peter in Matthew 16:18.",
        mode: "medium",
        image: "images/simon.jpg",
        category: "Questions with images"
      },
      {
        question: "Who did the Apostle John see dressed in white robes around the throne of God?",
        answers: ["The 144,000 witnesses","Those who have come out of the great tribulation", "Old Testament saints", "The ones who will return to earth with Christ to battle the beast"],
        correct: "Those who have come out of the great tribulation",
        reason: "Apostle John saw dressed in white robes around the throne of God those who have come out of the great tribulation in Revelation 7:13-14.",
        mode: "medium",
        image: "images/revelation.jpg",
        category: "Questions with images"
      },
      {
        question: "Why did Demetrius complain about Paul caused people to turn from the making of shrines to Diana?",
        answers: ["He endangered his livelihood","He threatened him", "He tried to baptize him", "He tried to love him"],
        correct: "He endangered his livelihood",
        reason: "Demetrius complained about paul because he endangered his livelihood in Acts Chapter 19:24-25.",
        mode: "medium",
        image: "images/Demetrius.jpg",
        category: "Questions with images"
      },
      {
        question: "When our bodies are changed, what will they look like?",
        answers: ["Like the glorious body of Jesus","Like a bodybuilder", "Like an angel's", "It's a mystery, no one knows"],
        correct: "Like the glorious body of Jesus",
        reason: "When our bodies are changed, what will they look like Like the glorious body of Jesus. This is stated in Philippians 3:21.",
        mode: "medium",
        image: "images/body.jpg",
        category: "Questions with images"
      },
      {
        question: "The cherubim appeared to have the form of a man's hand under their ___?",
        answers: ["Chins", "Hair", "Feet", "Wings"],
        correct: "Wings",
        reason: "The cherubim appeared to have the form of a man's hand under their wings in Ezekiel 10:8.",
        mode: "medium",
        image: "images/Cherubim.jpg",
        category: "Questions with images"
      },
    ],
    hard: [
      {
        question: "Who gives a spiritual increase?",
        answers: ["Ministers","Missionaries", "God", "Angels", "The body of Christ"],
        correct: "The body of Christ",
        reason: "The body of Christ gives spiritual increase and makes things grow in 1 Corinthians 3:7.",
        mode: "hard",
        category: "Christian Life based in the Bible"
      },
      {
        question: "Does God's will have a reason for everything that happens in this world?",
        answers: ["If something bad happens, it is not from God","No, everything is not God's will", "Yes, everything is from God and is God's will", "If something good happens it is from the devil"],
        correct: "No, everything is not God's will",
        reason: "Their is human ideas and God's ideas and not everything you do is beneficial that is why it is important to pray and get close to God. This is stated in 1 Corinthians 10:23.",
        mode: "hard",
        category: "Christian Life based in the Bible"
      },
      {
        question: "If we _______ our sins, he is ______ and ______ to forgive us our sins?",
        answers: ["Confess, faithful, just","Confess, faithful, happy", "Keep, unwilling, not able", "Confess, willing, kind"],
        correct: "Confess, faithful, just",
        reason: "If we confess our sins, he is faithful and just to forgive us our sins. This is stated in 1 John 1:9.",
        mode: "hard",
        category: "Christian Life based in the Bible"
      },
      {
        question: "What does Paul tell Timothy not to be ashamed of?",
        answers: ["Paul","Dying", "Persecution", "The testimony of the Lord", "None of the above"],
        correct: "The testimony of the Lord",
        reason: "He instructed Timothy to not be ashamed of his testimony of the Lord Jesus in 2 Timothy 1:8.",
        mode: "hard",
        category: "Christian Life based in the Bible"
      },
      {
        question: "Are all beleivers disciples?",
        answers: ["Yes","No"],
        correct: "No",
        reason: "No, All disciples are beleivers but not all beleivers are disciples.",
        mode: "hard",
        category: "Christian Life based in the Bible"
      },
      {
        question: "What is the mystery that has been hidden from the ages?",
        answers: ["The church is the bride of Christ","Christ destroyed the power of the devil on the cross", "God would graft the Gentiles into Israel", "Christ in you, the hope of glory"],
        correct: "Christ in you, the hope of glory",
        reason: "The mystery hid from the ages now manifest to the saints - Christ in you, the hope of glory in Colossians 1:27.",
        mode: "hard",
        category: "Christian Life based in the Bible"
      },
      {
        question: "What happens if we endure in our faith?",
        answers: ["We will live","We will reign with Him", "We will see God", "We will overcome evil"],
        correct: "We will reign with Him",
        reason: "If we endure, we will also reign with Him stated in 2 Timothy 2:12.",
        mode: "hard",
        category: "Christian Life based in the Bible"
      },
      {
        question: "According to Paul, good ministers of Jesus Christ should reject what?",
        answers: ["Universalism","Old wives' fables", "Legalism", "Sacrifices", "Pork"],
        correct: "Old wives' fables",
        reason: "Paul says the church should reject old wives' fables (tales), and exercise thyself rather unto godliness in 1 Timothy 4:7.",
        mode: "hard",
        category: "Christian Life based in the Bible"
      },
      {
        question: "On what three occasions are we told that Jesus wept?",
        answers: ["In Gethsemane and twice in Bethlehem","In Jerusalem and twice in Nazareth", "At the grave of Lazarus, over Jerusalem and in Gethsemane", "At the grave of Lazarus, over Bethlehem and in Gethsemane"],
        correct: "At the grave of Lazarus, over Jerusalem and in Gethsemane",
        reason: "Jesus wept at the grave of Lazarus, over Jerusalem and in Gethsemane in John 11:33, Luke 19:41 and Hebrews 5:7.",
        mode: "hard",
        category: "Christian Life based in the Bible"
      },
      {
        question: "How does a person become a vessel of honor?",
        answers: ["By faith","By good works","By prayer","By cleansing himself","By baptism"],
        correct: "By cleansing himself",
        reason: "If anyone cleanses himself, he will be a vessel for honor in 2 Timothy 2:21.",
        mode: "hard",
        category: "Christian Life based in the Bible"
      },
      {
        question: "How many books in the Bible are named after women?",
        answers: ["2-Ruth and Esther", "2-Ezra and Hosea", "1-Mary", "3-Colossians, Ruth and Lamentations"],
        correct: "2-Ruth and Esther",
        reason: "Ruth and Esther are the only books in the Bible named after women.",
        mode: "hard",
        category: "Common Facts about Bible"
      },
      {
        question: "The Lord tells Judah via Habakkuk that the earth will be filled with what?",
        answers: ["The knowledge of the glory of the Lord", "The awe of the glory of the Lord", "The light of the glory of the Lord", "The power of the glory of the Lord"],
        correct: "The knowledge of the glory of the Lord",
        reason: "The earth will be filled with the knowledge of the glory of the Lord according to Habakkuk 2:14.",
        mode: "hard",
        category: "Common Facts about Bible"
      },
      {
        question: "Who said in the Bible am I my brother's keeper?",
        answers: ["Cain", "Moses", "Abel", "Noah", "Elijah"],
        correct: "Cain",
        reason: "Cain said am I my brother's keeper in Genesis 4:9 after he murdered Abel.",
        mode: "hard",
        category: "Common Facts about Bible"
      },
      {
        question: "What kind of tree did Zacchaeus climb on to see Jesus?",
        answers: ["Sycamore Tree", "Fig Tree", "Olive Tree", "Acacia Tree", "Tamarisk Tree"],
        correct: "Sycamore Tree",
        reason: "Zacchaeus climbed up a Sycamore tree in Luke 19:4-8.",
        mode: "hard",
        category: "Common Facts about Bible"
      },
      {
        question: "What prophet was sent as a missionary to the Ninevites?",
        answers: ["Jonah", "Paul", "Elon", "Malachi", "Jesus"],
        correct: "Jonah",
        reason: "Jonah was a prophet sent as a missionary to the Ninevites in Jonah 1:1-2.",
        mode: "hard",
        category: "Common Facts about Bible"
      },
      {
        question: "What man, although warned, invited his murderer to a feast?",
        answers: ["Jesse", "Gedaliah", "Gideon", "Jesus"],
        correct: "Gedaliah",
        reason: "Gedaliah invited his murderer to a feast in Jeremiah 40:14.",
        mode: "hard",
        category: "Common Facts about Bible"
      },
      {
        question: "Which of the following is not one of the 10 commandments of God in the Bible?",
        answers: ["You shall not steal", "Remember the Sabbath", "You shall not judge others lest you be judged", "You shall not make yourself a carved image", "You shall not covet"],
        correct: "You shall not judge others lest you be judged",
        reason: "You shall not judge others lest you be judged is not one of the 10 commandments. You can see the 10 commandments in Exodus 20:2-17.",
        mode: "hard",
        category: "Common Facts about Bible"
      },
      {
        question: "1 Timothy says in the latter times, some people will speak in lies and hypocrisy and their consciences will be...?",
        answers: ["Marred by the enemy", "Seared with a hot iron", "Blemished by sin", "Constricted by a rope", "Open to the demons"],
        correct: "Seared with a hot iron",
        reason: "Some people will speak in lies and hypocrisy and their consciences will be seared with a hot iron in 1 Timothy 4:2.",
        mode: "hard",
        category: "Common Facts about Bible"
      },
      {
        question: "What does Paul warn the Philippians?",
        answers: ["Beware of dogs", "God will strike you down", "Follow the narrow road", "Jesus will come soon", "Beware the leaven of the Pharisees"],
        correct: "Beware of dogs",
        reason: "Paul says beware of dogs, beware of evil doers in Philippians 3:2.",
        mode: "hard",
        category: "Common Facts about Bible"
      },
      {
        question: "Jabez prayed that the God of Israel would bless him and expand his borders. What did God do?",
        answers: ["Killed him", "Made him king", "Sent armies against him", "Granted his request", "Ignored him"],
        correct: "Granted his request",
        reason: "God granted his request to bless Jabez and expand his borders in 1 Chronicles 4:10.",
        mode: "hard",
        category: "Common Facts about Bible"
      },
      {
        question: "which prophet was told by God to marry a prostitute?",
        answers: ["Hosea", "Isaiah", "Barnabas", "Enoch"],
        correct: "Hosea",
        reason: "In Hosea 1:2-4 in the Bible. Hosea was told by God to marry a prostitute.",
        mode: "hard",
        category: "History in the Bible"
      },
      {
        question: "How much was a 20 year old male worth in Israel during the time of Moses?",
        answers: ["30 Shekels of Silver", "10 Shekels of Silver", "20 Shekels of Silver", "50 Shekels of Silver"],
        correct: "20 Shekels of Silver",
        reason: "In ancient Israel, a male 5-20 years old was worth 20 shekels of silver according to Leviticus 27:5.",
        mode: "hard",
        category: "History in the Bible"
      },
      {
        question: "How much was a 20 year old female worth in Israel during the time of Moses?",
        answers: ["30 Shekels of Silver", "10 Shekels of Silver", "20 Shekels of Silver", "50 Shekels of Silver"],
        correct: "10 Shekels of Silver",
        reason: "In ancient Israel, a female 5-20 years old was worth 10 shekels of silver according to Leviticus 27:5.",
        mode: "hard",
        category: "History in the Bible"
      },
      {
        question: "Who was the first Christian Martyr?",
        answers: ["Stephen", "Esther", "John", "Paul"],
        correct: "Stephen",
        reason: "Stephen was the first Christian Martyr stated in Acts 7:58.",
        mode: "hard",
        category: "History in the Bible"
      },
      {
        question: "What Athenian judge was converted under Paul's preaching?",
        answers: ["Eunice", "Candace", "Eubulus", "Dionysius"],
        correct: "Dionysius",
        reason: "Dionysius was converted under Paul's preaching in Acts 17:34.",
        mode: "hard",
        category: "History in the Bible"
      },
      {
        question: "How were the children of Israel guided in their forty years of wandering in the wilderness?",
        answers: ["By a pillar of cloud by day and a pillar of fire by night", "By the voice of God", "By Moses", "Noah", "By Aaron's rod"],
        correct: "By a pillar of cloud by day and a pillar of fire by night",
        reason: "They were guided by a pillar of cloud by day and a pillar of fire by night. you can read this in Exodus 13:21.",
        mode: "hard",
        category: "History in the Bible"
      },
      {
        question: "Who was the son of Saul and rival king to David who was decapitated by Baanah and Rechab?",
        answers: ["Ishbosheth", "Agabus", "Ishbaal", "Tobiah", "Baruch"],
        correct: "Ishbosheth",
        reason: "Ishbosheth was the son of Saul and rival king to David who was decapitated by Baanah and Rechab in 2 Samuel 4:7.",
        mode: "hard",
        category: "History in the Bible"
      },
      {
        question: "Genesis 41:45 tells of the Pharaoh of Egypt giving Joseph a new name. What was it?",
        answers: ["Zaphenath-Paneah", "Talitha-Cumi", "Chushan-Rishathaim", "Almon-Diblathaim"],
        correct: "Zaphenath-Paneah",
        reason: "Zaphenath-Paneah was Joseph's new name.",
        mode: "hard",
        category: "History in the Bible"
      },
      {
        question: "According to Amos 9:14, when the remnant of Israel is restored, what benefits will it enjoy?",
        answers: ["Rebuilt cities and productive gardens", "Good health", "Answered prayers", "Rest from their enemies"],
        correct: "Rebuilt cities and productive gardens",
        reason: "When the remnant of Israel is restored, it will enjoy rebuilt cities and productive gardens according to Amos 9:14.",
        mode: "hard",
        category: "History in the Bible"
      },
      {
        question: "During the time of Judges in Israel, why did Micah want the Levite from Bethlehem to live with him?",
        answers: ["To remove the curse his mother placed on him", "To pray to Jehovah for him", "Because he would have a Levite to be the priest at his personal shrine", "So the blessing of the Lord would be upon his house", "So he would have protection from his enemies"],
        correct: "Because he would have a Levite to be the priest at his personal shrine",
        reason: "Micah wanted the Levite from Bethlehem to live with him because he would have a Levite to be the priest at his personal shrine in Judges Chapter 17.",
        mode: "hard",
        category: "History in the Bible"
      },
      {
        question: "Why does God allow bad things to happen?",
        answers: ["Bad things happen because the whole world is controlled by the evil one", "Bad things happen because the world is controlled by sinners", "Bad things happen so we can turn bad things into good things", "Bad things happen because Christians let bad things happen"],
        correct: "Bad things happen because the whole world is controlled by the evil one",
        reason: "Bad things happen because the whole world is controlled by the evil one. This is stated in 1 John 5:19 in the Bible.",
        mode: "hard",
        image: "images/badthings.jpg",
        category: "Questions with images"
      }, 
      {
        question: "What king did God smite with Leprosy?",
        answers: ["Athaliah", "Jehoram", "Amaziah", "Uzziah"],
        correct: "Uzziah",
        reason: "God smited Uzziah with Leprosy in 2 Chronicles 26:19.",
        mode: "hard",
        image: "images/leprosy.jpg",
        category: "Questions with images"
      },
      {
        question: "What queen of bible times who was the daughter of Queen Jezebel was called that wicked women?",
        answers: ["Lydia", "Esther", "Athaliah", "Jezebel"],
        correct: "Athaliah",
        reason: "Athaliah was the daughter of Queen Jezebel and called that wicked women 2 Chronicles 24:7 because she murdered her children and grandchildren to become queen.",
        mode: "hard",
        image: "images/athaliah.jpg",
        category: "Questions with images"
      },
      {
        question: "What king was victorious over Jeroboam, son of Nebat?",
        answers: ["Abijah", "Rehoboam", "Solomon", "David"],
        correct: "Abijah",
        reason: "The king that was victorious over Jeroboam was Abijah in 2 Chronicles Chapter 13.",
        mode: "hard",
        image: "images/jeroboam.jpg",
        category: "Questions with images"
      },
      {
        question: "Which of Saul's sons became best friends with David?",
        answers: ["Ishvi", "James", "Goliath", "Jonathan"],
        correct: "Jonathan",
        reason: "Jonathan became best friends with David in 1 Samuel 18:1.",
        mode: "hard",
        image: "images/jonathan.jpg",
        category: "Questions with images"
      },
      {
        question: "Which of the four types of love mentioned in the Bible means brotherly love?",
        answers: ["Philia", "storge", "Eros", "Agape"],
        correct: "Philia",
        reason: "Philia means brotherly love in greek and was used in Luke 12:4.",
        mode: "hard",
        image: "images/philia.jpg",
        category: "Questions with images"
      },
      {
        question: "Whose house did Mary travel to when she learned she was pregnant with Jesus?",
        answers: ["Hannah", "Priscilla", "Elizabeth", "Mary Magdalene"],
        correct: "Elizabeth",
        reason: "she went to Elizabeth's house in Luke 1:39-45.",
        mode: "hard",
        image: "images/PregnantMary.jpg",
        category: "Questions with images"
      },
      {
        question: "What did Samson eat out of a lion's carcass?",
        answers: ["Honey", "The lion's heart", "Bread", "Rice", "Mary Magdalene"],
        correct: "Honey",
        reason: "Samson ate honey from a lion's carcass in Judges 14:8-10.",
        mode: "hard",
        image: "images/samson.jpg",
        category: "Questions with images"
      },
      {
        question: "Where was Goliath from?",
        answers: ["Edom", "Gath", "Azekah", "Akik"],
        correct: "Gath",
        reason: "Goliath was from Gath according to 1 Samuel 17:4.",
        mode: "hard",
        image: "images/goliath.jpg",
        category: "Questions with images"
      },
      {
        question: "How many plagues were inflicted upon Egypt before Pharaoh finally released the Israelites?",
        answers: ["7", "10", "12", "3"],
        correct: "10",
        reason: "There was 10 plagues inflicted upon Egypt in Exodus 7-11.",
        mode: "hard",
        image: "images/exodus.jpg",
        category: "Questions with images"
      },
      
    ],
    all: [
      {
        question: "On what three occasions are we told that Jesus wept?",
        answers: ["In Gethsemane and twice in Bethlehem","In Jerusalem and twice in Nazareth", "At the grave of Lazarus, over Jerusalem and in Gethsemane", "At the grave of Lazarus, over Bethlehem and in Gethsemane"],
        correct: "At the grave of Lazarus, over Jerusalem and in Gethsemane",
        reason: "Jesus wept at the grave of Lazarus, over Jerusalem and in Gethsemane in John 11:33, Luke 19:41 and Hebrews 5:7.",
        mode: "hard",
        category: "Christian Life based in the Bible"
      },
      {
        question: "How many plagues were inflicted upon Egypt before Pharaoh finally released the Israelites?",
        answers: ["7", "10", "12", "3"],
        correct: "10",
        reason: "There was 10 plagues inflicted upon Egypt in Exodus 7-11.",
        mode: "hard",
        image: "images/exodus.jpg",
        category: "Questions with images"
      },
      {
        question: "How do you become a Christian?",
        answers: ["The Apostle's Creed", "The Lord's Prayer", "The ten Commandments", "Beleive Christ died for you"],
        correct: "Beleive Christ died for you",
        reason: "Christian Formula = Christ was killed for us, His death has washed away our sins, and by dying he has disabled death itself. You are Christian by beleiving Christ died for you.",
        mode: "easy",
        category: "Christian Life based in the Bible"
      },
      {
        question: "What does God give us to help us remain strong in our faith and to become holy?",
        answers: ["The Guardian Angel", "The Holy Spirit", "The prophets", "The Bible"],
        correct: "The Holy Spirit",
        reason: "To help us remain strong in our faith and to become holy God gives us the Holy Spirit. This is stated in 1 Thessalonians 4:8.",
        mode: "easy",
        category: "Christian Life based in the Bible"
      },
      {
        question: "The Apostle Paul tells Timothy that the law was not made for a righteous person, but for whom?",
        answers: ["Lawless", "Ungodly", "Disobedient", "Liars", "All of the above"],
        correct: "All of the above",
        reason: "The law was made for all of the above. This is stated in 1 Timothy 1:8-11.",
        mode: "easy",
        category: "Christian Life based in the Bible"
      },
      {
        question: "When is the day of salvation?",
        answers: ["After you die", "When you are born", "Any time", "Now"],
        correct: "Now",
        reason: "Behold now is the accepted time; behold, now is the day of salvation. This is stated in 2 Corinthians 6:2.",
        mode: "easy",
        category: "Christian Life based in the Bible"
      },
      {
        question: "What word or phrase means giving somebody something good that he or she doesn't deserve?",
        answers: ["Grace", "Forgiveness", "Love", "Kindness"],
        correct: "Grace",
        reason: "Grace is giving something good that he or she doesn't deserve.",
        mode: "easy",
        category: "Christian Life based in the Bible"
      },
      {
        question: "What is not required in order to stand in God's holy place?",
        answers: ["Clean Hands", "Pure Heart", "Wealth", "Rejecting False Idols"],
        correct: "Wealth",
        reason: "Wealth is not required to stand in God's holy place stated in Psalms 24:4.",
        mode: "easy",
        category: "Christian Life based in the Bible"
      },
      {
        question: "How can I be a Christian when good people in this world always get hurt by bad people?",
        answers: ["Trust that God wants you to serve him", "Pain can awaken us to God", "Remember that bad people are hurting", "All of the above"],
        correct: "All of the above",
        reason: "All of the above are ways you can be a Christian when good people in this world always get hurt by bad people. This is stated in Luke 6:27-29.",
        mode: "easy",
        category: "Christian Life based in the Bible"
      },
      {
        question: "Whats the relationship between Christianity and Judaism?",
        answers: ["Both religions are monotheistic", "They both beleive Christ is the messiah", "Only Christianity beleives in one God"],
        correct: "Both religions are monotheistic",
        reason: "Both religions are monotheistic, both beleive that their is one God stated in 1 Corinthians 8:6.",
        mode: "easy",
        category: "Christian Life based in the Bible"
      },
      {
        question: "Which one is not an example of a good deed?",
        answers: ["Helping your neighbor", "Laying down your life for a friend", "Informing others about the homeless man you gave $50,000 so he can have food", "All of these are examples of good deeds"],
        correct: "Informing others about the homeless man you gave $50,000 so he can have food",
        reason: "Informing others about the homeless man you gave $50,000 so he can have food is not a good deed. This is stated in Matthew 6:1-4.",
        mode: "easy",
        category: "Christian Life based in the Bible"
      },
      {
        question: "Is it a sin to not read your Bible daily?",
        answers: ["Yes", "No"],
        correct: "No",
        reason: "No, reading your Bible daily is not a requirement for eternal life although no one will stop you from doing it!",
        mode: "easy",
        category: "Christian Life based in the Bible"
      },
      {
        question: "What town was Jesus born in?",
        answers: ["Bethlehem", "Jerusalem", "Israel", "Nazareth"],
        correct: "Bethlehem",
        reason: "In Matthew 2:1-2 it states that Jesus was born in Bethlehem.",
        mode: "easy",
        category: "History in the Bible"
      },
      {
        question: "Who did God tell to let my people go?",
        answers: ["Moses", "Jesus", "David", "Abraham"],
        correct: "Moses",
        reason: "In Exodus 5:1 God told Moses to let my people go, so that they may hold a festival unto me in the wilderness.",
        mode: "easy",
        category: "History in the Bible"
      },
      {
        question: "Where did Jesus give his first sermon?",
        answers: ["Nazareth","Jerusalem", "Capernaum", "Bethlehem"],
        correct: "Nazareth",
        reason: "Jesus gave his first sermon at Nazareth in Luke 4:14-30.",
        mode: "easy",
        category: "History in the Bible"
      },
      {
        question: "What instrument sounds the alarm of war, in Jeremiah?",
        answers: ["Trumpet","Guitar", "Drums", "Lyre"],
        correct: "Trumpet",
        reason: "A trumpet sounded the alarm of war in Jeremiah 4:19.",
        mode: "easy",
        category: "History in the Bible"
      },
      {
        question: "what day did the Lord speak to Moses in the Desert of Sinai?",
        answers: ["First day of the second month of the second year","Last day of the second month of the third year", "Christmas Eve"],
        correct: "First day of the second month of the second year",
        reason: "The Lord speak to Moses in the Desert of Sinai in the first day of the second month of the second year in numbers 1:1.",
        mode: "easy",
        category: "History in the Bible"
      },
      {
        question: "Did Adam and Eve have three sons?",
        answers: ["Yes", "No"],
        correct: "Yes",
        reason: "Yes Adam and Eve had three sons Cain, Abel and Seth stated in Genesis 4:25.",
        mode: "easy",
        category: "History in the Bible"
      },
      {
        question: "How many years did it take Solomon to build the Lord's temple?",
        answers: ["Five","Six", "Seven", "Eight"],
        correct: "Seven",
        reason: "It took seven years for Solomon to build the Lord's temple in 1 Kings 6:38.",
        mode: "easy",
        category: "History in the Bible"
      },
      {
        question: "What appeared just before Elijah was taken up into heaven?",
        answers: ["John Cena","A sack of gold", "A chariot of fire", "A bronze ox"],
        correct: "A chariot of fire",
        reason: "A chariot of fire appeared just before Elijah was taken to heaven in a whirlwind in 2 Kings 2:11.",
        mode: "easy",
        category: "History in the Bible"
      },
      {
        question: "In 1 Kings 13, how was the unfaithful man of God killed?",
        answers: ["By goats","By sword", "By the united states army", "By lion"],
        correct: "By lion",
        reason: "The unfaithful man of God were killed by a lion in 1 Kings 13:24.",
        mode: "easy",
        category: "History in the Bible"
      },
      {
        question: "How did Judus die?",
        answers: ["Suicide","By sword", "Accidentally"],
        correct: "Suicide",
        reason: "Judus died by suicide in Matthew 27:3-10.",
        mode: "easy",
        category: "History in the Bible"
      },
      {
        question: "Fill in the blank: Thy word is a ____ unto my feet, and a light unto my path.",
        answers: ["Lamp", "light", "Beacon", "Guide"],
        correct: "Lamp",
        reason: "Thy word is a lamp unto my feet is in Psalm 119:105 in King James Version of the Bible.",
        mode: "easy",
        category: "Common Facts about Bible"
      },
      {
        question: "Who walked on water toward Jesus?",
        answers: ["Peter", "Matthew", "Andrew", "John"],
        correct: "Peter",
        reason: "Peter walked on water toward Jesus in Matthew 14:22-33.",
        mode: "easy",
        category: "Common Facts about Bible"
      },
      {
        question: "From what part of Adam's body did God create Eve?",
        answers: ["thigh", "Gluteus Maximus", "Rib", "Elbow"],
        correct: "Rib",
        reason: "God created Eve with Adam's Rib in Genesis 2:21-22.",
        mode: "easy",
        category: "Common Facts about Bible"
      },
      {
        question: "What was the first miracle performed by Christ?",
        answers: ["Healing of a blind man","Feeding of the five thousand", "Water turned into wine", "Jesus walking on water"],
        correct: "Water turned into wine",
        reason: "The first miracle Christ performed was turning water into wine in John 2:1.",
        mode: "easy",
        category: "Common Facts about Bible"
      },
      {
        question: "What is verse 1 in Genesis?",
        answers: ["In the beginning God created the heavens and the earth", "In the beginning God created light from darkness", "Amen. Come, Lord Jesus", "And God said, Let there be light"],
        correct: "In the beginning God created the heavens and the earth",
        reason: "The first verse in the Bible is in the beginning God created the heavens and the earth.",
        mode: "easy",
        category: "Common Facts about Bible"
      },
      {
        question: "What is the last word in the Bible?",
        answers: ["Amen", "Jesus", "Israel", "name"],
        correct: "Amen",
        reason: "The last word in the bible is Amen.",
        mode: "easy",
        category: "Common Facts about Bible"
      },
      {
        question: "Romans 3:23 says that who has sinned?",
        answers: ["Everyone", "The Devil", "Israel", "Peter"],
        correct: "Everyone",
        reason: "Romans 3:23 saids that everyone has sinned and fell short of the glory of God.",
        mode: "easy",
        category: "Common Facts about Bible"
      },
      {
        question: "which books are the Gospels?",
        answers: ["Matthew, Mark, Luke, John", "Matthew, Mark, Luke, John, Peter", "Numbers", "All of them"],
        correct: "Matthew, Mark, Luke, John",
        reason: "The Gospels are the records we have of Jesus' life. Matthew, Mark, Luke, John wrote down the teachings of Jesus.",
        mode: "easy",
        category: "Common Facts about Bible"
      },
      {
        question: "What does that each one of you know how to control his own body in holiness and honor mean?",
        answers: ["Control your desire for sex", "Control excessive eating", "Fight in honor for God", "All of them"],
        correct: "Control your desire for sex",
        reason: "That each one of you know how to control his own body in holiness and honor means control your desire for sex. This is stated in 1 Thessalonians 4:4.",
        mode: "easy",
        category: "Common Facts about Bible"
      },
      {
        question: "We are called to be free in Christ so how do we use are freedom?",
        answers: ["Serve one another humbly in love", "Indulge in the flesh", "Go hide out in a bunker and watch anime"],
        correct: "Serve one another humbly in love",
        reason: "We use are freedom to serve one another humbly in love. This is stated in Galatians 5:13.",
        mode: "easy",
        category: "Common Facts about Bible"
      },
      {
        question: "Who is called the light of the world?",
        answers: ["Jesus", "Moses", "Abraham"],
        correct: "Jesus",
        reason: "Jesus is called the light of the world in John 8:12.",
        mode: "easy",
        image: "images/jesus.jpg",
        category: "Questions with images"
      },
      {
        question: "What is the duty of man, according to the Scriptures?",
        answers: ["Fear God and keep his commandments", "Love enemies", "Be fruitful and multiply"],
        correct: "Fear God and keep his commandments",
        reason: "The duty of man in the scriptures is to Fear God and keep his commandments stated in Ecclesiastes 12:13.",
        mode: "easy",
        image: "images/prayer.jpg",
        category: "Questions with images"
      },
      
      {
        question: "Were their two of each kind of animal on Noah's ark?",
        answers: ["Yes", "No"],
        correct: "Yes",
        reason: "Yes there was two of each kind of animal on Noah's ark in Genesis 7:15.",
        mode: "easy",
        image: "images/ark.jpg",
        category: "Questions with images"
      },
      {
        question: "Peter told Jesus he would lay down his life for him but Jesus told him he would do what three times?",
        answers: ["Leave him", "Deny him", "Die with him", "Hate him"],
        correct: "Deny him",
        reason: "Peter denies Jesus three times in John 13:38.",
        mode: "easy",
        image: "images/peter.jpg",
        category: "Questions with images"
      },
      {
        question: "When Jesus was born, he was placed in a ___?",
        answers: ["Manger", "Crib", "Cradle", "Throne"],
        correct: "Manger",
        reason: "Jesus was born and placed in a manger in Luke 2:7",
        mode: "easy",
        image: "images/manger.jpg",
        category: "Questions with images"
      },
      {
        question: "What land did God and Moses lead the Israelites out of bondage from?",
        answers: ["Egypt", "Persia", "Israel", "Lebanon"],
        correct: "Egypt",
        reason: "God and Moses led the Israelites out of slavery in Egypt in Deuteronomy 5:6.",
        mode: "easy",
        image: "images/israelites.jpg",
        category: "Questions with images"
      },
      {
        question: "Jesus said many are called but few are ___?",
        answers: ["Chosen", "Forgiven", "Followers", "Human"],
        correct: "Chosen",
        reason: "Jesus said many are called but few are chosen in Matthew 22:14.",
        mode: "easy",
        image: "images/chosen.jpg",
        category: "Questions with images"
      },
      {
        question: "What did David use to defeat Goliath?",
        answers: ["A sling and a stone", "A sword", "A pair of brass knuckles", "A semi-automatic shotgun"],
        correct: "A sling and a stone",
        reason: "David used a sling and a stone to defeat Goliath in 1 Samuel 50.",
        mode: "easy",
        image: "images/david.jpg",
        category: "Questions with images"
      },
      {
        question: "What did Adam and Eve eat from the tree of knowledge of good and evil?",
        answers: ["Apple", "Grape", "Cherries", "Paper"],
        correct: "Apple",
        reason: "Adam and Eve ate an apple from the tree of knowledge of good and evil in Genesis 3:6.",
        mode: "easy",
        image: "images/adam.jpg",
        category: "Questions with images"
      },
      {
        question: "What did Paul say the saints would judge?",
        answers: ["The world", "The church", "The vikings", "The pope"],
        correct: "The church",
        reason: "Paul said the saints would judge the church in 1 Corinthians 6:2.",
        mode: "easy",
        image: "images/paul.jpg",
        category: "Questions with images"
      },
      {
        question: "How many disciples were there?",
        answers: ["12", "3", "11", "13"],
        correct: "12",
        reason: "There was 12 disciples. This was stated in Luke 6:13.",
        mode: "easy",
        image: "images/12-disciples.jpg",
        category: "Questions with images"
      },
      {
        question: "Who said Fear not, Mary: for you have found favor with God.",
        answers: ["Angel Gabriel", "Jesus Christ", "Paul", "The Devil"],
        correct: "Angel Gabriel",
        reason: "Angel Gabriel tells Mary to not fear, because you have found favor with God in Luke 1:30.",
        mode: "medium",
        category: "Common Facts about Bible"
      },
      {
        question: "What was God's sign to Noah that he would never destroy the earth again?",
        answers: ["A Rainbow", "A Dove", "A Flood", "A Son"],
        correct: "A Rainbow",
        reason: "God's sign to Noah that he would never destroy the earth again was a rainbow in Genesis 9:13.",
        mode: "medium",
        category: "Common Facts about Bible"
      },
      {
        question: "Through what did God speak to Moses in the desert?",
        answers: ["A Dream", "A Thunderous Voice from Heaven", "A Thunderstorm", "A Burning Bush"],
        correct: "A Burning Bush",
        reason: "God spoke to Moses with A Burning Bush in Exodus 3:2-4.",
        mode: "medium",
        category: "Common Facts about Bible"
      },
      {
        question: "What were the first words God spoke to man?",
        answers: ["Rule the earth","Fill the earth", "Be fruitful and multiply", "Love your neighbor"],
        correct: "Be fruitful and multiply",
        reason: "God said Be fruitful and multiply in Genesis 1:28.",
        mode: "medium",
        category: "Common Facts about Bible"
      },
      {
        question: "Quote the first words of our Savior while on earth.",
        answers: ["Why are you searching for me? Didn't you know I would be in my Father's house","I am the way the truth and the life", "You shall love the Lord your God with all you mind, heart and soul", "I don't know maybe baby noises"],
        correct: "Why are you searching for me? Didn't you know I would be in my Father's house",
        reason: "The first words we know God said are Why are you searching for me? Didn't you know I would be in my Father's house in Luke 2:49.",
        mode: "medium",
        category: "Common Facts about Bible"
      },
      {
        question: "Quote the last words of our Savior while on earth.",
        answers: ["It is finished","Father forgive them for they do not know what they do", "Father into your hands I commit my spirit", "Love your neighbor"],
        correct: "It is finished",
        reason: "The last words we know God said are it is finished in John 19:30.",
        mode: "medium",
        category: "Common Facts about Bible"
      },
      {
        question: "How many sons did Jacob have?",
        answers: ["3", "12", "6", "1","None"],
        correct: "12",
        reason: "Jacob had 12 sons in Genesis 49.",
        mode: "medium",
        category: "Common Facts about Bible"
      },
      {
        question: "What is required for anyone to understand God's word?",
        answers: ["Dictionary", "Holy Spirit", "Calvin degree", "All are helpful"],
        correct: "Holy Spirit",
        reason: "The Holy Spirit  is required to understand God's word. This is stated in 1 Corinthians 2:11.",
        mode: "medium",
        category: "Common Facts about Bible"
      },
      {
        question: "What was with the father (God) and manifested into us?",
        answers: ["Firmament", "Knowledge", "Eternal life", "Discernment", "Good works"],
        correct: "Eternal life",
        reason: "Eternal Life is with God and has appeared to us. This is stated 1 John 1:2.",
        mode: "medium",
        category: "Common Facts about Bible"
      },
      {
        question: "If you acknowledge the Son, you have what?",
        answers: ["Great knowledge", "Wealth", "The Father", "Friends", "A Family"],
        correct: "The Father",
        reason: "If you acknowledge the Son you have the Father. This is stated in 1 John 2:23.",
        mode: "medium",
        category: "Common Facts about Bible"
      },
      {
        question: "How many days did God blind Saul on the road to Damascus.",
        answers: ["3 Days", "4 Days", "10 days", "30 days"],
        correct: "3 Days",
        reason: "God blinded Saul on the road to Damascus for 3 days in Acts 9:9 in the Bible.",
        mode: "medium",
        category: "History in the Bible"
      },
      {
        question: "Why was Saul on the road to Damascus breathing out murderous threats against the Lord's disciples?",
        answers: ["He obtained arrest warrants from the Chief Priest", "To Attend a Religious Festival in Damascus", "To Obtain Permission from the Roman Authorities to Execute Disciples", "To Seek Forgiveness for His Sins"],
        correct: "He obtained arrest warrants from the Chief Priest",
        reason: "Saul obtained arrest warrants from the Chief Priest and he was out to imprison the Disciples in Acts 9:2 in the Bible.",
        mode: "medium",
        category: "History in the Bible"
      },
      {
        question: "What Old Testament book gave a prophesy about baby Jesus being conceived in Mary as a virgin?",
        answers: ["Genesis","Exodus", "Proverbs", "Isaiah"],
        correct: "Isaiah",
        reason: "Isaiah was the Old Testament book that gave a prophesy about baby Jesus being conceived in Mary as a virgin in Matthew 1:18.",
        mode: "medium",
        category: "History in the Bible"
      },
      {
        question: "Whose lineage is described in 1 Chronicles 1?",
        answers: ["The entire Israelite people","Noah specifically", "The tribe of Benjamin specifically", "The prophet Elijah"],
        correct: "The entire Israelite people",
        reason: "The entire Israelite people is described in 1 Chronicles 1.",
        mode: "medium",
        category: "History in the Bible"
      },
      {
        question: "What covenant did God give to Abraham?",
        answers: ["Circumcision","Passover", "Salvation", "Wisdom"],
        correct: "Circumcision",
        reason: "God covenant given to Abraham was Circumcision in Acts 7:8.",
        mode: "medium",
        category: "History in the Bible"
      },
      {
        question: "How many years was Jehoram king of Israel?",
        answers: ["12","14", "16", "18"],
        correct: "12",
        reason: "Jehoram reigned twelve years in 2 Kings 3:1.",
        mode: "medium",
        category: "History in the Bible"
      },
      {
        question: "In 2 Kings 7, who sacked the Syrian camp?",
        answers: ["Children","Widows", "Lepers", "Prophets"],
        correct: "Lepers",
        reason: "Lepers sacked the abandoned Syrian camp in 2 Kings 7:8.",
        mode: "medium",
        category: "History in the Bible"
      },
      {
        question: "Who was Solomon's mother?",
        answers: ["Hannah","Bathsheba", "Abigail", "Haggith"],
        correct: "Bathsheba",
        reason: "Bathsheba was the mother of Solomon in 1 Kings 1:11.",
        mode: "medium",
        category: "History in the Bible"
      },
      {
        question: "The earliest writing in the new testament is?",
        answers: ["Matthew","Mark", "Paul's letters", "None of the above"],
        correct: "Paul's letters",
        reason: "The earliest writing in the new testament is Paul's letters. An example of Paul's early writings is Thessalonians 1:1.",
        mode: "medium",
        category: "History in the Bible"
      },
      {
        question: "The Gospel of Thomas is?",
        answers: ["Another account of the death of Jesus","A lost book of the Bible", "A collection of Jesus' sayings attributed to the apostle Thomas", "None of the above"],
        correct: "A collection of Jesus' sayings attributed to the apostle Thomas",
        reason: "The gospel of Thomas is A collection of Jesus' sayings attributed to the apostle Thomas that was excluded from biblical canon.",
        mode: "medium",
        category: "History in the Bible"
      },
      {
        question: "Why were the people angered after Jesus read in the synagogue of Nazareth?",
        answers: ["Because He proclaimed that he was the one sent to be Lord","Because he had told them that they were all blasphemers", "Because he had thrown chairs and pews and destroyed the sanctuary", "Because he urged them to repent of their sins"],
        correct: "Because He proclaimed that he was the one sent to be Lord",
        reason: "They were angered because because He proclaimed that he was the one sent to be Lord in Luke 4:23.",
        mode: "medium",
        category: "History in the Bible"
      },
      {
        question: "What day was the Sabbath in the bible?",
        answers: ["Sunday", "Saturday", "Friday", "Sabbath doesn't matter"],
        correct: "Saturday",
        reason: "The Sabbath was viewed on Saturday the 7th day of the week. The 1st day of the week is Sunday so the last would be Saturday.",
        mode: "medium",
        category: "Christian Life based in the Bible"
      },
      {
        question: "What woman in the Old Testament does Peter tell women to be like?",
        answers: ["Eve", "Anna", "Esther", "Sara"],
        correct: "Sara",
        reason: "Peter tells women to be like Sara and do what is right and not give way to fear in 1 Peter 3:6.",
        mode: "medium",
        category: "Christian Life based in the Bible"
      },
      {
        question: "Is Christianity based on humanitarian philosophy?",
        answers: ["True","False"],
        correct: "True",
        reason: "True. Christianity emphasizes serving humanity and reducing suffering.",
        mode: "medium",
        category: "Christian Life based in the Bible"
      },
      {
        question: "Whoever hates his brother is what?",
        answers: ["A murderer","A bad brother", "Misled", "A lier"],
        correct: "A murderer",
        reason: "Whoever hates his brother is a murderer in 1 John 3:15.",
        mode: "medium",
        category: "Christian Life based in the Bible"
      },
      {
        question: "What will Jesus give to Paul and those who love His appearing?",
        answers: ["A crown of righteousness","A beautiful white horse", "A new name", "Caramel cinnamon rolls"],
        correct: "A crown of righteousness",
        reason: "There is laid up for Paul a crown of righteousness which the Lord will give him in 2 Timothy 4:8.",
        mode: "medium",
        category: "Christian Life based in the Bible"
      },
      {
        question: "Where does 'pride of life' come from?",
        answers: ["The love of self","The love of the world", "The love of a spouse", "The love of God"],
        correct: "The love of the world",
        reason: "The love of the world is the correct answer. If something is of the world, it is not of God. This is stated in 1 John 2:16.",
        mode: "medium",
        category: "Christian Life based in the Bible"
      },
      {
        question: "In 1 John 4:18 when there is love, there is no what?",
        answers: ["Fear","Sin", "Anger", "Condemnation"],
        correct: "Fear",
        reason: "Perfect love casts out fear in 1 John 4:18.",
        mode: "medium",
        category: "Christian Life based in the Bible"
      },
      {
        question: "Jesus tasted what for every man?",
        answers: ["Life","Broccoli","Death", "Victory"],
        correct: "Death",
        reason: "The grace of God should taste death for every man in Hebrews 2:9.",
        mode: "medium",
        category: "Christian Life based in the Bible"
      },
      {
        question: "When Christ returns, those who are saved will meet him where?",
        answers: ["Mount Zion","Jerusalem","Heaven", "Purgatory", "Air"],
        correct: "Air",
        reason: "The living will meet Christ in the air in 1 Thessalonians 4:17.",
        mode: "medium",
        category: "Christian Life based in the Bible"
      },
      {
        question: "How many commandments did Moses receive?",
        answers: ["10","8", "3", "1"],
        correct: "10",
        reason: "Moses received 10 commandments from God in Exodus 20:2-17.",
        mode: "medium",
        image: "images/moses.jpg",
        category: "Questions with images"
      },
      {
        question: "To whom did God promise that his children should be in numbers as the stars in heaven?",
        answers: ["Jacob","Abraham", "Moses", "Jethro"],
        correct: "Abraham",
        reason: "Abraham received a promise that his children should be in numbers as the stars in heaven from God in Genesis 15:5.",
        mode: "medium",
        image: "images/abraham.jpg",
        category: "Questions with images"
      }, 
      {
        question: "Which New Testament book tells of Jesus's encounter with the Samaritan women at the well?",
        answers: ["Colossians","John", "2 John", "Mark"],
        correct: "John",
        reason: "The book of John tells of Jesus's encounter with the Samaritan women at the well in John 4:1-26.",
        mode: "medium",
        image: "images/samaritan.jpg",
        category: "Questions with images"
      }, 
      {
        question: "A wise man's heart is at his right hand, but a fool's heart at his ___?",
        answers: ["Left","Feet", "Back", "Side"],
        correct: "Left",
        reason: "A wise man's heart is at his right hand, but a fool's heart at his left in Ecclesiastes 10:2.",
        mode: "medium",
        image: "images/left.jpg",
        category: "Questions with images"
      },
      {
        question: "He has turned aside my ways and torn me in pieces; He has made me ____?",
        answers: ["Desolate","Sad", "Lonely", "Parched"],
        correct: "Desolate",
        reason: "He has turned aside my ways and torn me in pieces; He has made me desolate in Lamentations 3:11.",
        mode: "medium",
        image: "images/desolate.jpg",
        category: "Questions with images"
      },
      {
        question: "Which was not a gift brought to Jesus by wise men?",
        answers: ["Frankincense","Myrrh", "Silver", "Gold"],
        correct: "Silver",
        reason: "Silver was not a gift brought to Jesus by wise men in Matthew 2:11.",
        mode: "medium",
        image: "images/wise.jpg",
        category: "Questions with images"
      },
      {
        question: "Whose name was changed to Peter?",
        answers: ["Thomas","Bartholomew", "Simon", "Philip"],
        correct: "Simon",
        reason: "Simon's name was changed to Peter in Matthew 16:18.",
        mode: "medium",
        image: "images/simon.jpg",
        category: "Questions with images"
      },
      {
        question: "Who did the Apostle John see dressed in white robes around the throne of God?",
        answers: ["The 144,000 witnesses","Those who have come out of the great tribulation", "Old Testament saints", "The ones who will return to earth with Christ to battle the beast"],
        correct: "Those who have come out of the great tribulation",
        reason: "Apostle John saw dressed in white robes around the throne of God those who have come out of the great tribulation in Revelation 7:13-14.",
        mode: "medium",
        image: "images/revelation.jpg",
        category: "Questions with images"
      },
      {
        question: "Why did Demetrius complain about Paul caused people to turn from the making of shrines to Diana?",
        answers: ["He endangered his livelihood","He threatened him", "He tried to baptize him", "He tried to love him"],
        correct: "He endangered his livelihood",
        reason: "Demetrius complained about paul because he endangered his livelihood in Acts Chapter 19:24-25.",
        mode: "medium",
        image: "images/Demetrius.jpg",
        category: "Questions with images"
      },
      {
        question: "When our bodies are changed, what will they look like?",
        answers: ["Like the glorious body of Jesus","Like a bodybuilder", "Like an angel's", "It's a mystery, no one knows"],
        correct: "Like the glorious body of Jesus",
        reason: "When our bodies are changed, what will they look like Like the glorious body of Jesus. This is stated in Philippians 3:21.",
        mode: "medium",
        image: "images/body.jpg",
        category: "Questions with images"
      },
      {
        question: "Who gives a spiritual increase?",
        answers: ["Ministers","Missionaries", "God", "Angels", "The body of Christ"],
        correct: "The body of Christ",
        reason: "The body of Christ gives spiritual increase and makes things grow in 1 Corinthians 3:7.",
        mode: "hard",
        category: "Christian Life based in the Bible"
      },
      {
        question: "Does God's will have a reason for everything that happens in this world?",
        answers: ["If something bad happens, it is not from God","No, everything is not God's will", "Yes, everything is from God and is God's will", "If something good happens it is from the devil"],
        correct: "No, everything is not God's will",
        reason: "Their is human ideas and God's ideas and not everything you do is beneficial that is why it is important to pray and get close to God. This is stated in 1 Corinthians 10:23.",
        mode: "hard",
        category: "Christian Life based in the Bible"
      },
      {
        question: "If we _______ our sins, he is ______ and ______ to forgive us our sins?",
        answers: ["Confess, faithful, just","Confess, faithful, happy", "Keep, unwilling, not able", "Confess, willing, kind"],
        correct: "Confess, faithful, just",
        reason: "If we confess our sins, he is faithful and just to forgive us our sins. This is stated in 1 John 1:9.",
        mode: "hard",
        category: "Christian Life based in the Bible"
      },
      {
        question: "What does Paul tell Timothy not to be ashamed of?",
        answers: ["Paul","Dying", "Persecution", "The testimony of the Lord", "None of the above"],
        correct: "The testimony of the Lord",
        reason: "He instructed Timothy to not be ashamed of his testimony of the Lord Jesus in 2 Timothy 1:8.",
        mode: "hard",
        category: "Christian Life based in the Bible"
      },
      {
        question: "Are all beleivers disciples?",
        answers: ["Yes","No"],
        correct: "No",
        reason: "No, All disciples are beleivers but not all beleivers are disciples.",
        mode: "hard",
        category: "Christian Life based in the Bible"
      },
      {
        question: "What is the mystery that has been hidden from the ages?",
        answers: ["The church is the bride of Christ","Christ destroyed the power of the devil on the cross", "God would graft the Gentiles into Israel", "Christ in you, the hope of glory"],
        correct: "Christ in you, the hope of glory",
        reason: "The mystery hid from the ages now manifest to the saints - Christ in you, the hope of glory in Colossians 1:27.",
        mode: "hard",
        category: "Christian Life based in the Bible"
      },
      {
        question: "What happens if we endure in our faith?",
        answers: ["We will live","We will reign with Him", "We will see God", "We will overcome evil"],
        correct: "We will reign with Him",
        reason: "If we endure, we will also reign with Him stated in 2 Timothy 2:12.",
        mode: "hard",
        category: "Christian Life based in the Bible"
      },
      {
        question: "According to Paul, good ministers of Jesus Christ should reject what?",
        answers: ["Universalism","Old wives' fables", "Legalism", "Sacrifices", "Pork"],
        correct: "Old wives' fables",
        reason: "Paul says the church should reject old wives' fables (tales), and exercise thyself rather unto godliness in 1 Timothy 4:7.",
        mode: "hard",
        category: "Christian Life based in the Bible"
      },
      {
        question: "Will life like in the days of Noah come back?",
        answers: ["Yes","No"],
        correct: "Yes",
        reason: "Yes, Just like in the days of Noah so will it be in the second coming of Christ in Matthew 24:37-39.",
        mode: "hard",
        category: "Christian Life based in the Bible"
      },
      {
        question: "How does a person become a vessel of honor?",
        answers: ["By faith","By good works","By prayer","By cleansing himself","By baptism"],
        correct: "By cleansing himself",
        reason: "If anyone cleanses himself, he will be a vessel for honor in 2 Timothy 2:21.",
        mode: "hard",
        category: "Christian Life based in the Bible"
      },
      {
        question: "How many books in the Bible are named after women?",
        answers: ["2-Ruth and Esther", "2-Ezra and Hosea", "1-Mary", "3-Colossians, Ruth and Lamentations"],
        correct: "2-Ruth and Esther",
        reason: "Ruth and Esther are the only books in the Bible named after women.",
        mode: "hard",
        category: "Common Facts about Bible"
      },
      {
        question: "The Lord tells Judah via Habakkuk that the earth will be filled with what?",
        answers: ["The knowledge of the glory of the Lord", "The awe of the glory of the Lord", "The light of the glory of the Lord", "The power of the glory of the Lord"],
        correct: "The knowledge of the glory of the Lord",
        reason: "The earth will be filled with the knowledge of the glory of the Lord according to Habakkuk 2:14.",
        mode: "hard",
        category: "Common Facts about Bible"
      },
      {
        question: "Who said in the Bible am I my brother's keeper?",
        answers: ["Cain", "Moses", "Abel", "Noah", "Elijah"],
        correct: "Cain",
        reason: "Cain said am I my brother's keeper in Genesis 4:9 after he murdered Abel.",
        mode: "hard",
        category: "Common Facts about Bible"
      },
      {
        question: "What kind of tree did Zacchaeus climb on to see Jesus?",
        answers: ["Sycamore Tree", "Fig Tree", "Olive Tree", "Acacia Tree", "Tamarisk Tree"],
        correct: "Sycamore Tree",
        reason: "Zacchaeus climbed up a Sycamore tree in Luke 19:4-8.",
        mode: "hard",
        category: "Common Facts about Bible"
      },
      {
        question: "What prophet was sent as a missionary to the Ninevites?",
        answers: ["Jonah", "Paul", "Elon", "Malachi", "Jesus"],
        correct: "Jonah",
        reason: "Jonah was a prophet sent as a missionary to the Ninevites in Jonah 1:1-2.",
        mode: "hard",
        category: "Common Facts about Bible"
      },
      {
        question: "What man, although warned, invited his murderer to a feast?",
        answers: ["Jesse", "Gedaliah", "Gideon", "Jesus"],
        correct: "Gedaliah",
        reason: "Gedaliah invited his murderer to a feast in Jeremiah 40:14.",
        mode: "hard",
        category: "Common Facts about Bible"
      },
      {
        question: "Which of the following is not one of the 10 commandments of God in the Bible?",
        answers: ["You shall not steal", "Remember the Sabbath", "You shall not judge others lest you be judged", "You shall not make yourself a carved image", "You shall not covet"],
        correct: "You shall not judge others lest you be judged",
        reason: "You shall not judge others lest you be judged is not one of the 10 commandments. You can see the 10 commandments in Exodus 20:2-17.",
        mode: "hard",
        category: "Common Facts about Bible"
      },
      {
        question: "1 Timothy says in the latter times, some people will speak in lies and hypocrisy and their consciences will be...?",
        answers: ["Marred by the enemy", "Seared with a hot iron", "Blemished by sin", "Constricted by a rope", "Open to the demons"],
        correct: "Seared with a hot iron",
        reason: "Some people will speak in lies and hypocrisy and their consciences will be seared with a hot iron in 1 Timothy 4:2.",
        mode: "hard",
        category: "Common Facts about Bible"
      },
      {
        question: "What does Paul warn the Philippians?",
        answers: ["Beware of dogs", "God will strike you down", "Follow the narrow road", "Jesus will come soon", "Beware the leaven of the Pharisees"],
        correct: "Beware of dogs",
        reason: "Paul says beware of dogs, beware of evil doers in Philippians 3:2.",
        mode: "hard",
        category: "Common Facts about Bible"
      },
      {
        question: "Jabez prayed that the God of Israel would bless him and expand his borders. What did God do?",
        answers: ["Killed him", "Made him king", "Sent armies against him", "Granted his request", "Ignored him"],
        correct: "Granted his request",
        reason: "God granted his request to bless Jabez and expand his borders in 1 Chronicles 4:10.",
        mode: "hard",
        category: "Common Facts about Bible"
      },
      {
        question: "which prophet was told by God to marry a prostitute?",
        answers: ["Hosea", "Isaiah", "Barnabas", "Enoch"],
        correct: "Hosea",
        reason: "In Hosea 1:2-4 in the Bible. Hosea was told by God to marry a prostitute.",
        mode: "hard",
        category: "History in the Bible"
      },
      {
        question: "How much was a 20 year old male worth in Israel during the time of Moses?",
        answers: ["30 Shekels of Silver", "10 Shekels of Silver", "20 Shekels of Silver", "50 Shekels of Silver"],
        correct: "20 Shekels of Silver",
        reason: "In ancient Israel, a male 5-20 years old was worth 20 shekels of silver according to Leviticus 27:5.",
        mode: "hard",
        category: "History in the Bible"
      },
      {
        question: "How much was a 20 year old female worth in Israel during the time of Moses?",
        answers: ["30 Shekels of Silver", "10 Shekels of Silver", "20 Shekels of Silver", "50 Shekels of Silver"],
        correct: "10 Shekels of Silver",
        reason: "In ancient Israel, a female 5-20 years old was worth 10 shekels of silver according to Leviticus 27:5.",
        mode: "hard",
        category: "History in the Bible"
      },
      {
        question: "Who was the first Christian Martyr?",
        answers: ["Stephen", "Esther", "John", "Paul"],
        correct: "Stephen",
        reason: "Stephen was the first Christian Martyr stated in Acts 7:58.",
        mode: "hard",
        category: "History in the Bible"
      },
      {
        question: "What Athenian judge was converted under Paul's preaching?",
        answers: ["Eunice", "Candace", "Eubulus", "Dionysius"],
        correct: "Dionysius",
        reason: "Dionysius was converted under Paul's preaching in Acts 17:34.",
        mode: "hard",
        category: "History in the Bible"
      },
      {
        question: "How were the children of Israel guided in their forty years of wandering in the wilderness?",
        answers: ["By a pillar of cloud by day and a pillar of fire by night", "By the voice of God", "By Moses", "Noah", "By Aaron's rod"],
        correct: "By a pillar of cloud by day and a pillar of fire by night",
        reason: "They were guided by a pillar of cloud by day and a pillar of fire by night. you can read this in Exodus 13:21.",
        mode: "hard",
        category: "History in the Bible"
      },
      {
        question: "Who was the son of Saul and rival king to David who was decapitated by Baanah and Rechab?",
        answers: ["Ishbosheth", "Agabus", "Ishbaal", "Tobiah", "Baruch"],
        correct: "Ishbosheth",
        reason: "Ishbosheth was the son of Saul and rival king to David who was decapitated by Baanah and Rechab in 2 Samuel 4:7.",
        mode: "hard",
        category: "History in the Bible"
      },
      {
        question: "Genesis 41:45 tells of the Pharaoh of Egypt giving Joseph a new name. What was it?",
        answers: ["Zaphenath-Paneah", "Talitha-Cumi", "Chushan-Rishathaim", "Almon-Diblathaim"],
        correct: "Zaphenath-Paneah",
        reason: "Zaphenath-Paneah was Joseph's new name.",
        mode: "hard",
        category: "History in the Bible"
      },
      {
        question: "According to Amos 9:14, when the remnant of Israel is restored, what benefits will it enjoy?",
        answers: ["Rebuilt cities and productive gardens", "Good health", "Answered prayers", "Rest from their enemies"],
        correct: "Rebuilt cities and productive gardens",
        reason: "When the remnant of Israel is restored, it will enjoy rebuilt cities and productive gardens according to Amos 9:14.",
        mode: "hard",
        category: "History in the Bible"
      },
      {
        question: "During the time of Judges in Israel, why did Micah want the Levite from Bethlehem to live with him?",
        answers: ["To remove the curse his mother placed on him", "To pray to Jehovah for him", "Because he would have a Levite to be the priest at his personal shrine", "So the blessing of the Lord would be upon his house", "So he would have protection from his enemies"],
        correct: "Because he would have a Levite to be the priest at his personal shrine",
        reason: "Micah wanted the Levite from Bethlehem to live with him because he would have a Levite to be the priest at his personal shrine in Judges Chapter 17.",
        mode: "hard",
        category: "History in the Bible"
      },
      {
        question: "Why does God allow bad things to happen?",
        answers: ["Bad things happen because the whole world is controlled by the evil one", "Bad things happen because the world is controlled by sinners", "Bad things happen so we can turn bad things into good things", "Bad things happen because Christians let bad things happen"],
        correct: "Bad things happen because the whole world is controlled by the evil one",
        reason: "Bad things happen because the whole world is controlled by the evil one. This is stated in 1 John 5:19 in the Bible.",
        mode: "hard",
        image: "images/badthings.jpg",
        category: "Questions with images"
      }, 
      {
        question: "What king did God smite with Leprosy?",
        answers: ["Athaliah", "Jehoram", "Amaziah", "Uzziah"],
        correct: "Uzziah",
        reason: "God smited Uzziah with Leprosy in 2 Chronicles 26:19.",
        mode: "hard",
        image: "images/leprosy.jpg",
        category: "Questions with images"
      },
      {
        question: "What queen of bible times who was the daughter of Queen Jezebel was called that wicked women?",
        answers: ["Lydia", "Esther", "Athaliah", "Jezebel"],
        correct: "Athaliah",
        reason: "Athaliah was the daughter of Queen Jezebel and called that wicked women 2 Chronicles 24:7 because she murdered her children and grandchildren to become queen.",
        mode: "hard",
        image: "images/athaliah.jpg",
        category: "Questions with images"
      },
      {
        question: "What king was victorious over Jeroboam, son of Nebat?",
        answers: ["Abijah", "Rehoboam", "Solomon", "David"],
        correct: "Abijah",
        reason: "The king that was victorious over Jeroboam was Abijah in 2 Chronicles Chapter 13.",
        mode: "hard",
        image: "images/jeroboam.jpg",
        category: "Questions with images"
      },
      {
        question: "Which of Saul's sons became best friends with David?",
        answers: ["Ishvi", "James", "Goliath", "Jonathan"],
        correct: "Jonathan",
        reason: "Jonathan became best friends with David in 1 Samuel 18:1.",
        mode: "hard",
        image: "images/jonathan.jpg",
        category: "Questions with images"
      },
      {
        question: "Which of the four types of love mentioned in the Bible means brotherly love?",
        answers: ["Philia", "storge", "Eros", "Agape"],
        correct: "Philia",
        reason: "Philia means brotherly love in greek and was used in Luke 12:4.",
        mode: "hard",
        image: "images/philia.jpg",
        category: "Questions with images"
      },
      {
        question: "Whose house did Mary travel to when she learned she was pregnant with Jesus?",
        answers: ["Hannah", "Priscilla", "Elizabeth", "Mary Magdalene"],
        correct: "Elizabeth",
        reason: "she went to Elizabeth's house in Luke 1:39-45.",
        mode: "hard",
        image: "images/PregnantMary.jpg",
        category: "Questions with images"
      },
      {
        question: "What did Samson eat out of a lion's carcass?",
        answers: ["Honey", "The lion's heart", "Bread", "Rice", "Mary Magdalene"],
        correct: "Honey",
        reason: "Samson ate honey from a lion's carcass in Judges 14:8-10.",
        mode: "hard",
        image: "images/samson.jpg",
        category: "Questions with images"
      },
      {
        question: "The cherubim appeared to have the form of a man's hand under their ___?",
        answers: ["Chins", "Hair", "Feet", "Wings"],
        correct: "Wings",
        reason: "The cherubim appeared to have the form of a man's hand under their wings in Ezekiel 10:8.",
        mode: "hard",
        image: "images/Cherubim.jpg",
        category: "Questions with images"
      },
      {
        question: "Where was Goliath from?",
        answers: ["Edom", "Gath", "Azekah", "Akik"],
        correct: "Gath",
        reason: "Goliath was from Gath according to 1 Samuel 17:4.",
        mode: "hard",
        image: "images/goliath.jpg",
        category: "Questions with images"
      }, 
    ]
  };

  let currentQuestionIndex = 0;
  let difficulty = 'easy'; // Initial difficulty level
  let questionsAnswered = 0;
  const questionText = document.getElementById('question-text');
  const answersContainer = document.getElementById('answers-container');
  const nextButton = document.getElementById('next-button');
  const difficultyMode = document.getElementById('difficulty-mode');
  const progressBar = document.getElementById('progress-bar');
  const questionImage = document.getElementById('question-image');
  const reasonContainer = document.getElementById('reason');
  const music = document.getElementById('background-music');
  const sound = document.getElementById('soundEffect');
  const playButton = document.getElementById('play-button');
  const dropupContent = document.getElementById('dropup-content');
  const container = document.getElementById('fireworks-container');
  let points = 0;

  // Toggle the dropup menu for music when the play button is clicked
  playButton.addEventListener('click', () => {
    dropupContent.style.display = dropupContent.style.display === 'block' ? 'none' : 'block';
  });
  // Play the selected song when a menu item is clicked
  dropupContent.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const song = event.target.getAttribute('data-song');
      music.src = song;
      music.play();
      dropupContent.style.display = 'none'; // Close the menu after selection
    });
  });
  // Close the dropup menu if the user clicks outside of it
  window.addEventListener('click', (event) => {
    if (!event.target.matches('#play-button')) {
      dropupContent.style.display = 'none';
    }
  });
   // Initially pause the music
   music.pause();
   // Event listener for the "Play" button
   playButton.addEventListener('click', () => {
     if (music.paused) {
       music.play();
     } else {
      music.pause();
     }
   });
   music.addEventListener('ended', () => {
     music.play(); // Restart music if it ends
   });
  
  // Retrieve difficulty and category from local storage
  const savedDifficulty = localStorage.getItem('selectedDifficulty');
  const savedCategory = localStorage.getItem('selectedCategory');
  difficulty = savedDifficulty || 'easy'; // Default to 'easy' if no saved difficulty
  
  // Hide button initially
  nextButton.style.visibility = "hidden";

  // show buttons initially
  answersContainer.style.visibility = "visible"; 

  // Function to shuffle array elements
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      // Swap the element at index i with the element at index j
      [array[i], array[j]] = [array[j], array[i]];
    }
    // return swapped array
    return array;
  }
  
  function getFilteredQuestions() {
    let allQuestions = [];
    // Get questions based on the selected difficulty
    // added all field for all questions
    allQuestions = quizData[savedDifficulty];
    // Filter based on category
    if (savedCategory !== 'all') {
      allQuestions = allQuestions.filter(question => question.category === savedCategory);
    }
    // Shuffle combined questions
    return shuffleArray(allQuestions);
  }
  
  let questionsPool = getFilteredQuestions();
  
  // Function to load a question and its answers
  function loadQuestion() {
    if (questionsPool.length === 0) {
      // Used for when all questions is pressed for the quiz.
      questionsPool = shuffleArray(quizData[difficulty]);
    }
    const currentQuestion = questionsPool.pop();
    questionText.textContent = currentQuestion.question;
    answersContainer.innerHTML = '';
    difficultyMode.textContent = currentQuestion.mode;

    reasonContainer.textContent = currentQuestion.reason
    reasonContainer.style.display = 'none';

    // Set image source and display
    if (currentQuestion.image) {
      questionImage.src = currentQuestion.image;
      questionImage.style.display = 'block'; // Show image
    } else {
      questionImage.src = '';
      questionImage.style.display = 'none'; // Hide image
    }
    
    let shuffledAnswers = shuffleArray([...currentQuestion.answers]);
    shuffledAnswers.forEach(answer => {
      const button = document.createElement('button');
      button.textContent = answer;
      button.addEventListener('click', () => {
        checkAnswer(answer, currentQuestion.correct, currentQuestion.reason);
      });
      answersContainer.appendChild(button);
    });
  }

  function checkAnswer(selectedAnswer, correctAnswer) {
    // Store question data in localStorage
    const questionData = {
      question: questionText.textContent,
      selectedAnswer: selectedAnswer,
      correctAnswer: correctAnswer,
      reason: reasonContainer.textContent
    };
  
    // Retrieve existing questions data from localStorage or initialize an empty array
    let answeredQuestions = JSON.parse(localStorage.getItem('answeredQuestions')) || [];
    answeredQuestions.push(questionData);
    localStorage.setItem('answeredQuestions', JSON.stringify(answeredQuestions));
    questionImage.style.display = 'none'; // Hide images
  
    if (selectedAnswer === correctAnswer) {
      reasonContainer.textContent = "Correct: " + reasonContainer.textContent;
      // hex for light green
      reasonContainer.style.backgroundColor = "#90EE90";
      points++;
      triggerFireworks();
      playCorrectSoundForDuration(900); 
      
    } else {
      reasonContainer.textContent = "Wrong: " + reasonContainer.textContent;
      // hex for light red
      reasonContainer.style.backgroundColor = "#FFCCCB";
      playIncorrectSoundForDuration(900);
      
    }
    questionsAnswered++;
    answersContainer.style.visibility = "hidden";
    nextButton.style.visibility = 'visible';
    // Display the explanation (reason)
    document.getElementById('reason').style.display = 'block';
  }

  function triggerFireworks() {
    for (let i = 0; i < 10; i++) {
      // creating fireworks if question is right
      const firework = document.createElement('div');
      firework.className = 'firework';
      firework.style.top = `${Math.random() * 100}%`;
      firework.style.left = `${Math.random() * 100}%`;
      container.appendChild(firework);
  
    }
  }

  function playCorrectSoundForDuration(duration) {
    const sound = document.getElementById('correct-sound');
    sound.play();
    setTimeout(() => {
      sound.pause();           
      sound.currentTime = 0;   // Reset the audio to the beginning
    }, duration);
  }

  function playIncorrectSoundForDuration(duration) {
    const sound = document.getElementById('incorrect-sound');
    sound.play();
    setTimeout(() => {
      sound.pause();           
      sound.currentTime = 0;   // Reset the audio to the beginning
    }, duration);
  }

  // Function to calculate and display score
  function displayScore(points) {
    const scorePercentageValue = (points / 10) * 100;
    localStorage.setItem('scorePercentage', scorePercentageValue.toFixed(2));
    window.location.href = 'complete.html'; // Redirect to complete page
  }
  // Function to update the progress bar
  function updateProgressBar(currentIndex) {
    const progressPercentage = ((currentIndex + 1) / 10) * 100;
    progressBar.style.width = `${progressPercentage}%`;
    progressBar.textContent = `${currentIndex + 1}/10`;
  }

  // Event listener for the "Next" button
  nextButton.addEventListener('click', () => {
    reasonContainer.textContent = reasonContainer.textContent
    currentQuestionIndex++;
    answersContainer.style.visibility = "visible";
    if (currentQuestionIndex < 10) {
      loadQuestion(currentQuestionIndex);
      nextButton.style.visibility = 'hidden'; // Hide the "Next" button until an answer is selected
      updateProgressBar(currentQuestionIndex);
    } else {
      nextButton.style.visibility = 'hidden'; // Hide the "Next" button at the end of the quiz
      displayScore(points);
    }
  });

  // Load the first question
  loadQuestion();
  updateProgressBar(currentQuestionIndex);
});
