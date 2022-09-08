const convertArabicToRoman = require('./index')

describe("Converts arabic to roman", () => {
  it("should convert 1 to I", () => {
    expect(convertArabicToRoman(1)).toBe("I");
  });
  
});

describe("Converts arabic to roman", () => {
  it("should convert 2 to II", () => {
    expect(convertArabicToRoman(2)).toBe("II");
  });
});

describe("Converts arabic to roman", () => {
  it("should convert 3 to III", () => {
    expect(convertArabicToRoman(3)).toBe("III");
  });
});

// describe("Converts arabic to roman", () => {
//   it("should convert 5 to V", () => {
//     expect(convertArabicToRoman(5)).toBe("V");
//   });
// });

// describe("Converts arabic to roman", () => {
//   it("should convert 10 to X", () => {
//     expect(convertArabicToRoman(10)).toBe("X");
//   });
// });

// describe("Converts arabic to roman", () => {
//   it("should convert 4 to IV", () => {
//     expect(convertArabicToRoman(4)).toBe("IV");
//   });
// });