import chai from "chai"
import capitalize from "../capitalize.js"

const expect = chai.expect 

const users = "FRED"

const answer = "Fred"

describe("capitalize", () => {
    it("Converts the first character of `string` to upper case and the remaining to lower case.", () =>{
        expect(capitalize(users)).to.eql(answer)
    });
})
