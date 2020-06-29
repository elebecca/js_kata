function RomanNumerals() {};

var numerlas = [
  { value : 4, numeral: "IV"},
  { value : 1, numeral: "I"},
]

RomanNumerals.prototype.fromNumber = function(n) {
  var result = "";
  numerlas.forEach(function(item) {
    for (; n >= item.value; n -= item.value ) {
      result += item.numeral; 
    }
  });
  return result
}

