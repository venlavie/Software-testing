import chai from "chai"
import reduce from "../reduce.js"

const expect = chai.expect 

const users = [
    { 'user': 'barney', 'active': true },
    { 'user': 'betty', 'active': true },
    { 'user': 'fred', 'active': false }
]


describe("reduce", () => {
    it("Reduces `collection` to a value which is the accumulated result", () =>{
        expect(reduce([1, 2], (sum, n) => sum + n, 0)).to.eql(3)
    });
})