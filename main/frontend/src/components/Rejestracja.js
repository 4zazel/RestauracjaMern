// frontend/src/components/Rejestracja.js
import React, { useState } from 'react';
import axios from 'axios';

const Rejestracja = () => {
    const [email, setEmail] = useState('');
    const [haslo, setHaslo] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/rejestracja', { email, haslo });
            alert(response.data);
            // Przenieś użytkownika do Logowania
            window.location.href = '/';
        } catch (error) {
            alert(error.response.data);
        }
    };

    return (
        <div className="container bg-dark" style={{ padding: '20px' }}>
            <form onSubmit={handleSubmit}>
                <h2 className="text-center mb-4 text-white">Rejestracja</h2>
                <div className="col-xs-8 col-sm-6">
                    <label className='text-white'>Email:</label>
                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label className='text-white'>Hasło:</label>
                    <input type="password" className="form-control" value={haslo} onChange={(e) => setHaslo(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-success">Zarejestruj</button>
            </form>
        </div>
    );
};

export default Rejestracja;
