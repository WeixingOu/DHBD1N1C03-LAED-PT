function onClick() {
  if (inputsAreEmpty()) {
    label.textContent = 'Error: Uno o los dos inputs están vacíos.';
    return;
  }

  /* 
  Microdesafío II
    Agregar una validación para asegurarnos de que los valores ingresados sean números. Vamos a crear una nueva función llamada inputsAreNotNumbers() que compruebe si alguno de los inputs no es un número. 
    Luego, modificamos la función onClick() para incluir esta nueva validación.
  */

  if (inputsAreNotNumbers()) {
    label.textContent = 'Error: one or both inputs are not a number.';
    return;
  }

  updateLabel();
}
function inputsAreEmpty() {
  if (getNumber1() === '' || getNumber2() === '') {
    return true;
  } else {
    return false;
  }
}
function updateLabel() {
/*   
  var addend1 = getNumber1();
  var addend2 = getNumber2();
  var sum = addend1 + addend2;
  label.textContent = addend1 + ' + ' + addend2 + ' = ' + sum; 
*/

  var addend1 = parseFloat(getNumber1()); // Convierte la cadena a un número flotante
  var addend2 = parseFloat(getNumber2()); // Convierte la cadena a un número flotante
  var sum = addend1 + addend2;
  label.textContent = addend1 + ' + ' + addend2 + ' = ' + sum;
}

function getNumber1() {
  return inputs[0].value;
}
function getNumber2() {
  return inputs[1].value;
}
var inputs = document.querySelectorAll('input');
var label = document.querySelector('p');
var button = document.querySelector('button');
button.addEventListener('click', onClick);

function inputsAreNotNumbers() {
  if (isNaN(getNumber1()) || isNaN(getNumber2())) {
    return true;
  }
  return false;
}

