import chai from "chai"
import filter from "../filter.js"

const expect = chai.expect 

const users = [
    { 'user': 'barney', 'active': true },
    { 'user': 'fred',   'active': false }
]

const answer = ['barney']

describe("filter", () => {
    it("filters array", () =>{
        expect(filter(users, ({active}) => active)).to.eql(answer)
    });
})