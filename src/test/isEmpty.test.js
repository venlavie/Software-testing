import chai from "chai"
import isEmpty from "../isEmpty.js"

const expect = chai.expect 

describe("isEmpty", () => {
    it("Checks if `value` is an empty object, collection, map, or set.", () =>{
        expect(isEmpty(null)).to.be.true
    });
})
describe("isEmpty", () => {
    it("Checks if `value` is an empty object, collection, map, or set.", () =>{
        expect(isEmpty(true)).to.be.true
    });
})
describe("isEmpty", () => {
    it("Checks if `value` is an empty object, collection, map, or set.", () =>{
        expect(isEmpty(1)).to.be.true
    });
})
describe("isEmpty", () => {
    it("Checks if `value` is an empty object, collection, map, or set.", () =>{
        expect(isEmpty('abc')).to.be.false
    });
})