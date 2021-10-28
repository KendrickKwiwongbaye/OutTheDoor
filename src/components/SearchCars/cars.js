
import React, { useEffect, useState } from 'react';
import './cars.css';

const Search = () => {

    let [Cars, setCars] = useState([]);
    let value;
    const standardChoice ="Audi";
    const Audi = "Audi";
    const BMW = "BMW";
    const Chevrolet = "Chevrolet";
    const FIAT = "FIAT";
    const Ford = "Ford";

    const fetchInventory = () => {
        fetch('/carList/carsList')
        .then(res => res.json())
        .then(json => setCars(json));
    }

    useEffect(() => {
        fetchInventory();
    }, []);
    
    let searchMake = (value) => {
        const requestOptions = {
            method:'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ data: value })
    };
        fetch('/carSearch/carsSearch', requestOptions)
            .then(res => res.json())
            .then(json => setCars(json));
    }
    
        return (
            <div>
                <span>
                    <div id="SelectBar" >
                        <label for="cars">Choose a Car manufacturer</label><br/>
                        <select id="cars" name="data" onChange={(e) => { searchMake(e.target.value); } }>
                            <option value={() => {value = standardChoice}}>Choose a Car</option>
                            <option value={() => {value = Audi}}>Audi</option>
                            <option value={() => {value = BMW}}>BMW</option>
                            <option value={() => {value = Chevrolet}}>Chevrolet</option>
                            <option value={() => {value = FIAT}}>FIAT</option>
                            <option value={() => {value = Ford}}>Ford</option>
                        </select>
                        </div>
                </span>
                <h2>Cars</h2>
                <table key={3}>
                {Cars.map(Cars =>
                    <tr >
                        <button>
                        <td><img src={Cars.Image} height="300" width="400"/></td>
                        <td>Make: {Cars.Make} <br/><br/>
                        Model: {Cars.Model}<br/><br/>
                        Price: {Cars.Price}<br/><br/>
                        Seller: {Cars.Seller}</td>
                        </button>
                        
                    </tr>
                )}
                </table>
            </div>
        );  
    

};




export default Search;