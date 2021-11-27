create database hackaton_provi;

create table if not exists usuarios (
 	id serial primary key,
  	nome text not null,
  	email text not null unique,
  	senha text not null,
  	telefone text 
 );
 
 create table if not exists servicos (
 	id serial primary key,
  	nome text not null,
  	email text not null unique,
  	telefone text,
   	resumo text,
   	categoria text not null
 );


