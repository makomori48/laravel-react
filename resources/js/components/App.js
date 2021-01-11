import React from 'react'
import ReactDOM from 'react-dom';
import Nav from './Nav';
import GlobalStyle from './GlobalStyle'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Profile from './Profile'
import Addplayer from './Addplayer'


function App() {
    return (
        <Router>
            <GlobalStyle/>
            <Nav/>
            <Switch>
            <Route path='/' exact component={Profile} />
            <Route path='/add' component={Addplayer} />

            </Switch>
        </Router>
    )
}

export default App

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}




