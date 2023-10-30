-- Listar las canciones cuya duración sea mayor a 2 minutos.
SELECT *
FROM canciones
WHERE milisegundos > 120000
;
-- Listar las canciones cuyo nombre comience con una vocal.
SELECT *
FROM canciones
WHERE nombre 
LIKE 'A%' OR nombre LIKE 'E%' OR nombre LIKE 'I%' OR nombre LIKE 'O%' OR nombre LIKE 'U%'
;
-- Listar las canciones ordenadas por compositor en forma descendente. Luego, por nombre en forma ascendente. Incluir únicamente aquellas canciones que tengan compositor.
SELECT *
FROM canciones
WHERE compositor IS NOT NULL
ORDER BY compositor DESC, nombre ASC
;
-- Listar la cantidad de canciones de cada compositor.
SELECT compositor, COUNT(*) AS CantidadCanciones
FROM canciones
GROUP BY compositor
;
-- Modificar la consulta para incluir únicamente los compositores que tengan más de 10 canciones.
SELECT compositor, COUNT(*) AS CantidadCanciones
FROM canciones
GROUP BY compositor
HAVING Count(*) > 10
;
-- Listar el total facturado agrupado por ciudad.
SELECT ciudad_de_facturacion, COUNT(*) total_facturado
FROM facturas
GROUP BY ciudad_de_facturacion
;
-- Modificar el listado del punto (a) mostrando únicamente las ciudades de Canadá.
SELECT ciudad_de_facturacion, COUNT(*) total_facturado
FROM facturas
WHERE pais_de_facturacion = 'Canada'
GROUP BY ciudad_de_facturacion
;
-- Modificar el listado del punto (a) mostrando únicamente las ciudades con una facturación mayor a 38.
SELECT ciudad_de_facturacion, COUNT(*) total_facturado
FROM facturas
WHERE total > 38
GROUP BY ciudad_de_facturacion
;
-- Modificar el listado del punto (a) agrupando la facturación por país, y luego por ciudad.
SELECT ciudad_de_facturacion, pais_de_facturacion, COUNT(*) AS total_facturado
FROM facturas
GROUP BY pais_de_facturacion, ciudad_de_facturacion
;
-- Listar la duración mínima, máxima y promedio de las canciones.
SELECT MIN(milisegundos) AS duracion_minima, MAX(milisegundos) AS duracion_maxima, AVG(milisegundos) AS duracion_promedio
FROM canciones
;
-- Modificar el punto (a) mostrando la información agrupada por género.
SELECT id_genero, MIN(milisegundos) AS duracion_minima, MAX(milisegundos) AS duracion_maxima, AVG(milisegundos) AS duracion_promedio
FROM canciones
GROUP BY id_genero
;