function ConverterDolar() {
    var valorElemento = document.getElementById("valor");
  
    var valor = valorElemento.value;
  
    var valorEmDolarNumerico = parseFloat(valor);
  
    var valorEmReal = valorEmDolarNumerico * 4.61;
   
    var elementoValorConvertido = document.getElementById("valorConvertido");
    
    var valorConvertido =
      "O resultado em real é R$ " + parseFloat(valorEmReal).toFixed(2);
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  
  function ConverterEuro() {
    var valorElemento = document.getElementById("valor");
  
    var valor = valorElemento.value;
  
    var valorEmEuroNumerico = parseFloat(valor);
  
    var valorEmReal = valorEmEuroNumerico * 5.06;
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido =
      "O resultado em real é R$ " + parseFloat(valorEmReal).toFixed(2);
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  