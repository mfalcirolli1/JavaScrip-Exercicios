var x = 9
var y = 10

while (x > 0) {                          // Primeiro o teste lógico, depois a execução.
    console.log(`Tudo bem? ${x}`)   
    x -= 1      //   x--

}

do {                                     // Primeiro a execução, depois o teste lógico.
    console.log(`Tudo bem? ${y}`)
    y--     // y -= 1

} while (y > 0)