const modalProducto = new bootstrap.Modal(document.getElementById('modalIngreso'));
const modalPagos = new bootstrap.Modal(document.getElementById('modalPagos'));
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

onl(document, 'click', '.btnPagos', e => {
    modalPagos.show();
    Cuenta.setAttribute('readonly', true)
    console.log(e)
    guardarComoPDF()
});
function guardarComoPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const titulo = document.getElementById("titulo").innerText;
    const tabla = document.getElementById("Cuenta");
    if (!tabla) {
        console.error("No se encontró la tabla con id='Cuenta'");
        return;
    }

    let columnasAIncluir;
    const filas = tabla.rows;
    const datosTablaPDF = [];
    
    for (let i = 0; i < filas.length; i++) {
        const celdas = filas[i].cells;
        let filaPDF = [];
        
        if (i === 0) {
            columnasAIncluir = [0, 1, 2, 3];
        } else if (i === filas.length - 1) {
            columnasAIncluir = [0, 1];
        } else {
            columnasAIncluir = [0, 1, 2, 3];
        }
        
        columnasAIncluir.forEach(index => {
            if (celdas[index]) {
                filaPDF.push(celdas[index].innerText.trim()); 
            }
        });

        datosTablaPDF.push(filaPDF);
    }

    doc.autoTable({
        head: [datosTablaPDF.shift()],
        body: datosTablaPDF 
    });
    
    doc.save(`${titulo}.pdf`);
}
