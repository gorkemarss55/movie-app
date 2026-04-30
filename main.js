const form=document.querySelector("#form");
const searchInput=document.querySelector("#search");
const movieApi= new MovieAPI();
runEventListener();

function runEventListener(){
    document.addEventListener("DOMContentLoaded", () => movieApi.getPopulerMovies());
    form.addEventListener("submit", getMoviesName)
}
function getMoviesName(e){
     e.preventDefault();
    const movieName = searchInput.value.trim();
    movieApi.getMoviesName(movieName);
   
}