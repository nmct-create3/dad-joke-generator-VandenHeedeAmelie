const jokeContent = document.querySelector('.js-joke-content');
const jokeButton = document.querySelector('.js-new-joke');
const jokeLoader = document.querySelector('.js-joke-loader');

const fetchJoke = async () => {
  return fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'application/json',
    },
  }).then((response) => response.json());
};

const showLoader = async () => {
  loadingDelayed = setTimeout(() => {
    jokeLoader.classList.remove('u-hidden');
  }, 500);

  jokeContent.classList.add('u-hidden');
};

const removeLoader = async () => {
  if (loadingDelayed) {
    clearTimeout(loadingDelayed);
    loadingDelayed = null;
  }

  jokeLoader.classList.add('u-hidden');
  jokeContent.classList.remove('u-hidden');
};

const genarateJoke = async () => {
  showLoader();
  const { joke } = await fetchJoke();
  jokeContent.innerHTML = joke;
  removeLoader();
};

const init = function () {
  console.log('script loaded');

  genarateJoke();
  jokeButton.addEventListener('click', genarateJoke);
};

init();
