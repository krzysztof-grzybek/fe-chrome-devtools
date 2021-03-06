const checkButton = document.getElementById('check');

function getText() {
    return document.getElementById('text').value;
}

function getNumber() {
    return document.getElementById('number').value;
}

function setResult(resultText) {
    const resultEl = document.getElementById('result')
    resultEl.innerHTML = resultText;
}


checkButton.addEventListener('click', () => {
   const textLength = getText().length;
   const number = getNumber();

   if (textLength === number) {
       setResult('Liczba znaków jest równa wprowadzonej wartości');
   } else {
       setResult('Liczba znaków NIE jest równa wprowadzonej wartości');
   }
})