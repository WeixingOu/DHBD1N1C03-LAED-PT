-- Listar todas las categorías junto con información de sus productos. Incluir todas las categorías aunque no tengan productos.
SELECT *
FROM categorias
LEFT JOIN productos ON productos.CategoriaID = categorias.CategoriaID
;
-- Listar la información de contacto de los clientes que no hayan comprado nunca en emarket.
SELECT clientes.*, facturas.FacturaID
FROM clientes
LEFT JOIN facturas ON facturas.ClienteID = clientes.ClienteID
WHERE FacturaID IS NULL
;
-- Realizar un listado de productos. Para cada uno indicar su nombre, categoría, y la información de contacto de su proveedor. Tener en cuenta que puede haber productos para los cuales no se indicó quién es el proveedor.
SELECT productos.ProductoNombre, productos.CategoriaID, productos.ProveedorID, proveedores.Contacto
FROM productos
LEFT JOIN proveedores ON proveedores.ProveedorID = productos.ProveedorID
;
-- Para cada categoría listar el promedio del precio unitario de sus productos.
SELECT categorias.CategoriaID, AVG(productos.PrecioUnitario) AS PromedioPrecio
FROM categorias
INNER JOIN productos ON productos.CategoriaID = categorias.CategoriaID
GROUP BY categorias.CategoriaID
;
-- Para cada cliente, indicar la última factura de compra. Incluir a los clientes que nunca hayan comprado en e-market.
SELECT clientes.ClienteID, MAX(facturas.FechaFactura) AS ultima_factura
FROM clientes
LEFT JOIN facturas ON facturas.ClienteID = clientes.ClienteID
GROUP BY clientes.ClienteID
;
-- Todas las facturas tienen una empresa de correo asociada (enviovia). Generar un listado con todas las empresas de correo, y la cantidad de facturas correspondientes. Realizar la consulta utilizando RIGHT JOIN.
SELECT correos.Compania, COUNT(facturas.FacturaID)
FROM facturas
RIGHT JOIN correos ON correos.CorreoID = facturas.EnvioVia
GROUP BY correos.Compania
;