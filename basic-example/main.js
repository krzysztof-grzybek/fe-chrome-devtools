console.log('Hello world!')

const islands = ['/basic-example/seyschelles.jpg', '/basic-example/maledives.jpg', '/basic-example/bali.jpg'];

const img = document.getElementById('island');
const button = document.getElementById('change-island');

button.addEventListener('click', () => {
    const randomIndex = Math.round(Math.random() * 3);
    img.src = islands[randomIndex];
});
