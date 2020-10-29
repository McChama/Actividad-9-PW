function ObtenerNumero(Numero){
    /*Conversion de string a numero flotante*/
    var N = parseFloat(prompt("Ingresa el "+Numero+" numero"));

    /*Validar que se introduzca un numero*/
    if(isNaN(N)){
        alert("Ingrese un numero valido para el "+Numero+" numero");
        return ObtenerNumero(Numero);
    }
    return N;
}

function Operaciones(Operacion){
    /*Acceso a etiquetas*/
    var PResultado = document.getElementById("Resultado");
    var PSobrante = document.getElementById("Sobrante");
    
    /*Almacen de operandos*/
    var N1 = ObtenerNumero("primer");
    var N2 = ObtenerNumero("segundo");

    PResultado.style.display = "inline";
    PSobrante.style.display = "inline";

    /*Sino es division, oculta la etiqueta*/
    if(Operacion != 4)
        PSobrante.style.display = "none";

    /*Evaluar operacion con operandos*/
    switch(Operacion) {
        case 1:
            PResultado.innerHTML = ("La suma de "+N1+" + "+N2+" es: "+(N1+N2));
            break;
        case 2:
            PResultado.innerHTML = ("La resta de "+N1+" - "+N2+" es: "+(N1-N2));
            break;
        case 3:
            PResultado.innerHTML = ("La multiplicacion de "+N1+" * "+N2+" es: "+(N1*N2));
            break;
        case 4: 
            PResultado.innerHTML = ("La division de "+N1+" / "+N2+" es: "+Math.floor(N1/N2));
            PSobrante.innerHTML = ("El sobrante es: "+(N1%N2));
            break;
    }
}