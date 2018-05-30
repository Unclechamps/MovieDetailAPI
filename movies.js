let movieList = document.querySelector('.movieList')
let movieDetail = document.querySelector('.movieDetail')

const API_KEY = "77a8ace8"

fetch('http://www.omdbapi.com/?s=batman&apikey='+API_KEY)
.then(function(response){
  return response.json()
}).then(function(movies){
    movies.Search.forEach(function(movie) {
      let batMovie = `<div class="movie">
                        <img class="poster" src="${movie.Poster}">
                        <a href="#" onclick="getMovieDetails('${movie.imdbID}')">${movie.Title}</a>
                      </div>`

      movieList.innerHTML += batMovie
})
  })

function getMovieDetails(imdbID) {
  fetch('http://www.omdbapi.com/?i='+imdbID+'&apikey='+API_KEY)
  .then(function(response){
    return response.json()
  }).then(function(movie){
      let detail = `<div class='title'>
                        <h2>${movie.Title}</h2>
                        <img id="titlePoster" src="${movie.Poster}">
                      </div>
                      <div class="detail">
                        <h3>Year: ${movie.Year}</h3>
                        <h3>Rated: ${movie.Rated}</h3>
                        <h3>Released: ${movie.Released}</h3>
                        <h3>Director: ${movie.Director}</h3>
                      </div>`

    movieDetail.innerHTML = detail
  })

}
