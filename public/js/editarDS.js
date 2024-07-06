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
    Adultos.value = fila.children[2].innerHTML
    Niños.value = fila.children[3].innerHTML
    Bebes.value = fila.children[4].innerHTML
    Fecha.value = fila.children[5].innerHTML
    Comanda.setAttribute('readonly', true)
    modalUsuario.show()
})