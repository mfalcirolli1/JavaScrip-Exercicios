// Array (vetor) é uma variável com vários elementos, cada elemento é composto por um valor (conteúdo) e uma chave de identificação (índice).

var num = [5, 8, 4]
num[3] = 6
num.push(7)             // Inserir valor no final do array


console.log(num)
console.log(num.length)
console.log(num.sort())

console.log('---------------------')

for(var x = 0; x < num.length; x++) {
    console.log(x + 1, num[x])
}

console.log('---------------------')

for(var x in num) {
    console.log(Number(x) + 1, num[x])
}

console.log('---------------------')

index = num.indexOf(5)       // -1 não encontrado

if(index == -1){
    console.log('O valor não foi encontrado.')
}
else{
    console.log(index)
}