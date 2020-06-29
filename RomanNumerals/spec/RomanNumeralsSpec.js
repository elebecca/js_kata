describe("RomanNumerals", function() {

  beforeEach(function() {
    romanNumerals = new RomanNumerals();
  });

  it("convert numerals to Roman numerals", function() {
    expect(romanNumerals.fromNumber(1)).toBe("I");
    expect(romanNumerals.fromNumber(2)).toBe("II");
    expect(romanNumerals.fromNumber(3)).toBe("III");
    expect(romanNumerals.fromNumber(4)).toBe("IV");
    expect(romanNumerals.fromNumber(5)).toBe("V");
    expect(romanNumerals.fromNumber(21)).toBe("XXI");
    expect(romanNumerals.fromNumber(50)).toBe("L");
    expect(romanNumerals.fromNumber(100)).toBe("C");
    expect(romanNumerals.fromNumber(500)).toBe("D");
    expect(romanNumerals.fromNumber(1000)).toBe("M");
  });
});

