

let x = Math.floor(Math.random() * 100);
console.log(x);
let guesses = [];    

window.onload = function () {
    document.getElementById("number-submit").addEventListener("click", playGame);   
   }

function playGame()  { 
   
    let numberGuess = document.getElementById("number-guess").value;
    displayresult(numberGuess);
    saveGuessHistory(numberGuess);
    displayHistory();
   }
    
function displayresult(ifnumber) {
    if ((ifnumber > x)) {
        showNumberAbove();
    } else if (ifnumber < x) {
        showNumberBelow();
    } else {
        showYouWon();
    }
}
    function initGame() {
        
    }
    
    function resetResultContent() {
        document.getElementById("result").innerHTML = "";
    }

function saveGuessHistory(guess) {
       
    guesses.push(guess);
    console.log(guesses);
}

    function displayHistory() {
        let index=0; 
        let list = "<ul class='list-group'>";
        
        while (index<guesses.length) {
            list += "<li class='list-group-item'>" + "you guessed " + guesses[index] + "</li>";
            index += 1;
        }
        list += '</ul>'

        document.getElementById("history").innerHTML = list;
    }

    function getDialog(dialogType, text) {
        let dialog;
        switch (dialogType) {
            case "warning":
                dialog = "<div class='alert alert-warning' role='alert'>"
                break;
            case "won":
                dialog = "<div class='alert alert-success' role='alert'>"
                break;
        }
        dialog += text;
        dialog += "</div>"
        return dialog;
    }

    function showYouWon() {
        const text = "Awesome job, you got it!"
     
        let dialog = getDialog('won', text);
        console.log(dialog);
        document.getElementById("result").innerHTML = dialog;
    }

    function showNumberAbove() {
        const text = "Your guess is too high!"
       
        let dialog = getDialog('warning', text);
        document.getElementById("result").innerHTML = dialog;
    }
    function showNumberBelow() {
        const text = "Your guess is too low!"
       
        let dialog = getDialog("warning", text);
        document.getElementById("result").innerHTML = dialog;
    }
