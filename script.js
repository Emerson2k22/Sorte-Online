const minNumberInput = document.getElementById('minNumber');
const maxNumberInput = document.getElementById('maxNumber');
const generateButton = document.getElementById('generateButton');
const resultParagraph = document.getElementById('result');

generateButton.addEventListener('click', () => {
    const minNumber = parseInt(minNumberInput.value);
    const maxNumber = parseInt(maxNumberInput.value);

    if (minNumber > maxNumber) {
        alert('O número mínimo não pode ser maior que o máximo!');
        return;
    }

    const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    resultParagraph.textContent = `O número sorteado é: ${randomNumber} Parabéns ao nosso vencedor(a)!`;
});
