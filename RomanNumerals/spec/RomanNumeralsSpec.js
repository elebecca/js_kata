describe("RomanNumerals", function() {

  beforeEach(function() {
    romanNumerals = new RomanNumerals();
  });

  it("convert numerals to Roman numerals", function() {
    expect(romanNumerals.fromNumber(1)).toBe("I");
    expect(romanNumerals.fromNumber(2)).toBe("II");
    expect(romanNumerals.fromNumber(3)).toBe("III");
    expect(romanNumerals.fromNumber(4)).toBe("IV");
  });
});

