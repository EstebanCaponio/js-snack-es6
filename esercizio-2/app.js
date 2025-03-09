const teams = [
    {
        'teamName': 'italia',
        'points': 0,
        'foulsSuffered': 0
    },

    {
        'teamName': 'spagna',
        'points': 0,
        'foulsSuffered': 0
    },

    {
        'teamName': 'argentina',
        'points': 0,
        'foulsSuffered': 0
    },

    {
        'teamName': 'francia',
        'points': 0,
        'foulsSuffered': 0
    },

    {
        'teamName': 'germania',
        'points': 0,
        'foulsSuffered': 0
    },

    {
        'teamName': 'inghilterra',
        'points': 0,
        'foulsSuffered': 0
    }
]

// per ogni oggetto nell'array genera un punteggio ed un numero di falli subiti random
for(let i=0; i<teams.length; i++){
    teams[i].points=randomValue();
    teams[i].foulsSuffered=randomValue();
}
// debug
console.log(teams);

// creazione nuovo array con solo nome squadra e falli
const teamsSufferedFouls = teams.map(function(teams) {
    return {
        'teamName': teams.teamName,
        'foulsSuffered': teams.foulsSuffered
    };
  });


console.log(teamsSufferedFouls);





// funzione per punti e falli random
function randomValue() {
    return Math.floor(Math.random() * 20) + 1;
  }