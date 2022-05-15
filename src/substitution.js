// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
      let result = ""
   
      if(!alphabet || alphabet.length === 0 || alphabet.length != 26 ) {
          return false
      }
      alphabet = alphabet.toLowerCase()
      input = input.toLowerCase()
     console.log(alphabet)
      const count = {};
      
      for( let i = 0; i < alphabet.length; i++) {
          const letter = alphabet[i]
          if(count[letter] ) {
              return false
          }
          count[letter] = true
      }
      
      
      
           for( let i = 0; i < input.length; i++) {
  if(encode ) {
             
         
               
               
          const letter = input.charCodeAt(i)
          if(letter < 97 || letter > 122 ) {
              result+= input[i]
              continue;
          }
  
          result+= alphabet[letter - 97]
         } else {
             if(input[i] === " ") {
              result+= input[i]
              continue;
             }
             const index = alphabet.split("").findIndex(l => l === input[i]) 
             result+= String.fromCharCode(97 + index)
             console.log(index)
             console.log(input[i])
         }            
  }
      return result;
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
