DROP DATABASE IF EXISTS hotel; 

CREATE DATABASE hotel;  

USE hotel; 

CREATE TABLE Reservation (
num_chambre INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
num_client INT NOT NULL,
date_debut DATETIME NOT NULL,
date_fin DATETIME NOT NULL,
date_reservation DATETIME NOT NULL,
montant_arrhes DECIMAL,
prix_total DECIMAL NOT NULL,
); 
CREATE TABLE chambre ( 
capacite_chambre INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
degre_confort INT NOT NULL, 
exposition VARCHAR NOT NULL,
type_chambre VARCHAR NOT NULL,
num_chambre INT NOT NULL,
num_hotel INT NOT NULL, 
); 
CREATE TABLE client ( 
adresse_client VARCHAR NOT NULL AUTO_INCREMENT PRIMARY KEY, 
nom_client VARCHAR NOT NULL, 
prenom_client VARCHAR NOT NULL,
num_client INT NOT NULL,
); 
CREATE TABLE station ( 
num_station INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
nom_station VARCHAR NOT NULL,
); 
CREATE TABLE hotel ( 
capacite_hotel INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
categorie_hotel VARCHAR NOT NULL, 
nom_hotel VARCHAR NOT NULL,
adresse_hotel VARCHAR NOT NULL,
num_hotel INT NOT NULL,
num_station INT NOT NULL,
); 
