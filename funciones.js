
var encriptar = document.querySelector("#encriptar");
var desencriptar = document.querySelector("#desencriptar");
var text_emisor = document.querySelector("#text-emisor");
var text_receptor= document.querySelector("#text-receptor");
var copiar=document.querySelector("#copiar");
var boton_oscuro=document.querySelector("#boton-oscuro");
var boton_claro=document.querySelector("#boton-claro");

/* Estilos Minecrfat */
var boton_minecraft=document.querySelector("#Minecraft")
var elementos_minecraft=false;
alex=document.getElementById("alex-minecraft");
advertencia=document.getElementById("advertencia");
autor=document.getElementById("autor");
/**/

/*Estilo oscuro*/
alura2=document.getElementById("Alura2");
buho=document.getElementById("buho"); 
var elementos_oscuros=false;
/**/


parrafo=document.getElementById("parrafo-reglas");
encriptar_texto=document.getElementById("text-receptor");
alura1=document.getElementById("Alura1");
elemento_imagen= document.getElementById("imagenLupa");  
var elemento_parrafo_receptor=document.getElementById("parrafo-receptor");
var elemento_texto_estilos=window.getComputedStyle(elemento_parrafo_receptor, null);
elemento_copiar=document.getElementById("copiar");
var elementos_blancos=true;
var extracción= [];

/* Esta función sirve para ahorrar codigo repetido, de tal manera que define una condición
cuando no hay texto en el textarea emisor y manda a llamar los primeros valores, simulando
que no se encontro nada */
function estilosDeTextoEncontrado(){
    if(elementos_blancos){
        if(text_emisor.value!=""){
            elemento_imagen.style.display= "none";
            elemento_parrafo_receptor.style.display="none";
            elemento_copiar.style.display="initial";
            }else{
                if(elemento_texto_estilos.fontSize != "46px"){
                    elemento_imagen.style.display= "initial";
                }
                elemento_parrafo_receptor.style.display="initial";
                elemento_copiar.style.display="none";
            }
    }

    if(elementos_oscuros){
        if(text_emisor.value!=""){
            buho.style.display="none";
            elemento_parrafo_receptor.style.display="none";
            elemento_copiar.style.display="initial";
        }else{
            if(elemento_texto_estilos.fontSize != "46px"){
                buho.style.display="initial";
            }
            elemento_parrafo_receptor.style.display="initial";
            elemento_copiar.style.display="none";
        }
    }

    if(elementos_minecraft){
        if(text_emisor.value!=""){
            alex.style.display="none";
            elemento_parrafo_receptor.style.display="none";
            elemento_copiar.style.display="initial";
        }else{
            if(elemento_texto_estilos.fontSize != "46px"){
                alex.style.display="initial";
            }
            elemento_parrafo_receptor.style.display="initial";
            elemento_copiar.style.display="none";
        }
    }
}

/* Con esta función se encriptan los valores */
function enviar(){

    for(contador=0; contador<=10000; contador++){
        extracción[contador]="";
    }

for(contador=0; contador<=text_emisor.value.length; contador++){
    extracción[contador] = text_emisor.value[contador]

    if(extracción[contador] == "a"){
        extracción[contador] = "ai";
    }

    if(extracción[contador] == "e"){
        extracción[contador] = "enter";
    }

    if(extracción[contador] == "i"){
        extracción[contador] = "imes";
    }

    if(extracción[contador] == "o"){
        extracción[contador] = "ober";
    }

    if(extracción[contador] == "u"){
        extracción[contador] = "ufat";
    }
}


    encriptar_texto.innerHTML = extracción.join("");
    estilosDeTextoEncontrado();
}

