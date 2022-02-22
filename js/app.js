const url = 'https://api.adviceslip.com/advice';

const advice = document.getElementById('card__advice-h');
const message = document.getElementById('card__message-p');
const button = document.getElementById('card__change-button');

button.addEventListener('click', () => {
    fetch(url)
        .then(res => res.json())
        .then(res => {
            advice.textContent = `Advice #${res.slip.id}`
            message.textContent = res.slip.advice
        });

})

// fetch(url)
//     .then(res => res.json())
//     .then(res => {
//         var id = res.slip.id;
//         var advice = res.slip.advice;
//     });

