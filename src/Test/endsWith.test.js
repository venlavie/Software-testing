import chai from "chai"
import endsWith from "../endsWith.js"

const expect = chai.expect 

const users = "abc"
const value = "c"

describe("endsWith", () => {
    it("Checks if `string` ends with the given target string.", () =>{
        expect(endsWith(users, value)).to.be.true
    });
})
