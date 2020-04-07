function counting(){
    
    

    var i = window.document.getElementById("numi")
    var f = window.document.getElementById("numf")
    var p = window.document.getElementById("nump")
    var res = window.document.getElementById("res")
    var emoji = String.fromCodePoint(0x1F449)
    var emoji2 = String.fromCodePoint(0x1F3C1)

    if (Number(i.value) < Number(f.value)){
        for (var inicio = Number(i.value); inicio <= Number(f.value) ; inicio += Number(p.value)){
            if (inicio == Number(f.value)){
                res.innerHTML += ` ${inicio} ${emoji2} `
            }
            else{
                res.innerHTML += ` ${inicio} ${emoji} `
            }

            if (i.value.length == 0){
                res.innerHTML = "Impossível contar! Insira um valor inicial."
                break       
            }
            else if (inicio == 0){
                window.alert("Ok, iniciando com o valor 0.")
            }
        }
        
    }

    else if (Number(i.value) > Number(f.value)){
        for (var inicio = Number(i.value); inicio >= Number(f.value) ; inicio -= Number(p.value)){
            if (inicio == Number(f.value)){
                res.innerHTML += ` ${inicio} ${emoji2} `
            }
            else{
                res.innerHTML += ` ${inicio} ${emoji} `
            }

            if (i.value.length == 0){
                res.innerHTML = "Impossível contar! Insira um valor inicial."
                break       
            }
            else if (inicio == 0){
                window.alert("Ok, iniciando com o valor 0.")
            }
        }
        
    }
}