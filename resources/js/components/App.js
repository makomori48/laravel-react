import React from 'react'
import ReactDOM from 'react-dom';
import Nav from './Nav';
import GlobalStyle from './GlobalStyle'

function App() {
    return (
        <>
            <GlobalStyle/>
            <Nav/>
        </>
    )
}

export default App

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}




