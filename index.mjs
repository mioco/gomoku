import board from './board.mjs';

export default function gomoku(pos, b, role) {
    board.put(pos, role);

    return board.next(pos, role);
}