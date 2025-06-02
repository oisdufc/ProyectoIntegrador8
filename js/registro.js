let reForm = document.querySelector("#registroForm")
let rMail = document.querySelector("#mail")
let rPass = document.querySelector("#pass")
let rPassretry = document.querySelector("#passretry")

reForm.addEventListener('submit', function(e){
    e.preventDefault()
 if (rMail.value == ""){
    erMail.innerText = "Por favor, complete este campo"
 }

 else if (rPass.value == ""){
    errContra.innerText = "Por favor, complete este campo"
}
else if (rPass.value.length < 6){
erContra.innerText = "Debe tener 6 o mas caracteres"
}
else if (rPass.value!=rPassretry.value){
erContra2.innerText = "Deben coincidir las contraseñas"
}
else {
    reForm.submit()
}
console.log(reForm.value);
})
