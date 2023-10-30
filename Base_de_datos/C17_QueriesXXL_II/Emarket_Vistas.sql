-- Crear una vista con los siguientes datos de los clientes: ID, contacto, y el Fax. En caso de que no tenga Fax, colocar el teléfono, pero aclarándolo. Por ejemplo: “TEL: (01) 123-4567”.
CREATE VIEW cliente_fax AS
SELECT ClienteID, Contacto, IF(Fax = '', CONCAT('TEL: ', Telefono), Fax) AS Fax
FROM clientes
;
-- Se necesita listar los números de teléfono de los clientes que no tengan fax.
-- Consultando la tabla de clientes.
SELECT Telefono
FROM clientes
WHERE Fax IS NULL OR Fax = ''
;
-- Consultando la vista de clientes.
SELECT Telefono
FROM  clientes
INNER JOIN cliente_fax ON cliente_fax.ClienteID = clientes.ClienteID
WHERE clientes.Fax IS NULL OR clientes.Fax = ''
;
-- Crear una vista con los siguientes datos de los proveedores: ID, contacto, compañía y dirección. Para la dirección tomar la dirección, ciudad, código postal y país.
CREATE VIEW proveedor_direccion AS
SELECT ProveedorID AS ID, Contacto, Compania, CONCAT(Direccion, ', ', Ciudad, ', ', CodigoPostal, ', ', Pais) AS Direccion
FROM proveedores
;
-- Listar los proveedores que vivan en la calle Americanas en Brasil. Hacerlo de dos formas distintas:
-- Consultando la tabla de proveedores.
SELECT *
FROM proveedores
WHERE Pais = 'Brazil' AND Direccion LIKE '%Americanas%' 
;
-- Consultando la vista de proveedores.
SELECT proveedor_direccion.*
FROM proveedores
INNER JOIN proveedor_direccion ON proveedor_direccion.ID = proveedores.ProveedorID
WHERE Pais = 'Brazil' AND proveedores.Direccion LIKE '%Americanas%' 
;
-- Crear una vista de productos que se usará para control de stock.
CREATE VIEW control_stock AS
SELECT ProductoID, ProductoNombre, ROUND(PrecioUnitario), UnidadesStock, UnidadesPedidas, 
	CASE 
		WHEN UnidadesPedidas = 0 THEN 'BAJA'
        WHEN UnidadesPedidas < UnidadesStock THEN 'MEDIA'
        WHEN UnidadesPedidas < (UnidadesStock * 2) THEN 'URGENTE'
        ELSE 'SUPER URGENTE'
	END AS PRIORIDAD
FROM productos
;
-- Se necesita un reporte de productos para identificar problemas de stock. Para cada prioridad indicar cuántos productos hay y su precio promedio. No incluir las prioridades para las que haya menos de 5 productos.
SELECT PRIORIDAD, COUNT(*) AS CantidadProductos, AVG(PrecioUnitario) AS PrecioPromedio
FROM control_stock
INNER JOIN productos ON productos.ProductoID = control_stock.ProductoID
GROUP BY PRIORIDAD
HAVING CantidadProductos > 5
;