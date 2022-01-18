
/*

*/
// Prendo il bottone
const btnGen = document.getElementById('buttonGen');


btnGen.addEventListener('click', () => {
    //prendo la griglia
    const grid = document.getElementById('grid');
    //ripristino la griglia
    grid.innerText = '';
    // PRENDO LA SCELTA DELL UTENTE
    const choice = document.getElementById('choice').value;

    // IN BASE ALLA SCELTA DECIDO IL NUMERO DI CASELLE PER TABELLA
    let numGrid;

    switch (choice) {
        case 'diff2':
            numGrid = 81
            break;
        case 'diff3':
            numGrid = 49
            break;
        default:
            numGrid = 100
    }
    // CALCOLO QUANTE RIGHE MI SERVONO IN BASE AL NUMERO DELLE CASELLE
    const numCells = Math.sqrt(numGrid)
    const dimension = `calc(100%/${numCells})`

    // CREO LE CASELLE DANDO UN ID AD OGNUNA
    for (let i = 1; i <= numGrid; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.style.width = dimension;
        cell.style.height = dimension;
        grid.appendChild(cell);
    }
})