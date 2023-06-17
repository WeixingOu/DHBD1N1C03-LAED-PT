const palindromo = (a) => {
    a = a.toLowerCase().replace(/\s/g, '');
    for (let i = 0; i <= (a.length) / 2; i++) {
        if ( a[i] !== a[a.length - 1 - i]) {
            return false
        }
    }
    return true;
};

console.log(palindromo('lana'));