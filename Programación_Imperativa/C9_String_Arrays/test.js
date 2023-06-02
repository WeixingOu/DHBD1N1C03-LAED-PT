function sumaArray(a, b, c) {
    let array = [a, ,b, c];
    return array.reduce(function(accu,curr) {
        return accu + curr;
    })
}
console.log(sumaArray(1,2,3));

