const input = document.getElementById('numberInput');
const button = document.getElementById('saveButton');
const result = document.getElementById('result');

button.addEventListener('click', () => {
  let a = parseFloat(input.value); 

  if (isNaN(a)) {
    result.textContent = "Пожалуйста, введите число";
  } else {
    result.textContent = `Вы ввели число: ${a}`;
    console.log("Значение переменной a:", a); 
  }
});