function calculate(operation) {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let result = 0;  // <-- fixed this line

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').innerText = 'Enter valid numbers.';
        return;
    }

    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                document.getElementById('result').innerText = 'Cannot divide by zero.';
                return;
            }
            result = num1 / num2;
            break;
        default:
            document.getElementById('result').innerText = 'Invalid operation.';
            return;
    }

    document.getElementById('result').innerText = result;
}
