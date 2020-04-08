function tabuada() {

    var x = window.document.getElementById("num")
    var res = window.document.getElementById("tab")

    if (x.value.length == 0) {
        window.alert("Por favor, digite um número!")
    }
    else {
        var n1 = Number(x.value)
    }

    res.innerHTML = ""

    for (var y = 1; y <= 10; y += 1) {
        let item = window.document.createElement("option")
        item.text = `${y} x ${n1} = ${n1 * y}`
        res.appendChild(item)
    }

}