export function generateRandomFleet() {
    let grid = Array.from({ length: 10 }, () => Array(10).fill(0));
    const fleet = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];
    let shipId = 1;

    const canPlace = (r, c, size, isVertical) => {
        if (isVertical && r + size > 10) return false;
        if (!isVertical && c + size > 10) return false;

        for (let i = -1; i <= size; i++) {
            for (let j = -1; j <= 1; j++) {
                let checkR = r + (isVertical ? i : j);
                let checkC = c + (isVertical ? j : i);
                if (checkR >= 0 && checkR < 10 && checkC >= 0 && checkC < 10) {
                    if (grid[checkR][checkC] > 0) return false;
                }
            }
        }
        return true;
    };

    fleet.forEach(size => {
        let placed = false;
        while (!placed) {
            let isVertical = Math.random() < 0.5;
            let r = Math.floor(Math.random() * 10);
            let c = Math.floor(Math.random() * 10);
            if (canPlace(r, c, size, isVertical)) {
                for (let i = 0; i < size; i++) {
                    if (isVertical) grid[r + i][c] = shipId;
                    else grid[r][c + i] = shipId;
                }
                shipId++;
                placed = true;
            }
        }
    });

    const data = [];
    for (let r = 0; r < 10; r++) {
        for (let c = 0; c < 10; c++) {
            const id = grid[r][c];
            data.push({ x: String(c + 1), y: String(r + 1), status: id > 0 ? 1 : 0, shipId: id > 0 ? id : null });
        }
    }
    return data;
}

export function generateEmptyBoard() {
    const data = [];
    for (let r = 0; r < 10; r++) {
        for (let c = 0; c < 10; c++) {
            data.push({ x: String(c + 1), y: String(r + 1), status: 0 });
        }
    }
    return data;
}

export function initBoard(containerId, data, onCellClick) {
    const container = document.querySelector(containerId);
    container.innerHTML = '';

    for (let r = 0; r < 10; r++) {
        for (let c = 0; c < 10; c++) {
            const cell = document.createElement('div');
            cell.className = 'board-cell';
            cell.dataset.x = String(c + 1);
            cell.dataset.y = String(r + 1);

            if (onCellClick) {
                cell.addEventListener('click', () => onCellClick(cell.dataset.x, cell.dataset.y));
            }
            container.appendChild(cell);
        }
    }

    updateBoardCells(container, data);

    return {
        updateData(newData) {
            updateBoardCells(container, newData);
        }
    };
}

function updateBoardCells(container, data) {
    const classes = ['cell-water', 'cell-ship', 'cell-miss', 'cell-hit'];
    data.forEach(item => {
        const cell = container.querySelector(`.board-cell[data-x="${item.x}"][data-y="${item.y}"]`);
        if (cell) {
            cell.className = 'board-cell ' + classes[item.status];
        }
    });
}