const favNum = 8;
const baseURL = 'http://numbersapi.com/'

// 1. make request to the num API to get a fact about your fav num.
async function reqNum() {
    let fact = await $.getJson(`${baseURL}${favNum}?json`);
    console.log(fact);
}
reqNum();

// 2. get data on multiple nums in a single reqest when you get date back put facts on page.
async function multiNums() {
    let facts = await $.getJSON(`${baseURL}${favNum}?JSON`);
    console.log(facts);
}
multiNums();

// 3. get 4 facts on fav num put on page
async function fourFacts() {
    let facts = await Promise.all(
        Array.from({length: 4}, () => $.getJSON(`${baseURL}${favNum}?json`))
    );
    facts.forEach(data => {
        $('body').append(`<p>${data.text}</p>`)
    });
}
fourFacts();