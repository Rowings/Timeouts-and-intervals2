// Avant d'afficher le temps passé sur le site je me suis entrainé en affichant l'heure afin de cerner le principe 

const horloge = function() {
    
    let date = new Date();
    let TempsPasse = 0;

    let heure = date.getHours();
    let minutes = date.getMinutes();
    let secondes = date.getSeconds();



     if (secondes < 10) {
     secondes = "0" + secondes;
     }
     if (minutes < 10) {
     minutes = "0" + minutes;
     }

    let affichage = heure + ":" + minutes + ":" + secondes;
    document.body
    document.querySelector("#horloge").innerText = affichage;

}

window.setInterval(horloge, 1000);