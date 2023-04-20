//Declaracion de variables
const productos = [];
const carrito = [];

//Objetos
const gpuNvidia = {
    id: 1,
    imagen: "./imagenes/gpunvidia.jpg",
    nombre: "Nvidia EVGA 3070 TI",
    descripcion: "Nvidia EVGA 3070 TI 8 GB",
    precio: 190000
}
const fuente = {
  id: 2,
  imagen: "./imagenes/fuentexfx1000gq.jpg",
  nombre: "XFX 1000-GQ ",
  descripcion: "Fuente 1000W Modular",
  precio: 50000
}


const memoriaRam = {
  id: 3,
  imagen: "./imagenes/corsairvengeance16gb.jpg",
  nombre: "CORSAIR VENGEANCE 16 GB",
  descripcion: "Memoria RAM Corsair 16gb",
  precio: 35000
}

const gabinete = {
  id: 4,
  imagen: "./imagenes/gabinetelevelup.jpg",
  nombre: "GABINETE GAMER LEVEL UP",
  descripcion: "Gabinete Gamer Level UP ATX",
  precio: 20000
}

const gpuRadeon = {
  id: 5,
  imagen: "./imagenes/gpuradeon.jpg",
  nombre: "AMD RADEON RX 5700XT",
  descripcion: "AMD Radeon RX 5700XT 8 GB",
  precio: 60000
}
const mother = {
  id: 6,
  imagen: "./imagenes/MothAsusb550.jpg",
  nombre: "ASUS ROG STRIX B550",
  descripcion: "Motherboard ASUS ROG STRIX B550",
  precio: 70000
}

const teclado = {
  id: 7,
  imagen: "./imagenes/tecladogamerrazer.jpg",
  nombre: "TECLADO RAZER HUNTSMAN V2",
  descripcion: "Teclado Gamer Mecanico RAZER",
  precio: 50000
}

const microIntel = {
  id: 8,
  imagen: "./imagenes/IntelI5.jpg",
  nombre: "Intel I5",
  descripcion: "Micro procesador Intel I5 12ava generacion",
  precio: 78000
}


//Capturo los elementos del html y los utilizo en JS

let imagen1 = document.getElementById('imgcard1');
let imagen2 = document.getElementById('imgcard2');
let imagen3 = document.getElementById('imgcard3');
let imagen4 = document.getElementById('imgcard4');
let imagen5 = document.getElementById('imgcard5');
let imagen6 = document.getElementById('imgcard6');
let imagen7 = document.getElementById('imgcard7');
let imagen8 = document.getElementById('imgcard8');

//Renderizar imagenes de cartas
imagen1.innerHTML = `

  <img class="card-img-top" src=${gpuNvidia.imagen} alt="yerba mate">
  <div class="card-body">
    <h5 class="card-title">${gpuNvidia.nombre}</h5>
    <p class="card-text">${gpuNvidia.descripcion}</p>
    <p class="card-text">$ ${gpuNvidia.precio}</p>
    <button id=btn${gpuNvidia.id} class="btn btn-primary">Comprar</button>
  </div>
</div>
`;

imagen2.innerHTML = `

  <img class="card-img-top" src=${fuente.imagen} alt="yerba mate">
  <div class="card-body">
    <h5 class="card-title">${fuente.nombre}</h5>
    <p class="card-text">${fuente.descripcion}</p>
    <p class="card-text">$ ${fuente.precio}</p>
    <button id=btn${fuente.id} class="btn btn-primary">Comprar</button>
  </div>
</div>
`;

imagen3.innerHTML = `

  <img class="card-img-top" src=${memoriaRam.imagen} alt="yerba mate">
  <div class="card-body">
    <h5 class="card-title">${memoriaRam.nombre}</h5>
    <p class="card-text">${memoriaRam.descripcion}</p>
    <p class="card-text">$ ${memoriaRam.precio}</p>
    <button id=btn${memoriaRam.id} class="btn btn-primary">Comprar</button>
  </div>
</div>
`;

imagen4.innerHTML = `

  <img class="card-img-top" src=${gabinete.imagen} alt="yerba mate">
  <div class="card-body">
    <h5 class="card-title">${gabinete.nombre}</h5>
    <p class="card-text">${gabinete.descripcion}</p>
    <p class="card-text">$ ${gabinete.precio}</p>
    <button id=btn${gabinete.id} class="btn btn-primary">Comprar</button>
  </div>
</div>
`;

