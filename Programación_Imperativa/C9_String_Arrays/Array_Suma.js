function sumaArray(arr) {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
      suma += arr[i];
    }
    return suma;
  }
  
  console.log(sumaArray([1, 2, 3])); 
  console.log(sumaArray([10, 3, 10])); 
  console.log(sumaArray([-5, 100, 19])); 