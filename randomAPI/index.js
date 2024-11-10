const quote = document.querySelector('#quote');
const author = document.querySelector('#author');
const button = document.querySelector('#button');

let showapi = 'https://api.api-ninjas.com/v1/quotes?category=happiness';
let usekey = 'yXScqumnzictHZBAWMQPOw==tq6XCHHxF72B5zgK';

const gamequote = ()=>{
    fetch(showapi, {
        headers: { 'X-Api-Key': usekey,}
    }).then(data => data.json()).then(itme => {
        // console.log(itme);
        quote.textContent = itme[0].quote
        author.textContent = itme[0].author
    }).catch(error => {
        console.error("don't have api",error);
    })
}
gamequote()
button.addEventListener('click', gamequote)