/* Con esta función se logra desencriptar los valores encriptados */
function traducir(){

    for(contador=0; contador<=100; contador++){
        extracción[contador]="";
    }
    
    for(contador=0; contador<=text_emisor.value.length; contador++){
        extracción[contador] = text_emisor.value[contador]
    }

    for(contador=0; contador<=text_emisor.value.length; contador++){


        if(extracción[contador] == "a" && extracción[contador + 1] == "i"){
            extracción[contador + 1]= "";
        }

        if(extracción[contador] == "e" && extracción[contador + 1] == "n" && extracción[contador + 2]=="t" && extracción[contador + 3]== "e" && extracción[contador + 4] == "r"){
                extracción[contador + 1]= "";
                extracción[contador + 2]= "";
                extracción[contador + 3]= "";
                extracción[contador + 4]= "";
        }

        if(extracción[contador] == "i" && extracción[contador + 1] == "m" && extracción[contador + 2]=="e" && extracción[contador + 3] == "s"){
            extracción[contador + 1] = "";
            extracción[contador + 2] = "";
            extracción[contador + 3]= "";
        }

        if(extracción[contador] == "o" && extracción[contador + 1] == "b" && extracción[contador + 2]=="e" && extracción[contador + 3]== "r"){
            extracción[contador + 1] = "";
            extracción[contador + 2]= "";
            extracción[contador + 3]= "";
        }
    
        if(extracción[contador] == "u" && extracción[contador + 1] == "f" && extracción[contador + 2] == "a" && extracción[contador + 3] == "t"){
            extracción[contador + 1] = "";
            extracción[contador + 2]= "";
            extracción[contador + 3]= "";
        }
    }

        encriptar_texto.innerHTML= extracción.join("");
        estilosDeTextoEncontrado();
}

    /* Con esta función capturo el valor de textarea receptor y logro mandar
     el valor al portapapeles con el boton copiar */
    function capturar(){
        var inputFalse=document.createElement("input");
        inputFalse.setAttribute("value", encriptar_texto.value);
        document.body.appendChild(inputFalse);
        inputFalse.select();
        document.execCommand("copy");
        document.body.removeChild(inputFalse);
    }

    /* Esta función sirve para cambiar el tema de la página a uno más oscuro */
    function cambiarOscuro(){
        personalizado();
        elementos_oscuros=true; 
        alura2.style.display="initial";
        if(elemento_texto_estilos.fontSize != "46px"){
            buho.style.display="initial";
        }
        cuerpo.classList.add("color-oscuro");
        elemento_parrafo_receptor.classList.add("color-párrafo-oscuro");
        text_emisor.classList.add("color-oscuro");
        text_receptor.classList.add("color-receptor-texto");
        contenedor_secundario.classList.add("caja-dark-return");
        parrafo.classList.add("color-parrafo-oscuro");
        autor.classList.add("estilo-autor-oscuro");

        if(text_receptor.value!=""){
            buho.style.display="none";
            elemento_parrafo_receptor.style.display="none";
            elemento_copiar.style.display="initial";
        }else{
            if(elemento_texto_estilos.fontSize != "46px"){
                buho.style.display="initial";
            }
            elemento_parrafo_receptor.style.display="initial";
            elemento_copiar.style.display="none";
        }
    }

    /* Esta función sirve para cambiar el tema de la página al predeterminado */
    function cambiarPredeterminado(){
        personalizado();
        elementos_blancos=true;
        alura1.style.display="initial";
        contenedor_secundario.classList.add("caja-decoracion");

        if(text_receptor.value!=""){
            elemento_imagen.style.display= "none";
            elemento_parrafo_receptor.style.display="none";
            elemento_copiar.style.display="initial";
            }else{

                if(elemento_texto_estilos.fontSize != "46px"){
                    elemento_imagen.style.display= "initial";
                }
                elemento_parrafo_receptor.style.display="initial";
                    elemento_copiar.style.display="none";
                
            }
    }

    /* Esta función sirve para desactivar todos los valores agregados en las demás funciones y ahorrar
     espacio de codigo repetido cuando se desea agregar otro tema a la página */
    function personalizado(){
        elementos_blancos=false;
        alura1.style.display="none";
        alura2.style.display="none";
        elemento_imagen.style.display="none";
        elemento_parrafo_receptor.style.display="initial";
        /* Color oscuro */
        elementos_oscuros=false;
        buho.style.display="none";
        cuerpo.classList.remove("color-oscuro");
        elemento_parrafo_receptor.classList.remove("color-parrafo-oscuro");
        text_emisor.classList.remove("color-oscuro");
        text_receptor.classList.remove("color-receptor-texto");
        contenedor_secundario.classList.remove("caja-dark-return");
        contenedor_secundario.classList.remove("caja-decoracion");
        parrafo.classList.remove("color-parrafo-oscuro");
        autor.classList.remove("estilo-autor-oscuro");
        /* Minecraft */
        elementos_minecraft=false;
        cuerpo.classList.remove("cuerpo-minecraft");
        encriptar.classList.remove("tipografia-minecraft");
        desencriptar.classList.remove("tipografia-minecraft");
        copiar.classList.remove("tipografia-minecraft");
        elemento_parrafo_receptor.classList.remove("tipografia-minecraft");
        text_emisor.classList.remove("tipografia-minecraft");
        text_receptor.classList.remove("tipografia-minecraft");
        text_emisor.classList.remove("minecraft-emisor-texto");
        text_receptor.classList.remove("minecraft-receptor-texto");
        contenedor_secundario.classList.remove("caja-decoracion-minecraft");
        parrafo.classList.remove("tipografia-minecraft-parrafo");
        advertencia.classList.remove("advertencia-posicion");
        autor.classList.remove("estilo-autor-mine");
        alex.style.display="none";
    }

    /* Esta función sirve para cambiar el tema de la página a uno de minecraft */
    function nuevo_mundo(){
        personalizado();
        elementos_minecraft=true;
        alura2.style.display="initial";
        if(elemento_texto_estilos.fontSize != "46px"){
            alex.style.display="initial";
        }
        cuerpo.classList.add("cuerpo-minecraft");
        encriptar.classList.add("tipografia-minecraft");
        desencriptar.classList.add("tipografia-minecraft");
        copiar.classList.add("tipografia-minecraft");
        elemento_parrafo_receptor.classList.add("tipografia-minecraft");
        text_emisor.classList.add("tipografia-minecraft");
        text_emisor.classList.add("minecraft-emisor-texto");
        text_receptor.classList.add("tipografia-minecraft");
        text_receptor.classList.add("minecraft-receptor-texto");
        contenedor_secundario.classList.add("caja-decoracion-minecraft");
        parrafo.classList.add("tipografia-minecraft-parrafo");
        advertencia.classList.add("advertencia-posicion");
        autor.classList.add("estilo-autor-mine");

        if(text_receptor.value!=""){
            alex.style.display="none";
            elemento_parrafo_receptor.style.display="none";
            elemento_copiar.style.display="initial";
        }else{
            if(elemento_texto_estilos.fontSize != "46px"){
                alex.style.display="initial";
            }
            elemento_parrafo_receptor.style.display="initial";
            elemento_copiar.style.display="none";
        }
    }

/* Botones de encriptar y desencriptar */
encriptar.onclick=enviar;
desencriptar.onclick=traducir;

/* Navegación */
boton_oscuro.onclick=cambiarOscuro;
boton_claro.onclick=cambiarPredeterminado;
boton_minecraft.onclick=nuevo_mundo;
copiar.onclick=capturar;

/* Estilos escondidos */
buho.style.display="none";
alura2.style.display="none";
alex.style.display="none";
elemento_copiar.style.display="none";