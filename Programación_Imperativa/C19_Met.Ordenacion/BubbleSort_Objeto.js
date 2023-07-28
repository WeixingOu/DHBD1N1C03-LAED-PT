let personas = [
	{
		nombre: "Dua",
		apellido: "Lipa",
		ocupacion: "cantante",
		estatura: 173
	},
	{
		nombre: "Ariana",
		apellido: "Grande",
		ocupacion: "cantante",
		estatura: 160
	},
	{
		nombre: "Taylor",
		apellido: "Swift",
		ocupacion: "cantante",
		estatura: 180
	}
];
for ( i = 0; i < personas.length; i++ ) {

    for ( j = 0; j < personas.length - 1; j++ ) {

        if ( personas[j].estatura > personas[j + 1 ].estatura ) {
            let temp = personas[j];
            personas[j] = personas[j+1];
            personas[j+1] = temp;
        }
    }
};
console.log(personas)