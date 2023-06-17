-- ¿Cuántos clientes existen?
SELECT COUNT(*)
FROM clientes
;
-- ¿Cuántos clientes hay por ciudad?
SELECT ciudad, COUNT(*)
FROM clientes
GROUP BY Ciudad
;
-- ¿Cuál es el total de transporte?
SELECT SUM(Transporte)
FROM facturas
;
-- ¿Cuál es el total de transporte por EnvioVia (empresa de envío)?
SELECT EnvioVia, SUM(Transporte)
FROM facturas
GROUP BY EnvioVia
;
-- Calcular la cantidad de facturas por cliente. Ordenar descendentemente por cantidad de facturas.
SELECT ClienteID, COUNT(*) AS 'Cantidad de facturas'
FROM facturas
GROUP BY ClienteID
ORDER BY COUNT(*) DESC
;
-- Obtener el Top 5 de clientes de acuerdo a su cantidad de facturas.
SELECT ClienteID, COUNT(*) AS 'Cantidad de facturas'
FROM facturas
GROUP BY ClienteID
ORDER BY COUNT(*) DESC
LIMIT 5
;
-- ¿Cuál es el país de envío menos frecuente de acuerdo a la cantidad de facturas?
SELECT PaisEnvio, COUNT(*) AS 'Cantidad de facturas'
FROM facturas
GROUP BY PaisEnvio
ORDER BY COUNT(*) ASC
LIMIT 1
;
-- Se quiere otorgar un bono al empleado con más ventas. ¿Qué ID de empleado realizó más operaciones de ventas?
SELECT EmpleadoID, COUNT(*) AS 'Cantidad de facturas'
FROM facturas
GROUP BY EmpleadoID
ORDER BY COUNT(*) DESC
LIMIT 1
;
-- ¿Cuál es el producto que aparece en más líneas de la tabla Factura Detalle?
SELECT ProductoID, COUNT(*)
FROM facturadetalle
GROUP BY ProductoID
ORDER BY COUNT(*) DESC
LIMIT 1
;
-- ¿Cuál es el total facturado? Considerar que el total facturado es la suma de cantidad por precio unitario.
SELECT SUM(Cantidad * PrecioUnitario) as totalFacturado
FROM facturadetalle
;
-- ¿Cuál es el total facturado para los productos ID entre 30 y 50?
SELECT SUM(Cantidad * PrecioUnitario) as totalFacturado
FROM facturadetalle
WHERE ProductoID BETWEEN 30 AND 50
;
-- ¿Cuál es el precio unitario promedio de cada producto?
SELECT ProductoID, AVG(PrecioUnitario)
FROM facturadetalle
GROUP BY ProductoID
;
-- ¿Cuál es el precio unitario máximo?
SELECT MAX(PrecioUnitario)
FROM facturadetalle
;