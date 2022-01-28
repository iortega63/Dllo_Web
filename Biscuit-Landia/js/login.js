function ingresar(){
	var done=0; 
	var usuario=document.getElementById("usuario").value; 
	var password=document.getElementById('password').value; 

		if (usuario=="iortega" && password=="123") {
			window.location="../index.html"; //Aquí se direcciona a la página de productos o home
		} else if (usuario=="" && password=="") { //Aquí se valida que ambos campos estén diligenciados
			alert("Debe ingresar usuario y contraseña");
		} else if ((usuario!="" && usuario!="iortega") || (password!="" && password!="123")) { //Aquí se confirma la validez de usuario y contraseña
			alert('Su usuario y/o contraseña NO son correctos');
		} else if (usuario=="iortega" && password=="") { //Aquí se valida que el campo contraseña no esté vacío
			alert('Debe ingresar la contraseña');
		} else if (usuario=="" && password =="123") { //Aquí se valida que el campo usuario no esté vacío//
			alert('Debe ingresar el usuario');
		} else if (usuario=="iortega" && password!="123") { //Aquí se confirma la validez de la contraseña//
			alert('La contraseña es incorrecta');
		}
}