let j = 0;
let a = 0;
let v = 0;
let personnes;
do {
    personnes = window.prompt("Entrez votre age (la saisie s'arrete losque l'on rentre le nombre 100)");
    if (personnes < 20) {
        j++;
        console.log(j);
    } else if (personne >= 20) {
        a++;
        console.log(a);
    } else if ((personnes >= 40) && (personnes <= 100)) {
        v++;
        console.log(v);
    }
}
while (personnes < 100);

return window.alert("Il y a " + "" + j + "" + " jeunes\n " + "Il y a " + "" + a + "" + " adulte\n " + " Il y a " + " Il y a " + "" + v + "" + " vieux\n " + " dont " + " 1 " + "" + " centenaire ");





let age = 0;
let nb_jeune = 0;
let nb_adulte = 0;
let nb_vieux = 0;
let nb_centenaire = 0;
age = window.prompt("Entrez votre age(si l'age entré est supérieur ou égale a 100 la saisie se fini) ?")


if (age < 20) {
    nb_jeune++;
    age = window.prompt("Entrez votre age(si l'age entré est supérieur ou égale a 100 la saisie se fini) ?")
} else if (age => 40 || age <= 100) {
    nb_vieux++;
    age = window.prompt("Entrez votre age(si l'age entré est supérieur ou égale a 100 la saisie se fini) ?")
} else if (age => 20 || age < 40) {
    nb_adulte++;
    age = window.prompt("Entrez votre age(si l'age entré est supérieur ou égale a 100 la saisie se fini) ?")
} else if (age = 100 || age > 100) {
    nb_centenaire++;

    age = window.prompt("Entrez votre age(si l'age entré est supérieur ou égale a 100 la saisie se fini) ?")
} else {}