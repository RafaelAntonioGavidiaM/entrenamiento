creare table personal(
idPersonal int not null auto_increment,
nombre varchar(30),
apellido varchar(30),
direccion varchar(30),
idGenero int ,

primary key(idPersonal)

);

create table genero(
idGenero  int not null auto_increment,
nombreGenero varchar(30),
primary key(idGenero));

create table respuesta(
idRespuesta int not null auto_increment,
idPersonal int,
respuesta varchar(50),
primary key(idRespuesta));

alter table respuesta add foreign key idPersonal references personal(idPersonal);
alter table personal add foreign key idGenero references genero(idGenero);