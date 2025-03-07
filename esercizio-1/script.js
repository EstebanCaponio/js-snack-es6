const message = document.getElementById('message');

//creazione array di oggetti
const bikes = [
    {
        'bikeName': 'bianchi',
        'bikeWeight': 7
    },

    {
        'bikeName': 'scott',
        'bikeWeight': 6
    },

    {
        'bikeName': 'genesis',
        'bikeWeight': 12
    },

    {
        'bikeName': 'focus',
        'bikeWeight': 8
    }
]

//creazione array dei pesi per fare il confronto
const weights = []

//ciclo per scorrere gli array (oggetti)
for (let i = 0; i < bikes.length; i++) {

    //debug: stampa l'oggetto
    console.log(bikes[i]);
    // pusho il peso delle bici nel nuovo array
    weights.push(bikes[i].bikeWeight);
}
//debug: stampa l'array
console.log(weights);

//trovo il valore più basso nell'array
const minweight = Math.min(...weights);

//ciclo per scorrere gli array (oggetti)
for (let i = 0; i < bikes.length; i++) {

    if( minweight===bikes[i].bikeWeight){

        //debug: stampa l'oggetto che ha il peso più basso
        console.log(bikes[i]);

        message.innerText = `la bici più leggera di tutte è: la "${bikes[i].bikeName}"!
        Con un peso minimo di ± ${bikes[i].bikeWeight}kg`;

    }

}