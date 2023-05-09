
const refs = {
input: document.getElementById('name-input'),
output: document.getElementById('name-output'),
}
refs.input.addEventListener("input", onInputChage)

  function onInputChage(event) {
const inputValue = event.target.value.trim();
refs.output.textContent = inputValue ? inputValue : "Anonymous";
  }
      // refs.span.textContent = inputValue ? inputValue : "Anonymous";