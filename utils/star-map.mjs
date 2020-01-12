const NEXT = {
    BREAK: 'BREAK',
    BREAK_ALL: 'BREAK_ALL',
};

export default function starMap ({
    p, size = 15, callback, range = size
}) {
    // 方向(\, |, /, ——)
    const ds = [[-1, -1], [-1, 0], [-1, 1], [0, 1]];
    const dLen = ds.length;

    const [px, py] = [parseInt(p / size), p % size];

    // 右上开始顺时针 8 个方向计算分数
    for (let d = 0; d < dLen; d++) {
        let breakAll = false;

        const [dirX, dirY] = ds[d];

        for (let r = 1; r <= range; r++) {
            for (const dir of [-1, 1]) {

                const [x, y] = [px + r * dirX * dir, py + r * dirY * dir];

                if (x < 0 || y < 0 || x >= size || y >= size) {
                    break;
                }

                // [0]: 位置; [1]: 方向, [2]: break 选项;
                const next = callback(x * size + y, d, NEXT);

                if (next === NEXT.BREAK) {
                    break;
                }

                if (next === NEXT.BREAK_ALL) {
                    breakAll = true;
                    break;
                }
            }
        }

        if (breakAll) {
            break;
        }
    }
}