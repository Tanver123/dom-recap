const getQuote = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => getQuoteOutput(data))
}
const newQuote = document.getElementById('container')
const getQuoteOutput = quote => {
    const h3 = document.createElement('h3')
    h3.innerText = quote.quote;
    newQuote.appendChild(h3)
}