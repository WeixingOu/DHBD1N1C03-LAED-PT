const join = (array) => {
    let result = "";
    for (let i = 0; i < array.length; i++) {
      result += array[i];
    }
    return result;
  };
  
  // Ejemplo de uso:
  console.log(join(["h", "o", "l", "a"])); 
  console.log(join(["c", "h", "a", "u"])); 
  console.log(join(["c", "h", "a", "u", "s"])); 