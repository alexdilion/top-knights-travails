#!/usr/bin/env node

function isValidMove(x, y) {
    return x >= 0 && y >= 0 && x < 8 && y < 8;
}

function Move(position, origin) {
    return { position, origin };
}

function getKnightMoves(origin) {
    let [x, y] = origin.position;
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

    return moves
        .filter((move) => isValidMove(...move))
        .map((move) => Move(move, origin));
}

function comparePositions(a, b) {
    return a[0] === b[0] && a[1] === b[1];
}

function getShortestPath(origin, target) {
    const possibleMoves = getKnightMoves(Move(origin, null));
    const visited = new Set(origin);

    // BFS search to find the path to our target
    let currMove = possibleMoves.shift();
    while (!comparePositions(target, currMove.position)) {
        if (!visited.has(currMove.position.toString())) {
            possibleMoves.push(...getKnightMoves(currMove));
            visited.add(currMove.position.toString());
        }

        currMove = possibleMoves.shift();
    }

    let path = [];
    while (currMove.origin) {
        path.push(currMove.position);
        currMove = currMove.origin;
    }

    return [origin, ...path.reverse()];
}

getShortestPath([0, 0], [7, 7]);
