function r_comerciante() {
        document.getElementById("div_r_comprador").style.display = 'none';
        document.getElementById("div_r_comerciante").style.display = 'block';
        document.getElementById("bt_r_comerciante").style.display = 'none';
        document.getElementById("link_inicio").style.display = 'block';
        document.getElementById("titulo_r").innerHTML = 'Registrar comerciante';
        document.getElementById("bt_r_comprador").style.display = 'block';
}





function r_comprador(){
        document.getElementById("div_r_comerciante").style.display = 'none';
        document.getElementById("div_r_comprador").style.display = 'block';
        document.getElementById("bt_r_comprador").style.display = 'none';
        document.getElementById("link_inicio").style.display = 'block';
        document.getElementById("titulo_r").innerHTML = 'Registrar comprador';
        document.getElementById("bt_r_comerciante").style.display = 'block';
}

function pass_eye(){
    x = document.getElementById("show_eye").style.display
    if (x == "block"){
        document.getElementById("show_eye").style.display = "none";
        document.getElementById("hide_eye").style.display = "block";
        document.getElementById("show_eye").style.display = "none";
        document.getElementById("contraseña").type = "text";
        document.getElementById("confirmar_contraseña").type = "text";
    }else{
        document.getElementById("show_eye").style.display = "block";
        document.getElementById("hide_eye").style.display = "none";
        document.getElementById("contraseña").type = "password";
        document.getElementById("confirmar_contraseña").type = "password";
    }
    
}

function ingresar_comerciante(){
    comfirmar_contraseña = document.getElementById("confirmar_contraseña").innerHTML
    contraseña = document.getElementById("contraseña").innerHTML
    if (contraseña == confirmar_contraseña){
        alert("!Exitos, Usuario comerciante registrado en la base de datos.!")
    }else{
        alert("!Las contraseñas no coinciden") 
    }
    

}