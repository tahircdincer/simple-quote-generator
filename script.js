"use strict";

// Variables

const btn = document.querySelector("#random-quote");
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");

const quotes = [
  {
    quote:
      "“When some people get too chummy with me, I like to call them by the wrong name”",
    author: "Ron Swanson",
  },
  {
    quote:
      "“If you look at your life as a glass half full, you start looking for ways to fill it up.”",
    author: "Ted Lasso",
  },
  {
    quote: `“You can’t be afraid to fail. It’s the only way you succeed.”`,
    author: "Ted Lasso",
  },
  {
    quote: `Talking about an IPod: “Tom put all my records into this rectangle. The songs just play one after the other. This is an excellent rectangle.”`,
    author: "Ron Swanson",
  },
];

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);

  quote.textContent = quotes[random].quote;
  author.textContent = quotes[random].author;
});
