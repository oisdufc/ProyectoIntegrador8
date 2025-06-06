const url = 'https://api.themoviedb.org/3/genre/movie/list?api_key=4538691d5c60f1ca0445b38ca446d641&language=es-ES';

fetch(url)
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        console.log(data);
        let generos = document.querySelector('.genero');
        for (let i = 0; i < data.genres.length; i++) {
            let genero = data.genres[i];
            generos.innerHTML += `
                <div class="genero-item">
                    <a href="detalleGeneroPeli.html?id=${genero.id}&nombre2=${genero.name}" class='link'>
                        <h3>${genero.name}</h3>
                    </a>
                </div>
            `;
        }
    })
    .catch(function(error) {
        console.log(error);
    }
);