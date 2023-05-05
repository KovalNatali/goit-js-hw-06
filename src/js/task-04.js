const addListenerBtn = document.querySelector('[data-action="increment"]');
const removeListenerBtn = document.querySelector('[data-action="decrement"]');
const spanValue = document.getElementById('value')
let counterValue = 0;

function  handleTargetButtonClick() {
    console.log("click ");
  };

addListenerBtn.addEventListener("click", () => {
  counterValue += 1;
   spanValue.textContent = counterValue;

    console.log("click event listener was added to btn") 
    // counterValue.addEventListener("click", handleTargetButtonClick);
});

removeListenerBtn.addEventListener("click", () => {
  counterValue -= 1;
   spanValue.textContent = counterValue;
    console.log("click event listener was removed from btn");
    // counterValue.removeEventListener("click",  handleTargetButtonClick);
      });