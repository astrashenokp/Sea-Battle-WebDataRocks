export function generateRandomFleet() {
    const grid = Array.from({ length: 10 }, () => Array(10).fill(0));
    const fleet = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];
    let shipId = 1;

    const canPlace = (r, c, size, isVertical) => {
        if (isVertical && r + size > 10) return false;
        if (!isVertical && c + size > 10) return false;

        for (let i = -1; i <= size; i++) {
            for (let j = -1; j <= 1; j++) {
                const checkR = r + (isVertical ? i : j);
                const checkC = c + (isVertical ? j : i);

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
            const isVertical = Math.random() < 0.5;
            const r = Math.floor(Math.random() * 10);
            const c = Math.floor(Math.random() * 10);

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
            data.push({
                x: String(c + 1),
                y: String(r + 1),
                status: id > 0 ? 1 : 0,
                shipId: id > 0 ? id : null
            });
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

export function initWebDataRocks(containerId, data, onCellClick) {
    const container = document.querySelector(containerId);
    if (!container) return { updateData: () => {} };

    let currentData = data;
    const boardId = containerId.replace('#', '');
    let renderedColumns = [];
    let renderedRows = [];

    const getCell = (boardData, x, y) => {
        return boardData.find(cell => cell.x === String(x) && cell.y === String(y));
    };

    const getStatusClass = (status) => {
        if (status === 1) return 'cell-ship';
        if (status === 2) return 'cell-miss';
        if (status === 3) return 'cell-hit';
        return 'cell-water';
    };

    const renderBattleGridOverlay = () => {
        let overlay = container.querySelector('.battle-grid-overlay');

        if (!overlay) {
            overlay = document.createElement('div');
            overlay.className = 'battle-grid-overlay';
            container.appendChild(overlay);
        }

        overlay.innerHTML = '';

        for (let y = 1; y <= 10; y++) {
            for (let x = 1; x <= 10; x++) {
                const cellData = getCell(currentData, x, y) || { status: 0 };
                const cell = document.createElement(onCellClick ? 'button' : 'div');

                cell.id = `cell-${boardId}-${x}-${y}`;
                cell.className = `battle-overlay-cell ${getStatusClass(cellData.status)}`;
                cell.dataset.x = String(x);
                cell.dataset.y = String(y);
                cell.setAttribute('aria-label', `Cell ${x}, ${y}`);

                if (onCellClick) {
                    cell.type = 'button';
                    cell.addEventListener('click', () => onCellClick(String(x), String(y)));
                }

                overlay.appendChild(cell);
            }
        }
    };

    const applyCellIdsByLoop = () => {
        renderBattleGridOverlay();

        container.querySelectorAll('.battle-marker').forEach(marker => {
            const cell = marker.closest('.wdr-cell');
            if (!cell) return;

            cell.classList.add('battle-cell');
            cell.dataset.wdrColumn = marker.dataset.wdrColumn;
            cell.dataset.wdrRow = marker.dataset.wdrRow;
        });

        const battleCells = Array.from(container.querySelectorAll('.wdr-cell.battle-cell'));
        const columns = [...new Set(battleCells.map(cell => Number(cell.dataset.wdrColumn)).filter(Number.isFinite))]
            .sort((a, b) => a - b)
            .slice(0, 10);
        const rows = [...new Set(battleCells.map(cell => Number(cell.dataset.wdrRow)).filter(Number.isFinite))]
            .sort((a, b) => a - b)
            .slice(0, 10);
        renderedColumns = columns;
        renderedRows = rows;

        container.querySelectorAll(
            [
                '.wdr-cell:not(.battle-cell)',
                '.wdr-grid-h-scroll',
                '.wdr-grid-v-scroll',
                '.wdr-space',
                '.wdr-grid-column-captions',
                '.wdr-grid-row-captions',
                '.wdr-grid-headers',
                '.wdr-ui-element',
                '.wdr-sheet-selection-canvas',
                '.wdr-sheet-selection-canvas-outer'
            ].join(', ')
        ).forEach(element => element.style.setProperty('display', 'none', 'important'));

        container.querySelectorAll(
            '.wdr-root, .wdr-pivot-view, .wdr-grid-view, .wdr-content, .wdr-grid, .wdr-grid-layout'
        ).forEach(element => {
            element.style.setProperty('position', 'absolute', 'important');
            element.style.setProperty('top', '0', 'important');
            element.style.setProperty('left', '0', 'important');
            element.style.setProperty('width', '400px', 'important');
            element.style.setProperty('height', '400px', 'important');
            element.style.setProperty('overflow', 'hidden', 'important');
            element.style.setProperty('padding', '0', 'important');
            element.style.setProperty('margin', '0', 'important');
        });

        const gridSheet = container.querySelector('.wdr-grid-sheet');
        if (gridSheet) {
            gridSheet.style.setProperty('position', 'absolute', 'important');
            gridSheet.style.setProperty('top', '0', 'important');
            gridSheet.style.setProperty('left', '0', 'important');
            gridSheet.style.setProperty('width', '400px', 'important');
            gridSheet.style.setProperty('height', '400px', 'important');
            gridSheet.style.setProperty('overflow', 'hidden', 'important');
        }

        const gridContainer = container.querySelector('.wdr-grid-container');
        if (gridContainer) {
            gridContainer.style.setProperty('top', '0', 'important');
            gridContainer.style.setProperty('left', '0', 'important');
            gridContainer.style.setProperty('width', '400px', 'important');
            gridContainer.style.setProperty('height', '400px', 'important');
            gridContainer.style.setProperty('overflow', 'hidden', 'important');
        }

        const stateClasses = ['cell-water', 'cell-ship', 'cell-miss', 'cell-hit'];

        for (let y = 1; y <= 10; y++) {
            for (let x = 1; x <= 10; x++) {
                const columnIndex = columns[x - 1];
                const rowIndex = rows[y - 1];
                const cell = container.querySelector(`.battle-cell[data-wdr-column="${columnIndex}"][data-wdr-row="${rowIndex}"]`);
                const cellData = getCell(currentData, x, y) || { status: 0 };

                if (!cell) continue;

                cell.id = `cell-${boardId}-${x}-${y}`;
                cell.dataset.x = String(x);
                cell.dataset.y = String(y);
                cell.classList.add('battle-cell');
                cell.classList.remove(...stateClasses);
                cell.classList.add(getStatusClass(cellData.status));
                cell.setAttribute('aria-label', `Cell ${x}, ${y}`);

                cell.style.setProperty('position', 'absolute', 'important');
                cell.style.setProperty('left', `${(x - 1) * 40}px`, 'important');
                cell.style.setProperty('top', `${(y - 1) * 40}px`, 'important');
                cell.style.setProperty('width', '40px', 'important');
                cell.style.setProperty('height', '40px', 'important');
                cell.style.setProperty('min-width', '0', 'important');
                cell.style.setProperty('padding', '0', 'important');
                cell.style.setProperty('display', 'block', 'important');
                cell.style.setProperty('visibility', 'visible', 'important');
                cell.style.setProperty('opacity', '1', 'important');
                cell.style.setProperty('overflow', 'hidden', 'important');
            }
        }
    };

    const pivot = new WebDataRocks({
        container: containerId,
        toolbar: false,
        report: {
            dataSource: { data },
            slice: {
                rows: [{ uniqueName: 'y' }],
                columns: [{ uniqueName: 'x' }],
                measures: [{
                    uniqueName: 'status',
                    aggregation: 'max',
                    width: 40
                }]
            },
            options: {
                grid: {
                    showHeaders: false,
                    showGrandTotals: 'off',
                    showTotals: 'off',
                    showFilter: false,
                    showReportFiltersArea: false,
                    cellsPerPage: 100,
                    type: 'classic'
                },
                configuratorActive: false,
                configuratorButton: false,
                drillThrough: false,
                sorting: 'off'
            },
            formats: [{
                name: '',
                nullValue: ' ',
                maxDecimalPlaces: 0
            }]
        },
        reportcomplete: () => setTimeout(applyCellIdsByLoop, 0),
        reportchange: () => setTimeout(applyCellIdsByLoop, 0),
        aftergriddraw: applyCellIdsByLoop,
        customizeCell: (cellBuilder, cellData) => {
            if (cellData.type !== 'value') return;

            const columnIndex = Number(cellData.columnIndex);
            const rowIndex = Number(cellData.rowIndex);

            cellBuilder.attr = {
                ...cellBuilder.attr,
                'data-wdr-column': String(columnIndex),
                'data-wdr-row': String(rowIndex)
            };
            cellBuilder.style = {
                ...cellBuilder.style,
                position: 'absolute',
                width: '40px',
                height: '40px',
                minWidth: '0',
                padding: '0',
                visibility: 'visible',
                opacity: '1',
                overflow: 'hidden'
            };
            cellBuilder.text = `<span class="battle-marker" data-wdr-column="${columnIndex}" data-wdr-row="${rowIndex}"></span>`;
            cellBuilder.addClass('battle-cell');
            cellBuilder.addClass(getStatusClass(Number(cellData.value)));
        }
    });

    pivot.on('reportcomplete', applyCellIdsByLoop);
    pivot.on('update', () => setTimeout(applyCellIdsByLoop, 0));
    setTimeout(applyCellIdsByLoop, 0);
    setTimeout(applyCellIdsByLoop, 100);

    pivot.on('cellclick', (cell) => {
        if (cell.type === 'value' && onCellClick) {
            const x = renderedColumns.indexOf(Number(cell.columnIndex)) + 1;
            const y = renderedRows.indexOf(Number(cell.rowIndex)) + 1;

            if (x > 0 && y > 0) {
                onCellClick(String(x), String(y));
            }
        }
    });

    const updateWebDataRocks = pivot.updateData.bind(pivot);

    pivot.updateData = (newDataSource) => {
        currentData = newDataSource.data || currentData;
        renderBattleGridOverlay();
        const result = updateWebDataRocks(newDataSource);
        setTimeout(applyCellIdsByLoop, 0);
        return result;
    };

    return pivot;
}
