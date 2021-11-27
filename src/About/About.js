import './About.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

class About extends React.Component {   
    render() {
        return (
            <div className="profile-container">
                <div className = "card-container">
                <img src="https://spesialis1.orthopaedi.fk.unair.ac.id/wp-content/uploads/2021/02/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg"/>
                <p>Nama : Aryo Binatoro Srie Tanto</p>
                <p>NIM : 21120119140121</p>
                <p>Praktikum Mobile Device Programming</p>
                </div>
            </div>
        );
    }
}

export default About;