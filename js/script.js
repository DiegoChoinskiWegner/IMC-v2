
function start() {
  var buttonCalculateImc = document.querySelector('#button-calculate-imc');
  buttonCalculateImc.addEventListener('click', handleButtonClick);

  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');

  weight = inputWeight;
  height = inputHeight;
  
  handleButtonClick();
  rangeImc();
}

function calculateImc(weight, height) {
  return weight / (height * height);
}

function rangeImc(){
  //var teste = document.getElementById("imc-range").value;
  var weight = document.querySelector('#input-weight');
  var height = document.querySelector('#input-height');
  resultado = calculateImc(weight, height);
  var range = "batata";
  
  
  if (resultado == 24.69) {
    range = "teste";   
  } else {
    range = "filosofo";
  }

  
  var imcRange = document.querySelector('#imc-range');
  var formattedImc = range;
  imcRange.textContent= formattedImc;


  /*var resultado = Number(weight / (height * height));
  
  

  //AINDA COM ERRO
  if(resultado > 16 && resultado < 16,9){
    range = "Muito abaixo do Peso"
  } else if (resultado > 17 && resultado < 18.4){
    range = "Abaixo do Peso"
  } else if (resultado > 18.5 && resultado < 24.9){
    range = "Peso Normal"
    console.log(range);
  } else if (resultado > 25 && resultado < 29,9){
    range = "Acima do Peso"
  } else if (resultado > 30 && resultado < 34,9){
    range = "Obesidade grau I"
  } else if (resultado > 35 && resultado < 40){
    range = "Obesidade grau II"
  } else if (resultado > 40){
    range = "Obesidade grau III"
  } else (resultado < 16);{
    range = "IMC inválido"
  }*/
}


function handleButtonClick() {
  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');
  var imcResult = document.querySelector('#imc-result');
  //var imcRange = document.querySelector('imc-range');

  var weight = Number(inputWeight.value);
  var height = Number(inputHeight.value);
  
  var imc = calculateImc(weight, height);
  var formattedImc = imc.toFixed(2).replace('.', ',');
  //var rangeContent = rangeImc()
  
  imcResult.textContent = formattedImc;
  
}

start();
