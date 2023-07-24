function fMaioridade() {
    const nome=document.querySelector("#iNome").value;
    const idade=parseInt(document.querySelector("#iIdade").value);
    const resultado=document.querySelector("#dResultado");
    if (idade >= 18) {
        //maior de idade
        resultado.innerHTML = "Olá "+nome+" você tem "+idade+" anos e é maior de idade";
    } else {
        //menor de idade
        resultado.innerHTML = "Olá "+nome+" você tem "+idade+" anos e é menor de idade";
    }
    return false; //interrompe o submit do formulário
}