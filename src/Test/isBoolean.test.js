import chai from "chai"
import isBoolean from "../isBoolean.js"

const expect = chai.expect 


describe("isBoolean", () => {
    it("filters array", () =>{
        expect(isBoolean(false)).to.be.true
    });
})

