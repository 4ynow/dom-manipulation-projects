let btn = document.querySelector('#new-quote')
let quote = document.querySelector('.quote')
let person = document.querySelector('.person')

const quotes = [
  {
    quote: '"In the middle of difficulty lies opportunity."',
    person: "Albert Einstein"
  },
  {
    quote: '"Success is not final, failure is not fatal: it is the courage to continue that counts."',
    person: "Winston Churchill"
  },
  {
    quote: '"The future belongs to those who believe in the beauty of their dreams."',
    person: "Eleanor Roosevelt"
  },
  {
    quote: '"Strive not to be a success, but rather to be of value."',
    person: "Albert Einstein"
  },
  {
    quote: '"Do what you can, with what you have, where you are."',
    person: "Theodore Roosevelt"
  },
  {
    quote: '"It always seems impossible until its done."',
    person: "Nelson Mandela"
  },
  {
    quote: '"Happiness depends upon ourselves."',
    person: "Aristotle"
  },
  {
    quote: '"The only limit to our realization of tomorrow will be our doubts of today."',
    person: "Franklin D. Roosevelt"
  },
  {
    quote: '"What you do makes a difference, and you have to decide what kind of difference you want to make."',
    person: "Jane Goodall"
  }
];

btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})
