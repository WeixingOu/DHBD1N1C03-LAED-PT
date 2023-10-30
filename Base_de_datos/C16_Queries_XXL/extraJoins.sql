-- Obtener los artistas que han actuado en una o más películas.
SELECT artista.*, pelicula_id
FROM artista 
INNER JOIN artista_x_pelicula ON artista_x_pelicula.artista_id = artista.id
;
-- Obtener las películas donde han participado más de un artista según nuestra base de datos.
SELECT pelicula.*, artista_id
FROM pelicula
INNER JOIN artista_x_pelicula ON artista_x_pelicula.pelicula_id = pelicula.id
;
-- Obtener aquellos artistas que han actuado en alguna película, incluso aquellos que aún no lo han hecho, según nuestra base de datos.
SELECT artista.*, pelicula_id
FROM artista
LEFT JOIN artista_x_pelicula ON artista_x_pelicula.artista_id = artista.id
;
-- Obtener las películas que no se le han asignado artistas en nuestra base de datos.
SELECT pelicula.*, artista_id
FROM pelicula
LEFT JOIN artista_x_pelicula ON artista_x_pelicula.pelicula_id = pelicula.id
WHERE artista_x_pelicula.artista_id IS NULL
;
-- Obtener aquellos artistas que no han actuado en alguna película, según nuestra base de datos.
SELECT artista.*, pelicula_id
FROM artista
LEFT JOIN artista_x_pelicula ON artista_x_pelicula.artista_id = artista.id
WHERE pelicula_id IS NULL
;
-- Obtener aquellos artistas que han actuado en dos o más películas según nuestra base de datos.
SELECT artista.*, COUNT(artista_x_pelicula.pelicula_id)
FROM artista
INNER JOIN artista_x_pelicula ON artista_x_pelicula.artista_id = artista.id
GROUP BY artista_id
HAVING COUNT(artista_x_pelicula.pelicula_id) >= 2;
;
-- Obtener aquellas películas que tengan asignado uno o más artistas, incluso aquellas que aún no le han asignado un artista en nuestra base de datos.
SELECT pelicula.*, COUNT(artista_id)
FROM pelicula
LEFT JOIN artista_x_pelicula ON artista_x_pelicula.pelicula_id = pelicula.id
GROUP BY pelicula.id
;