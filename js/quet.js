
const loadQuote = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQote(data))
}

function displayQote(data) {
    const blockQuote = document.getElementById('quote');
    blockQuote.innerText = data.quote;
}