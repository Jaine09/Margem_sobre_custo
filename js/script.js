
function calcular(event){
    event.preventDefault();

    var custo = Number(document.querySelector("#custo").value);
    document.querySelector("#valor").textContent = custo.toFixed(2);

    var markUp = document.querySelector("#mark-up").value;
    var porcentagem = markUp/100 

    document.querySelector("#mark").textContent = porcentagem.toFixed(2) + '%';

}

function custocommark(){
    var custo = document.querySelector("#custo").value;
    var markUp = document.querySelector("#mark-up").value;
    var porcentagem = markUp/100

    var custoMark = custo*(1+porcentagem) 
    document.querySelector("#custo-mark").textContent = custoMark.toFixed(2)
}

function venda(){
    var valor = document.querySelector("#custo-mark").textContent;
    var preco = valor/(1-(18/100)-(9.25/100));
    document.querySelector("#preco").textContent =preco.toFixed(2);
}

function icms(){
    var venda = document.querySelector("#preco").textContent * (18/100)
    document.querySelector("#icms").textContent = venda.toFixed(2)
}

function piscof(){
    var venda = document.querySelector("#preco").textContent * (9.25/100);

    document.querySelector("#pis").textContent = venda.toFixed(2);
}

function ipi(){
    var venda = document.querySelector("#preco").textContent * (1 + (15/100))
    document.querySelector("#ipi").textContent = venda.toFixed(2)
}

function lucro(){
    var valor = document.querySelector("#custo-mark").textContent - document.querySelector("#valor").textContent;

    document.querySelector("#margem").textContent = valor.toFixed(2)
}

function margemlucro(){
    var lucro = document.querySelector("#margem").textContent/document.querySelector("#preco").textContent

    document.querySelector("#margem-porcentagem").textContent = lucro.toFixed(2) + '%'}
