UPDATE `el_descubierto`.`tipos_cuenta` SET `tipo_cuenta` = 'Caja Ahorro' WHERE (`id_tipo_cuenta` = '1');
UPDATE `el_descubierto`.`tipos_cuenta` SET `tipo_cuenta` = 'Cuenta Corriente' WHERE (`id_tipo_cuenta` = '2');

DELETE FROM `el_descubierto`.`tipos_cuenta` WHERE (`id_tipo_cuenta` = '3');