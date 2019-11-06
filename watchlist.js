document.addEventListener('DOMContentLoaded', function () {
    var watchListJSON = localStorage.getItem("watchlist");
    var watchlist = JSON.parse(watchListJSON);
    console.log(watchlist);

    function renderMovies(movieArray) {
        var movieHTML = movieArray.map(function (currentMovie) {
            return `
                <div class="movies-container col-3">
					<div class="card text-white" style="width: 18rem;">
						<img src="${currentMovie.Poster}" class="card-img-top" alt="Card image">
						<div class="card-body">
                        <h5 class="card-title">${currentMovie.Title} <span class="badge badge-secondary">${currentMovie.Year}</span></h5>
						</div>      
					</div>
				</div>
        `;
        });

        return movieHTML.join("");
    }

    var content = document.getElementById("movies-container");
    content.innerHTML = renderMovies(watchlist);
})