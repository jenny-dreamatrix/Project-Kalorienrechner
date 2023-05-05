// output Felder als Variablen definieren
const outputGrundKcal = document.querySelector(".grund-kcal");
const outputGrundKJ = document.querySelector(".grund-kj");
const outputGesamtKcal = document.querySelector(".gesamt-kcal");
const outputGesamtKJ = document.querySelector(".gesamt-kj");

// Funktion, die onsubmit ausgelöst wird
const rechnung = () => {
    // input Felder körpergröße, alter, gewicht und weiblich auslesen
    const körpergröße = Number(document.querySelector("#körpergröße").value);
    const alter = Number(document.querySelector("#alter").value);
    const gewicht = Number(document.querySelector("#gewicht").value);
    const weiblich = document.querySelector("#weiblich").checked;

    console.log({körpergröße}, {alter}, {gewicht}, {weiblich});

    // wenn User weiblich ist, folgende Formel anwenden:
    if (weiblich == true){
        const grundumsatzKcal = Math.round(655.1 + (9.6 * gewicht) + (1.8 * körpergröße) - (4.7 * alter));
        // Weiterleitung zu einer zweiten Funktion, die für weiblich und männlich gleich ist
        rechnungZweiterTeil(grundumsatzKcal);

        // wenn User männlich ist, folgende Formel anwenden:
    } else {
        const grundumsatzKcal = Math.round(66.47 + (13.7 * gewicht) + (5 * körpergröße) - (6.8 * alter));
        // Weiterleitung zu einer zweiten Funktion, die für weiblich und männlich gleich ist
        rechnungZweiterTeil(grundumsatzKcal);
    }
}

const rechnungZweiterTeil = (grundumsatzKcal) => {
    // input Feld aktivität auslesen
    const aktivität = Number(document.querySelector("#aktivität").value);

    // umrechnungen zu KJ und gesamtumsatz
    const grundumsatzKJ = Math.round(grundumsatzKcal * 4.184);
    const gesamtumsatzKcal = Math.round(grundumsatzKcal * aktivität);
    const gesamtumsatzKJ = Math.round(gesamtumsatzKcal * 4.184);

    console.log({aktivität}, {grundumsatzKcal}, {grundumsatzKJ}, {gesamtumsatzKcal}, {gesamtumsatzKJ});

    // output Felder mit den Ergebnissen füllen
    outputGrundKcal.innerHTML = grundumsatzKcal;
    outputGrundKJ.innerHTML = grundumsatzKJ;
    outputGesamtKcal.innerHTML = gesamtumsatzKcal;
    outputGesamtKJ.innerHTML = gesamtumsatzKJ;
}