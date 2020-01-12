import negamax from './negamax.mjs';
import evoluate from './evolution.mjs';
import starMap from './utils/star-map.mjs';
import ROLE from './role.mjs';

class Board {
    count = 0;

    deep = 2;

    size = 15;

    board = new Array(this.size * this.size).fill(0);
    scoreBoard = new Array(this.size * this.size).fill(0);

    next(p, role) {
        const turnRole = ROLE.reverse(role);
        const result = negamax.call(this, p, turnRole);

        this.put(result, turnRole);
        return result;
    }

    put(p, role) {
        this.board[p] = role;
        // 更新棋盘在 p 点的米字分数, candidates 获取两圈内分数高的点
        this.updateScore(p, role);
        this.count ++;

        const score = [...new Array(15)].map(i => (i = new Array(15).fill('0'.padStart(5))));
        const board = [...new Array(15)].map(i => (i = new Array(15).fill('0'.padStart(5))));
        this.scoreBoard.forEach((j, i) => (score[parseInt(i / 15)][i % 15] = j.toString().padStart(5)))
        this.board.forEach((j, i) => (board[parseInt(i / 15)][i % 15] = j.toString().padStart(5)))
    }

    updateScore(p, role) {
        const range = 4;

        const update = (point) => {
            this.scoreBoard[point] = evoluate.call(this, point, role);
        }
        
        starMap({ p, callback: update, range });
    }
}

export default new Board();