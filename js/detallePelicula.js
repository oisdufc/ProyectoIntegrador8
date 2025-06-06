console.log(location.search);

let queryString = location.search;

let queryStringObj = new URLSearchParams(queryString);

let peliculaId = queryStringObj.get("id");

console.log(peliculaId);

fetch(`https://api.themoviedb.org/3/movie/${peliculaId}?api_key=4538691d5c60f1ca0445b38ca446d641&language=es-ES`)
.then(function(res) {
    return res.json();
})
.then(function(data) {
    console.log(data);
    let detalle = document.querySelector(".detalle");
    detalle.innerHTML = `
        <div class="detalle-item">
            <h2>${data.title}</h2>
            <img src="https://image.tmdb.org/t/p/w500${data.poster_path}" alt="${data.title}">
            <p class='parrafo'>Fecha de lanzamiento: ${data.release_date}</p>
            <p class='parrafo'>Descripción: ${data.overview}</p>
            <p class='parrafo'>Calificación: ${data.vote_average}</p>
            <p class='parrafo'>Duración: ${data.runtime} minutos</p>
            <p class='parrafo'><a class="link" href="./detalleGeneroPeli.html?id=${data.genres[0].id}"> Generos: ${data.genres[0].name}</a></p>
        </div>
    `;
})
.catch(function(err) {
    console.log(err);
});
