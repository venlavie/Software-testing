import chai from "chai"
import divide from "../divide.js"

const expect = chai.expect 

describe("divide", () => {
    it("divide numbers", () =>{
        expect(divide(6,4)).to.equal(1.5)
    });
})