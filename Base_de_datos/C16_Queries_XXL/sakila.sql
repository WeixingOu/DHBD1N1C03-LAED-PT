-- Obtener el nombre y apellido de los primeros 5 actores disponibles. Utilizar alias para mostrar los nombres de las columnas en español.
SELECT first_name AS nombre, last_name AS apellido
FROM actor
LIMIT 5
;
-- Obtener un listado que incluya nombre, apellido y correo electrónico de los clientes (customers) inactivos. Utilizar alias para mostrar los nombres de las columnas en español.
SELECT first_name AS nombre, last_name AS apellido, email
FROM customer
WHERE active = false
;
-- Obtener un listado de films incluyendo título, año y descripción de los films que tienen un rental_duration mayor a cinco. Ordenar por rental_duration de mayor a menor. Utilizar alias para mostrar los nombres de las columnas en español.
SELECT title AS titulo, release_year AS año, description AS descripcion
FROM film
WHERE rental_duration > 5
ORDER BY rental_duration DESC
;
-- Obtener un listado de alquileres (rentals) que se hicieron durante el mes de mayo de 2005, incluir en el resultado todas las columnas disponibles.
SELECT *
FROM rental
WHERE MONTH(rental_date) = 5 AND YEAR(rental_date) = 2005
;
-- Obtener la cantidad TOTAL de alquileres (rentals). Utilizar un alias para mostrarlo en una columna llamada “cantidad”.
SELECT COUNT(*) AS cantidad
FROM rental
;
-- Obtener la suma TOTAL de todos los pagos (payments). Utilizar un alias para mostrarlo en una columna llamada “total”, junto a una columna con la cantidad de alquileres con el alias “Cantidad” y una columna que indique el “Importe promedio” por alquiler
SELECT SUM(amount) AS total, COUNT(*) AS cantidad, AVG(amount) AS 'importe promedio'
FROM payment
;
-- Generar un reporte que responda la pregunta: ¿cuáles son los diez clientes que más dinero gastan y en cuántos alquileres lo hacen?
SELECT customer.customer_id, customer.first_name AS nombre, customer.last_name AS apellido, COUNT(rental.rental_id) AS cantidad, SUM(payment.amount) AS total
FROM customer
JOIN payment ON payment.customer_id = customer.customer_id
JOIN rental ON rental.customer_id = customer.customer_id
GROUP BY customer.customer_id
ORDER BY total DESC
LIMIT 10
;
-- Generar un reporte que indique: ID de cliente, cantidad de alquileres y monto total para todos los clientes que hayan gastado más de 150 dólares en alquileres.
SELECT customer.customer_id, COUNT(rental.rental_id) AS cantidad, SUM(payment.amount) AS total
FROM customer
JOIN payment ON payment.customer_id = customer.customer_id
JOIN rental ON rental.customer_id = customer.customer_id
GROUP BY customer.customer_id
HAVING total > 150
;
-- Generar un reporte que muestre por mes de alquiler (rental_date de tabla rental), la cantidad de alquileres y la suma total pagada (amount de tabla payment) para el año de alquiler 2005 (rental_date de tabla rental).
SELECT MONTH(rental.rental_date) AS mes_alquiler, COUNT(rental.rental_id) AS cantidad, SUM(payment.amount) AS total
FROM rental
JOIN payment ON payment.rental_id = rental.rental_id
WHERE YEAR(rental.rental_date) = 2005
GROUP BY mes_alquiler
;
--  Generar un reporte que responda a la pregunta: ¿cuáles son los 5 inventarios más alquilados? (columna inventory_id en la tabla rental). Para cada una de ellas indicar la cantidad de alquileres.
SELECT rental.inventory_id, COUNT(rental.rental_id) AS cantidad
FROM rental
GROUP BY rental.inventory_id
ORDER BY cantidad DESC
LIMIT 5
;