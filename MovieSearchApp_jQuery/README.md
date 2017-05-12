README.md


# Web Search App


An app to search movies and actors associated with them, and their featured works. It uses The Movie DBs API (https://developers.themoviedb.org/3/getting-started) as the data source.  

How to use it:  <br />

1) The user types into search field and clicks Search button to start the process. <br />
2) It should display movies from search result, showing their poster images and titles in a card. <br /> 
3) When a movie card is clicked it directs to show the actors who worked in that movie. <br />
4) When the actor's card is clicked it shows the films that the selected actor worked so far.  <br /> 
5) To start the process again the user should press Refresh & Start Again button. <br />       




###Requirements:

* A search field.
* A list of search results. Sorted by relevance.
* A detail view of a movie including a list of actors. Actors should be linked to a detail
view for actors.
*  A detail view for an actor, including that actors top 10 popular movies.
*  It should be responsive and look good on, at least, desktop, tablet portrait and mobile
portrait.
*  It should support the latest versions of IE, Chrome, Safari and Firefox.
*  JS and CSS should be minified.

###References:

API to discover items by a feature:
https://www.themoviedb.org/documentation/api/discover

Link to search movie by popularity:
https://api.themoviedb.org/3/discover/movie?api_key=f8c4016803faf5e7f424abe98a04b8d9&query=Jack+Reacher&sort_by=popularity.desc

Link to get movie detail from search:
https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=f8c4016803faf5e7f424abe98a04b8d9

Link to get the cast and crew for a movie : /movie/{movie_id}/credits
https://api.themoviedb.org/3/movie/550/credits?api_key=f8c4016803faf5e7f424abe98a04b8d9

Link to get actor's credit: /person/{person_id}/movie_credits
https://api.themoviedb.org/3/person/87345/movie_credits?api_key=f8c4016803faf5e7f424abe98a04b8d9

Link to get movies associated with an actor by popularity
URL: /discover/movie?with_people=108916&sort_by=popularity.desc

