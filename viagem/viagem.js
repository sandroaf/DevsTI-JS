function fCalculaViagem() {
    const vViagem = document.querySelector("#iViagem").value;
    const vKm = parseFloat(document.querySelector("#iKm").value);
    const vLitros = parseFloat(document.querySelector("#iLitros").value);
    const vValorLitro = parseFloat(document.querySelector("#iValorLitro").value);
    let vKmLitro = 0;
    let vCustoViagem = 0;
    let vValorKm = 0;
    vKmLitro = vKm / vLitros;
    vCustoViagem = vLitros * vValorLitro;
    vValorKm = vCustoViagem / vKm;
    document.querySelector("#dResultado").innerHTML = "Na viagem "+vViagem+" você percorreu "+vKm+" km e gastou "+vLitros+" litros de combustivel.<br>"+"Seu carro carro fez "+vKmLitro.toFixed(2)+" Km por litro e teve um custo de R$ "+vCustoViagem.toFixed(2)+" sendo R$ "+vValorKm.toFixed(2)+" por km.";
    return false;
}