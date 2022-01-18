
/*

*/
// Prendo il bottone
const btnGen = document.getElementById('buttonGen');


btnGen.addEventListener('click', () => {
    // PRENDO LA SCELTA DELL UTENTE
    const choice = document.getElementById('choice').value;

    // IN BASE ALLA SCELTA DECIDO IL NUMERO DI CASELLE PER TABELLA
    let numGrid;

    switch (choice) {
        case 'diff2':
            numGrid = 81
            break;
        case 'diff3':
            numGrid = 59
            break;
        default:
            numGrid = 100
    }
    console.log(numGrid)
    let numCells = Math.sqrt(numGrid)
    console.log(numCells)
})