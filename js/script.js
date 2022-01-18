// Prendo il bottone
const btnGen = document.getElementById('buttonGen');
// Creo larray di bombe
const bombs = [];
// Prendo il punteggio da fuori
const score = document.getElementById('score');
// Creo la variabile punteggio
let contatore = 0;

btnGen.addEventListener('click', () => {
    // -------------FUNZIONI-------------

    // SE L'ID DELLA CASELLA E' UGUALE AL NUMERO DI UNA BOMBA LA CASELLA DIVENTA ROSSA
    const play = (cellClicked, bombs) => {
        const cellId = parseInt(cellClicked.id);
        if (bombs.includes(cellId)) {
            showBombs(bombs);
            Punteggio(contatore)
        } else {
            // Coloro la cella di green
            cellClicked.classList.add('safe');
            contatore++;
        }
    }

    const showBombs = (bombs) => {
        const cells = document.querySelectorAll('.cell');
        for (let i = 0; i < bombs.length; i++) {
            const bomb = bombs[i];
            cells[bomb - 1].classList.add('bomb');
        }
    }


    const Punteggio = (count) => {
        score.innerText = `Punteggio: ${count}`;

    }




    // CREO LE CASELLE DANDO UN ID AD OGNUNA
    const createCells = (numeri) => {
        for (let i = 1; i <= numGrid; i++) {
            // creo un div
            const cell = document.createElement('div');
            // dichiaro la classe cell
            cell.className = 'cell';
            // definisco le dimensioni
            cell.style.width = dimension;
            cell.style.height = dimension;
            // assegno un id
            cell.id = i;
            cell.innerText = i;
            cell.addEventListener('click', (e) => play(e.target, bombs));
            // aggiungo alla tabella
            grid.appendChild(cell);
        }
    }

    // CREO LE BOMBE E GLI ASSEGNO U NUMOERO
    const createBombs = (numero, bombs) => {
        do {
            rNum = getRandomNumber(numero);

            if (!bombs.includes(rNum)) {
                bombs.push(rNum);
            }
        } while (bombs.length < 16)

        return bombs
    }

    // NUMERO RANDOM
    const getRandomNumber = (numero) => {
        const randomNum = Math.floor(Math.random() * numero) + 1

        return randomNum;
    }

    // ---------------PREPARAZIONE------------------

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
    const numCells = Math.sqrt(numGrid);
    const dimension = `calc(100%/${numCells})`;

    // CREO 16 BOMBE CON ALL'INTERNO UN NUMERO CASUALE 
    // E UNICO COMPRESO TRA 1 E IL NUMERO MASSIMO DI CASELLE  











    // GIOCO
    createBombs(numGrid, bombs);
    createCells(numGrid);

    // console.table(bombs);



})