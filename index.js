
// const nombre = 'Juan';
// const edad = 23;
// const precio = '$10';
// const misSeriesFavorite = ['El marginal', 'Academia umbrella', 'The Big Bang Theory'];
// const misPeliculasFavorite = ['el señor de los anillos, 1999, juan', 'la vida es bella,2020, ana', 'el padrino,1987, pedro'];
  
// console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años, mis series favoritas son ${misSeriesFavorite} y mis peliculas favoritas son ${misPeliculasFavorite}`);
// misSeriesFavorite.push('The Flash');

// console.log(`Hola, mi nombre es ${nombre} y tengo ${edad+1} años, mis series favoritas son ${misSeriesFavorite} y mis peliculas favoritas son ${misPeliculasFavorite}`);
     

// const lista = []; 

// function mostrarLista(){

//     if (lista.length === 0){
//         console.log('No hay nada que mostrar');
//     }else{
//         console.log(lista);
//     }

// }

// console.log(mostrarLista());


class Usuario {
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido= apellido
        this.libros  =[libros];
        this.mascotas = [mascotas];
    }

 getNombreCompleto(){
        return `${this.nombre} ${this.apellido}`;
    }

 addMascota(nuevaMascota){
        this.mascotas.push(nuevaMascota);
    }
    
 countMasMascota(){
        return this.mascotas.length;
    }
        
 addBook(nuevoLibro, nuevoAutor){
        this.libros.push (`${nuevoLibro} de ${nuevoAutor}`);
    }   
    
    getBooks(){
        return this.libros;
    }   

} 

const usuario1= new Usuario (nombre='Juan', apellido='Perez', libros= 'El señor de los anillos de Leon Paz', mascotas='Gato');


usuario1.getNombreCompleto();
usuario1.addMascota('Perro');
usuario1.addMascota('Gato2');
usuario1.countMasMascota();
usuario1.addBook('suavemente', 'Juan');
usuario1.getBooks();




console.log(usuario1.getNombreCompleto());
console.log(usuario1.countMasMascota());
console.log(usuario1.getBooks());

