function carregar() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = '/ex002.png/3232332323.png'
        document.body.style.background = '#e8c8a1'
    } 
    else if (hora >= 12 && hora <= 18) {
        img.src = "/ex002.png/232323321111.png"
        document.body.style.background = '#fa8331'
    }   
    else {
        img.src = "/ex002.png/thumb-1920-514042.png"
        document.body.style.background = '#003e4f'
    }
}