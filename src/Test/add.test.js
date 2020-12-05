import add from "../add.js";
import chai from "chai"

describe("add", () => {
    it("add positive number to positive number", () =>{
        expect(add(6,4)).to.equal(10)
    });
})