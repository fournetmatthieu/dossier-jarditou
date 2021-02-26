let vieuxBtn = document.getElementById("vieux");
let multipleBtn = document.getElementById("multiple");
let tableauBtn = document.getElementById("tableau");
let commandeBtn = document.getElementById("commande");



// calcul nombre de jeune et de vieux
const vieux = () => {
    window.alert("Cette fonction classe les ages que vous rentrer en 3 catégories, inferieur a 20 ans (jeunes), entre 20 et 40 ans (adultes) et les plus de 40 ans (vieux) cette fonctions s'arrete des lors que l'age que vous donner dépasse 100 ans")
    let age = 0;
    let nb_jeune = 0;
    let nb_adulte = 0;
    let nb_vieux = 0;



    while (age < 100) {
        age = parseInt(prompt("Quelle est l'age de la personne ?"));

        if (age < 20) {
            nb_jeune++;
        } else if (age >= 20 && age <= 40) {
            nb_adulte++;
        } else {
            nb_vieux++;
        }
    }
    window.alert("il y a tant de jeunes : " + nb_jeune + "\n il y a tant de personne de plus de 20 ans : " + nb_adulte + "\n et il y a tant de vieux : " + nb_vieux)

}











// table de multiplication
function multiple() {
    window.alert("Cette fonction vous affiche la table de multiplication que vous voulez");

    let N = Number(window.prompt("Veuillez entrez votre table de multiplication", ""));
    while (isNaN(N)) {
        N = Number(window.prompt("ERREUR : Valeur invalide, veuillez entrez votre table de multiplication", ""));
    };
    let X = Number(window.prompt("Veuillez entrez le nombre jusqu'ou la table doit aller", ""));
    while (isNaN(X)) {
        X = Number(window.prompt("ERREUR : Valeur invalide, Veuillez entrez le nombre jusqu'ou la table doit aller", ""));
    };

    for (let i = 1; i <= X; i++) {

        document.getElementById("table").innerHTML += `${i}x${N}=${i * N} <br>`;
    }

}

// nom dans le tableau
const tableau = () => {
        window.alert("cette fonction est un tableau dans lequel il y a des noms une fois qu'un de ses noms a etait rentré il est supprimer du tableau qui sera alors afficher dans la console de votre navigateur visible en appuyant sur la touche F12 de votre clavier")
        let tab = ["audrey", "aurelien", "flavien", "jeremy", "laurent", "melik", "nouara", "salem", "samuel", "stephane"];
        let saisie = window.prompt(`
            Veuillez choisir un prénom. parmi : "audrey", "aurelien", "flavien", "jeremy", "laurent", "melik", "nouara", "salem", "samuel", "stephane"
            `)
        if (tab.includes(saisie)) {
            console.log(tab);
            tab.splice(tab.indexOf(saisie), 1);
            tab.push(" ");
            console.log(tab);

        } else {
            alert("erreur réessayer");
            saisie = window.prompt(`
            Veuillez choisir un prénom parmi : "audrey", "aurelien", "flavien", "jeremy", "laurent", "melik", "nouara", "salem", "samuel", "stephane"
            `)
        }
        if (tab.includes(saisie)) {
            console.log(tab);
            tab.splice(tab.indexOf(saisie), 1);
            tab.push(" ");
            console.log(tab);

        }
    }
    // calcul prix de la commande
const commande = () => {
    window.alert("Cette fonction calcul pour vous le prix d'une commande avec ces remises et ces frais de port(port gratuit si supérieur a 500€ en dessous 2% du total et un minimum de 6€; remise de 5% si total compris entre 100€ et 200€ pas de remise en dessous et remise de 10% au dessus.")
    let PU = parseFloat(prompt('Prix unitaire'));
    let QTECOM = parseInt(prompt('Quantité commandée'));
    let TOT = PU * QTECOM;
    let PORT = 0.02 * TOT;
    let REM5 = TOT * 0.05;
    let REM10 = TOT * 0.1;
    let PAP = 0;

    if (isNaN(PU && QTECOM)) {
        alert('Erreur, saisissez des nombres');
    } else {

        if (TOT > 500) {
            PAP = TOT - REM10;
            alert('Le prix à payer sera de ' + PAP + '€.');
        } else if (TOT > 200 && TOT <= 500) {
            if (PORT < 6) {
                PORT = 6;
            } else {
                PORT = 0.02 * TOT;
            }
            PAP = TOT - REM10 + PORT;
            alert('Le prix à payer sera de ' + PAP + '€.');
        } else if (TOT <= 200 && TOT >= 100) {
            PAP = TOT - REM5 + 6;
            alert('Le prix à payer sera de ' + PAP + '€.');
        } else {
            PAP = TOT + 6;
            alert('Le prix à payer sera de ' + PAP.toFixed(2) + '€.');
        }
    }
}
vieuxBtn.onclick = vieux;
multipleBtn.onclick = multiple;
tableauBtn.onclick = tableau;
commandeBtn.onclick = commande;