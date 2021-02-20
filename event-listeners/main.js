function addButton() {
    const container = document.getElementById('container');
    const button = document.createElement('button');
    button.innerHTML = 'Dodaj nowy przycisk';
    container.appendChild(button);
}

addButton();

const allButtons = document.querySelectorAll('button');
for(let i =0; i< allButtons.length; i++) {
    allButtons[i].addEventListener('click', () => {
       addButton();
    });
}