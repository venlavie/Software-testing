import chai from "chai"
import camelCase from "../camelCase.js"

const expect = chai.expect 

const users = "Foo Bar"
const answer = "fooBar"

describe("camelCase", () => {
    it("Returns the camel cased string.", () =>{
        expect(camelCase(users).to.eql(answer))
    });
})
