// script.js

document.addEventListener('DOMContentLoaded', () => {
    let inputCount = 1;
    const inputsContainer = document.getElementById('inputs-container');
    const calculateButton = document.getElementById('calculate-button');
    const resultElement = document.getElementById('result');

    inputsContainer.addEventListener('input', (e) => {
        if (e.target.classList.contains('number-input')) {
            const lastInput = document.querySelectorAll('.number-input')[inputCount - 1];
            if (lastInput && lastInput.value !== '' && e.target === lastInput) {
                addNewInput();
            }
        }
    });

    calculateButton.addEventListener('click', () => {
        const numbers = Array.from(document.querySelectorAll('.number-input'))
                             .map(input => Number(input.value))
                             .filter(value => !isNaN(value));
        const sumPares = sumaPares(numbers);
        resultElement.textContent = `La suma de los números pares es: ${sumPares}`;
    });

    function addNewInput() {
        const newInput = document.createElement('input');
        newInput.type = 'number';
        newInput.id = `number-input-${inputCount}`;
        newInput.className = 'number-input';
        inputsContainer.appendChild(newInput);
        inputCount++;
    }

    // Función para sumar los números pares en un array
    function sumaPares(array) {
        return array.filter(num => num % 2 === 0)
                    .reduce((acc, num) => acc + num, 0);
    }
});
