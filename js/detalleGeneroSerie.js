console.log(location.search);

let queryString = location.search;

let queryStringObj = new URLSearchParams(queryString);

let generoSerieId = queryStringObj.get("id");

let nombregenero1 = queryStringObj.get("nombre1");
let titulogenero1 = document.querySelector(".titulo-genero1");
titulogenero1.innerHTML = `<h2 class="titulo-item">Series de género: ${nombregenero1}</h2>`;

fetch(`https://api.themoviedb.org/3/discover/tv?api_key=4538691d5c60f1ca0445b38ca446d641&language=es-ES&with_genres=${generoSerieId}`)
.then(function(res) {
    return res.json();
})
.then(function(data) { 
    console.log(data);
    let series = document.querySelector(".deGeSe");
    
    for (let i = 0; i < data.results.length; i++) {
        let serie = data.results[i];
        series.innerHTML += `
            <div class="serie-item">
                <a href="detalleSerie.html?id=${serie.id}" class='link'>
                    <h3>${serie.name}</h3>
                    <img src="https://image.tmdb.org/t/p/w500${serie.poster_path}" alt="${serie.name}">
                </a>
            </div>
        `;
    }
})
.catch(function(error) {
    console.log(error);
}
);
