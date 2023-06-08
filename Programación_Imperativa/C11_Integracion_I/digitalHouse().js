const digitalHouse = (a, b) => {
    for (i = 1; i <= 100; i++) {
        if (i % a === 0 && i % b === 0) {
            console.log('Digital House');
        } else if (i % a === 0) {
            console.log('Digital');
        } else if (i % b === 0) {
            console.log('House');
        } else {
            console.log(i);
        }
    }
};

digitalHouse(3,5);