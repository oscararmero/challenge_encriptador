const textoIngresado = document.querySelector(".caja-text1");
const textoResultado = document.querySelector(".caja-text2");

function encriptar (stringEncriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){

        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }

    return stringEncriptado;
}

function desencriptar (stringDesencriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){

        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }

    return stringDesencriptado;
}

function btnEncriptar (){
    const textoIncriptado = encriptar(textoIngresado.value);
    textoResultado.value = textoIncriptado;
    textoIngresado.value = "";
    textoResultado.style.backgroundImage = "none";
}

function btnDesencriptar (){
    const textoDesencriptado = desencriptar(textoIngresado.value);
    textoResultado.value = textoDesencriptado;
    textoIngresado.value = "";
    textoResultado.style.backgroundImage = "none";
}

function copiarTexto(){
    let texto = document.querySelector(".caja-text2");
    texto.select();
    texto.setSelectionRange(0, 99999);
    document.execCommand('copy');
}