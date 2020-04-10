function parimpar(x){   // Parâmetro formal
    if(x % 2 == 0){
        return console.log("Par")
    }
    else{
        return console.log("Ímpar")
    }
}

parimpar(13)      // Parâmetro real

function soma(n1=0, n2=0){        // =0 Parâmetro opcional
    return console.log(n1 + n2)

}

soma(7)

function fatorial(n){
    var x = 1
    for(var c = n; c > 1 ; c--){
        x *= c
    }
    return console.log(x)
}

fatorial(5)

function fatorial2(n) {     // Recursidade = Quando uma função chama ela mesma
    if(n == 1){
        return 1
    }
    else {
        return n * fatorial2(n - 1)

    }
}

console.log(fatorial2(6))
