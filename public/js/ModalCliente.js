const modalProducto = new bootstrap.Modal(document.getElementById('modalIngreso'));

const onl = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if (e.target.closest(selector)) {
            handler(e);
        }
    });
};

onl(document, 'click', '.btnCliente', e => {
    modalProducto.show();
    console.log(e)
});
