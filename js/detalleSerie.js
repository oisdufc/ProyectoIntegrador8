console.log(location.search);

let queryString = location.search;

let queryStringObj = new URLSearchParams(queryString);

let seriesId = queryStringObj.get("id");
let nombregenero1 = queryStringObj.get("nombre");
console.log(nombregenero1);

console.log(seriesId);

fetch(`https://api.themoviedb.org/3/tv/${seriesId}?api_key=4538691d5c60f1ca0445b38ca446d641&language=es-ES`)
.then(function(res) {
    return res.json();
})
.then(function(data) {
    console.log(data);
    let detalle2 = document.querySelector(".series2");
    detalle2.innerHTML = `
        <div class="detalle-item">
            <h2>${data.name}</h2>
            <img src="https://image.tmdb.org/t/p/w500${data.poster_path}" alt="${data.name}">
            <p>Fecha de lanzamiento: ${data.first_air_date}</p>
            <p> Descripción: ${data.overview}</p>
            <p>Calificación: ${data.vote_average}</p>
            <p><a class="link" href="./detalleGeneroSerie.html?id=${data.genres[0].id}">Géneros: ${data.genres[0].name}</a></p>
        </div>
    `;
})
.catch(function(err) {
    console.log(err);
});
