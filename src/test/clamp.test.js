import chai from "chai"
import clamp from "../clamp.js"

const expect = chai.expect 



describe("clamp", () => {
    it("Clamps `number` within the inclusive `lower` and `upper` bounds", () =>{
        expect(clamp(-10, -5, 5)).to.eql(-5)
    });
})