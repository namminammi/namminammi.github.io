import React, {Component} from 'react';
import './App.css';

class Header extends Component{
render() {
	return (
		<div>
		<div className="App-header">
          <h1>Movie Search App</h1>
            <p>(ReactJS version)</p>
        </div>
        <div className="App-intro">
        <ul>
          <li>1. Find a movie from database</li>
           {/*<li>2. Choose an actor associated with the movie </li>
                       <li>3. See top movies featuring the chosen actor.</li>*/}
        </ul> 
        </div>
        </div>
		);
}

} 

export default Header;