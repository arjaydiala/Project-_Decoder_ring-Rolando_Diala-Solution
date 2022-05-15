// Write your tests here!
// Write your tests here!
const expect = require("chai").expect
const {polybius} = require("../src/polybius.js");


       



describe("polybius()", () => {
    
    
    it("should encode  ", () => {
      const actual = polybius("thinkful"); //> "4432423352125413"
    
      expect(actual).to.eql("4432423352125413");
     

    });
    
        
           it(" Should return the word Hello world ", () => {
      const actual = polybius("Hello world"); //> '3251131343 2543241341'
    
      expect(actual).to.eql('3251131343 2543241341');

     
               
           
  });
    
    
    it(" should equal to 'hello world' ", () => {
      const actual = polybius("3251131343 2543241341", false); //> "hello world"
    
      expect(actual).to.eql("hello world");

     
               
           
  });

        it("should expect 'th(i/j)nkful' ", () => {
      const actual = polybius("4432423352125413", false); //> "th(i/j)nkful
    
      expect(actual).to.eql('thi/jnkful');
           
           
  });

    it("should result to false", () => {
      const actual = polybius("44324233521254134", false); //> false
    
      expect(actual).to.eql(false);
  
           
  });






    
 });

