let btnOcultar = document.getElementById("ocultar");

let p = document.getElementById("p");

let ocultado = false;

function ocultar(){
    if (ocultado == false){
        p.style.color = "white";
        ocultado = true;
    }
    else{
        p.style.color = "black";
        ocultado = false;
    }
}