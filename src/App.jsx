import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom'
import Home from './components/home.jsx';
import Main from './components/main.jsx';

class App extends Component {
    render(){
        return(
            <Router>
                <Main/>
            </Router>
        )
    }
}

export default App;