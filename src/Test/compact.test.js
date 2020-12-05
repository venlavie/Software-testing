import chai from "chai"
import compact from "../compact.js"

const expect = chai.expect 

const value = [0, 1, false, 2, '', 3]
const answer = [1, 2, 3]

describe("compact", () => {
    it("Creates an array with all falsey values removed.", () =>{
        expect(compact(value)).to.eql(answer)
    });
})
