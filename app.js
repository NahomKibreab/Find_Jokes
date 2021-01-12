const btnJoke = document.querySelector('#btn_jokes');
const displayJoke = document.querySelector('.card-text');

btnJoke.addEventListener('click', function () {
  displayJoke.innerText = 'New Jokes';
});
