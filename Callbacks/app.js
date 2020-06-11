// const ciudades = ['Londres', 'New York', 'Madrid', 'Paris', 'Viena'];

//  ciudades.forEach(function(ciudad){
//      console.log(ciudad);
// })

// function callback(ciudad){
//      console.log(ciudad);
// }

//  ciudades.forEach(callback);



const paises = ['México', 'España', 'Australia', 'Grecia', 'Inglaterra', 'Islandia'];

//agregar despues de dos segundos
function nuevoPais(pais, callback){
    setTimeout(function(){
        paises.push(pais);
        callback();
    }, 2000);
}


function mostrarPaises(){
    setTimeout(function(){
        let html = '';
        paises.forEach(function(pais){
            html += `<li>${pais}</li>`;
        });
        document.getElementById('app').innerHTML = html;
    }, 1000);
}

nuevoPais('Alemania', mostrarPaises);


mostrarPaises();