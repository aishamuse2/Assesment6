const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('returns array', () => {
        expect(Array.isArray(shuffleArray([1,2,3]))).toBe(true);
      });
    test('returns array of the same length', () => {
        expect(shuffleArray([1,2,3]).length).toBe(3);
      });
})
