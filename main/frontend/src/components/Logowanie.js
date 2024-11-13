// frontend/src/components/Logowanie.js
import React, { useState } from 'react';
import axios from 'axios';

const Logowanie = () => {
    const [email, setEmail] = useState('');
    const [haslo, setHaslo] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/logowanie', { email, haslo });
            alert(response.data);
            // Przenieś użytkownika do Strony Głównej
            window.location.href = '/stronaglowna';
        } catch (error) {
            alert(error.response.data);
        }
    };

    return (
        <div className="container bg-dark" style={{ padding: '20px' }}>
            <form onSubmit={handleSubmit}>
                <h2 className="text-center mb-4 text-white">Logowanie</h2>
                <div className="col-xs-8 col-sm-6">
                    <label className='text-white'>Email:</label>
                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label className='text-white'>Hasło:</label>
                    <input type="password" className="form-control" value={haslo} onChange={(e) => setHaslo(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-success">Zaloguj</button>
                <a href="/rejestracja" className="btn btn-info">Zarejestruj się</a>
            </form>
        </div>
    );
};

export default Logowanie;
