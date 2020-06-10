document.getElementById('cargar').addEventListener('click', cargarDatos);

function cargarDatos(){
    // Crear un onjeto XMLhttp
    const xhr = new XMLHttpRequest();

    // Abrir una conexion
    xhr.open('GET', 'datos.txt', true);

    // Una vez que carga
    xhr.onload = function(){
        // 200 : Correcto
        if(this.status === 200){
            document.getElementById('listado').innerHTML = `<h1>${this.responseText}</h1>`;
        }
    }
    //Enviar el request
    xhr.send();
}