import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Logowanie from './components/Logowanie';
import Rejestracja from './components/Rejestracja';
import StronaGlowna from './components/StronaGlowna';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<StronaGlowna />} />
                <Route path="/rejestracja" element={<Rejestracja />} />
                <Route path="/logowanie" element={<Logowanie />} />
            </Routes>
        </Router>
    );
};

export default App;