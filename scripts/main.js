const header = document.querySelector('h1');

const button = document.querySelector('.btn-primary');

button.addEventListener('click', () => { 
    header.innerText = 'Humanoids zijn awesome!!';
});
