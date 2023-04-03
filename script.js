function letterCombinations(input_digit) {
  //Complete the function
	function letterCombinations(digits) {
  const letters = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
  };
  
  if (digits.length === 0) {
    return [];
  }
  
  let result = [''];
  
  for (let digit of digits) {
    let temp = [];
    for (let letter of letters[digit]) {
      for (let combination of result) {
        temp.push(combination + letter);
      }
    }
    result = temp;
  }
  
  return result.sort();
}

// console.log(letterCombinations('23'));

}

module.exports = letterCombinations;
