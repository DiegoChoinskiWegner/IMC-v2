function start() {
  var buttonCalculateImc = document.querySelector('#button-calculate-imc');
  buttonCalculateImc.addEventListener('click', handleButtonClick, rangeImc);

  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');

  weight = inputWeight;
  height = inputHeight;
  
  handleButtonClick();
  rangeImc()
}

function calculateImc(weight, height) {
  return weight / (height * height);
}

function rangeImc(){
 
}


function handleButtonClick() {
  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');
  var imcResult = document.querySelector('#imc-result');
  

  var weight = Number(inputWeight.value);
  var height = Number(inputHeight.value);
  
  var imc = calculateImc(weight, height);
  var formattedImc = imc.toFixed(2).replace('.', ',');
  
  
  imcResult.textContent = formattedImc;


  //range de imc

  var resultado = weight / (height * height);
  console.log(resultado);
  var range = "teste 1";
  console.log(range);
  var teste = resultado.value;

  //AINDA COM ERRO
  if (teste >= 16 && teste <= 16,9){
    range = "Muito abaixo do Peso";
    
  } else if (resultado > 17 && resultado < 18.4){
    range = "Abaixo do Peso";
    
  } else if (resultado > 18.5 && resultado < 24.9){
    range = "Peso Normal";
    
  } else if (teste >= 25 && teste <= 29,9){
    range = "Acima do Peso";
    
  } else if (resultado > 30 && resultado < 34,9){
    range = "Obesidade grau I";
    
  } else if (resultado > 35 && resultado < 40){
    range = "Obesidade grau II";
    
  } else if (resultado > 40){
    range = "Obesidade grau III";
    
  } else {
    range = "IMC inválido";
  }

  console.log(range + " final");

  var imcRange = resultado  ;
  var formattedImc = imcRange.resultado;
  imcRange.textContent= formattedImc;
}

start();


/*function handleButtonRange(){
  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');
  var weight = Number(inputWeight.value);
  var height = Number(inputHeight.value);
  var imcRange = document.querySelector('#imc-range');
  var rangeResult = rangeImc(weight, height);
  imcRange.innerHTML = rangeResult;

}

rangeImc();
handleButtonRange();*/