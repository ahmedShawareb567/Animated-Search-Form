

let clickEl = document.getElementById('clickEl');
clickEl.addEventListener('click', () => {
    clickEl.parentElement.classList.toggle('changeW');
});