document
  .querySelectorAll('.gamecard__button > button')
  .forEach((button) => button.addEventListener('click', (event) => {
    event.target.closest('.gamecard').classList.toggle('gamecard--bought');
  }));