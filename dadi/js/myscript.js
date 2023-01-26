// assegno un valore al mio bottone e controllo il suo evento
const battleBtnEl = document.getElementById("battleBtn");

battleBtnEl.addEventListener(
    "click",
    function () {
        // dichiaro i possibili numeri dei due dadi e i due dadi
        const userDado = Math.floor((Math.random() * 6) + 1);
        const computerDado = Math.floor((Math.random() * 6) + 1);

        // scrivo il punteggio dei giocatori
        document.getElementById("yourPoint").innerHTML = "Il tuo punteggio è " + userDado + " .";
        document.getElementById("computerPoint").innerHTML = "Il punteggio del computer è " + computerDado + " .";

        // confronto i due punteggi e scelgo il vincitore
        if (userDado > computerDado) {
            document.getElementById("winner").innerHTML = "Hai vinto!";
        } else if (computerDado > userDado) {
            document.getElementById("winner").innerHTML = "Hai perso!";
        } else if (computerDado == userDado) {
            document.getElementById("winner").innerHTML = "Avete pareggiato!";
        }
    }
)