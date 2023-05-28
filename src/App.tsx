import React from 'react';
import './App.scss';
import {Button} from "@mui/material";
import AppAppBar from "./modules/navigation/AppAppBar";

function App() {
    return (
        <div className="app-container">
            <AppAppBar/>
            <Button>Test</Button>
        </div>
    );
}

export default App;