imagen5.innerHTML = `

  <img class="card-img-top" src=${gpuRadeon.imagen} alt="yerba mate">
  <div class="card-body">
    <h5 class="card-title">${gpuRadeon.nombre}</h5>
    <p class="card-text">${gpuRadeon.descripcion}</p>
    <p class="card-text">$ ${gpuRadeon.precio}</p>
    <button id=btn${gpuRadeon.id} class="btn btn-primary">Comprar</button>
  </div>
</div>
`;

imagen6.innerHTML = `

  <img class="card-img-top" src=${mother.imagen} alt="yerba mate">
  <div class="card-body">
    <h5 class="card-title">${mother.nombre}</h5>
    <p class="card-text">${mother.descripcion}</p>
    <p class="card-text">$ ${mother.precio}</p>
    <button id=btn${mother.id} class="btn btn-primary">Comprar</button>
  </div>
</div>
`;

imagen7.innerHTML = `

  <img class="card-img-top" src=${teclado.imagen} alt="yerba mate">
  <div class="card-body">
    <h5 class="card-title">${teclado.nombre}</h5>
    <p class="card-text">${teclado.descripcion}</p>
    <p class="card-text">$ ${teclado.precio}</p>
    <button id=btn${teclado.id} class="btn btn-primary">Comprar</button>
  </div>
</div>
`;

imagen8.innerHTML = `

  <img class="card-img-top" src=${microIntel.imagen} alt="yerba mate">
  <div class="card-body">
    <h5 class="card-title">${microIntel.nombre}</h5>
    <p class="card-text">${microIntel.descripcion}</p>
    <p class="card-text">$ ${microIntel.precio}</p>
    <button id=btn${microIntel.id} class="btn btn-primary">Comprar</button>
  </div>
</div>
`;


//guardo todos los productos en un solo array
productos.push(gpuNvidia);
productos.push(fuente);
productos.push(memoriaRam);
productos.push(gabinete);
productos.push(gpuRadeon);
productos.push(mother);
productos.push(teclado);
productos.push(microIntel);
   
//EVENTOS
    productos.forEach((producto)=>{
        document.getElementById(`btn${producto.id}`).addEventListener('click',()=>{
            agregarACarrito(producto);
    });
});

const finalizar = document.getElementById('checkout');
const productosComprados= [];

finalizar.addEventListener('submit', (event) => {
  event.preventDefault(); // Evita que la página se recargue al enviar el formulario
  const totalCarrito = carrito.reduce((acumulador,producto)=>acumulador+producto.precio,0);
  const compra = {
      id: Date.now(),
      nombre: "Compra #" + (localStorage.getItem("compraCount") || 0),
      descripcion: "Productos comprados",
      total: totalCarrito
  };
  localStorage.setItem("compra" + compra.id, JSON.stringify(compra));
  localStorage.setItem("compraCount", parseInt(localStorage.getItem("compraCount") || 0) + 1);
  alert("Su compra ha sido concretada satisfactoriamente");
  carrito = []; // Vacía el carrito
  document.getElementById('tablabody').innerHTML = ""; // Vacía la tabla
  document.getElementById('total').innerText = 'Total a pagar $: 0'; // Reinicia el total a pagar
});

//Declaracion de funciones
function agregarACarrito(prodAAgregar) {
  carrito.push(prodAAgregar);
  console.table(carrito);
  alert(`Agregaste ${prodAAgregar.nombre} al carrito ! 💪`);
  //agregar fila a la tabla de carrito
  document.getElementById('tablabody').innerHTML += `
    <tr>
      <td>${prodAAgregar.id}</td>
      <td>${prodAAgregar.nombre}</td>
      <td>${prodAAgregar.precio}</td>
    </tr>
  `;
//incrementar el total
  let totalCarrito = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
  document.getElementById('total').innerText = 'Total a pagar $: ' + totalCarrito;

//actualizar cantidad de productos en el carrito
  let cantidadCarrito = carrito.length;
  document.getElementById('cart-count').innerText = cantidadCarrito;
}


