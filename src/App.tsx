import React from 'react';
import './App.css';

function App() {
    return (
        <div>
            <Header/>
            <Technologies/>
        </div>
    );
}

function Header() {
    return (
        <div>
            <a href={'#'}>Home</a>
            <a href={'#'}>News</a>
            <a href={'#'}>Message</a>
        </div>
    );
}

function Technologies() {
    return (
        <ul>
            <li>css</li>
            <li>html</li>
            <li>js</li>
            <li>react</li>
        </ul>
    );
}


export default App;
