import gomoku from './dist/gomoku.mjs';
import readline from 'readline';

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.on('line', (input) => {
    
    const [pos, role] = input.split(' ');
    const [x, y] = pos.split(',');
    const p = x * 15 + y * 1;
    if (!(x && y && role)) {
        return;
    }
    // console.log(`Go: `,x, y, p, role);

    gomoku(p, [], role);
});
