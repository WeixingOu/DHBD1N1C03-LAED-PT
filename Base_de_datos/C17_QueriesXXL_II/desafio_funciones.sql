-- Solo los 10 primeros caracteres del nombre de la canción en mayúscula.
SELECT UCASE(SUBSTRING(nombre, 1, 10)) AS CANCION
FROM canciones
;
-- Los años de antigüedad que tiene cada canción desde su publicación. Ej: 25 años.
SELECT CONCAT(YEAR(CURDATE()) - YEAR(publicada), ' años') AS ANTIGUEDAD
FROM canciones
;
-- El peso en KBytes en número entero (sin decimales, 1024 Bytes = 1 KB).
SELECT ROUND(bytes / 1024) AS KBytes
FROM canciones
;
-- El precio formateado con 3 decimales, Ej: $100.123.
SELECT FORMAT(precio_unitario, 3) AS PRECIO 
FROM canciones
;
-- El primer compositor de la canción (notar que si hay más de uno, estos se separan por coma).
SELECT SUBSTRING_INDEX(compositor, ',', 1) AS COMPOSITOR
FROM canciones
;