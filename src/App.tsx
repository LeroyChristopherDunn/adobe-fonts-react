import React from 'react';
import './App.scss';
import AppAppBar from "./modules/navigation/AppAppBar";
import {FontScreen} from "./modules/font/FontScreen";
import {Footer} from "./modules/navigation/Footer";

function App() {
    return (
        <div className="app-container">
            <AppAppBar/>
            <div className="content-container">
                <FontScreen/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
