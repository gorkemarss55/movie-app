class MovieAPI{
    constructor(){
        this.apiKey="99a7a8dc764a2c69abe4e673cb264ce0";
        this.baseImageURL = "https://image.tmdb.org/t/p/w1280/";
         this.popularURL = `https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&language=tr-TR&sort_by=popularity.desc`;
        this.searchURL =`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=`;
        this.movies = document.querySelector(".movies");
    
    }

    async getPopulerMovies(){
        const response=await fetch(this.popularURL);
        const movies=await response.json();
        this.displayinfo(movies);

    }

    async getMoviesName(movieName){
        const response=await fetch(this.searchURL+movieName);
        const movies=await response.json();
        this.displayinfo(movies);
    }
    displayinfo(movies){
        this.movies.innerHTML="" 
        movies.results.forEach(movie => {
            this.movies.innerHTML+=` 
            <div class="movie">
                <img class="moviePicture"width="230" height="345px" src="${this.baseImageURL}${movie.poster_path}" alt="">
                <div class="info">
                    <h4 class="movieName">${movie.title}</h4>
                    <h5 class="imdbPoint">${Math.round(movie.vote_average)}</h5>

                </div>
            </div>`
            console.log(movie)
           
        });
    }
}