var idade = 24
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log("Não vota.")
}
else if (idade >= 16 && idade < 18) { 
    console.log("Voto opcional.")
}
else if (idade >= 67) { 
    console.log("Voto opcional.")
}
else{
    console.log("Voto obrigatório.")
}