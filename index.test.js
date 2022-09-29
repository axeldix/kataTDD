const convertArabicToRoman = require('./index')

describe("Converts arabic to roman", () => {
  it("should convert 1 to I", () => {
    expect(convertArabicToRoman(1)).toBe("I");
  });

  it("should convert 2 to II", () => {
    expect(convertArabicToRoman(2)).toBe("II");
  });

  it("should convert 3 to III", () => {
    expect(convertArabicToRoman(3)).toBe("III");
  });

  // it("should convert 5 to V", () => {
  //   expect(convertArabicToRoman(5)).toBe("V");
  // });

  // it("should convert 10 to X", () => {
  //   expect(convertArabicToRoman(10)).toBe("X");
  // });

  // it("should convert 4 to IV", () => {
  //   expect(convertArabicToRoman(4)).toBe("IV");
  // });

  // it("should convert 6 to VI", () => {
  //   expect(convertArabicToRoman(6)).toBe("VI");
  // });

  // it("should convert 7 to VII", () => {
  //   expect(convertArabicToRoman(7)).toBe("VII");
  // });
  
  // it("should convert 8 to VIII", () => {
  //   expect(convertArabicToRoman(8)).toBe("VIII");
  // });
  
  // it("should convert 9 to IX", () => {
  //   expect(convertArabicToRoman(9)).toBe("IX");
  // });
});
