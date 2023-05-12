
function calcularPrecio(precioBase, descuento){   

if (precioBase <=0 || descuento <0 || descuento >100) {
    return("Los valores ingresados son inválidos")
} if (descuento == 0){
     return "Precio base sin descuento $"+ precioBase 
} if (descuento >0 && descuento <=100){
    var precioFinal = precioBase-(precioBase*descuento/100)
    return "El precio final con descuento es $ " + precioFinal 
}
}
console.log (calcularPrecio (1000,0));
