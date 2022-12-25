const h1 = document.querySelector('h1')
const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')
//const btn = document.querySelector('#btnCalcular')
const form = document.querySelector('#formulario')
let pe = document.querySelector('#result')

form.addEventListener('submit', btnOnclick)
function btnOnclick(event){
  
  event.preventDefault()
  console.log(event)
  console.log(input1.value + input2.value)
  let sumarInputs = input1.value + input2.value
  pe.innerHTML = "Resultado : " + sumarInputs
}

