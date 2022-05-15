// Write your tests here!
const expect = require("chai").expect
const {caesar} = require("../src/caesar.js");


       



describe("caesar()", () => {
    
 caesar("thinkful", 3); //> 'wklqnixo'
    
    it("should encode  ", () => {
      const actual = caesar("thinkful", 3); 
    
      expect(actual).to.eql('wklqnixo');
     

    });
    
        
           it(" encode with negative number", () => {
      const actual = caesar("thinkful", -3); //> 'qefkhcri'
    
      expect(actual).to.eql('qefkhcri');

     
               
           
  });
    
    
    it(" should equal to 'thinkful' ", () => {
      const actual = caesar("wklqnixo", 3, false); //> 'thinkful'
    
      expect(actual).to.eql('thinkful');

     
               
           
  });

        it("should expect 'bpqa qa i amkzmb' ", () => {
      const actual = caesar("This is a secret message!", 8); //> 'bpqa qa i amkzmb umaaiom!'
    
      expect(actual).to.eql('bpqa qa i amkzmb umaaiom!');
           
           
  });

    it("should result to 'this is a secret message!'", () => {
      const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false); //> 'this is a secret message!'
    
      expect(actual).to.eql('this is a secret message!');
  
           
  });






    
 });

