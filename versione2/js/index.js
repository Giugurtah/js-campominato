//Variabili globali
let randomNumbers = [];
let insertedNumbers = [];
let points = 0;
const startPlaying = document.getElementById("start_playing");
const numberSelector = document.getElementById("number_selector");
const tytle = document.getElementById("tytle");
const numberSubmit = document.getElementById("submit_number");
const numberInsert = document.getElementById("insert_number");
const pointsDisplay = document.getElementById("points_display");
const resetButton = document.getElementById("reset");

startPlaying.addEventListener ("click", function(){
    //Nascondo il pulsante dei numeri e faccio comparire il titolo
    startPlaying.className = "hidden";
    tytle.classList.remove("hidden");
    numberSelector.classList.remove("hidden");

    //Genero gli n numeri casuali tramite funzione
    const bombsNumber = document.getElementById("bombs_number").value;
    numberGenerator(randomNumbers, bombsNumber);
    console.table(randomNumbers);
});

numberSubmit.addEventListener ("click", function(){
    const errorMessage = document.getElementById("error_message");
    //Variabile ausiliaria che contiene il numero inserito da form
    const auxNumber = parseInt(numberInsert.value);
    //Se il numero già è stato inserito appare un messaggio d'errore
    if (insertedNumbers.includes(auxNumber)) {
        errorMessage.classList.remove("hidden");
    } else {
        //Se c'è il messaggio d'errore dovuto ad un numero precedente, scompare
        if (errorMessage.className != "hidden"){
            errorMessage.classList.add("hidden");
        }
        if (!randomNumbers.includes(auxNumber)) {
            //Se il numero inserito è corretto viene aggiunto all'array di numeri corretti e compare una stellina
            insertedNumbers.push(auxNumber);
            pointsDisplay.innerHTML += '<i class="fas fa-star"></i>';
        } else {
            //Altrimenti la sezione di inserimento numeri scompare, appare la scritta di punteggio totale e il pulsante di reset
            resetButton.classList.remove("hidden");
            pointsDisplay.innerHTML += "<br><h3>Hai perso, totalizzando " + insertedNumbers.length + " punti";
            tytle.classList.add("hidden");
            numberSelector.classList.add("hidden");
        }
    }
    console.table(insertedNumbers);
})

resetButton.addEventListener ("click", function (){
    // Nascondo o faccio comparire gli elementi in modo da resettare la partita
    startPlaying.classList.remove("hidden");
    tytle.classList.add("hidden");
    numberInsert.value = "1";
    pointsDisplay.innerHTML = "";
    resetButton.classList.add("hidden");
    randomNumbers = [];
})

function numberGenerator (array, number) {
    while (array.length<number) {
        const randomNumber = Math.floor(Math.random()*101+1);
        if(!array.includes(randomNumber)){
            array.push(randomNumber);
        }
    }
}

