create database El_Descubierto;
use El_descubierto;

create table sucursal (
	numero_sucursal int not null,
	ciudad varchar(100),
	codigo_postal int,
	pais varchar(100),
	primary key (numero_sucursal)
);

create table clientes (
	id_cliente int not null,
    apellido varchar(100),
    nombre varchar(100),
    domicilio varchar(100),
    ciudad varchar(100),
    pais varchar(100),
    email varchar(100),
    telefono_movil int,
    primary key (id_cliente)
);

create table tipos_interes (
	id_tipo_interes int not null,
    tipo_interes varchar(100),
    primary key (id_tipo_interes)
);

create table tipos_cuenta (
	id_tipo_cuenta int not null,
    tipo_cuenta varchar(100),
    tipo_interes int,
    descubierto_otorgado decimal(10,2),
    fecha_alta_contrato date,
    sucursal int,
    primary key (id_tipo_cuenta),
    foreign key (tipo_interes) references `el_descubierto`.`tipos_interes`(`id_tipo_interes`)
);

create table cuentas (
	numero_cuenta int not null,
    tipo_cuenta int,
    saldo decimal(10,2),
    historial_acceso datetime,
    activa boolean,
	sucursal int,
    primary key (numero_cuenta),
    foreign key (tipo_cuenta) references `el_descubierto`.`tipos_cuenta`(`id_tipo_cuenta`),
    foreign key (sucursal) references `el_descubierto`.`sucursal`(`numero_sucursal`)
);

create table clientes_cuentas (
    cliente int,
    cuenta int,
    primary key (cliente, cuenta),
    foreign key (cliente) references `el_descubierto`.`clientes`(`id_cliente`),
    foreign key (cuenta) references `el_descubierto`.`cuentas`(`numero_cuenta`)
);

create table prestamos (
	numero_prestamo int not null,
    fecha_otorgamiento date,
    importe decimal(10,2),
    cuotas int,
    sucursal int,
    primary key (numero_prestamo),
    foreign key (sucursal) references `el_descubierto`.`sucursal`(`numero_sucursal`)
);

create table clientes_prestamos (
	cliente int,
    prestamo int,
    primary key (cliente, prestamo),
    foreign key (cliente) references `el_descubierto`.`clientes`(`id_cliente`),
    foreign key (prestamo) references `el_descubierto`.`prestamos`(`numero_prestamo`)
);

create table pagos (
	numero_pago int not null,
    numero_cuota int,
    fecha_hora datetime,
    importe_pagado decimal(10,2),
    prestamo int,
    primary key (numero_pago),
	foreign key (prestamo) references `el_descubierto`.`prestamos`(`numero_prestamo`)
);

create table empleados (
	numero_legajo int not null,
	apellido varchar(100),
    nombre varchar(100),
    domicilio varchar(100),
    ciudad varchar(100),
    pais varchar(100),
    email varchar(100),
	telefono_movil int,
    sucursal int,
    primary key (numero_legajo),
	foreign key (sucursal) references `el_descubierto`.`sucursal`(`numero_sucursal`)
);

create table ejecutivos_cuenta (
	empleado int,
    cuenta int,
    primary key (empleado, cuenta),
    foreign key (empleado) references `el_descubierto`.`empleados`(`numero_legajo`),
    foreign key (cuenta) references `el_descubierto`.`cuentas`(`numero_cuenta`)
);

create table encargados_prestamo (
	empleado int,
    prestamo int,
    primary key (empleado, prestamo),
	foreign key (empleado) references `el_descubierto`.`empleados`(`numero_legajo`),
    foreign key (prestamo) references `el_descubierto`.`prestamos`(`numero_prestamo`)
);