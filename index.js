
const convertArabicToRoman = (numero_ingresado) => { 
    let numeros_romanos = ""
    const roman_to_gregorian ={
        "X": 10,
        "V": 5,
        "I": 1,
    }
    if(numero_ingresado === 10)
        return "X"
    while (numero_ingresado > 0){
        if(numero_ingresado == 5){
            numeros_romanos += "V"
            numero_ingresado -= 5;
        }else{
            numeros_romanos += "I"
            numero_ingresado--;
        }
    }
    return numeros_romanos.replace("IIII", "IV")

}


module.exports = convertArabicToRoman