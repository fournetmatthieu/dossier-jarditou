// Déclaration des variables
var formValid = document.getElementById("bouton_envoi");
var nom = document.getElementById("nom");
var missNom = document.getElementById("missNom");
var prenom = document.getElementById("prenom");
var missPrenom = document.getElementById("missPrenom");
var date = document.getElementById("date");
var missDate = document.getElementById("missDate");
var zip = document.getElementById("codepostale");
var missZip = document.getElementById("missZip");
var mail = document.getElementById("mail");
var missMail = document.getElementById("missMail");
var sujet = document.getElementById("sujet");
var missSujet = document.getElementById("missSujet");
var question = document.getElementById("question");
var missQuestion = document.getElementById("missQuestion");
var nomValid = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
var prenomValid = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
var zipValid = /^\d{5}(?:[-\s]\d{4})?$/;


//event click bouton

formValid.addEventListener("click", validation);

//fonction validation 



function validation(event) {
    //si le champs est vide 
    if (nom.validity.valueMissing) {
        event.preventDefault();
        missNom.textContent = 'Nom manquant';
        missNom.style.color = 'red';
    }
    //si le format est incorrect
    else if (nomValid.test(nom.value) == false) {
        event.preventDefault();
        missNom.textContent = 'format incorrect';
        missNom.style.color = 'orange';
    } else {

    }
    //si le champs est vide 
    if (prenom.validity.valueMissing) {
        event.preventDefault();
        missPrenom.textContent = 'Prénom manquant';
        missPrenom.style.color = 'red';
    }
    //si le format est incorrect
    else if (prenomValid.test(prenom.value) == false) {
        event.preventDefault();
        missPrenom.textContent = 'format incorrect';
        missPrenom.style.color = 'orange';
    } else {

    }
    //si le champs est vide 
    if (date.validity.valueMissing) {
        event.preventDefault();
        missDate.textContent = 'Date manquante';
        missDate.style.color = 'red';
    } else {

    }
    //si le champs est vide 
    if (zip.validity.valueMissing) {
        event.preventDefault();
        missZip.textContent = 'Code postal manquant';
        missZip.style.color = 'red';
    }
    //si le format est incorrect
    else if (zipValid.test(zip.value) == false) {
        event.preventDefault();
        missZip.textContent = 'format incorrect';
        missZip.style.color = 'orange';
    } else {

    }
    //si le champs est vide 
    if (mail.validity.valueMissing) {
        event.preventDefault();
        missMail.textContent = 'Email manquant';
        missMail.style.color = 'red';
    } else {

    }

    //si le champs est vide 
    if (question.validity.valueMissing) {
        event.preventDefault();
        missQuestion.textContent = 'Question manquante';
        missQuestion.style.color = 'red';
    } else {

    }
}