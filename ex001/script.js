function detectar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById("txtidade")
    var res = window.document.getElementById("res")
    if (fano.value.length == 0 || fano.value > ano){
        window.alert("[Erro] Verifique os dados e tente novamente!")   
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = "Masculino"
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'crianca-h.png')
            } else if (idade < 21) {  
                //jovem
                img.setAttribute('src', 'jovem-h.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adulto-h.png')
            } else {
                //idoso
                img.setAttribute('src', 'velho-h.png')
            }
             
        } else if (fsex[1].checked) {
            gênero = "Feminino"
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'crianca-f.png')
            } else if (idade < 21) {  
                //jovem
                img.setAttribute('src', 'jovem-f.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adulto-f.png')
            } else {
                //idoso
                img.setAttribute('src', 'velho-f.png')
            }
        }
        res.style.textAlign = "Center"
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}