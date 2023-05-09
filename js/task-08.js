const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit (event) {
    event.preventDefault();

const fromElements = event.currentTarget.elements;
const email = fromElements.email.value;
const password = fromElements.password.value;
const elements = {
    email, 
    password
}
console.log(elements);
if (email === '' || password === '') {
    return alert('Всі поля повинні бути заповнені.')
  }
  form.reset();
}
