const quotes = [
    "Success is not the key to happiness. Happiness is the key to success.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "It does not matter how slowly you go as long as you do not stop.",
    "Believe you can and you're halfway there.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "You are never too old to set another goal or to dream a new dream.",
    "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    "Your time is limited, don't waste it living someone else's life.",
    "The only way to do great work is to love what you do.",
    "Don't watch the clock; do what it does. Keep going.", 
    "The harder you work for something, the greater you'll feel when you achieve it.",
    "Success is not in what you have, but who you are.", 
    "Success usually comes to those who are too busy to be looking for it.", 
    "Don't be afraid to give up the good to go for the great.", 
    "Success is not how high you have climbed, but how you make a positive difference to the world.", 
    "Success is walking from failure to failure with no loss of enthusiasm.", 
    "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Your positive action combined with positive thinking results in success.",
    "The way to get started is to quit talking and begin doing."
]

const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")

function generateQuote(){
    
    if(usedIndexes.size >= quotes.length){
        usedIndexes.clear();
    }
    
    while(true){
    const randomIdx = Math.floor(Math.random()* quotes.length);

    if(usedIndexes.has(randomIdx)) continue

    const quote = quotes[randomIdx]
    quoteElement.innerHTML = quote;
    usedIndexes.add(randomIdx);
    break;
    }
}