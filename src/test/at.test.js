import chai from "chai"
import at from "../at.js"

const expect = chai.expect 


const object = { 'a': [{ 'b': { 'c': 3 } }, 4] }
const answer = [3,4]

describe("at", () => {
    it("create an array of values corresponding to 'paths' of 'object'", () =>{
        expect(at(object, ['a[0].b.c', 'a[1]'])).to.eql(answer)
    });
})