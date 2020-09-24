var boton = document.getElementById("boton");
var boton1 = document.getElementById("boton1");

var txt = document.getElementById("txt");

var p = document.getElementById("salida");

//captura de elementos html del ejercicio conversion
var txtpesos = document.getElementById("txtpesos");
var btconvert = document.getElementById("btconvert");
var result = document.getElementById("result");

//evento del boton comenzar
boton.addEventListener("click", function () {
  if (txt.value == "") {
    console.log("Complete el nombre");
    p.style.color = "red";
    p.innerHTML = "Complete el nombre";
  } else {
    console.log("HI " + txt.value);
    p.style.color = "green";
    p.innerHTML = "Hola " + txt.value;
  }
});

//evento del boton saludar
function saluda() {
  console.log("Hola " + txt.value + "!!!");
}

//evento limpiar campo
boton1.addEventListener("click", () => {
  txt.value = "";
  p.innerHTML = "";
  txt.focus();
});

//calculo de dolares
btconvert.addEventListener("click", () => {
  var pesos = parseInt(txtpesos.value);

  console.log(pesos);

  if (isNaN(pesos)) {
    result.innerHTML = "Hubo un problema";
  } else {
    var dolar = pesos / 800;
    result.innerHTML = "USD: " + dolar;
  }
});
