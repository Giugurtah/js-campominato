//Variabili globali
let randomNumbers = [];
let points = 0;
const startPlaying = document.getElementById("start_playing");
const numberButtons = document.getElementById("number_buttons");
const resetButton = document.getElementById("reset");
const tytle = document.getElementById("tytle");
const pointsDisplay = document.getElementById("points_display");

startPlaying.addEventListener ("click", function(){
    //Nascondo il pulsante dei numeri e faccio comparire il titolo
    startPlaying.className = "hidden";
    tytle.classList.remove("hidden");

    //Genero gli n numeri casuali tramite funzione
    const bombsNumber = document.getElementById("bombs_number").value;
    numberGenerator(randomNumbers, bombsNumber);
    console.table(randomNumbers);
    
    //Genero 100 pulsanti tramite i quali il giocatore può scegliere i numeri da inserire
    buttonsGenerator(numberButtons, 100);
});

resetButton.addEventListener ("click", function (){
    // Nascondo o faccio comparire gli elementi in modo da resettare la partita
    numberButtons.innerHTML = "";
    startPlaying.classList.remove("hidden");
    tytle.classList.add("hidden");
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

function buttonsGenerator (element, number) {
    for (var i=0; i<number; i++){
        var btn = document.createElement("BUTTON");
        btn.innerHTML = i+1;
        btn.id = "button_number_" + (i+1);
        btn.className = "w-10";
        btn.setAttribute("onclick","game(" + (i+1) + ")");
        element.appendChild(btn);
    }
}

function game(number) {
    var btn = document.getElementById("button_number_" + number);
    if (!randomNumbers.includes(parseInt(btn.innerText))) {
        // Se il pulsante scelto non è un numero dell'array allora il punteggio aumenta, compare una stella ed il bottone corrispettivo si disattiva e non può essere selezionato
        points++;
        btn.disabled = true;
        pointsDisplay.innerHTML += '<i class="fas fa-star"></i>';
    } else {
        // Se il pulsante scelto è un numero dell'array i pulsanti scompaiono, compare un messaggio riassuntivo e c'è la possibilità di resettare la partita 
        numberButtons.innerHTML = "";
        resetButton.classList.remove("hidden");
        pointsDisplay.innerHTML += "<br><h3>Hai perso, totalizzando " + points + " punti";
    }
}

