//----------VARIABLES GLOBALES----------
document.getElementById("title_pag").innerHTML = "KiKe";
//--------------------------------------
metodo_pago = document.getElementById("pago")
texto_pago = document.getElementById("text_pago") 
cargar = document.getElementById("cargar_comprobante")

metodo_pago.addEventListener("change", function() {
    const valorSeleccionado = metodo_pago.value;
    if (valorSeleccionado === "nequi") {
        texto_pago.textContent = "Realize el pago por medio de daviplata al numero:";
        cargar.innerHTML = `
            <label for="formFile" class="form-label">Ingrese el comprobante de pago</label>
            <input class="form-control" type="file" id="formFile">
        `;
    } 
    if (valorSeleccionado === "daviplata") {
        texto_pago.textContent = "Realize el pago por medio de daviplata al numero:";
        cargar.innerHTML = `
            <label for="formFile" class="form-label">Ingrese el comprobante de pago</label>
            <input class="form-control" type="file" id="formFile">
        `;
    }
    if (valorSeleccionado === "efectivo") {
      text_pago.textContent = "Realize el pago en efectivo";
      cargar.innerHTML = ``;
    }
  });

function sencilla(){
    document.getElementById("info_precio").innerHTML = "<b>Precio: </b>8.000";
    document.getElementById("info_tamaño").innerHTML = "<b>Tamaño: </b>20cm x 10cm";
}
function completa(){
    document.getElementById("info_precio").innerHTML = "<b>Precio: </b>10.000";
    document.getElementById("info_tamaño").innerHTML = "<b>Tamaño: </b>20cm x 10cm";
}
function mega_completa(){
    document.getElementById("info_precio").innerHTML = "<b>Precio: </b>13.000";
    document.getElementById("info_tamaño").innerHTML = "<b>Tamaño: </b>20cm x 10cm";
}
function familiar(){
    document.getElementById("info_precio").innerHTML = "<b>Precio: </b>16.000";
    document.getElementById("info_tamaño").innerHTML = "<b>Tamaño: </b>20cm x 10cm";
}
function mega_familiar(){
    document.getElementById("info_precio").innerHTML = "<b>Precio: </b>24.000";
    document.getElementById("info_tamaño").innerHTML = "<b>Tamaño: </b>20cm x 10cm";
}