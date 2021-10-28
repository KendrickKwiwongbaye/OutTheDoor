
import React, { useEffect, useState } from 'react';
import '../../App.css';

const SearchInput = () => {

    let [Cars, setCars] = useState([]);
    let [value, setValue] = useState('');

    const fetchInventory = () => {
        fetch('/carList/carsList')
        .then(res => res.json())
        .then(json => setCars(json));
    }

    useEffect(() => {
        fetchInventory();
    }, []);

    const handleChange = event => {
        setValue(event.target.value);
    };

    const handleSubmit = event => {
        const requestOptions = {
            method:'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ data: value })
    };
        fetch('/carText/carsText', requestOptions)
        .then(res => res.json())
        .then(json => setCars(json));

        setValue('');

        event.preventDefault();
    }
    
        return (
            <div>
                <span>
                    <div onSubmit={ handleSubmit }>
                        <form>
                        <label for="cars">Input make, model, or seller of vehicle</label><br/>
                        <input id="cars" value={ value } onChange={ handleChange }>
                        </input>
                        <button type="submit">Search</button>
                        </form>
                        </div>
                </span>
                <h2>Cars</h2>
                <table>
                
                    <tr key={1}>
                        {Cars.map(Cars =>
                        <th><img src={Cars.Image} height="300" width="400"/><br/>Make: {Cars.Make}<br/>Model: {Cars.Model}<br/>Price: {Cars.Price}<br/>Seller: {Cars.Seller}</th>
                        )}
                    </tr>
                
                </table>
            </div>
        );  
    

};




export default SearchInput;