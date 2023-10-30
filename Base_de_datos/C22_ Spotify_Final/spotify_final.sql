-- ¿Qué función podríamos utilizar si quisiéramos traer el promedio de likes de todas las canciones?
SELECT AVG(cantlikes)
FROM cancion
;
--  Si tenemos una query que trae un listado ordenado por el ID de usuarios la cual cuenta con un LIMIT 20 OFFSET 27, ¿cuál sería el primer ID de los registros y cuál el último?
SELECT *
FROM usuario
ORDER BY idUsuario
LIMIT 20
OFFSET 27
;
-- Mostrar la cantidad de canciones que pertenecen a ambos géneros pop y rock cuyo nombre contiene la letra “m”.
SELECT COUNT(cancion.idCancion)
FROM cancion
INNER JOIN generoxcancion gxc ON gxc.IdCancion = cancion.idCancion
INNER JOIN genero ON genero.idGenero = gxc.IdGenero
WHERE genero.Genero IN ('rock', 'pop') 
AND cancion.titulo LIKE '%m%'
;
--  Listar todas las canciones que pertenezcan a más de una playlist. Incluir en el listado el nombre de la canción, el código y a cuántas playlists pertenecen.
SELECT cancion.titulo, cancion.idCancion, COUNT(playlist.idPlaylist)
FROM cancion
INNER JOIN playlistxcancion pxc ON pxc.Idcancion = cancion.idCancion
INNER JOIN playlist ON playlist.idPlaylist = pxc.IdPlaylist
GROUP BY cancion.idCancion
HAVING COUNT(playlist.idPlaylist) > 1
;
--  Generar un reporte con el nombre del artista y el nombre de la canción que no pertenecen a ninguna lista, ordenados alfabéticamente por el nombre del artista.
SELECT artista.Nombre AS nombre_artista, cancion.titulo AS nombre_cancion
FROM artista
INNER JOIN album ON album.idArtista = artista.idArtista
INNER JOIN cancion ON cancion.IdAlbum = album.idAlbum
LEFT JOIN playlistxcancion pxc ON pxc.Idcancion = cancion.idCancion
LEFT JOIN playlist ON playlist.idPlaylist = pxc.IdPlaylist
WHERE pxc.Idcancion IS NULL
ORDER BY artista.Nombre
;
-- Modificar el país de todos los usuarios con el código postal “7600” a “Argentina”
UPDATE usuario
SET Pais_idPais = (SELECT idPais FROM pais WHERE Pais = 'Argentina')
WHERE CP = '7600'
;
-- Listar todos los álbumes que tengan alguna canción que posea más de un género.
SELECT DISTINCT album.*
FROM album
INNER JOIN cancion ON cancion.IdAlbum = album.idAlbum
INNER JOIN generoxcancion gxc ON gxc.IdCancion = cancion.idCancion
GROUP BY album.idAlbum
HAVING COUNT(DISTINCT gxc.IdGenero) > 1;
;
-- Crear un índice agrupado para las canciones cuyo identificador sea el ID.
CREATE INDEX idx_idCancion ON cancion (idCancion);

