document.addEventListener('DOMContentLoaded', () => {
    const quoteContainer = document.getElementById('quote-container');

    const quotes = [
        "The only way to do great work is to love what you do. – Steve Jobs",
        "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
        "Don't watch the clock; do what it does. Keep going. – Sam Levenson",
        "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
        "It does not matter how slowly you go as long as you do not stop. – Confucius",
        "You only live once, but if you do it right, once is enough. – Mae West"
    ];

    let currentIndex = 0;

    function showQuote() {
        quoteContainer.classList.remove('show');
        setTimeout(() => {
            quoteContainer.textContent = quotes[currentIndex];
            quoteContainer.classList.add('show');
            currentIndex = (currentIndex + 1) % quotes.length;
        }, 500); // Delay for fade-out effect
    }

    // Show the first quote immediately
    showQuote();

    // Change quote every 5 seconds
    setInterval(showQuote, 6000); // Total duration including fade effect
});
