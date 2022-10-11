const calculate = require('./index');

describe("Fibonacci modified Sequence", () => {
  it("should receive 0 and should return 0", () => {
    expect(calculate(0)).toBe(0);
  });
  it("should receive 1 and should return 1", () => {
    expect(calculate(1)).toBe(1);
  });
  
  it("should receive 2 and should return 1", () => {
    expect(calculate(2)).toBe(1);
  });
  
  it("should receive 3 and should return 2", () => {
    expect(calculate(3)).toBe(2);
  });
  it("should receive 4 and should return 3", () => {
    expect(calculate(4)).toBe(3);
  });
  it("should receive 5 and should return 5", () => {
    expect(calculate(5)).toBe(5);
  });
  it("should receive 6 and should return 8", () => {
    expect(calculate(6)).toBe(8);
  });
  it("should receive 7 and should return 13", () => {
    expect(calculate(7)).toBe(13);
  });
  it("should receive 8 and should return 12", () => {
    expect(calculate(8)).toBe(12);
  });
  it("should receive 9 and should return 7", () => {
    expect(calculate(9)).toBe(7);
  });
  it("should receive 10 and should return 10", () => {
    expect(calculate(10)).toBe(10);
  });
  it("should receive 11 and should return 8", () => {
    expect(calculate(11)).toBe(8);
  });
  it("should receive 12 and should return 9", () => {
    expect(calculate(12)).toBe(9);
  });
  it("should receive 13 and should return 17", () => {
    expect(calculate(13)).toBe(17);
  });
});
