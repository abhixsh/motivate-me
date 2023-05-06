const quotes = [
    "Education is the passport to the future, for tomorrow belongs to those who prepare for it today. - Malcolm X",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston S. Churchill" ,
    "Believe you can and you're halfway there. - Theodore Roosevelt" ,
    "The expert in anything was once a beginner. - Helen Hayes" ,
    "You don't have to be great to start, but you have to start to be great. - Zig Ziglar" ,
    "The beautiful thing about learning is that no one can take it away from you. - B.B. King" ,
    "Learning never exhausts the mind. - Leonardo da Vinci" ,
    "A goal without a plan is just a wish.  Antoine de Saint-Exupéry" ,
    "Don't let yesterday take up too much of today. - Will Rogers" ,
    "I am not a product of my circumstances. I am a product of my decisions. - Stephen Covey",
    "The more that you read, the more things you will know. The more that you learn, the more places you'll go. - Dr. Seuss" ,
    "The only way to do great work is to love what you do. - Steve Jobs" ,
    "Success is stumbling from failure to failure with no loss of enthusiasm. - Winston S. Churchill" ,
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis" ,
    "Failure is simply the opportunity to begin again, this time more intelligently. - Henry Ford" ,
    "Education is not the filling of a pail, but the lighting of a fire. - William Butler Yeats" ,
    "The best way to predict your future is to create it. - Abraham Lincoln" , 
    "I have not failed. I've just found 10,000 ways that won't work. - Thomas Edison" ,
    "If you can't explain it simply, you don't understand it well enough. - Albert Einstein" ,
    "Success is liking yourself, liking what you do, and liking how you do it. - Maya Angelou", 
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela" ,
    "I have learned over the years that when one's mind is made up, this diminishes fear. - Rosa Parks",
    "Change is the end result of all true learning. - Leo Buscaglia" ,
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "Be the change you wish to see in the world. - Mahatma Gandhi" ,
    "The function of education is to teach one to think intensively and to think critically. Intelligence plus character - that is the goal of true education. - Martin Luther King Jr." ,
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson", 
    "Success is not how high you have climbed, but how you make a positive difference to the world. - Roy T. Bennett",
    "Education is the most powerful weapon which you can use to change the world. - Nelson Mandela",
    "You can't let your failures define you. You have to let your failures teach you. - Barack Obama",
    "The mind is everything. What you think you become. - Buddha",
    "Chase your dreams until you catch them...and then dream, catch, and dream again!",
];

const quoteElement = document.getElementById("quote");

function generateQuote() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteElement.textContent = randomQuote;
}

const generateBtn = document.getElementById("generate-btn");
generateBtn.addEventListener("click", generateQuote);