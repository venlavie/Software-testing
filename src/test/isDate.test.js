import chai from "chai"
import isDate from "../isDate.js"

const expect = chai.expect 

describe("isDate", () => {
    it("Checks if `value` is classified as a `Date` object.", () =>{
        expect(isDate(new Date)).to.be.true
    });
})
describe("isDate", () => {
    it("Checks if `value` is classified as a `Date` object.", () =>{
        expect(isDate('Mon April 23 2012')).to.be.false
    });
})