import chai from "chai"
import ceil from "../ceil.js"

const expect = chai.expect

describe("ceil", () => {
    it("Computes `number` rounded up to `precision`.", () =>{
        expect(ceil(4.006)).to.eql(5)
    });
})

