// L’utente indica un livello di difficoltà (3 pulsanti)
// in base al quale viene generata una griglia di gioco quadrata,
// in cui ogni cella contiene un numero tra quelli compresi in un range:
// Con difficoltà 1 => tra 1 e 100
// Con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.

// L'utente sceglie la difficoltà del livello tramite 3 pulsanti(lvl 1, lvl 2, lvl 3).
// Al click del pulstante verrà visualizzata una griglia a seconda del livello
// di difficoltà scelto.

// Funzione che restituisce un numero random in base ad un range.
function RandomNum(minNum, maxNum) {
    const result =  Math.floor(Math.random() * ((maxNum + 1) - minNum)) + minNum;
    return result;
}
// Funzione che crea una griglia di 100 quadrati e genera
// all'interno di ogni cella un numero casuale in un range stabilito.
function levelOne(grid) {
    for (let i = 1; i <= 100; i++) {
        const square = document.createElement('div');
        square.className = 'box box-100';
        square.innerText = RandomNum(1, 100);
        grid.append(square);
        square.addEventListener('click', function() {
            this.classList.toggle('blue');
        });
    }
}
// Funzione che crea una griglia di 81 quadrati e genera
// all'interno di ogni cella un numero casuale in un range stabilito.
function levelTwo(grid) {
    for (let i = 1; i <= 81; i++) {
        const square = document.createElement('div');
        square.className = 'box box-81';
        square.innerText = RandomNum(1, 81);
        grid.append(square);
        square.addEventListener('click', function() {
            this.classList.toggle('blue');
        });
    }
}
// Funzione che crea una griglia di 49 quadrati e genera
// all'interno di ogni cella un numero casuale in un range stabilito.
function levelThree(grid) {
    for (let i = 1; i <= 49; i++) {
        const square = document.createElement('div');
        square.className = 'box box-49';
        square.innerText = RandomNum(1, 49);
        grid.append(square);
        square.addEventListener('click', function() {
            this.classList.toggle('blue');
        });
    }
}

const gridOutput = document.querySelector('.container-grid');
let buttonLvl1 = document.querySelector('.btn-lvl1');
let buttonLvl2 = document.querySelector('.btn-lvl2');
let buttonLvl3 = document.querySelector('.btn-lvl3');
// Metto in ascolto il bottone livello 1, cosicchè al click venga richiamata la funzione
// levelOne() e generi una griglia di 100 quadrati.
buttonLvl1.addEventListener('click', function() {
    gridOutput.innerHTML = '';
    levelOne(gridOutput);
});
// Metto in ascolto il bottone livello 2, cosicchè al click venga richiamata la funzione
// levelTwo() e generi una griglia di 81 quadrati.
buttonLvl2.addEventListener('click', function() {
    gridOutput.innerHTML = '';
    levelTwo(gridOutput);
});
// Metto in ascolto il bottone livello 3, cosicchè al click venga richiamata la funzione
// levelThree() e generi una griglia di 49 quadrati.
buttonLvl3.addEventListener('click', function() {
    gridOutput.innerHTML = '';
    levelThree(gridOutput);
});