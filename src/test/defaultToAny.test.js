import chai from "chai"
import defaultToAny from "../defaultToAny.js"

const expect = chai.expect 


describe("defaultToAny", () => {
    it("Returns first not Null value", () =>{
        expect(defaultToAny(undefined,2,3)).to.eql(2)
    });
})
