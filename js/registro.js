let registroForm = document.querySelector("#registroForm")
let registroMail = document.querySelector("#mail")
let registroPass = document.querySelector("#pass")
let registroPassretry = document.querySelector("#passretry")

registroForm.addEventListener('submit', function(e){
    e.preventDefault()
 if (registroMail.value == ""){
    errorMail.innerText = "Por favor, complete este campo"
 }

 else if (registroPass.value == ""){
    errorContra.innerText = "Por favor, complete este campo"
}
else if (registroPass.value.length < 6){
errorContra.innerText = "Debe tener 6 o mas caracteres"
}
else if (registroPass.value!=registroPassretry.value){
errorContra2.innerText = "Deben coincidir las contraseñas"
}
else {
    registroForm.submit()
}
console.log(registroForm.value);
})
