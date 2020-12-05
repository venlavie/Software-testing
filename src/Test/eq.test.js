import chai from "chai"
import eq from "../eq.js"

const expect = chai.expect 

const object = { 'a': 1 }


describe("eq", () => {
    it("equal", () =>{
        expect(eq(object, object)).to.be.true
    });
})

