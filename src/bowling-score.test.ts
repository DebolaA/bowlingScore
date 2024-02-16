import { calculateBowlingScore } from './bowling-score'

describe('calculateBowlingScore', () => {
    it('returns a number which is the sum of bowling scores', () => {
        expect(() =>
            calculateBowlingScore([
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            ]),
        ).toStrictEqual(0)
    })

    it('returns a number which is the sum of bowling scores', () => {
        expect(() =>
            calculateBowlingScore([
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 1, 0,
            ]),
        ).toStrictEqual(12)
    })

    it('returns a number which is the sum of bowling scores', () => {
        expect(() =>
            calculateBowlingScore([
                9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9,
            ]),
        ).toBe(190)
    })

    it('returns a number which is the sum of bowling scores', () => {
        expect(() =>
            calculateBowlingScore([
                10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
            ]),
        ).toBe(300)
    })

    it('returns a number which is the sum of bowling scores', () => {
        expect(() =>
            calculateBowlingScore([
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 1, 0,
            ]),
        ).toBe(11)
    })
})
