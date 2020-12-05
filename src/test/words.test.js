import chai from "chai"
import words from "../words.js"

const expect = chai.expect 


describe("words", () => {
    it("Splits `string` into an array of its words.", () =>{
        expect(words('fred, barney, & pebbles')).to.eql(['fred', 'barney', 'pebbles'])
    });
})