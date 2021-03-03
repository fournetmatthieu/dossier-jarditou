DROP DATABASE IF EXISTS EXO_1;
CREATE DATABASE EXO_1;


USE EXO_1;

CREATE TABLE client
(
cli_num int not null,
cli_nom varchar(50) not null,
cli_adresse varchar(50) not null,
cli_tel varchar(30) not null,
primary key (cli_num)
);

CREATE TABLE produit
(
pro_num int not null,
pro_libelle varchar(50) not null,
pro_description varchar(50) not null,
primary key (pro_num)
);

create table commande
(
com_num int not null,
cli_num int not null, 
com_date datetime not null,
com_obs varchar(50),
primary key (com_num),
foreign key (cli_num) references client (cli_num)
);

create table est_compose
(
com_num int not null,
pro_num int not null,
est_qte int,
foreign key (com_num) references commande (com_num),
foreign key (pro_num) references produit (pro_num)
);


CREATE INDEX index_cli ON client (cli_nom);