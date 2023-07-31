function fClassificaImc (imc) {
    /*
    Menor que 18.5 - Abaixo do peso ;
    Entre 18.5 e 24.9 - Peso normal ;
    Entre 25.0 e 29.9 - Pré-obesidade ;
    Entre 30.0 e 34.9 - Obesidade Grau 1 ;
    Entre 35.0 e 39.9 - Obesidade Grau 2 ;
    Acima de 40 - Obesidade Grau 3
    */
   let vClassificacao = "";
   let vCor = "";
   if (imc < 18.5) {
      vCor = "gray"; 
      vClassificacao = "Abaixo do peso";
   } else if (imc >= 18.5 && imc < 25) {
      vCor = "green";
      vClassificacao = "Peso normal";
   } else if (imc >= 25 && imc < 30) {
      vCor = "orange";
      vClassificacao = "Pré-obesidade";
   } else if (imc >= 30 && imc < 35) {
      vCor = "orangered";
      vClassificacao = "Obesidade Grau 1";
   } else if (imc >= 35 && imc < 40) {
      vCor = "darkorange";
      vClassificacao = "Obesidade Grau 2";
   } else { //Maior ou igual a 40
      vCor = "red";
      vClassificacao = "Obesidade Grau 3";
   }
   return "<span style=\"font-weight: bolder; color: "+vCor+"\">"+vClassificacao+"</span>";
}

function fImc() {
   const vNome = document.querySelector("#iNome").value;
   const vPeso = parseFloat(document.querySelector("#iPeso").value);
   const vAltura = parseFloat(document.querySelector("#iAltura").value);
   const vResultado = document.querySelector("#dResultado");
   let vImc = 0;
   //calcular o IMC
   vImc = vPeso / (vAltura * vAltura);
   vResultado.innerHTML = vNome+"<br>";
   vResultado.innerHTML = vResultado.innerHTML + "Seu IMC é: " +vImc.toFixed(2)+"<br>";
   vResultado.innerHTML = vResultado.innerHTML + "Sua classificação do IMC é "+fClassificaImc(vImc);
   return false;
}