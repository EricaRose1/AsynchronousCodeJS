const baseUrl = 'http://numbersapi.com/';
const favNum = 8;

//1. make request to the Numbers API to get a fact about your favorite number.
$.getJSON(`${baseURL}/${favNum}?json`).then(data => {
    console.log(data);
});

//2. figure out how to get data on multiple numbers in a single request.
//   make that request and when you get the data back, put all of the number facts on the page.
const favNumber = [15, 22, 28];
$.getJSON(`${baseURL}/${favNumbers}?json`).then(data => {
    console.log(data);
});

//3. the the API to get 4 facts on your fav numbers. once you have them all. put them on the page.
Promise.all(
    Array.from({ length: 4}, () => {
        return $.getJSON(`${baseURL}/${favNum}?json`);
    })
).then(facts => {
    facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
})

