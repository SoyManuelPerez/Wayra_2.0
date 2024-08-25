const baseUrl = window.location.origin;
const HB = document.getElementById("HB")
const texto = HB.textContent;
let textoSinGuion = texto.replace(/-/g, ''); 
const apiUrl = `${baseUrl}/AgregarHB1/6651154bb26ce98bd4bfeb64`;    
console.log(apiUrl)
async function handleResponse() {
    try {
        const res = await fetch(baseUrl);
        const resJson = await res.json();
        console.log(resJson)
        if (res.ok) {
            // Alerta de éxito
            swal({
                title: "Éxito",
                text: resJson.message,
                icon: "success",
            });
        } else {
            // Alerta de error
            swal({
                title: "Error",
                text: resJson.message || "Ocurrió un error desconocido.",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            });
        }

        if (resJson.redirect) {
            window.location.href = resJson.redirect;
        }
    } catch (error) {
    }
}

handleResponse();
