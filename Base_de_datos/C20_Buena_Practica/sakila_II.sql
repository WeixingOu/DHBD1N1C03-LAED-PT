-- Generar un reporte que responda la pregunta: ¿cuáles son los diez clientes que más dinero gastan y en cuantos alquileres lo hacen?
SELECT customer.customer_id, customer.first_name, customer.last_name, SUM(payment.amount) AS monto_total, COUNT(payment.payment_id) AS cantidad_alquileres
FROM customer
INNER JOIN payment ON payment.customer_id = customer.customer_id
GROUP BY customer.customer_id, customer.first_name, customer.last_name
ORDER BY monto_total DESC
LIMIT 10
;
-- Generar un reporte que indique: el id del cliente, la cantidad de alquileres y el monto total para todos los clientes que hayan gastado más de 150 dólares en alquileres.
SELECT customer.customer_id, COUNT(payment.payment_id) AS cantidad_alquileres, SUM(payment.amount) AS monto_total
FROM customer
INNER JOIN payment ON payment.customer_id = customer.customer_id
GROUP BY customer.customer_id, customer.first_name, customer.last_name
HAVING monto_total > 150
;
-- Generar un reporte que responda a la pregunta: ¿cómo se distribuyen la cantidad y el monto total de alquileres en los meses pertenecientes al año 2005? (tabla payment).
SELECT COUNT(payment.payment_id) AS cantidad_alquileres, SUM(payment.amount) AS monto_total, EXTRACT(MONTH FROM payment_date) as mes
FROM payment
WHERE YEAR(payment_date) = 2005
GROUP BY mes
ORDER BY mes
;
-- Generar un reporte que responda a la pregunta: ¿cuáles son los 5 inventarios más alquilados? (columna inventory_id en la tabla rental) Para cada una de ellas, indicar la cantidad de alquileres.
SELECT COUNT(rental.rental_id) AS cantidad_alquileres
FROM rental
GROUP BY rental.inventory_id
ORDER BY cantidad_alquileres DESC
LIMIT 5
;
-- Generar un reporte que responda a la pregunta: Para cada tienda (store), ¿cuál es la cantidad de alquileres y el monto total del dinero recaudado por mes?
SELECT store.store_id, MONTH(rental.rental_date) as mes, COUNT(rental.rental_id) AS cantidad_alquileres, SUM(payment.amount) AS monto_total
FROM store
INNER JOIN customer ON customer.store_id = store.store_id
INNER JOIN rental ON rental.customer_id = customer.customer_id
INNER JOIN payment ON payment.rental_id = rental.rental_id
GROUP BY store.store_id, mes
;
-- Generar un reporte que responda a la pregunta: ¿cuáles son las 10 películas que generan más ingresos? ¿ Y cuáles son las que generan menos ingresos? Para cada una de ellas indicar la cantidad de alquileres.
SELECT film.film_id, film.title, COUNT(rental.rental_id) AS cantidad_alquileres, SUM(payment.amount) AS monto_total
FROM film
INNER JOIN inventory ON inventory.film_id = film.film_id
INNER JOIN rental ON rental.inventory_id = inventory.inventory_id
INNER JOIN payment ON payment.rental_id = rental.rental_id
GROUP BY film.film_id, film.title
ORDER BY monto_total DESC
LIMIT 10
;
-- ¿Existen clientes que no hayan alquilado películas?
SELECT customer.customer_id, customer.first_name, customer.last_name
FROM customer
LEFT JOIN rental ON rental.customer_id = customer.customer_id
WHERE rental.customer_id IS NULL
;
-- El jefe de stock quiere discontinuar las películas (film) con menos alquileres (rental). ¿Qué películas serían candidatas a discontinuar? Recordemos que pueden haber películas con 0 (Cero) alquileres.
SELECT film.film_id, film.title, COUNT(rental.rental_id) AS cantidad_alquileres
FROM film
LEFT JOIN inventory ON inventory.film_id = film.film_id
LEFT JOIN rental ON rental.inventory_id = inventory.inventory_id
GROUP BY film.film_id, film.title
HAVING cantidad_alquileres >= 0
ORDER BY cantidad_alquileres
;