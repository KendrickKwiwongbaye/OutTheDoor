import { createStore } from 'redux';
import geoReducer from './geolocation/geoReducer';

const store = createStore(geoReducer);

export default store;