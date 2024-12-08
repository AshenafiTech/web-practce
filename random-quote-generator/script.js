const quotes = [
        "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        "Life is what happens when you're busy making other plans.",
        "The way to get started is to quit talking and begin doing.",
        "If life were predictable it would cease to be life, and be without flavor.",
        "Life is what happens when you're busy making other plans.",
        "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        "The way to get started is to quit talking and begin doing.",
        "Life is what happens when you're busy making other plans.",
        "The way to get started is to quit talking and begin doing.",
        "If life were predictable it would cease to be life, and be without flavor.",
    ];

    const usedIndexes = new Set();
    const quoteElement = document.getElementById('quote')

function generateQuote() {

    if (usedIndexes.size === quotes.length) {
        usedIndexes.clear()
    }

    while (true) {
        const randomIdx = Math.floor(Math.random() * quotes.length);

        if (usedIndexes.has(randomIdx)) 
            continue
    
        const quote = quotes[randomIdx]
        quoteElement.innerHTML = quote;  
        usedIndexes.add(randomIdx)
        break
    }
}




