// function mostrar(frase){
//   document.write(frase)
// }
// /*Indice de massa corporal
//   var imc = peso * (altura * altura)
// */
// var peso = 108
// var altura = 1.89
// var imc = Math.round(peso / (altura * altura))

// mostrar(`Meu IMC é ${imc}`)


function calcular() {
  let idade = document.getElementById('idade').value
  let altura = document.getElementById('altura').value
  let peso = document.getElementById('peso').value

  console.log(idade, altura, peso)

  let imc = (peso / (altura * altura)).toFixed(2)
  let res = document.getElementById('res')
  
  if(imc < 18.5 ) {
    res.innerHTML = `Seu IMC é ${imc} => <b> Desnutrido </b>`
  }else if( imc > 18.5 && imc < 24.9 ){
    res.innerHTML = `Seu IMC é ${imc} => <b> Normal </b>`
  } else if(imc > 24.9 && imc < 29.9) {
  res.innerHTML = `Seu IMC é ${imc} => <b> Sobrepeso </b>`
  } else if(imc > 29.9 && imc < 34.9 ) {
    res.innerHTML = `Seu IMC é ${imc} => <b> Obesidade grau I </b>`
  } else if(imc > 34.9 && imc < 39.9 ) {
    res.innerHTML = `Seu IMC é ${imc} => <b> Obesidade grau II </b>`
  } else if(imc > 40 && imc < 100) {
    res.innerHTML = `Seu IMC é ${imc} => <b> Obesidade grau III </b>`
  } else if(imc > 100) {
  res.innerHTML = `Procure uma funerária, URGENTE!!!`
  }
}
