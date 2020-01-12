import SCORE, { SITUATION, STATE_NAME } from './score.mjs';
import ROLE from './role.mjs';
import starMap from './utils/star-map.mjs';

function evolution(p, role) {
    const steps = [];
    const record = {
        [0]: [],
        [1]: [],
        [2]: [],
        [3]: []
    };
    let score = 1;
    
    const evo = (ep, dir, next) => {
        const r = this.board[ep];

        const dirRecord = record[dir];
        const dirRecordLen = ep > p ? dirRecord.push(r) : dirRecord.unshift(r);
        
        function getScore (target) {
            const reg = new RegExp(SITUATION[target], 'g');
            const str = dirRecord.toString().replace(/,/g, '');
            const defense = str.match(reg);

            const attack = str
                .replace(/(1)|(2)/g, (...m) => m[1] ? role : m[2] ? ROLE.reverse(role) : ROLE.empty)
                .match(reg);
        
            return (+!!attack + +!!defense) * SCORE[target];
        }

        switch (true) {
            case dirRecordLen >= 5:
                score += getScore(STATE_NAME.FIVE);

                if (score >= SCORE.FIVE) {
                    return next.BREAK_ALL;
                }

                score += getScore(STATE_NAME.FOUR);
                score += getScore(STATE_NAME.BLOCKED_FOUR);
                score += getScore(STATE_NAME.BLOCKED_THREE);
                score += getScore(STATE_NAME.TWO);

            case dirRecordLen >= 4:
                score += getScore(STATE_NAME.THREE);
                score += getScore(STATE_NAME.BLOCKED_TWO);
            case dirRecordLen >= 3:
                score += getScore(STATE_NAME.ONE);
            default:
                score += SCORE.BLOCKED_ONE;
        }
        

    }

    starMap({ p, callback: evo });

    // console.log(record, steps);


    return score;

}

export default evolution;