const quotes = [
    {
        quotes:"나 자신에 대한 자신감을 잃으면 온 세상이 나의 적이 된다"
    },
    {
        quotes:"항상 맑으면 사막이 된다 비가 내리고 바람이 불어야만 비옥한 땅이 된다."
    },
    {
        quotes:"인생에서 가장 슬픈 세 가지, 할 수 있었는데, 해야 했는데, 해야만 했는데."
    },
];
const quote = document.querySelector(".quote_con p");
const todayQuotes = quotes[Math.floor(Math.random() * quotes.length)]
quote.innerText = todayQuotes.quotes;