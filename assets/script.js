
// prendiamo l'elemento padre da assegnare gli items
const CONTAINER_DOM = document.querySelector('#fatherElement');

// creiamo un ciclo "for" che si ripette per 100 volte
for (let i = 1; i <= 100; i++) {

    // creaiamo un nuovo elemento che sara il nostro item da inserrire nel'elemento padre
    const elementCreate = document.createElement('div');
    // al item aggiungiamo già una classe come inizio
    elementCreate.classList.add('item');

    // SE è pari:
    if(i % 2 == 0){
        // aggiungi un attributto title che assegna la seguente stringa
        elementCreate.setAttribute('title', 'is EVEN');
    }
    // ALTRIMENTI:
    else {
        // aggiungi un attributto title che assegna la seguente stringa
        elementCreate.setAttribute('title', 'is ODD');
    }
    
    // SE l'item è divisibile per tre con resto uguale a 0
    // -- è (AND) -- 
    // SE l'item è divisibile per cinque con resto uguale a 0:
    if(i % 3 === 0 && i % 5 === 0){
        // aggiungiamo una nuova classe al item che è addatto alle nostre essigenze
        elementCreate.classList.add('fizz_buzz');
        // inseriamo nel contenuto del item la seguente stringa 
        elementCreate.innerHTML = 'fizzbuzz';
    }
    // ALTRIMENTI: SE l'item è divisibile SOLO per tre (3) con resto uguale a 0
    else if(i % 3 === 0) {
        // aggiungiamo una nuova classe al item che è addatto alle nostre essigenze
        elementCreate.classList.add('fizz');
        // inseriamo nel contenuto del item la seguente stringa 
        elementCreate.innerHTML = 'fizz';
    }
    // ALTRIMENTI: SE l'item è divisibile SOLO per cinque (5) con resto uguale a 0:
    else if(i % 5 === 0){
        // aggiungiamo una nuova classe al item che è addatto alle nostre essigenze
        elementCreate.classList.add('buzz');
        // inseriamo nel contenuto del item la seguente stringa 
        elementCreate.innerHTML = 'buzz';
    }
    else {
        // inseriamo nel contenuto del item il seguente numero del ciclo 
        elementCreate.innerHTML = i;
    }

    // Alla fine del item complettato lo agganciamo al elemento padre
    CONTAINER_DOM.append(elementCreate);
}