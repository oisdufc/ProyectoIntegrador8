let loginForm = document.querySelector("#loginForm");
let campoEmail= document.querySelector("#email")
let campoPassword= document.querySelector("#password")

console.log(campoEmail.value);
console.log(campoEmail);
console.log(loginForm);
console.log(campoPassword);

loginForm.addEventListener('submit',function(e){
    e.preventDefault()

    if (campoEmail.value == "") {
        alert("Por favor complete el campo email")
    }else if(campoPassword.value == ""){
        alert("Por favor complete el campo contraseña")
    }else if(campoPassword.value.length < 6 ){
        alert("La contraseña debe tener al menos 6 caracteres")
    }else {
        loginForm.submit()
        localStorage.setItem("email", campoEmail.value)
    } 

})  