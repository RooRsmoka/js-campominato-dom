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
    return Math.floor(Math.random() * ((maxNum + 1) - minNum)) + minNum;
}

function reset() {
    gridOutput.innerHTML = '';
}
// Funzione che crea 16 numeri casuali e li agiunge ad una lista 
function createBombs(numOfCells) {
    // Array contenente i numeri che rappresentano le bombe.
    let bombList = [];
    // Aggiungo 16 numeri randomici senza ripetizioni nell'array.
    while (bombList.length < 16) {
        const randomBombNumber = RandomNum(1, numOfCells);
        if (!bombList.includes(randomBombNumber)) { // Se non è incluso o già incluso in bombList(array)  
            bombList.push(randomBombNumber);       // aggiungi il numero all'array.
        }
    }
    return bombList;
}
//
function startGame(numOfCells, container, createBombsFunction) {
    
    let clicked = 0;
    const bombs = createBombsFunction(numOfCells);
    for (let i = 1; i <= numOfCells; i++) {
        const cell = document.createElement('div');
        cell.className = 'box';
        cell.innerText = i;
        container.append(cell);

        cell.addEventListener('click', function() {
            if (bombs.includes(i)) {
                cell.classList.add('red');
                gameOver(false, clicked, container);
            } else {
                cell.classList.add('blue');
                clicked++;

                if (clicked === numOfCells - 16) {
                    gameOver(true,clicked, container);
                } 
            }
        });
    }
}
//
function gameOver (isWin, score, container) {
    const modal = document.createElement('div');
    modal.className = 'game-over';

    if (isWin) {
        modal.classList.add('winner');
        modal.innerText = 'Hai vinto!';
    } else {
        modal.classList.add('loser');
        modal.innerText = 'Hai perso!';
    }

    modal.innerText += `Il tuo punteggio è: ${score} punti.`;

    const button = document.createElement('button');
    button.innerText = 'Resetta il gioco.';
    button.addEventListener('click', reset);

    modal.append(button);
    container.append(modal);
}
//


const buttonLvl1 = document.getElementById('btn-lvl1');
const buttonLvl2 = document.getElementById('btn-lvl2');
const buttonLvl3 = document.getElementById('btn-lvl3');

const gridOutput = document.getElementById('container-grid');

buttonLvl1.addEventListener('click', function() {
    gridOutput.className = 'livello-1';
    reset();
    startGame(100, gridOutput, createBombs);
});

buttonLvl2.addEventListener('click', function() {
    gridOutput.className = 'livello-2';
    reset();
    startGame(81, gridOutput, createBombs);
});

buttonLvl3.addEventListener('click', function() {
    gridOutput.className = 'livello-3';
    reset();
    startGame(49, gridOutput, createBombs);
});