import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { newZip } from '../../redux/geolocation/geoAction';
import '../../App.css';


//https://www.youtube.com/watch?v=Xd43hZKaUS0&t=170s&ab_channel=JuniorDeveloperCentral
//https://www.youtube.com/watch?v=U3dLjHN0UvM&t=505s&ab_channel=TaylorGriffith
//https://opencagedata.com/reverse-geocoding/tutorial-building-a-reverse-geocoder

const Location = () => {
//const zipcode = useSelector(state => state.zip);
const dispatch = useDispatch();


var [latitude, setLatitude] = useState();
var [longitude, setLongitude] = useState();
var [region, setRegion] = useState([]);
var [key, setKey] = useState();
var geocoder = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${key}`;
var [county, setCounty] = useState();


setTimeout(() => {
  getLocation();  
}, 100);

function geoKey(callback) {
  fetch('/geoKey/getGeoKey')
  .then(res => res.json())
  .then(json => setKey(json))
  .then(callback());
}


function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getCoordinates);
    } else {
    alert("Geolocation is not supported by this browser.");
  }
}

const getCoordinates = (position) => {
  setLatitude(position.coords.latitude);
  setLongitude(position.coords.longitude);
  geoKey(getCountry);
}

function getCountry() {
    fetch(geocoder)
    .then(res => res.json())
    .then((data) => (setRegion(data.results[0].components.postcode, setCounty(data.results[0].components.county))/*data.results[0].components.postcode*/))
    .then(dispatch(newZip(region, county)))
    .catch(error => console.log('error', error.message))
  }


  return (
    
		<div> 
      zipcode : {region}, {county}
    </div>
    
    
  )
}


 export default Location
