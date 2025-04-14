import React from 'react'
import logo from '../logo.svg';
import '../App.css';
import { BuilderComponent } from '@builder.io/react';

function MainPage() {
  return (
    <>
        <BuilderComponent model='arsenal'> </BuilderComponent>
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload. Hey there! This is a test.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  )
}

export default MainPage