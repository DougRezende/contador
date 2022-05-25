var currentNumberWrapper = document.getElementById('current-number');
var currentNumber = 0;

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    
    if (currentNumber == 0) {
        currentNumberWrapper.style.color = 'white';
    }

    else if (currentNumber < 0) {
        currentNumberWrapper.style.color = 'red';
    }

    else {
        currentNumberWrapper.style.color = 'green';
    }
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    
    if (currentNumber == 0) {
        currentNumberWrapper.style.color = 'white';
    }

    else if (currentNumber < 0) {
        currentNumberWrapper.style.color = 'red';
    }

    else {
        currentNumberWrapper.style.color = 'green';
    }
}
