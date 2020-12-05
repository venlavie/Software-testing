import chai from "chai"
import eq from "../eq.js"

const expect = chai.expect 

const object = { 'a': 1 }

const other = "true"

describe("eq", () => {
    it("equal", () =>{
        expect(eq(object, object)).to.eql(answer)
    });
})

