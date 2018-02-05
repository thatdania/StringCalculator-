function StringCalculator(){
  this.numbers = []

}

StringCalculator.prototype.converter = function(...input){
  if(input.length === 0){
    return 0
  } else {
    for (i = 0; i < input.length; i++) {
      this.numbers.push(parseInt(input[i]))
    }
    this.calculate(this.numbers);
  }
}


StringCalculator.prototype.calculate = function(array){
  var sum = this.numbers.reduce((a, b) => a + b, 0);
  return sum
}
