import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from "./components/main/Main";
import {MainTabProvider} from "./contexts/MainTabContext";

function App() {
    return (
        <MainTabProvider>
            <Main/>
        </MainTabProvider>
    );
}

export default App;
