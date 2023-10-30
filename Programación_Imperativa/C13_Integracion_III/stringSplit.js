const split = (s) => {
    let arr = [];
    for (let i = 0; i < s.length; i++) {
        arr.push(s.charAt(i));
    }
    return arr
}
console.log(split('hola'));