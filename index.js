const convertArabicToRoman = (arabicNumber)=>{
    switch(arabicNumber){                 
        case 5:            return 'V'; 
        case 10:            return 'X';  
        default:            return "I".repeat(arabicNumber);
    }
}

module.exports = convertArabicToRoman