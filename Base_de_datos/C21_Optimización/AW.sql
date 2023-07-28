-- Mostrar los nombre de los productos que tengan cualquier combinación de ‘mountain bike’
-- Tablas: Product
-- Campos: Name
SELECT Name
FROM product
WHERE Name LIKE '%mountain%bike%'
;
-- Mostrar las personas cuyo nombre empiece con la letra “y”
-- Tablas: Contact
-- Campos: FirstName
SELECT FirstName
FROM contact
WHERE FirstName LIKE 'y%'
;
-- Mostrar cinco productos más caros y su nombre ordenado en forma alfabética
-- Tablas: Product
-- Campos: Name, ListPrice
SELECT Name, ListPrice
FROM product
ORDER BY ListPrice DESC, Name ASC
LIMIT 5
;
-- Mostrar el nombre concatenado con el apellido de las personas cuyo apellido sea johnson
-- Tablas: Contact
-- Campos: FirstName, LastName
SELECT CONCAT(FirstName, ' ', LastName)
FROM contact
WHERE LastName = 'johnson'
;
-- Mostrar todos los productos cuyo precio sea inferior a 150$ de color rojo o cuyo precio sea mayor a 500$ de color negro
-- Tablas: Product
-- Campos: ListPrice, Color
SELECT ListPrice, Color
FROM product
WHERE (ListPrice < 150 AND Color = 'red') 
OR (ListPrice > 500 AND Color = 'black')
;
-- Mostrar la fecha más reciente de venta
-- Tablas: SalesOrderHeader
-- Campos: OrderDate
SELECT MAX(OrderDate)
FROM salesorderheader
;
-- Mostrar el precio más barato de todas las bicicletas
-- Tablas: Product
-- Campos: ListPrice, Name
SELECT MIN(ListPrice), Name
FROM product
WHERE Name LIKE '%bike%'
GROUP BY product.Name
ORDER BY MIN(ListPrice)
;
-- Mostrar los productos y la cantidad total vendida de cada uno de ellos
-- Tablas: SalesOrderDetail
-- Campos: ProductID, OrderQty
SELECT ProductID, SUM(OrderQty)
FROM salesorderdetail
GROUP BY ProductID
;
-- Mostrar la cantidad de facturas que vendieron más de 20 unidades.
-- Tablas: Sales.SalesOrderDetail
-- Campos: SalesOrderID, OrderQty
SELECT SalesOrderID, SUM(OrderQty)
FROM salesorderdetail
GROUP BY SalesOrderID
HAVING SUM(OrderQty) > 20
;
-- Mostrar el código de logueo, número de territorio y sueldo básico de los vendedores
-- Tablas: Employee, SalesPerson
-- Campos: LoginID, TerritoryID, Bonus, BusinessEntityID
SELECT employee.LoginID, salesperson.TerritoryID, salesperson.Bonus
FROM employee
INNER JOIN salesperson ON salesperson.SalesPersonID = employee.EmployeeID
;
-- Mostrar los productos que sean ruedas
-- Tablas: Product, ProductSubcategory
-- Campos: Name, ProductSubcategoryID
SELECT product.Name, productsubcategory.Name
FROM product
INNER JOIN productsubcategory ON productsubcategory.ProductSubcategoryID = product.ProductSubcategoryID
WHERE productsubcategory.Name = 'wheels'
;
-- Mostrar los nombres de los productos que no son bicicletas
-- Tablas: Product, ProductSubcategory
-- Campos: Name, ProductSubcategoryID
SELECT product.Name, productsubcategory.Name
FROM product
INNER JOIN productsubcategory ON productsubcategory.ProductSubcategoryID = product.ProductSubcategoryID
WHERE productsubcategory.Name NOT LIKE '%bikes%'
;