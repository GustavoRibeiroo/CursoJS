function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.getElementById('res')
  if (fano.value.length == 0 || fano.value > ano) {
    alert('[ERRO] Verifique os dados e tente novamente')
  } else {
   var fsex = document.getElementsByName('radsex')
   var idade = ano - Number(fano.value)
   var gênero = ''
   var img = document.createElement ('img')
   img.setAttribute('id', 'foto')
   if (fsex[0].checked) {
      gênero = 'Homem'
      if (idade >=0 && idade < 10) {
        //criança
        img.setAttribute('src','bebe-homem.png' )
      }else if (idade >=10 && idade< 20) {
        //jovem
        img.setAttribute('src', 'jovem-homem.png')
      }else if (idade <50) {
        //adulto
        img.setAttribute('src', 'adulto-homem.png')
      }else {
        //idoso
        img.setAttribute('src', 'idoso-homem.png')
      }
   }else if (fsex[1].checked){
      gênero = 'Mulher'
      if (idade >=0 && idade < 10) {
        //criança
        img.setAttribute('src','bebe-mulher.png' )
      }else if (idade >=10 && idade< 20) {
        //jovem
        img.setAttribute('src', 'jovem-mulher.png')
      }else if (idade <50) {
        //adulto
        img.setAttribute('src', 'adulto-mulher.png')
      }else {
        //idoso
        img.setAttribute('src', 'idoso-mulher.png')
      }
   }
   res.style.textAlign = 'center'
   res.innerHTML = `Detectamos um(a) <strong>${gênero}</strong> com ${idade} anos.`
   res.appendChild(img)
  }
}