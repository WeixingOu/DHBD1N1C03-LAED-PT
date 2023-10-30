/* En un concurso de fotografía, donde los usuarios publican una fotografía y obtienen
likes, se registra la cantidad de likes obtenidos por cada usuario en un array. Ordenar
los valores para poder indicar cuál fue la mayor cantidad de likes obtenidos, cuánto
obtuvo el segundo, cuánto el tercero y cuánto el que menos likes obtuvo —suponer
que participaron 15 usuarios y suponer para cada uno, una cantidad de likes—. */

let likes = [124, 76, 92, 143, 200, 87, 115, 150, 64, 178, 95, 112, 81, 135, 160]

for ( i = 0; i < likes.length; i++ ) {
    for ( j = 0; j < likes.length-1; j++ ) {
        if ( likes[j] > likes[j+1])  {
            let temp = likes[j];
            likes[j] = likes[j+1];
            likes[j+1] = temp;
        }
    }
}
console.log(likes)