//Sezione di script per generare numeri random
var randomNumbers = [];
var startPlaying = document.getElementById("start_playing");


startPlaying.addEventListener ("click", function(){
    startPlaying.className = "hidden";
    var bombsNumber = document.getElementById("bombs_number").value;
    while (randomNumbers.length<bombsNumber) {
        var randomNumber = Math.floor(Math.random()*101+1);
        if(!randomNumbers.includes(randomNumber)){
            randomNumbers.push(randomNumber);
        }
    }
    console.table(randomNumbers);
});


//Inziio gioco
