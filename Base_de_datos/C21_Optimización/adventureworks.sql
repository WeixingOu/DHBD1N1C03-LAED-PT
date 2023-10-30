-- Mostrar el nombre, precio y color de los accesorios para asientos de las bicicletas cuyo precio sea mayor a 100 pesos 
-- Tablas: Production.Product 
-- Campos: Name, ListPrice, Color
SELECT Name, ListPrice, Color
FROM product
WHERE ListPrice > 100
AND Name LIKE '%Seat%'
;
-- Mostrar los empleados que tienen más de 90 horas de vacaciones
-- Tablas: Employee
-- Campos: VacationHours, BusinessEntityID
SELECT VacationHours, EmployeeID
FROM employee
WHERE VacationHours > 90
;
-- Mostrar el nombre, precio y precio con iva de los productos con precio distinto de cero
-- Tablas: Product
-- Campos: Name, ListPrice
SELECT Name, ListPrice, ListPrice * 1.16 AS PriceWithIVA
FROM product
WHERE ListPrice != 0
;
-- Mostrar precio y nombre de los productos 776, 777, 778
-- Tablas: Product
-- Campos: ProductID, Name, ListPrice
SELECT ProductID, Name, ListPrice
FROM product
WHERE ProductID IN (776, 777, 778)
;
-- Mostrar las personas ordenadas primero por su apellido y luego por su nombre
-- Tablas: Contact
-- Campos: Firstname, Lastname
SELECT FirstName, LastName
FROM contact
ORDER BY FirstName, LastName
;
-- Mostrar la cantidad y el total vendido por productos
-- Tablas: SalesOrderDetail
-- Campos: LineTotal
SELECT ProductID, COUNT(*) AS Quantity, SUM(LineTotal) AS TotalSold
FROM SalesOrderDetail
GROUP BY ProductID
;
-- Mostrar el código de subcategoría y el precio del producto más barato de cada una de ellas
-- Tablas: Product
-- Campos: ProductSubcategoryID, ListPrice
SELECT ProductSubcategoryID, MIN(ListPrice)
FROM product
GROUP BY ProductSubcategoryID
;
-- Mostrar todas las facturas realizadas y el total facturado de cada una de ellas ordenado por número de factura pero sólo de aquellas órdenes superen un total de $10.000
-- Tablas: SalesOrderDetail
-- Campos: SalesOrderID, LineTotal
SELECT SalesOrderID, SUM(LineTotal)
FROM salesorderdetail
GROUP BY SalesOrderID
HAVING SUM(LineTotal) > 10000
ORDER BY SalesOrderID
;
-- Mostrar los empleados que también son vendedores
-- Tablas: Employee, SalesPerson
-- Campos: BusinessEntityID
SELECT employee.EmployeeID, salesperson.SalesPersonID
FROM employee
INNER JOIN salesperson ON salesperson.SalesPersonID = employee.EmployeeID
;
-- Mostrar los empleados ordenados alfabéticamente por apellido y por nombre
-- Tablas: Employee, Contact
-- Campos: BusinessEntityID, LastName, FirstName
SELECT employee.EmployeeID, employee.ContactID, contact.FirstName, contact.LastName
FROM employee
INNER JOIN contact ON contact.ContactID = employee.ContactID
ORDER BY contact.FirstName, contact.LastName

;