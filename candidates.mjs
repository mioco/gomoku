import starMap from './utils/star-map.mjs';

export default function (p) {
    if (this.count <= 0) return [7, 7];

    const range = 2;
    const result = {};

    const callback = (point) => {
        const score = this.scoreBoard[point];

        if (!this.board[point]) {
            result[score] = point;
        }
    }
    
    starMap({ p, callback, range });

    return result;
}