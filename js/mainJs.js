

let clickEl = document.getElementById('clickEl');

clickEl.addEventListener('click', () => {
    clickEl.parentElement.classList.toggle('changeW');
    clickEl.previousElementSibling.focus();
});

clickEl.previousElementSibling.addEventListener('blur', () => {
    clickEl.parentElement.classList.remove('changeW');
});