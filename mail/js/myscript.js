// dichiaro le mie email con potere d'accesso
const adminEmails = ["booleans@boolean.com", "teachers@boolean.com", "tutors@boolean.com", "careerads@boolean.com"];

// prendo l'email inserita dall'utente, tramite il click del pulsante
const btnLoginEl = document.getElementById("btnLogin");

btnLoginEl.addEventListener(
    "click",
    function () {
        // assegno il valore dell'email dell'utente
        let userEmailEl = document.getElementById("userEmail").value;
        // rimuovo valori dal form
        document.getElementById("userEmail").value = "";

        // confronto l'email dell'utente con quelle che possono accedere
        for (let i = 0; i < adminEmails.length; i++) {
            if (userEmailEl != adminEmails[i]) {
                document.getElementById("loginResult").innerHTML = "La tua email non ha i permessi necessari.";
            } else {
                document.getElementById("loginResult").innerHTML = "Puoi entrare.";
                i = adminEmails.length;
            }
        }
    }
)