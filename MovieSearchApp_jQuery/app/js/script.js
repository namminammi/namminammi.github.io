    $(document).ready(function() {

        //Search input focused at the page load
        $("#movie").focus();

        //Button to refresh page and start search over
        $('#refreshBtn').click(function() {
            location.reload();
        });



        // Variables to fetch urls from API
        var baseUrl = 'http://api.themoviedb.org/3/',
            discover = 'discover/',
            mode = 'search/movie',
            query = '?query=',
            ampQuery = '&query=',
            search = 'search/',
            sort_by_popularity = '&sort_by=popularity.desc',
            movieQuery = 'movie?',
            movie = 'movie',
            person = 'person',
            person_id,
            movie_credits = 'movie_credits?',
            input,
            titleItems,
            movieName,
            movie_id,
            actorNames,
            actor_id,
            with_people = "&with_people=",
            credits = 'credits?',
            key = '&api_key=f8c4016803faf5e7f424abe98a04b8d9',
            sort_by = '&sort_by=original_title.desc',
            page = '&page=3';


        //API to discover items by a feature:
        // https://www.themoviedb.org/documentation/api/discover

        // https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc

        //Link to search movies:
        //https://api.themoviedb.org/3/search/movie?api_key=f8c4016803faf5e7f424abe98a04b8d9&query=Jack+Reacher

        //Link to get movie detail from search:
        //https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=f8c4016803faf5e7f424abe98a04b8d9

        //Link to get the cast and crew for a movie : /movie/{movie_id}/credits
        //https://api.themoviedb.org/3/movie/550/credits?api_key=f8c4016803faf5e7f424abe98a04b8d9

        //Link to get actor's credit /person/{person_id}/movie_credits
        // https://api.themoviedb.org/3/person/87345/movie_credits?api_key=f8c4016803faf5e7f424abe98a04b8d9


        // URL: /discover/movie?with_people=108916&sort_by=popularity.desc




        // 1) Search movie:

        //Ex. URL to search movies
        // https://api.themoviedb.org/3/movie/550?api_key=f8c4016803faf5e7f424abe98a04b8d9&sort_by=popularity.desc


        //using /discover
        // https://api.themoviedb.org/3/discover/movie?api_key=f8c4016803faf5e7f424abe98a04b8d9&query=Jack+Reacher&sort_by=popularity.desc


        //Search button to show results
        $('#searchBtnContainer').on('click', 'button', function() {

            var input = $('#movie').val(),
                movieName = encodeURI(input);
            $.ajax({
                type: 'GET',
                url: baseUrl + mode + query + input + key + sort_by_popularity,
                async: false,
                jsonpCallback: 'test',
                contentType: 'application/json',
                dataType: 'jsonp',
                success: function(json) {


                    for (i = 0; i < json.results.length; i++) {
                        titleItems = json.results[i].title;
                        movie_id = json.results[i].id;
                        posterItems = json.results[i].poster_path;

                        $(".movieCard").append("<div class=" + "movieTitle" + " " + "id=" + movie_id + ">" + "<img " + "class=" + "posterImg" + " " + "src=" + "https://image.tmdb.org/t/p/w185_and_h278_bestv2" + posterItems + " />" + "<br>" + "<div class=" + "searchFilmTitles" + ">" + titleItems + "</div>" + "</div>" + "</br>");

                    }

                },
                error: function(e) {
                    console.log(e.message);
                }



            });


            // Shows warning message when there is no result
            setTimeout(function() {
                if ($(".movieCard").has(".movieTitle").length == 0) {
                    $("#noMatch").css('display', 'block');
                } else {
                    $("#noMatch").css('display', 'none');
                }
            }, 200);


            //End of button click function
        });



        //Search button triggered with enter key:
        $('#searchBtnContainer').on('keyup', 'input', function(e) {
            if (e.keyCode == 13) {
                $('#searchBtn').trigger('click');
                return false;
            }
        });


        //Clears out search result when input field is focused or input value is changed
        $("#movie").on("change keyup paste", function() {
            $('#showSearchResult div').empty();
        });





        // 2) Show movie detail with name of actors///
        //Get the cast and crew for a movie : /movie/{movie_id}/credits
        //https://api.themoviedb.org/3/movie/550/credits?api_key=f8c4016803faf5e7f424abe98a04b8d9

        $('.movieCard').on("click", '.movieTitle', function(event) {

            var selectedMovie_id = this.id;
            var selectedMovieTitle = this.innerText;

            $('.movieDetail_actors').css('display', 'inline');
            $("#showSearchResult").css('display', 'none');

            $.ajax({
                type: 'GET',
                url: baseUrl + movie + "/" + selectedMovie_id + "/" + credits + key,
                async: false,
                jsonpCallback: 'test',
                contentType: 'application/json',
                dataType: 'jsonp',
                success: function(json) {

                    $(".chosenTitle").append("<div class=" + "movieTitle_detailView" + " " + "id=" + selectedMovie_id + ">" + "<span>" + selectedMovieTitle + "</span>" + "</div>");

                    for (j = 0; j < json.cast.length; j++) {
                        actorNames = json.cast[j].name;
                        actor_id = json.cast[j].id;
                        actorImgItem = json.cast[j].profile_path;

                        $(".movieDetail_actors").append("<div class=" + "actorsFeatured" + " " + "id=" + actor_id + ">" + "<img " + "class=" + "actorImg" + " " + "src=" + "https://image.tmdb.org/t/p/w185_and_h278_bestv2" + actorImgItem + " />" + "<br>" + actorNames + " " + "</div>");
                    }
                },
                error: function(e) {
                    console.log(e.message);
                }
            });
        });


        // 3) Show Top 10 movies by chosen actor///

        // Ex: URL to show popular movies by selected actor
        // https://api.themoviedb.org/3/discover/movie?api_key=f8c4016803faf5e7f424abe98a04b8d9&with_people=108916&sort_by=popularity.desc


        $('.movieDetail_actors').on("click", '.actorsFeatured', function(event) {
            $('.actorShowTopMovies').css('display', 'block');
            $(".movieShowActors").css('display', 'none');

            var selectedActor_id = this.id;
            var selected_actorName = this.innerText;

            $.ajax({
                type: 'GET',
                url: baseUrl + discover + movieQuery + key + with_people + selectedActor_id + sort_by_popularity,
                async: false,
                jsonpCallback: 'test',
                contentType: 'application/json',
                dataType: 'jsonp',
                success: function(json) {

                    $(".actorPageTitle").append("<div class=" + "actorShowName" + " " + "id=" + selectedActor_id + ">" + "<span>" + selected_actorName + "</span>" + "</div>");

                    for (p = 0; p < json.results.length; p++) {
                        // console.log(json.cast[p].title);
                        var actors_film_id = json.results[p].id;
                        var actorFilms = json.results[p].title;
                        var actorFilmPosterImg = json.results[p].poster_path;

                        $(".actorPopMovies").append("<div class=" + "actorPopMoviesList" + " " + "id=" + actors_film_id + ">" + "<img " + "class=" + "posterImg" + " " + "src=" + "https://image.tmdb.org/t/p/w185_and_h278_bestv2" + actorFilmPosterImg + " />" + "<br>" + "<div class= " + "actorFilmTitles" + ">" + actorFilms + "</div>" + "</div>");
                    }

                },
                error: function(e) {
                    console.log(e.message);
                }
            });

        });



        //End of Document.ready
    });