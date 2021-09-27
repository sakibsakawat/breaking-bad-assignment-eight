import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const header = () => {
    return (
        <div className="header">
           <img className="logo" src={ logo } alt="logo"/>
        </div>
    );
};

export default header;