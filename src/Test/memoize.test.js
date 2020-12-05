import chai from "chai"
import memoize from "../memoize.js"

const expect = chai.expect 

const object = { 'a': 1, 'b': 2 }
const other = { 'c': 3, 'd': 4 }

const values = memoize(values)
const answer = [1, 2]


describe("memoize", () => {
    it("Creates a function that memoizes the result of `func`.", () =>{
        expect(values(object)).to.eql(answer)
    });
})
