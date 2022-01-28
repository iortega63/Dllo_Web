function validar() {
    
    var nombre, apellido, celular, email, password;
        nombre = document.getElementById("nombre").value;
        apellido = document.getElementById("apellido").value;
        celular = document.getElementById("celular").value;
        email = document.getElementById("email").value;
        password = document.getElementById("pwd").value;

        expresion = /\w+@\w+\.+[a-z]/;
        //W . 
        // texto123@pygmalion.com


// validacion de campos obligatorios

    if(nombre=="" || apellido == "" || celular== "" || email== "" || password== ""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    // validación de tamaños de datos
    else if(nombre.length>30) { 
        alert("El nombre es muy largo");
        return false;
    }
    // validacion de numeros
    else if(isNaN(celular)) { 
        alert("El celular ingresado no es un número");
        return false;
    }
    // validación de correo
    else if(!expresion.test(email)) { 
        alert("El correo no es válido");
        return false;
    }
 
}