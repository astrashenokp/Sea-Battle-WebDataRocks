export function generateEmptyBoard() {
    const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    const data = [];
    
    for (let r = 0; r < rows.length; r++) {
        for (let c = 1; c <= 10; c++) {
            // 0 - вода, 1 - корабель, 2 - мимо, 3 - влучання
            data.push({ x: c.toString(), y: rows[r], status: 0 }); 
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
                grid: { 
                    showHeaders: false,
                    showGrandTotals: "off", 
                    showTotals: "off" 
                }
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