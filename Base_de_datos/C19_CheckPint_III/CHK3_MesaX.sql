-- 1. Listar todos los clientes que tengan tres o más cuentas bancarias. Mostrar el número de cliente, apellido y nombre separado por un espacio dentro de una misma columna denominada "Cliente" y, la cantidad de cuentas que posee.
SELECT CONCAT(cliente.id, ' ', cliente.apellido, ' ', cliente.nombre) AS Cliente, COUNT(cuenta.numero) AS cantidad_cuentas
FROM cliente
INNER JOIN cliente_x_cuenta cxc ON cxc.cliente_id = cliente.id
INNER JOIN cuenta ON cuenta.numero = cxc.cuenta_numero
GROUP BY cliente.id
HAVING COUNT(cuenta.numero) >= 3
;
-- 2.Listar todos los clientes que no tengan una cuenta bancaria. Mostrar el número de cliente, apellido y nombre en mayúsculas dentro de una misma columna denominada "Cliente sin cuenta bancaria".
SELECT CONCAT(UPPER(cliente.id), ' ', UPPER(cliente.apellido), ' ', UPPER(cliente.nombre)) AS "Cliente sin cuenta bancaria"
FROM cliente
WHERE cliente.id NOT IN (SELECT cliente_x_cuenta.cliente_id FROM cliente_x_cuenta)
;
-- 3. Listar todos los clientes que tengan al menos un préstamo que corresponda a la sucursal de la ciudad de "Pilar - Buenos Aires". Se debe mostrar el número de cliente, apellido, nombre, número de préstamo, número de sucursal, nombre de la ciudad y país de dicha sucursal.
SELECT cliente.id, cliente.apellido, cliente.nombre, prestamo.id AS numero_prestamo, sucursal.numero AS numero_sucursal, ciudad.nombre AS ciudad, pais.nombre AS pais
FROM cliente
INNER JOIN cliente_x_prestamo cxp ON cxp.cliente_id = cliente.id
INNER JOIN prestamo ON prestamo.id = cxp.prestamo_id
INNER JOIN ciudad ON ciudad.id = cliente.ciudad_id
INNER JOIN sucursal ON sucursal.Ciudad_id = ciudad.id
INNER JOIN pais ON pais.id = ciudad.pais_id
WHERE ciudad.nombre = 'Pilar - Buenos Aires'
;
-- 4. Listar los clientes que tengan una o más cajas de ahorro y que en la segunda letra de su apellido contenga una "e". 
SELECT c.id, c.apellido, c.nombre
FROM cliente 
INNER JOIN cliente_x_cuenta cc ON c.id = cliente_id
INNER JOIN cuenta cu ON cc.cuenta_numero = cu.numero
INNER JOIN cuenta_tipo ct ON cu.cuenta_tipo_id = ct.id
WHERE ct.id = 1 AND SUBSTRING(c.apellido, 2, 1) = 'e'
;
-- 6. Calcular el importe total y la cantidad de préstamos otorgados en el mes de agosto por cada cliente. Mostrar el número de cliente, importe total y cantidad de préstamos.
SELECT *
FROM prestamo
WHERE fecha_otorgado BETWEEN  "2021-08-01" and "2021-08-31"
;
-- 7. Calcular el importe total y la cantidad de cuotas pagadas para el préstamo número cuarenta
select sum(importe)
FROM pago 
Where prestamo_id = 40;
 SELECT sum(cuota_nro)
FROM pago 
where prestamo_id = 40
;
-- 8. Determinar el importe restante que falta por pagar para el préstamo número 45.
SELECT prestamo.importe - SUM(pago.importe) AS importe_restante
FROM prestamo
INNER JOIN pago ON pago.prestamo_id = prestamo.id
WHERE prestamo.id = 45
;
-- 9. Listar los préstamos de la sucursal número cuatro. Mostrar el número de cliente, apellido, nombre y el número de préstamo.
select cliente.id, cliente.nombre, cliente.apellido, prestamo.sucursal_numero
from prestamo 
inner join cliente on prestamo.id = cliente.id
where sucursal_numero = 4
;
-- 10. Reportar el número del préstamo y la cantidad de cuotas pagadas por cada uno préstamo. Se debe formatear el dato de la cantidad de cuotas pagadas, por ejemplo, si se ha pagado una cuota, sería "1 cuota paga"; si se han pagado dos o más cuotas, sería en plural "2 cuotas pagas" y "Ninguna cuota paga" para los préstamos que aún no han recibido un pago.
SELECT prestamo_id, cuota_nro,
CASE 
	when cuota_nro = 1 then "1cuota pagas"
    when cuota_nro >= 2 then "2cuotas pagas"
