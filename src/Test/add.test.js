import chai from "chai"
import add from "../add.js"

const expect = chai.expect 


describe("add", () => {
    it("add positive number to positive number", () =>{
        expect(add(6,4)).to.equal(10)
    });
})