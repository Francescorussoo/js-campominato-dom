document.addEventListener('DOMContentLoaded', function() {
    const grid = document.getElementById('griglia');

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
