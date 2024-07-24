document.addEventListener('DOMContentLoaded', function() {
    const grid = document.getElementById('griglia');
    const bombCount = 16;
    const maxCells = 100;
    const bombs = generateBombs(bombCount, maxCells);
    let safeClicks = 0;

    console.log('Bombe generate:', bombs); // totale bombe

    for (let i = 1; i <= 100; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cella');
        cell.textContent = i;
        cell.addEventListener('click', function() {
            cell.style.backgroundColor = 'lightcoral';
            console.log('Cella cliccata: ' + i);
        });
        grid.appendChild(cell);
    }
});
