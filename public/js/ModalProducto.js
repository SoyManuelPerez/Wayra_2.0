const modalProducto = new bootstrap.Modal(document.getElementById('modalProducto'))

const onl =(element,event,selector,handler)=>{
    element.addEventListener(event, e =>{
        if (e.target.closest(selector)) {
            handler(e);
        }
    })
}
onl(document,'click','.btnEditarProducto',e=>{
    const fila = e.target.parentNode.parentNode;
    console.log(fila.children[0].innerHTML)
    ProductoE.value = fila.children[0].innerHTML;
    PrecioE.value = fila.children[1].innerHTML;
    CantidadE.value = fila.children[3].innerHTML;
    ProductoE.setAttribute('readonly', true)
    modalProducto.show()
})