
let$(document).ready(function() {
    // Simulación de productos destacados
    const productos = [
      { id: 1, nombre: "Producto 1", descripcion: "Descripción breve del producto 1.", imagen: "https://via.placeholder.com/300x200?text=Producto+1" },
      { id: 2, nombre: "Producto 2", descripcion: "Descripción breve del producto 2.", imagen: "https://via.placeholder.com/300x200?text=Producto+2" },
      { id: 3, nombre: "Producto 3", descripcion: "Descripción breve del producto 3.", imagen: "https://via.placeholder.com/300x200?text=Producto+3" },
      { id: 4, nombre: "Producto 4", descripcion: "Descripción breve del producto 4.", imagen: "https://via.placeholder.com/300x200?text=Producto+4" },
      { id: 5, nombre: "Producto 5", descripcion: "Descripción breve del producto 5.", imagen: "https://via.placeholder.com/300x200?text=Producto+5" },
      { id: 6, nombre: "Producto 6", descripcion: "Descripción breve del producto 6.", imagen: "https://via.placeholder.com/300x200?text=Producto+6" }
    ];
  
    // Cargar productos destacados (aun no se implementa esta funcion)
    function cargarProductosDestacados() {
      productos.forEach(producto => {
        $('#productosDestacados').append(`
          <div class="col-md-4 mb-4">
            <div class="card">
              <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
              <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">${producto.descripcion}</p>
                <a href="#" class="btn btn-primary">Ver más</a>
              </div>
            </div>
          </div>
        `);
      });
    }
  
    // Envío de formulario de contacto
    $('#contactForm').on('submit', function(e) {
      e.preventDefault();
      // Aquí se podría enviar el formulario al servidor
      alert('Formulario enviado');
    });
  });
  