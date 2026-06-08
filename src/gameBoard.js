export function generateRandomFleet() {
    const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    
    let grid = Array.from({ length: 10 }, () => Array(10).fill(0));
    
    const fleet = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];

    const canPlace = (r, c, size, isVertical) => {
        if (isVertical && r + size > 10) return false;
        if (!isVertical && c + size > 10) return false;

        for (let i = -1; i <= size; i++) {
            for (let j = -1; j <= 1; j++) {
                let checkR = r + (isVertical ? i : j);
                let checkC = c + (isVertical ? j : i);
                
                if (checkR >= 0 && checkR < 10 && checkC >= 0 && checkC < 10) {
                    if (grid[checkR][checkC] === 1) return false;
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
                    if (isVertical) grid[r + i][c] = 1;
                    else grid[r][c + i] = 1;
                }
                placed = true;
            }
        }
    });

    const data = [];
    for (let r = 0; r < 10; r++) {
        for (let c = 0; c < 10; c++) {
            data.push({ x: (c + 1).toString(), y: rows[r], status: grid[r][c] });
        }
    }
    return data;
}

export function initWebDataRocks(containerId, data, onCellClick) {
    const pivot = new WebDataRocks({
        container: containerId,
        toolbar: false,
        report: {
            dataSource: { data: data },
            slice: {
                rows: [{ uniqueName: "y" }],
                columns: [{ uniqueName: "x" }],
                measures: [{ uniqueName: "status", aggregation: "max" }]
            },
            options: {
                grid: { showHeaders: false, showGrandTotals: "off", showTotals: "off" }
            }
        },
        customizeCell: (cellBuilder, cellData) => {
            if (cellData.type === "value") {
                cellBuilder.text = ""; 
                if (cellData.value === 0) cellBuilder.addClass("cell-water");
                if (cellData.value === 1) cellBuilder.addClass("cell-ship");
                if (cellData.value === 2) cellBuilder.addClass("cell-miss");
                if (cellData.value === 3) cellBuilder.addClass("cell-hit");
            }
        }
    });

    pivot.on('cellclick', (cell) => {
        if (cell.type === "value") {
            const x = cell.columns[0].caption;
            const y = cell.rows[0].caption;
            onCellClick(x, y);
        }
    });

    return pivot;
}