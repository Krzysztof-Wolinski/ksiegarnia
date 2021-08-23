// import './style.css';

const API_URL = 'https://cors-anywhere.herokuapp.com/https://www.goodreads.com/book/auto_complete?format=json&q=harry%20potter';

fetch(API_URL, {
    method : 'GET'
  }).then((resp) => {
        if (resp.ok){
            return resp.text()
        } else {
            throw new Error("błąd sieci");
        }
    })
    .catch((err) => {
        console.log("błąd", err);
    });