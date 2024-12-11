// Referencia al contenedor de contenido
const content = document.getElementById('content');

// Plantillas para las diferentes "páginas"
const templates = {
  categories: `
    <section id="page-header">
      <h2>Categorías</h2>
    </section>
    <section id="product1" class="section-p1">
      <h2>Futbol</h2>
      <div class="pro-container" >
        <div class="pro" onclick="window.location.href='pagProductos.html?id=1'" data-category="futbol">
          <img src="/assets/f-1.png" alt="">
          <div class="des">
            <h5>Camiseta Argentina 23/24</h5>
            <h4>$120.000</h4>
          </div>
        </div>
        <div class="pro" onclick="window.location.href='pagProductos.html?id=2'" data-category="futbol">
          <img src="/assets/f-2.webp" alt="">
          <div class="des">
            <h5>Camiseta Boca Juniors 23/24</h5>
            <h4>$100.000</h4>
          </div>
        </div>
        <div class="pro" onclick="window.location.href='pagProductos.html?id=3'" data-category="futbol">
          <img src="/assets/f-3.jpg" alt="">
          <div class="des">
            <h5>Botines Nike Superfly 9 Rosa</h5>
            <h4>$180.000</h4>
          </div>
        </div>
        <div class="pro" onclick="window.location.href='pagProductos.html?id=4'" data-category="futbol">
          <img src="/assets/f-4.jpg" alt="">
          <div class="des">
            <h5>Botines Nike Zoom Vapor 15 Academy</h5>
            <h4>$160.000</h4>
          </div>
        </div>
        <h2 class="otros">Otros</h2>
        <div class="pro-container">
          <div class="pro" onclick="window.location.href='pagProductos.html?id=5'" data-category="deporte">
            <img src="/assets/o-1.jpg" alt="">
            <div class="des">
              <h5>Pantalon deportivo Adidas</h5>
              <h4>$115.000</h4>
            </div>
          </div>
          <div class="pro" onclick="window.location.href='pagProductos.html?id=6'" data-category="deporte">
            <img src="/assets/o-2.jpg" alt="">
            <div class="des">
              <h5>Short deportivo Topper</h5>
              <h4>$53.000</h4>
            </div>
          </div>
            <div class="pro" onclick="window.location.href='pagProductos.html?id=7'" data-category="deporte">
            <img src="/assets/o-3.jpg" alt="">
            <div class="des">
              <h5>Remera deportiva Puma</h5>
              <h4>$28.000</h4>
            </div>
          </div>
            <div class="pro" onclick="window.location.href='pagProductos.html?id=8'" data-category="deporte">
            <img src="/assets/o-4.webp" alt="">
            <div class="des">
              <h5>Zapatillas deportivas Puma</h5>
              <h4>$100.000</h4>
            </div>
          </div>
        </div>
    </section>
    <a href="https://web.whatsapp.com/" target="_blank" class="whatsapp-link">
      <img src="/assets/whatsapp.png" alt="WhatsApp" />
    </a>
  `,
  about: `
    <section class="faq">
      <h2>FAQ (Preguntas Frecuentes)</h2>
      <div class="pro-container">
      <h3>¿Quienes somos?</h3>
      <p>
      Somos una empresa dedicada a la venta de gorras en línea. Nuestro objetivo es brindarte la mejor experiencia de compra y garantizar que tus productos se encuentren en perfectas condiciones.
      </p>
      <h3>¿Cómo puedo cancelar mi compra?</h3>
      <p>
      Si deseas cancelar tu compra, ponte en contacto con nuestro equipo de atención al cliente a través de nuestro número de telefono o correo electrónico. Te responderemos en la brevedad posible.
      </p>
      <h3>¿Cómo comprar en Deportes Rodri?</h3>
      <p>
        Entrá en nuestra página web y busca los productos que necesites. Después de encontrar el producto que deseas comprar, haz click en "Agregar al carrito". Luego, ve a la sección "Carrito" y confirma tu compra.
      </p>
        <h3>¿Cómo puedo contactar con el soporte técnico?</h3>
        <p>
          Puedes contactar con nuestro equipo de soporte técnico a través de nuestro número de telefono o correo electrónico. Te responderemos en la brevedad posible.
        </p>
        <h3>¿Cómo puedo pagar mis compras?</h3>
        <p>
          Puedes pagar tus compras con tarjeta de crédito o débito, o con PayPal. También puedes recibir tu compra en efectivo en un establecimiento comercial.
        </p>
        <h3>¿Cómo puedo revisar mis pedidos?</h3>
        <p>
          Puedes revisar tus pedidos en nuestra página web o en tu cuenta de cliente. También puedes contactar con nuestro equipo de atención al cliente a través de nuestro número de telefono o correo electrónico. Te responderemos en la brevedad posible.
        </p>
        <h3>¿Cómo puedo devolverse un producto?</h3>
        <p>
          Si deseas devolver un producto, ponte en contacto con nuestro equipo de atención al cliente a través de nuestro número de telefono o correo electrónico. Te responderemos en la brevedad posible.
        </p>
        <h3>¿Cómo puedo recibir mis productos?</h3>
        <p>
          Puedes recibir tus productos en un establecimiento comercial o en tu domicilio. También puedes elegir la forma de entrega más conveniente para ti.
        </p>
      </div>
    </section>
    <section class="faq">
    <h2>Términos y condiciones</h2>
    <div class="pro-container">
      <h3>Política de privacidad</h3>
      <p>
        En Deportes Rodri, nos comprometemos a mantener la confidencialidad y privacidad de tus datos personales. Estos términos y condiciones establecen cómo utilizamos y protegemos tus datos.
      </p>
      <h3>Términos de uso</h3>
      <p>
        Estos términos y condiciones regulan el uso de Deportes Rodri y de sus productos y servicios. Si no aceptas estos términos y condiciones, deberás dejar de usar Deportes Rodri.
      </p>
      <h3>¿Cómo puedo recibir mis productos?</h3>
      <p>
        Puedes recibir tus productos en un establecimiento comercial o en tu domicilio. También puedes elegir la forma de entrega más conveniente para ti.
      </p>
      <h3>Cambios en estos términos y condiciones</h3>
      <p>
        Puedes solicitar cambios en estos términos y condiciones a través de nuestro número de telefono o correo electrónico. También puedes contactar con nuestro equipo de atención al cliente a través de nuestro número de telefono o correo electrónico. Te responderemos en la brevedad posible.
      </p>
      <h3>¿Cómo puedo contactar con el soporte técnico?</h3>
      <p>
        Puedes contactar con nuestro equipo de soporte técnico a través de nuestro número de telefono o correo electrónico. Te responderemos en la brevedad posible.
      </p>
    </div>
    </section>
    <a href="https://web.whatsapp.com/" target="_blank" class="whatsapp-link">
      <img src="/assets/whatsapp.png" alt="WhatsApp" />
    </a>
  `,
  user: `
        <form class="form-box">
        <div class="login-cont" id="login">
            <div class="top">
                <header>Iniciar Sesión</header>
            </div>
            <div class="input-box">
                <input type="text" class="input-field" placeholder="Email" id="username" required>
                <i class="fa-solid fa-envelope"></i>
            </div>
            <div class="input-box">
                <input type="password" class="input-field" placeholder="Contraseña" id="password" required>
                <i class="fa-solid fa-lock"></i>
              </div>
            <div class="input-box">
                <input type="submit" class="sumbit" value="Iniciar Sesión">
            </div>
        </div>
      </form>
      <a href="https://web.whatsapp.com/" target="_blank" class="whatsapp-link">
        <img src="/assets/whatsapp.png" alt="WhatsApp" />
      </a>
  `,
  admin: `
    <section class="section-p1">
       <form id="product-form">
          <h2>Carga de Productos</h2>
          <label for="numero-ID">Número de ID</label>
          <input type="number" id="numero-ID" required>
          <label for="nombre-producto">Nombre del producto</label>
          <input type="text" id="nombre-producto" required>
          <label for="descripcion-producto">Descripción del producto</label>
          <input type="text" id="descripcion-producto" required>
          <label for="precio-producto">Precio del Producto</label>
          <input type="number" id="precio-producto" step="0.01" required>
          <label for="imagen-producto">Imagen del Producto</label>
          <input type="file" id="imagen-producto" required>
          <label for="categoria-producto">Categoría del producto</label>
          <select id="categoria-producto" required>
            <option value="futbol">Fútbol</option>
            <option value="deporte">Deporte</option>
          </select>
          <input type="submit" value="Añadir" id="submit-button">
        </form>
        <table class="product-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Producto</th>
                    <th>Descripción</th>
                    <th>Imagen</th>
                    <th>Precio</th>
                    <th>Categoría</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody id="product-table-body">
            </tbody>
        </table>
      </section>
  `
};
// Función para cambiar de "página"
function loadPage(page) {
  if (!templates[page]) {
    console.error(`La página "${page}" no existe en las plantillas.`);
    return;
  }

  content.innerHTML = templates[page];

  // Cargar contenido adicional según la página
  if (page === 'user') {
    attachLoginEvent();
  } else if (page === 'admin') {
    loadAdminPage();
  } else if (page === 'categories') {
    loadCategoriesPage();
}
}

