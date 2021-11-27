import './Home.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

class Home extends React.Component {   

    render() {
        return (
            <div className="container">
                <img src="https://www.teahub.io/photos/full/25-250618_ufc-wallpaper-hd-ufc-219-live-stream.jpg"/>
                <h1>UFC</h1>
                <p>Ultimate Fighting Championship</p>
            </div>
        );
    }
}

export default Home;