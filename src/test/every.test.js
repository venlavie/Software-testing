import chai from "chai"
import every from "../every.js"

const expect = chai.expect 


const object = [true, 1, null, 'yes']


describe("every", () => {
    it("compare all to boolean ", () =>{
        expect(every(object, Boolean)).to.be.false
    });
})