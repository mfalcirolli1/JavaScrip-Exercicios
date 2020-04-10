var lista = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){

    var x = window.document.getElementById("num")
    var tab = window.document.getElementById("tab")

    if(isNumero(x.value) && !inLista(x.value, lista)){
        var option = window.document.createElement("option")
        option.text = `O número ${Number(x.value)} foi adicionado`
        tab.appendChild(option)
        lista.push(Number(x.value))
    } else {
        window.alert("Insira apenas valores entre 1 e 100 e valores não repetidos.")
    }
    x.value = ""
    x.focus()
}

// Funcao para retornar o menor valor de um array
Array.min = function(array) {
    return Math.min.apply(Math, array);
};

// Funcao para retornar o maior valor de um array
Array.max = function(array) {
    return Math.max.apply(Math, array);
};

function finalizar(){
    
    var res = window.document.getElementById("res")

    if(lista.length == 0){
        window.alert("Insira os valores antes de finalizar!")
    } else{

        res.innerHTML = ""
        res.innerHTML += `Ao todo temos ${lista.length} números cadastrados. <br/>`
        res.innerHTML += `O maior valor informado é ${Array.max(lista)} <br/>`
        res.innerHTML += `O menor valor informado é ${Array.min(lista)} <br/>`

        var soma = 0
        for(var i = 0; i < lista.length; i++){
            soma += lista[i]
        }
        res.innerHTML += `Somando todos os valores, temos: ${soma} <br/>`

        media = (soma / lista.length)

        res.innerHTML += `A média dos valores inseridos é: ${media} <br/>`
    }
}