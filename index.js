
const convertArabicToRoman = (numero_ingresado) => { 
    let numeros_romanos = ""
    if(numero_ingresado === 5)
        return "V"
    while (numero_ingresado > 0){
        numeros_romanos += "I"
        numero_ingresado--;
    }
    return numeros_romanos
}


module.exports = convertArabicToRoman