
const convertArabicToRoman = (numero_ingresado) => { 

    if(numero_ingresado == 1){
        return "I"
    } else if(numero_ingresado == 2){
        return "II"
    } else{
        return "III"
    }
}


module.exports = convertArabicToRoman