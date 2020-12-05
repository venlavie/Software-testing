import chai from "chai"
import chunk from "../chunk.js"

const expect = chai.expect 

const users = ['a', 'b', 'c', 'd']
const value = 2

const answer = [['a', 'b'], ['c', 'd']]

describe("chunk", () => {
    it("Creates an array of elements split into groups the length of `size`.", () =>{
        expect(chunk(users, 2)).to.eql(answer)
    });
})

