-- Generar un listado de todas las facturas del empleado 'Buchanan'.
SELECT *
FROM facturas
JOIN empleados ON facturas.EmpleadoID = empleados.EmpleadoID
WHERE Apellido = 'Buchanan'
;
-- Generar un listado con todos los campos de las facturas del correo 'Speedy Express'.
SELECT *
FROM facturas
JOIN correos ON facturas.EnvioVia = correos.CorreoID
WHERE Compania = 'Speedy Express'
;
-- Generar un listado de todas las facturas con el nombre y apellido de los empleados.
SELECT facturas.*, Nombre, Apellido
FROM facturas
JOIN empleados ON facturas.EmpleadoID = empleados.EmpleadoID
;
-- Mostrar un listado de las facturas de todos los clientes “Owner” y país de envío “USA”.
SELECT facturas.*
FROM facturas
JOIN clientes ON facturas.ClienteID = clientes.ClienteID
WHERE Titulo = 'Owner' AND
PaisEnvio = 'USA'
;
-- Mostrar todos los campos de las facturas del empleado cuyo apellido sea “Leverling” o que incluyan el producto id = “42”.
SELECT facturas.*
FROM facturas
JOIN empleados ON empleados.EmpleadoID = facturas.EmpleadoID
JOIN facturadetalle ON facturadetalle.FacturaID = facturas.FacturaID
WHERE Apellido = 'Leverling'
OR ProductoID = '42'
;
-- Mostrar todos los campos de las facturas del empleado cuyo apellido sea “Leverling” y que incluya los producto id = “80” o ”42”.
SELECT facturas.*, ProductoID
FROM facturas
JOIN empleados ON empleados.EmpleadoID = facturas.EmpleadoID
JOIN facturadetalle ON facturadetalle.FacturaID = facturas.FacturaID
WHERE Apellido = 'Leverling'
AND (ProductoID = 80 OR ProductoID = 42)
;
-- Generar un listado con los cinco mejores clientes, según sus importes de compras total (PrecioUnitario * Cantidad).
SELECT clientes.*, SUM(PrecioUnitario * Cantidad) AS ComprasTotal
FROM facturas
JOIN clientes ON clientes.ClienteID = facturas.ClienteID
JOIN facturadetalle ON facturadetalle.FacturaID = facturas.FacturaID
GROUP BY ClienteID
ORDER BY ComprasTotal DESC
LIMIT 5
;
-- Generar un listado de facturas, con los campos id, nombre y apellido del cliente, fecha de factura, país de envío, Total, ordenado de manera descendente por fecha de factura y limitado a 10 filas.
SELECT clientes.ClienteID, clientes.Contacto, clientes.Titulo, facturas.FechaFactura, facturas.PaisEnvio, SUM(PrecioUnitario * Cantidad) AS Total
FROM facturas
JOIN clientes ON clientes.ClienteID = facturas.ClienteID
JOIN facturadetalle ON facturadetalle.FacturaID = facturas.FacturaID
GROUP BY facturas.FacturaID, Contacto, Titulo, FechaFactura, PaisEnvio
ORDER BY FechaFactura DESC
LIMIT 10
;