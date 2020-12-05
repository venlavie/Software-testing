import chai from "chai"
import castArray from "../castArray.js"

const expect = chai.expect 

const value = 'abc'
const answer = ['abc']

describe("castArray", () => {
    it("cast array", () =>{
        expect(castArray(value)).to.eql(answer)
    });
})