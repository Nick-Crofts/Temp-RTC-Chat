import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ChatHome from './components/ChatHome/ChatHome.jsx';

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path='/' component={ ChatHome } />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App;
