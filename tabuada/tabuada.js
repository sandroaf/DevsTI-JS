function fTabuada() {
    const numero = parseInt(document.querySelector("#iNumero").value)
    let mresult = "";
    const resultado = document.querySelector("#dResultado");
    
    for(y=0;y<=numero;y++) {
        for(x=0;x<=10;x++){
        mresult = mresult + y +" x "+x+" = "+(y*x)+"<br>";
        }
        mresult = mresult + "<hr>";
    }
    resultado.innerHTML = mresult;
    return false //cancelar o submuit do form
}