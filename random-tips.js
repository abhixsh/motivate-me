const quotes = [

];

const quoteElement = document.getElementById("quote");

function generateQuote() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteElement.textContent = randomQuote;
}