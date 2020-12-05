import chai from "chai"
import drop from "../drop.js"

const expect = chai.expect 

const users = [1, 2, 3]

const answer = [2, 3]

describe("drop", () => {
    it("Creates a slice of `array` with `n` elements dropped from the beginning.", () =>{
        expect(drop(users)).to.eql(answer)
    });
})
