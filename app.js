const btnJoke = document.querySelector('#btn_jokes');
const displayJoke = document.querySelector('.card-text');

const getJoke = async () => {
  const config = { headers: { Accept: 'application/json' } };
  const req = await axios.get('https://icanhazdadjoke.com/', config);
  return req.data.joke;
};

btnJoke.addEventListener('click', async function () {
  displayJoke.innerText = `"${await getJoke()}"`;
});
