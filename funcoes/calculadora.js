//Função para realizar a soma de dois valores. 
function Soma(vl1, vl2) {
    console.log("Entrou na função Soma")
    console.log("Vl1 = "+vl1);
    console.log("Vl2 = "+vl2);
    return vl1 + vl2;
}

function Subtrair(vl1, vl2) {
    return vl1 - vl2;
}

function Multiplicar(vl1, vl2) {
    return vl1 * vl2;
}

function Dividir(vl1, vl2) {
    return vl1 / vl2;
}

//Função deixou de ser usada
function IniciaSoma() {
    console.log("Entrou no IniciaSoma")
    let valor1 = 0;
    let valor2 = 0;
    valor1 = parseFloat(window.prompt("Informe o primeiro Valor"));
    valor2 = parseFloat(window.prompt("Informe o segundo Valor"));
    window.alert("A soma dos valores é: "+Soma(valor1,valor2))
}

function Operacao(op) {
    let valor1 = 0;
    let valor2 = 0;
    let resultado = "";

    valor1 = parseFloat(document.querySelector('#valor1').value);
    valor2 = parseFloat(document.querySelector('#valor2').value);
    if (op == "Somar") {
       resultado = "A soma de "+valor1+" + "+valor2+" é igual a: "+Soma(valor1,valor2);
    } else if (op == "Subtrair") {
        resultado = "A subtração de "+valor1+" - "+valor2+" é igual a: "+Subtrair(valor1,valor2);
    } else if (op == "Multiplicar") {
        resultado = "A multiplicação entre "+valor1+" e "+valor2+" é igual a: "+Multiplicar(valor1,valor2);
    } else if (op == "Dividir") {
        resultado = "A Divisão de "+valor1+" por "+valor2+" é igual a: "+Dividir(valor1,valor2);
    }
    document.querySelector('#resultado').innerHTML = resultado;
}

