document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const action = button.dataset.action;
            const number = button.dataset.number;

            if (number !== undefined) {
                if (display.innerText === '0') {
                    display.innerText = number;
                } else {
                    display.innerText += number;
                }
            } else if (action !== undefined) {
                if (action === 'clear') {
                    display.innerText = '0';
                } else if (action === 'delete') {
                    display.innerText = display.innerText.slice(0, -1) || '0';
                } else if (action === 'decimal') {
                    if (!display.innerText.includes('.')) {
                        display.innerText += '.';
                    }
                } else if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') {
                    if (!['+', '-', '*', '/'].includes(display.innerText.slice(-1))) {
                        display.innerText += action === 'add' ? '+' : action === 'subtract' ? '-' : action === 'multiply' ? '*' : '/';
                    }
                } else if (action === 'equals') {
                    try {
                        display.innerText = eval(display.innerText);
                    } catch {
                        display.innerText = 'Error';
                    }
                }
            }
        });
    });
});
