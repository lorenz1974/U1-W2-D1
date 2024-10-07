/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser.
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// Number: Sono i numeri (cifre), possono essere interi o decimali: 2, 5, 3.14, 1000
// String: È un insieme di caratteri (lettere e/o numeri) racchiusi tra virgolette o apici: "Ciao", 'Ciao', 'Pippo' ma anche '12345'
// Boolean: Può essere solo vero (true) o falso (false). Ad esempio il risultato di queste affermazioni: 2 > 1 (true), 3 < 2 (false), 5 === 5 (true), 6 >= 6 (true)
// Undefined: una variabile che viene dichiarata senza che sia stato assegnato un valore. Esempio: let x; console.log(x);
// Null: Significa "nessun valore" o "vuoto". E' un valore assegnabile a una variabile per indicare che non ha un valore. Esempio: let x = null; console.log(x);

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let myName = 'Lorenzo'
console.log('il valore di myName: ', myName)

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let sum = 12 + 20
console.log('il valore di sum: ', sum)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12
console.log('il valore di x:', x)

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
myName = 'Lione'
console.log('il nuovo valore di myName: ', myName)

const mySurname = 'Rossi'
mySurname = 'Bianchi'
//D1.js:52  Uncaught TypeError: Assignment to constant variable. at D1.js:52:11

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let secondX = 12
let sub = 4 - secondX
console.log(sub)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
name1 = 'john'
name2 = 'John'
console.log('Il valore di name1 !== name2: ', name1 !== name2)
