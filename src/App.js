import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation'
import Home from './routes/Home';
import About from './routes/About';
import Detail from './routes/Detail';
import './App.css';
import './reset.css';

class App extends Component {
    render() {
        return (
            <HashRouter>
                <Header />
                <Navigation />
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/detail:id" component={Detail} />
            </HashRouter>
        );
    }
}

export default App;