
const inputText = document.getElementById('validation-input');
const dataLength = inputText.getAttribute('data-length');
inputText.addEventListener('blur', addBorderColor);

function addBorderColor(event) {

    const valueLength = event.target.value.trim().length;

    if (Number(dataLength) === valueLength) {
        inputText.classList.add('valid');
        inputText.classList.remove('invalid');
    }
    else {
        inputText.classList.add('invalid');
        inputText.classList.remove('valid');
    }
}