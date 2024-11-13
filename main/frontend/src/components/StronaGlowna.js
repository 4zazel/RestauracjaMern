// frontend/src/components/StronaGlowna.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StronaGlowna = () => {
    const [produkty, setProdukty] = useState([
        { nazwa: 'Pizza', kategoria: 'Dania główne', cena: 25, zdj: '' },
        { nazwa: 'Lody', kategoria: 'Desery', cena: 10, zdj: '' },
        { nazwa: 'Sok pomarańczowy', kategoria: 'Napoje', cena: 8, zdj: ''}]);
    const [koszyk, setKoszyk] = useState([]);

    useEffect(() => {
        const fetchProdukty = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/produkty');
                setProdukty(response.data);
            } catch (error) {
                console.error("Błąd podczas pobierania produktów:", error);
            }
        };
        fetchProdukty();
    }, []);

    const dodajDoKoszyka = (produkt) => {
        setKoszyk([...koszyk, produkt]);
    };

    const zamow = async () => {
        try {
            // Send the cart data to the backend
            const response = await axios.post('http://localhost:5000/api/zamowienie', { produkty: koszyk });

            // Handle the success response from the backend
            alert(response.data.message || "Zamówienie złożone pomyślnie!");

            // Clear the cart after the order is placed
            setKoszyk([]);
        } catch (error) {
            console.error("Błąd podczas składania zamówienia:", error);
            alert("Wystąpił błąd podczas składania zamówienia. Spróbuj ponownie.");
        }
    };
  
    return (
        <div className="container bg-dark" style={{ padding: '20px' }}>
            <h2 className="text-center mb-4 bg-dark text-white">Strona Główna</h2>
            
            <div className="mb-4 bg-dark">
                <h3 className="text-info">Produkty</h3>
                <table className="table table-striped table-hover table-dark">
                    <thead className="thead-dark bg-dark">
                        <tr>
                            <th>Nazwa</th>
                            <th>Zdjęcie</th>
                            <th>Kategoria</th>
                            <th>Cena</th>
                            <th>Akcje</th>
                        </tr>
                    </thead>
                    <tbody>
                        {produkty.map((produkt) => (
                            <tr key={produkt._id}>
                                <td>{produkt.nazwa}</td>
                                <td><img src={produkt.zdj} alt={produkt.nazwa} style={{width: 200, height: 200, objectFit: 'cover'}}></img></td>
                                <td>{produkt.kategoria}</td>
                                <td>{produkt.cena} PLN</td>
                                <td>
                                    <button className="btn btn-info" onClick={() => dodajDoKoszyka(produkt)}>
                                        Dodaj do koszyka
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
    
            <div className="container bg-dark" style={{ padding: '20px' }}>
                <h3 className="text-info">Koszyk</h3>
                <ul className="list-group">
                    {koszyk.map((produkt, index) => (
                        <li key={index} className="list-group-item">
                            {produkt.nazwa}
                        </li>
                    ))}
                </ul>
            </div>
    
            <button onClick={zamow} className="btn btn-success btn-lg btn-block">Zamów</button>
        </div>
    );
};

export default StronaGlowna;