let trend = document.querySelector(".trend")
const url = "https://api.themoviedb.org/3/movie/popular?api_key=4538691d5c60f1ca0445b38ca446d641";

fetch(url)
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        console.log(data);
        for (let i = 0; i < 5; i++) {
            let trending = data.results[i];
            trend.innerHTML += `
                <div class="trend-item">
                <a href="detallePelicula.html?id=${trending.id}" class='link'>
                    <img src="https://image.tmdb.org/t/p/w500${trending.poster_path}" alt="${trending.title}">
                    <h3>${trending.title}</h3>
                    <h4>${trending.release_date}</h4>
                </a>
            </div>
            `;
        }
    })
    .catch(function(error) {
        console.log(err);
    }
);  

let series = document.querySelector(".series")
const url2 = "https://api.themoviedb.org/3/tv/top_rated?api_key=4538691d5c60f1ca0445b38ca446d641";

fetch(url2)
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        console.log(data);
        for (let i = 0; i < 5; i++) {
            let seriespopular = data.results[i];
            series.innerHTML += `
                <div class="trend-item">
                <a href="detalleSerie.html?id=${seriespopular.id}" class='link'>
                    <img src="https://image.tmdb.org/t/p/w500${seriespopular.poster_path}" alt="${seriespopular.name}">
                    <h3>${seriespopular.name}</h3>
                    <h4>${seriespopular.first_air_date}</h4>
                </a>
            </div>
            `;
        }
    })
    .catch(function(error) {
        console.log(err);
    }
);

let peliculas = document.querySelector('.peliculas')
const url3 = "https://api.themoviedb.org/3/movie/top_rated?api_key=4538691d5c60f1ca0445b38ca446d641";

fetch(url3)
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        console.log(data);
        for (let i = 0; i < 5; i++) {
            let peliculaspopulares = data.results[i];
            peliculas.innerHTML += `
                <div class="trend-item">
                <a href="detallePelicula.html?id=${peliculaspopulares.id}" class='link'>    
                <img src="https://image.tmdb.org/t/p/w500${peliculaspopulares.poster_path}" alt="${peliculaspopulares.title}">
                    <h3>${peliculaspopulares.title}</h3>
                    <h4>${peliculaspopulares.release_date}</h4>
                </a>
                </div>
            `;
        }
    })
    .catch(function(error) {
        console.log(err);
    }
);
