import { checkForUrl } from "../js/url-checker"

describe('Test check url functionality', () => {
    test('Testing the checkUrl function defined or not', () => {
        expect(checkForUrl("mo1214")).toBe(false);
    })

    test('Testing the checkUrl function return false for invalid url', () => {
        expect(checkForUrl("whttps://.www.wikipedia.org")).toBe(false);
    })

    test('Testing the checkUrl function return true for valid url', () => {
        expect(checkForUrl("https://www.wikipedia.org")).toBe(true);
    })
})