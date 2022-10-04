import { pow } from "./pow";

describe('pow', () => {
    it("'Should do the pow function'", () => {
        const result = pow(2,3);
        expect(result).toBe(8);
    })
    it("'Should do the pow function'", () => {
        const result = pow(3,2);
        expect(result).toBe(9);
})});