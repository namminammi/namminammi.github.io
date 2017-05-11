import React from 'react';
import './App.css';


class SearchMovieName extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.props.onSubmit && typeof this.props.onSubmit === "function") {
            this.props.onSubmit(this.state.value);
        }
    }



    render() {
        return ( 
          <form onSubmit = { this.handleSubmit }>
            <label>
            Movie Name  
            <input className = "movieName"
            type = "text"
            value = { this.state.value }
            onChange = { this.handleChange }
            />

            </label> 
            <input type = "submit"
            value = "Submit" />
            </form>
        );
    }
}




export default SearchMovieName;