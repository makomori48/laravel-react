import React,{ useState, useEffect } from 'react'
import ReactDOM from 'react-dom';
import Nav from './Nav';
import GlobalStyle from './GlobalStyle'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Profile from './Profile'
import Edit from './Edit'
import Addplayer from './Addplayer'
import axios from '../axios'
import View from './View';

function App() {
    const [post, setPost] = useState([])

    useEffect(() =>{
        axios.get('/api/')
        .then(res => setPost(res.data))
        .catch(err => console.log(err))
    },[])

    

    return (
        <Router>
            <GlobalStyle/>
            <Nav/>
            <Switch>
            <Route path='/' exact ><Profile post={post} /></Route>
            <Route path='/add'  ><Addplayer/></Route>
            <Route path='/update/:id' render={props => <Edit {...props} post={post} /> } />
            <Route path='/:id' render={props => <View {...props} post={post} /> } />
            </Switch>
        </Router>
    )
}

export default App

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}




