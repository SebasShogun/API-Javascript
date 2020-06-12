
document.querySelector('#generar-nombre').addEventListener('submit', cargarNombres);

// Llamado a Ajax e imprimir resultados
function cargarNombres(e) {
     e.preventDefault();

     // Leer las variables
     const apiKey = '53ae89eb5f3cd54814a53cc2d9085fc4';

     const origen = document.getElementById('origen');
     const origenSeleccionado = origen.options[origen.selectedIndex].value;

     let url = `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=${ origenSeleccionado }&api_key=${ apiKey }&format=json`;
     
     fetch(url)
          .then( res => res.json() )
          
          .then(data => {

               let html = '<h2>Top de Artistas</h2>';
               html += '<ul class="lista">';
               data.topartists.artist.forEach(artista => {
                    html += `
                         <li><a href='${artista.url}' target="_blank">${artista.name}</a></li>
                    `;
               })
               html += '</ul>';
               document.querySelector('#resultado').innerHTML = html;
          })
          .catch(error => console.log(error) )

     }
     