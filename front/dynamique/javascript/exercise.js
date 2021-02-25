let vieuxBtn = document.getElementById("vieux");
let multipleBtn = document.getElementById("multiple");
let tableauBtn = document.getElementById("tableau");
let commandeBtn = document.getElementById("commande");



// calcul nombre de jeune et de vieux
const vieux = () => {
        let j = 0;
        let a = 0;
        let v = 0;
        let personnes;
        do {
            personnes = window.prompt("Entrez votre age (la saisie s'arrete losque l'on rentre le nombre 100)");
            if (personnes < 20) {
                j++;
                console.log(personnes);
            } else if ((personnes >= 40) && (personnes <= 100)) {
                v++;
                console.log(v);
            }
        }
        while (personnes < 100);

        window.alert("Il y a " + "" + j + "" + " jeunes\n " + "Il y a " + "" + a + "" + " adulte\n " + " Il y a " + " Il y a " + "" + v + "" + " vieux\n " + " dont " + " 1 " + "" + " centenaire ");
    }
        

    

    // table de multiplication
const multiple = () => {
    
        let N = Number(window.prompt("Veuillez entrez votre table de multiplication", ""));
        while (isNaN(N)) {
            N = Number(window.prompt("ERREUR : Valeur invalide, veuillez entrez votre table de multiplication", ""));
        };
        let X = Number(window.prompt("Veuillez entrez le nombre jusqu'ou la table doit aller", ""));
        while (isNaN(X)) {
            X = Number(window.prompt("ERREUR : Valeur invalide, Veuillez entrez le nombre jusqu'ou la table doit aller", ""));
        };

        for (let i = 1; i <= X; i++) {
        
        document.getElementById("table").innerHTML += `${i}x${N}=${i*N} <br>`;
        }
        
            }

            // nom dans le tableau
        const tableau = () => {
                let tab = ["audrey", "aurelien", "flavien", "jeremy", "laurent", "melik", "nouara", "salem", "samuel", "stephane"];
                let saisie = window.prompt(`
            Veuillez choisir un prénom.
            `)
                if (tab.includes(saisie)) {
                    tab.splice(tab.indexOf(saisie), 1);
                    tab.push(" ");
                    console.log(tab)
                } else {
                    alert("erreur réessayer");
                    saisie = window.prompt(`
            Veuillez choisir un prénom.
            `)
                }
                if (tab.includes(saisie)) {
                    tab.splice(tab.indexOf(saisie), 1);
                    tab.push(" ");
                    console.log(tab)
                }
            }
            // calcul prix de la commande
        const commande = () => {
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