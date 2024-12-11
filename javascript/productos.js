let productos = JSON.parse(localStorage.getItem("products")) || [
    { 
        id: 1, 
        nombre: "Camiseta Argentina 23/24", 
        descripcion: "Demuestra tu pasión por la Selección Argentina con la camiseta oficial de la temporada 23/24. Este modelo combina un diseño icónico con tecnología de vanguardia para brindar comodidad y estilo tanto en el campo como fuera de él. Confeccionada en tejido transpirable y de secado rápido, incluye los colores tradicionales celeste y blanco con detalles actualizados que destacan su carácter único. Perfecta para los verdaderos fanáticos que desean celebrar cada partido con orgullo.", 
        precio: 120000, 
        imagen: "/assets/f-1.png", 
        disponible: true 
    },
    { 
        id: 2, 
        nombre: "Camiseta Boca Juniors 23/24", 
        descripcion: "Muestra tu amor por el Xeneize con la camiseta oficial de la temporada 23/24. Diseñada con los clásicos colores azul y oro, incorpora detalles modernos que resaltan la identidad del club. Fabricada con tejido de alta calidad, ofrece transpirabilidad y confort, ideal para alentar en la Bombonera o donde estés. Una prenda imprescindible para los hinchas que viven la pasión boquense al máximo.", 
        precio: 100000, 
        imagen: "/assets/f-2.webp", 
        disponible: true 
    },
    { 
        id: 3, 
        nombre: "Botines Nike Superfly 9 Rosa", 
        descripcion: "Domina el juego con los botines Nike Superfly 9 en color rosa. Diseñados para velocidad y precisión, cuentan con una estructura ligera, ajuste ceñido y tecnología de tracción avanzada que optimiza tus movimientos en el campo. Su diseño vibrante combina estilo y rendimiento, ideal para jugadores que buscan destacar en cada jugada.", 
        precio: 20000, 
        imagen: "/assets/f-3.jpg", 
        disponible: true 
    },
    { 
        id: 4, 
        nombre: "Botines Nike Zoom Vapor 15 Academy", 
        descripcion: "Maximiza tu rendimiento con los Nike Zoom Vapor 15 Academy. Equipados con tecnología Zoom Air para una respuesta explosiva, ofrecen un ajuste cómodo y seguro gracias a su diseño anatómico. Su suela optimizada garantiza tracción superior en cualquier superficie, ideal para jugadores que buscan velocidad, control y estilo en cada partido.", 
        precio: 160000, 
        imagen: "/assets/f-4.jpg", 
        disponible: true 
    },
    { 
        id: 5, 
        nombre: "Pantalon deportivo Adidas", 
        descripcion: "Disfruta de comodidad y estilo con el pantalón deportivo Adidas. Confeccionado en materiales ligeros y transpirables, cuenta con un ajuste relajado y cintura elástica para mayor confort. Ideal para entrenar o relajarte, combina diseño moderno con la calidad característica de la marca.", 
        precio: 115000, 
        imagen: "/assets/o-1.jpg", 
        disponible: true 
    },
    { 
        id: 6, 
        nombre: "Short deportivo Topper", 
        descripcion: "Rinde al máximo con el short deportivo Topper. Ligero y cómodo, está diseñado con materiales transpirables que garantizan libertad de movimiento. Perfecto para entrenamientos, partidos o uso diario, combina funcionalidad y estilo para acompañarte en cualquier actividad.", 
        precio: 53000, 
        imagen: "/assets/o-2.jpg", 
        disponible: true 
    },
    { 
        id: 7, 
        nombre: "Remera deportiva Puma", 
        descripcion: "Entrena con estilo y comodidad con la remera deportiva Puma. Fabricada con materiales ligeros y tecnología de secado rápido, ofrece transpirabilidad y libertad de movimiento. Su diseño moderno y versátil la hace ideal tanto para el gimnasio como para uso casual.", 
        precio: 35000, 
        imagen: "/assets/o-3.jpg", 
        disponible: true 
    },
    { 
        id: 8, 
        nombre: "Zapatillas deportiva Puma", 
        descripcion: "Eleva tu rendimiento con las zapatillas deportivas Puma. Con un diseño innovador y materiales de alta calidad, ofrecen un ajuste cómodo y un excelente soporte. Su suela con tracción avanzada proporciona estabilidad y agilidad en cada paso, ideales para entrenamientos intensos o actividades deportivas.", 
        precio: 100000, 
        imagen: "/assets/o-4.webp", 
        disponible: true 
    },
];

// Contenedor de productos en el HTML
const contenedorProductos = document.getElementById('products-container');

// Función para renderizar los productos en la página de listado de productos
function renderizarProductos() {
    productos.forEach((producto) => {
        // Crear elemento "a" contenedor del producto
        const link = document.createElement('a');
        link.href = `pagProductosSubidos.html?id=${producto.id}`;  // Enlace con el ID del producto
        
        // Crear la tarjeta del producto
        const productoDiv = document.createElement('div');
        productoDiv.classList.add('product');

        // Crear y agregar la imagen
        const imagen = document.createElement('img');
        imagen.src = producto.imagen;
        imagen.alt = producto.nombre;
        productoDiv.appendChild(imagen);

        const categoria = document.createElement('span');
        categoria.textContent = producto.categoria;
        productoDiv.appendChild(categoria);

        // Crear y agregar el nombre
        const nombre = document.createElement('h5');
        nombre.textContent = producto.nombre;
        productoDiv.appendChild(nombre);
        productoDiv.classList.add('des');

        // Crear y agregar el precio
        const precio = document.createElement('h4');
        precio.textContent = `$${producto.precio.toLocaleString()}`;
        productoDiv.appendChild(precio);

        // Agregar la tarjeta de producto al enlace
        link.appendChild(productoDiv);

        // Agregar el enlace con la tarjeta al contenedor de productos
        contenedorProductos.appendChild(link);
    });
}


renderizarProductos();