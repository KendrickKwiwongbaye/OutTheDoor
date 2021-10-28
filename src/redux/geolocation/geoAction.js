import { NEW_ZIP } from './geoType';

export const newZip = (zip,county) => {
    return {
        type: NEW_ZIP,
        county,
        zip,
        info: 'new zipcode'
    }
}