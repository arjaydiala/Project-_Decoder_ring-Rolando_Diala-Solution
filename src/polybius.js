// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope


  function polybius(input, encode = true) {
    // your solution code here
      input = input.toLowerCase()
      const table = [
          [ "a", "b", "c", "d", "e" ],
          [ "f", "g", "h", "i/j", "k"],
          [ "l", "m", "n", "o", "p"],
          [ "q", "r", "s", "t", "u"],
          [ "v", "w", "x", "y", "z"]
      ]
      let result = "";
      console.log(input)
    
      
      for(let i = 0; i < input.length; i++) {
             if(input[i] === " ") {
              result+= input[i]
              continue;
             }
          
          if(encode) {
              for(let row = 0; row < table.length; row++) {
                  for( let col = 0;  col < table[row].length; col++) {
                      const value = table[row][col]
                        if(value.includes(input[i])) {
                            result+= (col + 1) + "" + (row + 1)
                        }      
                  }
              }
              
              
          
          }  else {
            
            const col = input[i]
            const row = input[i + 1] 
            if(!table[row - 1])
                return false;
            result += table[row - 1][col -1] 
              i++ 
                  
          
          }
      }
      return result;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
