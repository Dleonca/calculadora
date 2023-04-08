const input = document.getElementById('cajaOperaciones');
const btn1 = document.getElementById('valorUno');
const btn2 = document.getElementById('valorDos');
const btn3 = document.getElementById('valorTres');
const btn4 = document.getElementById('valorCuatro');
const btn5 = document.getElementById('valorCinco');
const btn6 = document.getElementById('valorSeis');
const btn7 = document.getElementById('valorSiete');
const btn8 = document.getElementById('valorOcho');
const btn9 = document.getElementById('valorNueve');
const btn0 = document.getElementById('valorCero');
const btnc = document.getElementById('deleteAll');
const btnx = document.getElementById('delOneByOne');
const suma = document.getElementById('suma');
const resta = document.getElementById('resta');
const multiplicacion = document.getElementById('multiplicacion');
const divicion = document.getElementById('divicion');


btn1.addEventListener('click', () => {
  const valorActual = input.value;
  const nuevoValor = valorActual + '1';
  input.value = nuevoValor;
});

btn2.addEventListener('click', () => {
  const valorActual = input.value;
  const nuevoValor = valorActual + '2';
  input.value = nuevoValor;
});

btn3.addEventListener('click', () => {
  const valorActual = input.value;
  const nuevoValor = valorActual + '3';
  input.value = nuevoValor;
});

btn4.addEventListener('click', () => {
    const valorActual = input.value;
    const nuevoValor = valorActual + '4';
    input.value = nuevoValor;
});
  
btn5.addEventListener('click', () => {
    const valorActual = input.value;
    const nuevoValor = valorActual + '5';
    input.value = nuevoValor;
});
  
btn6.addEventListener('click', () => {
    const valorActual = input.value;
    const nuevoValor = valorActual + '6';
    input.value = nuevoValor;
});

btn7.addEventListener('click', () => {
    const valorActual = input.value;
    const nuevoValor = valorActual + '7';
    input.value = nuevoValor;
});
  
btn8.addEventListener('click', () => {
    const valorActual = input.value;
    const nuevoValor = valorActual + '8';
    input.value = nuevoValor;
});
  
btn9.addEventListener('click', () => {
    const valorActual = input.value;
    const nuevoValor = valorActual + '9';
    input.value = nuevoValor;
});
btn0.addEventListener('click', () => {
    const valorActual = input.value;
    const nuevoValor = valorActual + '0';
    input.value = nuevoValor;
});

btnc.addEventListener('click', () => {
  // Limpiar el contenido del input
  input.value = '';
});
btnx.addEventListener('click', () => {
  // Obtener el valor actual del input
  const valorActual = input.value;
  // Obtener la nueva cadena sin el último caracter
  const nuevaCadena = valorActual.substring(0, valorActual.length - 1);
  // Asignar la nueva cadena al valor del input
  input.value = nuevaCadena;
});
///      signos de operacion    ///
suma.addEventListener('click', () => {
    const valorActual = input.value;
    const nuevoValor = valorActual + '+';
    input.value = nuevoValor;
});
resta.addEventListener('click', () => {
    const valorActual = input.value;
    const nuevoValor = valorActual + '-';
    input.value = nuevoValor;
});
multiplicacion.addEventListener('click', () => {
    const valorActual = input.value;
    const nuevoValor = valorActual + '*';
    input.value = nuevoValor;
});
divicion.addEventListener('click', () => {
    const valorActual = input.value;
    const nuevoValor = valorActual + '/';
    input.value = nuevoValor;
});

// Función para obtener los valores de los inputs y realizar la operación
const calcularOperacion = () => {
    const expresion = document.getElementById('cajaOperaciones').value;
    // Dividir la expresión en un array usando el operador matemático como separador
    const partes = expresion.split(/[-+*/]/g);
    // Asignar cada parte a una variable
    const num1 = parseInt(partes[0]);
    const num2 = parseInt(partes[1]);
    const signo = expresion.match(/[-+*/]/g); 
    let resultado = null;
   // Verificar si la expresión es válida utilizando una expresión regular
   if (/^(\D*\d+\D+)+\d+$/.test(expresion)) {
     // La expresión es válida, realizar la operación
        if (signo == "+"){
          resultado = num1 + num2;
        }
        if (signo == "-"){
          resultado = num1 - num2;
        }
        if (signo == "*"){
          resultado = num1 * num2;
        }
        if (signo == "/"){
           resultado = num1 / num2;
        }
        // Mostrar el resultado en el HTML
        input.value = resultado;
    } else {
      // La expresión no es válida, mostrar mensaje de error
      alert("Operación inválida");
    }
}