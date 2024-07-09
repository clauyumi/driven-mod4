
let pratodesc="";
let bebidadesc="";
let sobremesadesc="";
let valor=0;

let pratopreco="";
let bebidapreco="";
let sobremesapreco="";

function selecionarprato(prato){
    const pratoanterior = document.querySelector(".pratoprincipal .selecionar");
    const fecha = document.querySelector(".fechando");
    const pedido= document.querySelector(".pedido");

    if (pratoanterior !==null){
        pratoanterior.classList.remove("selecionar");
    }

    prato.classList.add("selecionar");

    pratodesc = prato.querySelector(".pratodesc").innerHTML;
    pratopreco = prato.querySelector(".pratopreco").innerHTML;
    console.log(pratodesc);

    if ( pratodesc !== "" && bebidadesc !== "" && sobremesadesc !== "") {
        fecha.classList.add("finalizar");
        pedido.innerHTML = "Fechar pedido";

}}

function selecionarbebida(bebida){

    const bebidaanterior = document.querySelector(".bebidas .selecionar");
    const fecha = document.querySelector(".fechando");
    const pedido= document.querySelector(".pedido");

    if (bebidaanterior !==null){
        bebidaanterior.classList.remove("selecionar");
    }
    bebida.classList.add("selecionar");

    bebidadesc = bebida.querySelector(".bebidadesc").innerHTML;
    bebidapreco = bebida.querySelector(".bebidapreco").innerHTML;
    console.log(bebidadesc);

    if ( pratodesc !== "" && bebidadesc !== "" && sobremesadesc !== "") {
        fecha.classList.add("finalizar");
        pedido.innerHTML = "Fechar pedido";

}}


function selecionarsobremesa(sobremesa){

    const sobremesaanterior = document.querySelector(".sobremesas .selecionar");

    const fecha = document.querySelector(".fechando");
    const pedido= document.querySelector(".pedido");

    if (sobremesaanterior !==null){
        sobremesaanterior.classList.remove("selecionar");
    }

    sobremesa.classList.add("selecionar");


    sobremesadesc = sobremesa.querySelector(".sobdesc").innerHTML;
    sobremesapreco = sobremesa.querySelector(".sobpreco").innerHTML;

   console.log(sobremesadesc);

   if ( pratodesc !== "" && bebidadesc !== "" && sobremesadesc !== "") {
    fecha.classList.add("finalizar");
    pedido.innerHTML = "Fechar pedido";
  
}
}


function fazerpedido(){
    if (
    valor= parseFloat(sobremesapreco.slice(3)) + parseFloat(pratopreco.slice(3)) + parseFloat(bebidapreco.slice(3)))
    {
    
    document.querySelector(".resumopedido").classList.remove("escondido");

    document.querySelector(".pratoescolhido").innerHTML=pratodesc;
    document.querySelector(".precop").innerHTML=pratopreco;

    document.querySelector(".sobremesaescolhida").innerHTML=sobremesadesc;
    document.querySelector(".precos").innerHTML=sobremesapreco;

    document.querySelector(".bebidaescolhida").innerHTML=bebidadesc;
    document.querySelector(".precob").innerHTML=bebidapreco;

    document.querySelector(".somatotal").innerHTML="R$ " + valor + ",00";
    }

}

function mensagem(){
    let number = '5511971173766';
    let msg = `Olá, gostaria de fazer o pedido:
               - Prato: ${pratodesc}
               - Bebbida: ${bebidadesc}
               - Sobremesa: ${sobremesadesc}
               Total: R$ ${valor},00`;
console.log(msg);

// montar o link (número e texto) (web)

let target = `https://api.whatsapp.com/send?phone=${encodeURIComponent(number)}&text=${encodeURIComponent(msg)}`

window.location.href = target;

}


