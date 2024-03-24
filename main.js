#!/usr/bin/env node

function isValidMove(x, y) {
    return x >= 0 && y >= 0 && x < 8 && y < 8;
}

function getKnightMoves(x, y) {
    const moves = [
        [x + 1, y + 2],
        [x + 1, y - 2],
        [x - 1, y + 2],
        [x - 1, y - 2],
        [x + 2, y + 1],
        [x + 2, y - 1],
        [x - 2, y + 1],
        [x - 2, y - 1],
    ];

    return moves.filter((move) => isValidMove(...move));
}
