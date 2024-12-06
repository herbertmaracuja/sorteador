document.getElementById('sortButton').addEventListener('click', function() {
    const type = document.getElementById('type').value;
    const resultElement = document.getElementById('result');

    if (type === 'numbers') {
        const minValue = parseInt(document.getElementById('minValue').value);
        const maxValue = parseInt(document.getElementById('maxValue').value);
        const quantity = parseInt(document.getElementById('quantity').value);

        if (isNaN(minValue) || isNaN(maxValue) || isNaN(quantity) || minValue >= maxValue || quantity <= 0) {
            alert("Por favor, insira valores válidos para o sorteio de números.");
            return;
        }

        const numbers = [];
        for (let i = 0; i < quantity; i++) {
            const randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
            numbers.push(randomNumber);
        }
        resultElement.textContent = `Números sorteados: ${numbers.join(', ')}`;

    } else if (type === 'names') {
        const namesInput = document.getElementById('names').value;
        const namesArray = namesInput.split(',').map(name => name.trim()).filter(name => name !== "");

        if (namesArray.length === 0) {
            alert("Por favor, insira alguns nomes.");
            return;
        }

        const randomName = namesArray[Math.floor(Math.random() * namesArray.length)];
        resultElement.textContent = `Nome sorteado: ${randomName}`;
    }
});

document.getElementById('type').addEventListener('change', function() {
    const type = this.value;
    if (type === 'numbers') {
        document.getElementById('numberFields').style.display = 'block';
        document.getElementById('nameFields').style.display = 'none';
    } else {
        document.getElementById('numberFields').style.display = 'none';
        document.getElementById('nameFields').style.display = 'block';
    }
});

window.onload = function() {
    document.getElementById('type').dispatchEvent(new Event('change'));
};