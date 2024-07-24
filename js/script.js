document.addEventListener('DOMContentLoaded', function() {
    const grid = document.getElementById('griglia');
    const bombCount = 16;
    const maxCells = 100;
    const bombs = generateBombs(bombCount, maxCells);
    let safeClicks = 0;

    console.log('Bombe generate:', bombs); // Totale bombe

    for (let i = 1; i <= maxCells; i++) {
        const cell = document.createElement('div');
        cell.className = 'cella';
        cell.textContent = i;
        cell.onclick = function() {
            console.log('Cella cliccata:', i); // Log della cella cliccata
       
            if (bombs.includes(i)) {
                cell.style.backgroundColor = 'red';
                console.log('Ops, una bomba! Gioco terminato.'); // Log di bomba 
                endGame(false, safeClicks);
            } else {
                cell.style.backgroundColor = 'lightcoral';
                cell.style.pointerEvents = 'none';
                safeClicks++;
                console.log('Cella libera, numero di clic senza bomba:', safeClicks); // Log dei clic senza bomba
                if (safeClicks === maxCells - bombCount) {
                    console.log('Tutte le celle scelte sono libere. Hai vinto!'); // Messaggio di vincita
                    endGame(true, safeClicks);
                }
            }
        };
        grid.appendChild(cell);
    }
