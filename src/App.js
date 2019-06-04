import React from 'react';
import {HashRouter as Router,Route} from 'react-router-dom';
import './App.css';


import Player from './js/Player/Player';
import CoverPlay from './js/CoverPlay/CoverPlay';

class App extends React.Component{

    render() {
        return (
            <Router>
                <div>
                    {/*<Route path="/" component={Audio}></Route>*/}
                    <Route exact path="/" component={Player}></Route>
                    <Route path="/info" component={CoverPlay}></Route>
                </div>

            </Router>
        );
    }
}


export default App;
