import chai from "chai"
import difference from "../difference.js"

const expect = chai.expect 

const users = [2, 1]
const other = [2, 3]

const answer = [1]

describe("difference", () => {
    it("Creates an array of `array` values not included in the other given arrays", () =>{
        expect(difference(users, other)).to.eql(answer)
    });
})