end 
FROM pago
;
-- 11. Listar absolutamente todos los empleados y las cuentas bancarias que tengan asociada. Mostrar en una sola columna el apellido y la letra inicial del nombre del empleado (Ej. Tello Aguilera C.), en otra columna, el número de cuenta y el tipo (Ej. 10560 - CAJA DE AHORRO). Los campos nulos deben figurar con la leyenda"Sin asignación".
select CONCAT(apellido, ' ', LEFT(nombre, 1)) as Apellido, cuenta.numero, cuenta_tipo.id, cuenta_tipo.tipo
from empleado
inner join cuenta on empleado.legajo = ejecutivo_cuenta
inner join cuenta_tipo on ejecutivo_cuenta = cuenta_tipo.id
;
-- 12. Reportar todos los datos de los clientes y los números de cuenta que tienen.
select * 
from cliente
inner join cuenta on cliente.id = cuenta_tipo_id
;
-- 13. Listar los clientes con residencia en las ciudades de "Las Heras - Mendoza", "Viña del Mar - Valparaíso", "Córdoba - Córdoba" y "Monroe - Buenos Aires". Se debe mostrar el apellido, nombre del cliente y todos los datos referidos a la ciudad
SELECT cliente.apellido, cliente.nombre, ciudad.nombre, ciudad.codigo_postal, pais.nombre AS pais
FROM cliente
INNER JOIN ciudad ON ciudad.id = cliente.ciudad_id
INNER JOIN pais ON pais.id = ciudad.pais_id
WHERE ciudad.nombre IN ('Las Heras - Mendoza', 'Viña del Mar - Valparaíso', 'Córdoba - Córdoba', 'Monroe - Buenos Aires')
;
 -- 14. Listar los clientes que tienen préstamos otorgados entre 15/08/21 al 5/09/21 (ordenarlos por fecha de otorgamiento). Mostrar sólo el email del cliente, teléfono móvil y todos los datos referidos al préstamo
SELECT cliente.email, cliente.telefono_movil, prestamo.*
FROM cliente
INNER JOIN cliente_x_prestamo cxp ON cxp.cliente_id = cliente.id
INNER JOIN prestamo on prestamo.id = cxp.prestamo_id
WHERE prestamo.fecha_otorgado BETWEEN '2021-08-15' AND '2021-09-05'
ORDER BY prestamo.fecha_otorgado
;
-- 15. Listar de manera ordenada, los empleados que no pertenezcan a la sucursal de la ciudad "Monroe - Buenos Aires" y que la fecha de alta del contrato se halle dentro del rango 2016 al 2018. Mostrar el email del empleado, número de sucursal y el nombre de la ciudad
SELECT empleado.email, empleado.sucursal_numero, ciudad.nombre as ciudad
FROM empleado
INNER JOIN sucursal ON sucursal.numero = empleado.sucursal_numero
INNER JOIN ciudad ON ciudad.id = sucursal.Ciudad_id
WHERE ciudad.nombre != 'Monroe - Buenos Aires' 
AND YEAR(empleado.alta_contrato_laboral) BETWEEN 2016 AND 2018
ORDER BY empleado.email
;
-- 16. Listar las cuentas bancarias que tienen dos titulares. Mostrar sólo el número de cuenta y la cantidad de titulares
SELECT cuenta.numero, COUNT(*) AS cantidad_titulares
FROM cuenta
INNER JOIN cliente_x_cuenta cxc ON cxc.cuenta_numero = cuenta.numero
INNER JOIN cliente ON cliente.id = cxc.cliente_id
GROUP BY cuenta.numero
HAVING cantidad_titulares = 2
;
-- 17. Se desea conocer el segundo pago con mayor importe efectuado en las sucursales de Chile. Mostrar el número y hora de pago, importe pagado y el nombre del país.
SELECT pago.id, TIME(pago.fecha) AS hora_pago, pago.importe, pais.nombre
FROM pago
INNER JOIN prestamo ON prestamo.id = pago.id
INNER JOIN sucursal ON sucursal.numero = prestamo.sucursal_numero
INNER JOIN ciudad ON ciudad.id = sucursal.Ciudad_id
INNER JOIN pais ON pais.id = ciudad.pais_id
WHERE pais.nombre = 'Chile'
ORDER BY pago.importe DESC
LIMIT 1
OFFSET 1
;
-- 18. Listar los clientes que no tienen préstamos. Mostrar el apellido, nombre y email del cliente.
SELECT cliente.apellido, cliente.nombre, cliente.email
FROM cliente
LEFT JOIN cliente_x_prestamo cxp ON cxp.cliente_id = cliente.id
WHERE cxp.prestamo_id IS NULL
;
-- 20. Listar las ciudades (sin repetir) que tengan entre dos a cuatro cuentas bancarias. Se debe mostrar el país, ciudad y la cantidad de cuentas. Además, se debe ordenar por país y ciudad.

-- 21. Mostrar el nombre, apellido, número de cuenta de todos los clientes que poseen una cuenta tipo "CAJA DE AHORRO", cuyo saldo es mayor que $ 15000
select cliente_id from cliente_x_cuenta 
where cuenta_tipo_id ="CAJA DE AHORRO" and saldo > "15000"
;
-- 22. Por cada sucursal, contar la cantidad de clientes y el saldo promedio de suscuentas.
select count(sucursal_numero) from cuenta
;
-- 25. Listar el apellido y nombre de todos los empleados del banco. Si poseen cuentas a cargo, mostrar cuántas. Ordenar por apellido y nombre.
SELECT apellido, nombre, COUNT(numero) AS cantidad_cuentas
FROM empleado
LEFT JOIN cuenta ON empleado.legajo = cuenta.ejecutivo_cuenta
GROUP BY empleado.legajo, apellido, nombre
ORDER BY apellido, nombre;
