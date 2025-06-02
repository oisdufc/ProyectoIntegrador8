let logForm = document.querySelector("#loginForm");
let logEmail= document.querySelector("#email")
let logPassword= document.querySelector("#password")

console.log(logEmail.value);
console.log(logEmail);
console.log(logForm);
console.log(logPassword);

logForm.addEventListener('submit',function(e){
    e.preventDefault()

    if (logEmail.value == "") {
        alert("Por favor complete el campo email")
    }else if(logPassword.value == ""){
        alert("Por favor complete el campo contraseña")
    }else if(logPassword.value.length < 6 ){
        alert("La contraseña debe tener al menos 6 caracteres")
    }else {
        logForm.submit()
        localStorage.setItem("email", logEmail.value)
    }

})  