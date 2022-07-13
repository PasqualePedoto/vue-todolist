// # Consegna:

// Rifare l'esercizio della to do list, seguendo le istruzioni nelle milestone.
// Questa volta però ogni todo sarà un oggetto, formato da due proprietà:

// @ - text, una stringa che indica il testo del todo
// @ - done, un booleano (true/false) che indica se il todo è stato fatto oppure no

// ! Mi raccomando: nel vostro array originale mettete almeno un task con done: true
// ! e uno con done: false

// $ MILESTONE 1
// Stampare all'interno di una lista, un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

// $ MILESTONE 2
// Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene 
// rimosso dalla lista.

// $ MILESTONE 3
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul 
// pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che 
// quindi viene aggiunto alla lista dei todo esistenti.

// $ Bonus:
// 1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere 
//    il todo alla lista
// 2- cliccando sul testo dell'item, invertire il valore della proprietà done del 
//    to do corrispondente(se done era uguale a false, impostare true e viceversa)

Vue.config.devtools = true;

const toDoList = new Vue({
    name: 'To do list',
    el: '#root',
    data: {
        list: [
            {
                text: 'Fare la spesa',
                done: false,
            },
            {
                text: 'Uscire con Francesca',
                done: false,
            },
            {
                text: 'Comprare la PS5',
                done: false,
            },
            {
                text: 'Tirare i piedi',
                done: false,
            },
        ],
    },
    method: {
        
    },
    computed: {
        
    },
});