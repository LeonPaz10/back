// const fin = ()=> console.log("termine");
// const mostrarLetras = (string, cb)=>{
//     let i = 0;
//     const intervalo = setInterval(()=>{
//         console.log(string[i]);
//         i++;
//         if (i >= string.length){
//             clearInterval(intervalo);
//             cb();
//         }
//     },1000);
// }

// mostrarLetras("Leon Paz", fin);


// const fs = require('fs');

// fs.mkdir("./ciudades", error => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log("Carpeta creada");
//     }
// })
// const ciudades = [{nombre:"Buenos Aires", poblacion:1200},{nombre: "La pampa", poblacion:120210 }, {nombre:"Formosa", poblacion:1292}];
// const ciudadesString = JSON.stringify(ciudades);

// fs.appendFile('./ciudades/ciudades.txt', ciudadesString, error => {
     
    
//     if (error) {
//         console.log(error);
//     } else {
//         console.log("Archivo creado");
//     }
    
// })


// ACTIVIDAD CLASE 4, MANEJO DE ARCHIVOS 


const fs = require('fs');
const contenedor = async ()=>{ 
    fs.mkdir('./Productos', error => {

        if (error) {
            console.log(error);
        }
        else{
            console.log("Carpeta creada");
        }
    })
    const productos = [
        {
            nombre: "Laptop",
            precio: 12000,
            imagen: "https://m.media-amazon.com/images/I/71p-M3sPhhL._AC_SY450_.jpg"
        },
        {
            nombre: "Mouse",
            precio: 12000,
            imagen: "https://s3-sa-east-1.amazonaws.com/saasargentina/oaPmQNJPQeMZynN9AOk5/imagen"
        },
        {
            nombre: "Teclado",
            precio: 12000,
            imagen: "https://resource.logitechg.com/w_1000,c_limit,q_auto,f_auto,dpr_auto/d_transparent.gif/content/dam/gaming/en/products/pro-x-keyboard/pro-x-keyboard-gallery-1.png?v=1"
        },
        {
            nombre: "Monitor",
            precio: 12000,
            imagen: "https://www.logitech.com/assets/images/products/logitech-g-series-gaming-laptop-monitor-1.jpg"
        }
        
    ];

    const agregarIdArray=()=>{
        let id = 1;
        productos.forEach(producto => {
            producto.id = id;
            id++;
        });

    }
    agregarIdArray();

    //Devuelve el array con todos los productos GetAll
    const mostrarProductos = ()=>{
            return productos;
         
    }
    console.log(mostrarProductos());  
    

      
    fs.appendFile('./Productos/productos.txt',  JSON.stringify(productos), error => {
        if (error) {
            console.log(error);
        }
        else{
            console.log("Archivo creado");
        }
    })
    
    // muestro en consola el array con los ID agregados
    // console.log(productos.forEach(producto => {
    //     console.log(producto.nombre);
    //     console.log(producto.precio);
    //     console.log(producto.imagen);
    //     console.log(producto.id);

    // }));

    //Recibe un id y devuelve el producto correspondiente
    const buscarProducto = (id)=>{
        let producto = productos.find(producto => producto.id == id);
        if (producto){
            return producto;
        }
        else{
            return null;
        }
    }
    // console.log(buscarProducto());

    //Recibe un id y elimina el producto correspondiente
    const eliminarProducto = (id)=>{
        let producto = productos.find(producto => producto.id == id);
        productos.splice(productos.indexOf(producto), 1);
    }
    // eliminarProducto();

    //Elimina todos los productos DeleteAll
    const eliminarTodos = ()=>{
        productos.splice(0, productos.length);

    }
    // console.log(eliminarTodos());

   

      


}
contenedor();
