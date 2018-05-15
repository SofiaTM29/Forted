function something(userId, name, email, imageUrl){

    database.ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
    });
    
}
const forma = document.getElementById("formaCorreo")

const enviarButton = document.getElementById("enviarButton")
const enviadoSpan = document.getElementById("enviadoSpan")

const nombreInput = document.getElementById("nombre")
const emailInput = document.getElementById("email")
const telefonoInput = document.getElementById("tel")
const consultaInput = document.getElementById("consulta")

const nombreRequerido = document.getElementById("nombreRequerido")
const consultaRequerido = document.getElementById("consultaRequerido")

const telefonoRequerido = document.getElementById("telefonoRequerido")
const correoRequerido = document.getElementById("correoRequerido")

function sendIfValid(){
    corrVal = isValidMail( emailInput.value  )
    telVal = telefonoInput.value != ""
    nomVal = nombreInput.value != ""
    consVal = consultaInput.value != ""
    if( ( corrVal  || telVal ) && nomVal  && consVal  ){
        return true
    }else{
        nombreRequerido.hidden = nomVal ? true : false
        consultaRequerido.hidden = consVal ? true : false
        telefonoRequerido.hidden = ( corrVal || telVal ) ? true : false
        correoRequerido.hidden = ( corrVal || telVal ) ? true : false
        return false
    }
}

function isValidMail( correo ){
    regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regex.test( correo ) 
}

function hideRequerido(){
    nombreRequerido.hidden =  true 
    consultaRequerido.hidden = true 
    telefonoRequerido.hidden =  true 
    correoRequerido.hidden =  true 
}

function borrarForma(){
    nombreInput.value = ""
    emailInput.value = ""
    telefonoInput.value = ""
    consultaInput.value = ""
}

function loLograste(){
    enviarButton.hidden = true
    enviadoSpan.hidden = false
}

function enviarCorreo(){
    if( sendIfValid() ){
        nuevaConsulta = database.ref('consulta').push({
            nombre: nombreInput.value,
            email: emailInput.value,
            telefono : telefonoInput.value,
            consulta: consultaInput.value
        });
        nuevaConsulta.key;
        borrarForma()
        hideRequerido()
        loLograste()
    }else{

    }
}