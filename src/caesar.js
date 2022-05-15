// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
      let result = "";
      if(shift === 0 || shift > 25 || shift < -25) {
          return false
      }
      input = input.toLowerCase()
      if(!encode) {
          shift *= -1
      }
      for( let i = 0; i < input.length; i++) {
          
          
          const letter = input.charCodeAt(i)
          if(letter < 97 || letter > 122 ) {
              result+= input[i]
              continue;
          }
          let sum = letter + shift
          if(sum > 122)  {
              sum -= 26
          }   
          if(sum < 97) {
              sum += 26
          }
              
          const newLetter = String.fromCharCode(sum)
          result += newLetter
      }
      return result
    // your solution code here
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
