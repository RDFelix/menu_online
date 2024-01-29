//PRODUCTOS REGISTRADOS EN LA BASE DE DATOS
var productos = [
    {   titulo: "Iphone Buen precio",
        precio: 300.000,
        descripcion: "barato, negosiable. se vende por motivos de urgencia",
        img: "../img/p_img1.png",},
    {   titulo: "Iphone Buen precio",
        precio: 300.000,
        descripcion: "barato, negosiable. se vende por motivos de urgencia",
        img: "../img/p_img1.png",},
    {   titulo: "Iphone Buen precio",
        precio: 300.000,
        descripcion: "barato, negosiable. se vende por motivos de urgencia",
        img: "../img/p_img1.png",},
    {   titulo: "Iphone Buen precio",
        precio: 300.000,
        descripcion: "barato, negosiable. se vende por motivos de urgencia",
        img: "../img/p_img1.png",},
    ];
    
    
    //MOSTRAR PRODUCTOS
    var productos_container = document.getElementById("accordionExample");
    for (var i = 0; i < productos.length; i++) {
         var producto = productos[i];
        
        var titulo = producto.titulo;
        var precio = producto.precio;    
        var descipcion= producto.descripcion;
        var img = producto.img;
        
        productos_container.innerHTML += `
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${i+1}" aria-expanded="false" aria-controls="collapse${i+1}">
                    Accordion Item #${i+1}
                </button>
                </h2>
                <div id="collapse${i+1}" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                </div>
                </div>
            </div>
    `} ;