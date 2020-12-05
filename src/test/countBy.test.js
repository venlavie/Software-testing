import chai from "chai"
import countBy from "../countBy.js"

const expect = chai.expect 

const users = [
    { 'user': 'barney', 'active': true },
    { 'user': 'betty', 'active': true },
    { 'user': 'fred', 'active': false }
]


describe("countBy", () => {
    it("reates an object composed of keys generated from the results of running each element of `collection` thru `iteratee`.", () =>{
        expect(countBy(users, value => value.active)).to.eql({ 'true': 2, 'false': 1 })
    });
})