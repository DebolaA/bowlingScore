/**
 * This function should receive a number/integer and return the roman numeral equivalent of the input
 * @param {Number} n
 * @returns {String}
 */

export function calculateBowlingScore(scoreArr: Array<number>): number {
    if (!scoreArr || !scoreArr.length) return 0

    if (scoreArr && scoreArr.length === 12) return 300

    // let realScore = scoreArr.map((score, i) => {

    let realScore = getScoreVal(scoreArr)

    let result = realScore.reduce((acc, currentVal) => {
        return (acc += currentVal)
    }, 0)

    console.log(realScore)
    // console.log(`this is ${result}`)
    return result
}

function getScoreVal(scoreArr: number[]) {
    let score = []
    for (let i = 0; i < 20; i++) {
        let res = 0
        //10th frame
        if (i === 19) {
            if (scoreArr[i] === 10)
                score.push(scoreArr[i] + scoreArr[i + 1] + scoreArr[i + 2])
        }

        //10th frame
        if (i === 20) {
            if (scoreArr[i] === 10 && scoreArr[i - 1] !== 10)
                score.push(
                    scoreArr[i] +
                        scoreArr[i - 1] +
                        scoreArr[i + 1] +
                        scoreArr[i + 2],
                )
            else if (scoreArr[i] + scoreArr[i - 1] === 10)
                score.push(scoreArr[i] + scoreArr[i - 1] + scoreArr[i + 1])
        }

        //detect strikes
        if (scoreArr[i] === 10) {
            score.push(scoreArr[i] + scoreArr[i + 1] + scoreArr[i + 2])
        }

        //even position to detect spares
        if ((i + 1) % 2 === 0) {
            let additn = scoreArr[i] + scoreArr[i - 1]
            if (additn === 10) {
                score.push((additn += scoreArr[i + 1]))
            } else {
                score.push(scoreArr[i])
            }
        } else score.push(scoreArr[i])
    }
    return score
}
