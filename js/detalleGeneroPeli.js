console.log(location.search);

let queryString = location.search;

let queryStringObj = new URLSearchParams(queryString);

let generoPeliId = queryStringObj.get("id");

let nombregenero = queryStringObj.get("nombre");
console.log(generoPeliId);

fetch(`https://api.themoviedb.org/3/discover/movie?api_key=4538691d5c60f1ca0445b38ca446d641&language=es-ES&with_genres=${generoPeliId}`)
.then(function(res){
return res.json();
}
)
.then(function(data){
    console.log(data);
    let peliculas = document.querySelector(".deGePe");
    let titulogenero = document.querySelector(".titulo-genero");
    titulogenero.innerHTML = `<h2 class="titulo-item">Peliculas de género: ${nombregenero}</h2>`;
    
    for (let i = 0; i < data.results.length; i++) {
        let pelicula = data.results[i];
        peliculas.innerHTML += `
        <div class="serie-item">
                <a href="detallePelicula.html?id=${pelicula.id}" class="link">
                <h3>${pelicula.title}</h3>
                <img src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}" alt="${pelicula.title}">
            </a>
        </div>
        `;
    }   
})