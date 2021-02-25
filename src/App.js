import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Header from './components/Header'
import Home from './routes/Home';
import About from './routes/About';

class App extends Component {
    render() {
        return (
            <HashRouter>
                <Header />
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
            </HashRouter>
        );
    }
}

export default App;