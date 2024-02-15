import { calculateBowlingScore } from 'src/bowling-score'

describe('calculateBowlingScore', () => {
    // it('throws an error when the input/arg is not an integer', () => {
    //     expect(() => calculateBowlingScore(12.3)).toThrow('Number is required')
    // })
    // it('throws an error when the input/arg is 0', () => {
    //     expect(() => calculateBowlingScore(0)).toThrow(
    //         'Number 0 cannot be passed',
    //     )
    // })

    it('returns a number which is the sum of bowling scores', () => {
        expect(() =>
            calculateBowlingScore([
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            ]),
        ).toBe(0)
    })
})
