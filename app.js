const button = document.querySelector(".container button");
const jokeText = document.querySelector(".container p");

const getDadJoke = async () => {
  const jokeData = await fetch(DAD_JOKE_URL, {
    headers: {
      Accept: "application/json",
    },
  });
  const jokeObj = await jokeData.json();
  jokeText.innerHTML = jokeObj.joke;
};

document.addEventListener("DOMContentLoaded", getDadJoke);
button.addEventListener("click", getDadJoke);

const DAD_JOKE_URL = "https://icanhazdadjoke.com/";
