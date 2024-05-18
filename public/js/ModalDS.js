const modalIngresoDS = new bootstrap.Modal(document.getElementById('modalIngresoDS'));
//const modalPagos = new bootstrap.Modal(document.getElementById('modalPagos'));
const onl = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if (e.target.closest(selector)) {
            handler(e);
        }
    });
};

onl(document, 'click', '.btnCliente', e => {
    modalIngresoDS.show();
    console.log(e)
});
//onl(document, 'click', '.btnPagos', e => {
///    modalPagos.show();
//    Cuenta.setAttribute('readonly', true)
//    console.log(e)
//});