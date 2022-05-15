// Write your tests here!
// Write your tests here!
const expect = require("chai").expect
const {substitution} = require("../src/substitution.js");


       



describe("substitution()", () => {
   
    
    it("expecting to return 'jrufscpw' ", () => {
      const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev"); //> 'jrufscpw'
    
      expect(actual).to.eql('jrufscpw');
     

    });
    
        
           it(" expecting to return 'elp xhm xf mbymwwmfj dne' ", () => {
      const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev"); //> 'elp xhm xf mbymwwmfj dne'
    
      expect(actual).to.eql('elp xhm xf mbymwwmfj dne');

     
               
           
  });
    
    
    it(" should equal to 'thinkful' ", () => {
      const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false); //> 'thinkful'
    
      expect(actual).to.eql('thinkful');

     
               
           
  });

        it("should expect y&ii$r& ", () => {
      const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl"); //> "y&ii$r&"
    
      expect(actual).to.eql("y&ii$r&");
           
           
  });

    it("should result to 'message' ", () => {
      const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false); //> "message"
    
      expect(actual).to.eql("message");
  
           
  });

it("should return false", () => {
      const actual = substitution("thinkful", "short"); //> false
    
      expect(actual).to.eql(false);
  
           
  });

it("should return false", () => {
      const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz"); //> false
    
      expect(actual).to.eql(false);
  
           
  });





    
 });

