-- Crear una vista para poder organizar los envíos de las facturas. Indicar número de factura, fecha de la factura y fecha de envío, ambas en formato dd/mm/yyyy, valor del transporte formateado con dos decimales, y la información del domicilio del destino incluyendo dire ción, ciudad, código postal y país, en una columna llamada Destino.
CREATE VIEW VistaEnvios AS
SELECT	facturas.FacturaID AS 'Numero de factura',
		DATE_FORMAT(facturas.FechaFactura, '%d/%m/%Y') AS 'Fecha de factura',
        DATE_FORMAT(facturas.FechaEnvio, '%d/%m/%Y') AS 'Fecha de envio',
        FORMAT(facturas.Transporte, 2) AS 'Valor de transporte',
        CONCAT(facturas.DireccionEnvio, ', ', facturas.CiudadEnvio, ', ', facturas.CodigoPostalEnvio, ', ', facturas.PaisEnvio) AS Destino
FROM facturas
;
-- Realizar una consulta con todos los correos y el detalle de las facturas que usaron ese correo. Utilizar la vista creada.
SELECT  Correos.*,
		VistaEnvios.*
FROM correos
INNER JOIN facturas ON facturas.EnvioVia = correos.CorreoID
INNER JOIN VistaEnvios ON facturas.FacturaID = VistaEnvios.`Numero de factura`
;
-- Crear una vista con un detalle de los productos en stock. Indicar id, nombre del producto, nombre de la categoría y precio unitario.
CREATE VIEW VistaProductosStock AS
SELECT p.ProductoID, p.ProductoNombre, p.PrecioUnitario, c.CategoriaNombre
FROM productos p
INNER JOIN categorias c ON c.CategoriaID = p.CategoriaID 
WHERE p.UnidadesStock > 0
;
-- Escribir una consulta que liste el nombre y la categoría de todos los productos vendidos. Utilizar la vista creada.
SELECT v.ProductoNombre, v.CategoriaNombre, COUNT(*) AS ProductosVendidos
FROM facturadetalle
INNER JOIN VistaProductosStock v ON v.ProductoID = facturadetalle.ProductoID
GROUP BY v.ProductoNombre, v.CategoriaNombre
;

