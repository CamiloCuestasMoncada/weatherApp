import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

/*const Location = (props) => {*/
    /*const city = props.city; sin destructuring*/
    /*const {city} = props; con destructuring pero aun se puede hacer mas corto*/
const Location = ({city}) => {
    return (<div className="LocationCont"><h1>{city}</h1></div>)
};
    
Location.propTypes={
    city:PropTypes.string.isRequired,
}
export default Location;