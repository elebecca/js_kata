function RomanNumerals() {};

RomanNumerals.prototype.fromNumber = function(n) {
  var result = "";
  while (n > 0) {
    result +="I";
    --n;
  }
return result
}

