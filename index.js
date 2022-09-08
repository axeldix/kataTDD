const convertArabicToRoman = (arabicNumber)=>{

   return arabicNumber > 3 ? 'V' :  "I".repeat(arabicNumber)
}

module.exports = convertArabicToRoman