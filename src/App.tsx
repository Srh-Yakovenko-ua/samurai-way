import React from 'react';
import './App.css';

function App() {
    return (
        <div>
            <Header/>
            <div>
                <ul>
                    <li>css</li>
                    <li>html</li>
                    <li>js</li>
                    <li>react</li>
                </ul>
            </div>
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
    )
}




export default App;
