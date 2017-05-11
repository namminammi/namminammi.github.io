import React from 'react';
import axios from 'axios';
import './App.css';
import Header from './Header';
import SearchMovieName from './SearchMovieName';
    

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(value) {
        let searchInput = value;
        let sortByPop = "&sort_by=popularity.desc";
        let requestUrl = 'https://api.themoviedb.org/3/search/movie?api_key=f8c4016803faf5e7f424abe98a04b8d9&query=' + searchInput + sortByPop;

        axios.get(requestUrl).then(response => {
            this.setState({ movie: response.data.results })
        });
    }

    render() {

        return (

            <div className = "App">
            <Header /> 

            <SearchMovieName onSubmit={this.handleSubmit} />

            <div> {
                this.state.movie.map(movie =>
                    <div className="movieTitle">
                    <div className="movieCard">
                    <img className="posterImg"
                    src = { `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}` }
                    alt = { movie.title }
                    /> 
                    <div className="searchFilmTitles"
                    key = { movie.id } > { movie.title } </div>
                    </div></div>
                )
            } </div>
            </div>
        );
    }

}


export default App;
