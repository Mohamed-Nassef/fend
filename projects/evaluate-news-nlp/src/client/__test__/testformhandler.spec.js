//import { handleSubmit } from "../src/client/js/formHandler.js"
import { handleSubmit } from "../js/formHandler"

describe("client test", () => {

    test("Testing the handleSubmit() function", () => {

        expect(handleSubmit).toBeDefined();
    })
});