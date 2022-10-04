import { compute } from './compute';

describe('compute', () => {
    it("'should it return 0 if it's negative'", () => {
        const result = compute(-1);
        expect(result).toBe(0);
    });
    it("'should it increment the input if it's positive'", () => {
        const result = compute(1);
        expect(result).toBe(2);
    });
});