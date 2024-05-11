const modalUsuario = new bootstrap.Modal(document.getElementById('modalIngreso'))

const onl =(element,event,selector,handler)=>{
    element.addEventListener(event, e =>{
        if (e.target.closest(selector)) {
            handler(e);
        }
    })
}
onl(document,'click','.btnEditarIngreso',e=>{
    const fila = e.target.parentNode.parentNode;
    Comanda.value = fila.children[0].innerHTML
    Nombre.value = fila.children[1].innerHTML
    Apellido.value = fila.children[2].innerHTML
    Tipo.value = fila.children[3].innerHTML
    Documento.value = fila.children[4].innerHTML
    Abono.value = fila.children[5].innerHTML
    Pago.value = fila.children[6].innerHTML
    Adultos.value = fila.children[7].innerHTML
    Niños.value = fila.children[8].innerHTML
    Bebes.value = fila.children[9].innerHTML
    Fecha.value = fila.children[10].innerHTML
    Comanda.setAttribute('readonly', true)
    modalUsuario.show()
})