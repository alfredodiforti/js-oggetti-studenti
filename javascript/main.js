//carimento JS post HTML e CSS
$(document).ready(function(){

// creazione un ogetto avente i dati dello studente
  var studente = {
    nome    : 'Alfredo',
    cognome : 'Di Forti',
    età     : 29,
  }
//creazione di un ciclo FOR IN per stampare tutte le chiavi
for (var key in studente) {
  console.log(studente[key]);
}
// creare un array di oggetti di studenti
var studenti = [
  {
       nome    : 'Alessandro',
       cognome : 'Del Piero',
       eta     : 42,
  },
  {
       nome    : 'Francesco',
       cognome : 'Totti',
       eta     : 40,
  },
  {
       nome    : 'Paulo',
       cognome : 'Dybala',
       eta     : 26,
  },

]
// stampare i loro nomi e cognomi
for (var i = 0 ; i < studenti.length ; i++) {
  console.log(studenti[i].nome + ' ' + studenti[i].cognome)
}
// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente all'array creato al punto 2 inserendo nell’ordine: nome, cognome e età.
var n = prompt('Inserisci il nome');
var c = prompt('Inserisci il cognome');
var e = parseInt(prompt('Inserisci l\'età')),

newstudent = {
    nome : n,
    cognome: c,
    eta: e,
};

studenti.push(newstudent);

console.log(studenti);






















});
