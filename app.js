var numero1=document.querySelector('#numero1')
var numero2=document.querySelector('#numero2')
var numero3=document.querySelector('#numero3')
var numero4=document.querySelector('#numero4')
var numeroAzar1= Math.round(Math.random()*9)
var numeroAzar2= Math.round(Math.random()*9)
var numeroAzar3= Math.round(Math.random()*9)
var numeroAzar4= Math.round(Math.random()*9)
var cuenta = 0

console.log(numeroAzar1)
console.log(numeroAzar2)
console.log(numeroAzar3)
console.log(numeroAzar4)

document.querySelector('#aceptar').addEventListener('click', function(){
    cuenta++
    if(numero1.value == numeroAzar1)
    {
        numero1.classList.remove("is-invalid")
        numero1.classList.add("is-valid")
    }else{
        numero1.classList.remove("is-valid")
        numero1.classList.add("is-invalid")
    }
       
    if(numero2.value == numeroAzar2)
    {
        numero2.classList.remove("is-invalid")
        numero2.classList.add("is-valid")
    }else{
        numero2.classList.remove("is-valid")
        numero2.classList.add("is-invalid")
    }

    if(numero3.value == numeroAzar3)
    {
        numero3.classList.remove("is-invalid")
        numero3.classList.add("is-valid")
    }else{
        numero3.classList.remove("is-valid")
        numero3.classList.add("is-invalid")
    }

    if(numero4.value == numeroAzar4)
    {
        numero4.classList.remove("is-invalid")
        numero4.classList.add("is-valid")
    }else{
        numero4.classList.remove("is-valid")
        numero4.classList.add("is-invalid")
    }

    if(numero1.value == numeroAzar1 && numero2.value == numeroAzar2 && numero3.value == numeroAzar3 && numero4.value == numeroAzar4)
    {
        swal("¡Adivinaste todos los numeros!", `en solo ${cuenta} intentos`, "success");
        setTimeout(function(){ location.reload()},5000);
    }
})
document.querySelector('#rendirse').addEventListener('click', function(){
    swal("Casi lo adivinas",`Los numeros eran ${numeroAzar1}${numeroAzar2}${numeroAzar3}${numeroAzar4}`, "error");
    setTimeout(function(){ location.reload()},5000);
})
document.querySelector('#reiniciar').addEventListener('click',function(){
    location.reload()
})
