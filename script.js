//      Pari e Dispari:
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
let evenOrOdd = prompt('Scegli tra pari o dispari: ');
let userNumb =  prompt('Inserisci un numero tra 1 e 5: ');
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function randomNumb1to5() {
    // genera un numero a caso tra 0 e 1
    const numbGen0to1 = Math.random();
    // *5 per raggiungere la cifra richiesta
    const scaledNumb = numbGen0to1 * 5;
    const numbResult = Math.floor(scaledNumb) + 1;
    return numbResult;
}
// Sommiamo i due numeri

// Stabiliamo se la somma dei due numeri è pari o dispari (usando un'altra funzione)

// Dichiariamo chi ha vinto.







//      Palidroma:
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// E' vietato usare split(), reverse() e simili.
