const tableBody = document.getElementById('table-body');


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
for (let i = 0; i < teams.length; i++) {
    teams[i].points = randomValue(20);
    teams[i].foulsSuffered = randomValue(10);
}
// debug
console.log(teams);


let countPosition = 1;


for (i = 0; i < teams.length; i++) {

    // creazione riga tabella
    const tableRow = document.createElement("tr");

    // creazione 4 celle tabella
    const tableDate1 = document.createElement("th");
    tableDate1.setAttribute("scope", "row")
    tableDate1.innerText = countPosition++;
    tableRow.append(tableDate1);
    tableBody.append(tableRow);

    const tableDate2 = document.createElement("td");
    tableDate2.innerText = teams[i].teamName;
    tableRow.append(tableDate2);
    tableBody.append(tableRow);

    const tableDate3 = document.createElement("td");
    tableDate3.innerText = teams[i].points;
    tableRow.append(tableDate3);
    tableBody.append(tableRow);

    const tableDate4 = document.createElement("td");
    tableDate4.innerText = teams[i].foulsSuffered;
    tableRow.append(tableDate4);
    tableBody.append(tableRow);

}











// creazione nuovo array con solo nome squadra e falli
const teamsSufferedFouls = teams.map(function (teams) {
    return {
        'teamName': teams.teamName,
        'foulsSuffered': teams.foulsSuffered
    };
});


console.log(teamsSufferedFouls);





// funzione per punti e falli random
function randomValue(max) {
    return Math.floor(Math.random() * max) + 1;
}