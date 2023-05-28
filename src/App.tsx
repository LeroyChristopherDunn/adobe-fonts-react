import React from 'react';
import './App.scss';
import AppAppBar from "./modules/navigation/AppAppBar";
import {FontScreen} from "./modules/font/FontScreen";
import {Footer} from "./modules/navigation/Footer";
import {Outlet, Route, Routes} from "react-router-dom";
import LoginScreen from "./modules/auth/LoginScreen";

function App() {
    return (
        <div className="app-container">
            <Routes>
                <Route path="/log-in" element={<LoginScreen/>}/>
                <Route path="/" element={<MainLayout/>}>
                    <Route path="/" element={<FontScreen />} />
                </Route>
            </Routes>
        </div>
    );
}

function MainLayout() {
    return (
        <>
            <AppAppBar/>
            <div className="content-container">
                <Outlet/>
                <Footer/>
            </div>
        </>
    )
}

export default App;
