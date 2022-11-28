// Récupération des éléments principaux
const agendaTable = document.getElementById('agenda-table');
const subscribeForm = document.getElementById('inscription-form');

// Gestion date automatique
document.getElementById('7mai').addEventListener('click', (event) => {
    document.getElementById('date').innerHTML ="7 et 8 Mai";
    startTimer();
});

document.getElementById('28mai').addEventListener('click', (event) => {
    document.getElementById('date').innerHTML ="28 et 29 Mai";
    startTimer();
});

document.getElementById('11juin').addEventListener('click', (event) => {
    document.getElementById('date').innerHTML ="11 et 12 Juin";
    startTimer();
});

document.getElementById('2juillet').addEventListener('click', (event) => {
    document.getElementById('date').innerHTML ="2 et 3 Juillet";
    startTimer();
});

// Ajout de la class "touched" une fois qu'un champ de formulaire a été modifié
subscribeForm.addEventListener('keyup', function(event) {
    event.target.classList.add('touched');
});