// Eventos para los botones de navegación
document.addEventListener("DOMContentLoaded", () => {
  // Eventos para los botones de navegación
  document.getElementById('categoriesBtn').addEventListener('click', () => loadPage('categories'));
  document.getElementById('aboutBtn').addEventListener('click', () => loadPage('about'));
  document.getElementById('userBtn').addEventListener('click', () => loadPage('user'));
  document.getElementById('adminBtn').addEventListener('click', () => loadPage('admin'));
})
// Función para cargar la página de categorías con productos
function loadCategoriesPage() {
  const products = JSON.parse(localStorage.getItem("products")) || [];
  const productList = document.getElementById("product-list");

  // Limpiar la lista de productos
  productList.innerHTML = "";

  // Mostrar productos en la página
  products.forEach(product => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("pro");
    productDiv.innerHTML = `
      <img src="${product.imagen}" alt="${product.nombre}">
      <div class="des">
        <h5>${product.nombre}</h5>
        <h4>$${product.precio}</h4>
      </div>z
      <a href="error.html"><i class="fa-solid fa-cart-shopping"></i></a>
    `;
    productList.appendChild(productDiv);
  });
}

// Función para cargar la página de administración
function loadAdminPage() {
  // Cargar los productos almacenados en localStorage
  const products = JSON.parse(localStorage.getItem("products")) || [];
  const tableBody = document.getElementById("product-table-body");

  // Limpiar tabla
  tableBody.innerHTML = "";

  // Mostrar productos en la tabla
  products.forEach(product => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${product.id}</td>
      <td>${product.nombre}</td>
      <td>${product.descripcion}</td>
      <td><img src="${product.imagen}" alt="Producto" width="50"></td>
      <td>${product.precio}</td>
      <td>${product.categoria}</td>
      <td><button class="delete-btn" data-id="${product.id}">Eliminar</button></td>
    `;
    tableBody.appendChild(row);
  });

  // Asignar evento al formulario para agregar productos
  const form = document.getElementById("product-form");
  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const productName = document.getElementById("nombre-producto").value;
    const productDescription = document.getElementById("descripcion-producto").value;
    const productPrice = document.getElementById("precio-producto").value;
    const productCategory = document.getElementById("categoria-producto").value;
    const productImage = document.getElementById("imagen-producto").files[0];

    if (!productImage) {
      alert("Por favor, selecciona una imagen para el producto.");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = function() {
      // Generar ID aleatorio de 2 dígitos
      const randomId = generateRandomId();

      // Verificar si el ID ya existe en los productos
      const products = JSON.parse(localStorage.getItem("products")) || [];
      const existingProduct = products.find(product => product.id === randomId);

      if (existingProduct) {
        alert("Ya existe un producto con este ID. Por favor, intente nuevamente.");
        return;
      }

      const newProduct = {
        id: randomId,
        nombre: productName,
        descripcion: productDescription,
        precio: productPrice,
        categoria: productCategory,
        imagen: reader.result // Convertimos la imagen a base64
      };

      // Guardar producto en localStorage
      products.push(newProduct);
      localStorage.setItem("products", JSON.stringify(products));

      // Limpiar el formulario y recargar la tabla
      form.reset();
      loadAdminPage();
    };
    reader.readAsDataURL(productImage);
  });

  // Asignar evento de eliminación a los botones dinámicamente generados
  const deleteButtons = document.querySelectorAll(".delete-btn");
  deleteButtons.forEach(button => {
    button.addEventListener("click", function() {
      const productId = this.getAttribute("data-id");
      deleteProduct(productId);
    });
  });
}

// Función para generar un ID aleatorio de 2 dígitos
function generateRandomId() {
  return Math.floor(Math.random() * 90) + 10; // Genera un número de 2 dígitos aleatorios entre 10 y 99
}

// Función para eliminar un producto
function deleteProduct(productId) {
  const products = JSON.parse(localStorage.getItem("products")) || [];
  const updatedProducts = products.filter(product => product.id != productId); // Cambio a != para comparar correctamente los números
  localStorage.setItem("products", JSON.stringify(updatedProducts));
  loadAdminPage(); // Recargar la página de administración para reflejar el cambio
}

function attachLoginEvent() {
  const form = document.querySelector(".form-box");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      const validUsername = "Rodri";
      const validPassword = "Galdamez";

      if (username === validUsername && password === validPassword) {
        alert("Inicio de sesión exitoso.");
        loadPage('admin')
      } else {
        alert("Email o contraseña incorrectos.");
      }
    });
  } else {
    console.error("Formulario no encontrado.");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Referencias a los elementos del DOM
  const productsContainer = document.getElementById("products-container");
  const sectionFilter = document.getElementById("sectionFilter");

  // Recupera los productos del localStorage
  const products = JSON.parse(localStorage.getItem("products")) || [];

  // Función para mostrar productos según la sección seleccionada
  function displayProducts(filteredProducts) {
    productsContainer.innerHTML = ""; // Limpia el contenedor

    filteredProducts.forEach((product) => {
      const productDiv = document.createElement("div");
      productDiv.classList.add("pro"); // Asegúrate de que coincida con tu diseño
      productDiv.innerHTML = `
        <img src="${product.imagen}" alt="${product.nombre}">
        <div class="des">
          <h4>${product.nombre}</h4>
          <p>$${product.precio}</p>
        </div>
      `;
      productsContainer.appendChild(productDiv);
    });
  }

  // Muestra todos los productos inicialmente
  displayProducts(products);

  // Evento para filtrar productos por sección
  sectionFilter.addEventListener("change", () => {
    const selectedSection = sectionFilter.value;
    const filteredProducts =
      selectedSection === "all"
        ? products
        : products.filter((product) => product.categoria === selectedSection);
    displayProducts(filteredProducts);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const categoryFilter = document.getElementById("categoryFilter");
  const products = document.querySelectorAll(".pro"); // Selecciona todos los productos

  // Función para mostrar u ocultar productos según la categoría
  function filterProducts(category) {
    products.forEach((product) => {
      const productCategory = product.getAttribute("data-category");
  
      // Asegúrate de manejar correctamente el atributo y categoría seleccionada
      if (category === "all" || productCategory === category) {
        product.style.display = "block"; // Muestra el producto
      } else {
        product.style.display = "none"; // Oculta el producto
      }
    });
  }  

  // Evento para filtrar productos al cambiar la categoría
  categoryFilter.addEventListener("change", () => {
    const selectedCategory = categoryFilter.value; // Obtiene la categoría seleccionada
    filterProducts(selectedCategory);
  });

  // Mostrar todos los productos inicialmente
  filterProducts("all");
});
