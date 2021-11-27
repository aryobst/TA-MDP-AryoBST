import './History.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

class History extends React.Component {   
    render() {
        return (
            <div className="profile-container">
                <div className = "card-container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/UFC_Logo.svg/1280px-UFC_Logo.svg.png"/>
                <p>The Ultimate Fighting Championship (UFC) is an American mixed martial arts (MMA) promotion company based in Las Vegas, Nevada. The UFC is owned and operated by Zuffa, LLC, a wholly owned subsidiary of Endeavor Group Holdings. It is the largest MMA promotion company in the world and features some of the highest-level fighters in the sport on its roster. The UFC produces events worldwide that showcase twelve weight divisions (eight men's divisions and four women's divisions) and abides by the Unified Rules of Mixed Martial Arts. As of 2020, the UFC has held over 500 events. Dana White has been UFC president since 2001. Under White's stewardship, the UFC has grown into a globally popular multi-billion-dollar enterprise. 
The first event was held in 1993 at the McNichols Sports Arena in Denver, Colorado. The purpose of the early Ultimate Fighting Championship competitions was to identify the most effective martial art in a contest with minimal rules and no weight classes between competitors of different fighting disciplines. In subsequent events, fighters began adopting effective techniques from more than one discipline, which indirectly helped create a separate style of fighting known as present-day mixed martial arts. In 2016, UFC's parent company, Zuffa, was sold to a group led by Endeavor, then known as William Morris Endeavor (WME–IMG), including Silver Lake Partners, Kohlberg Kravis Roberts and MSD Capital for US$4.025 billion. In 2021, Endeavor bought out Zuffa's other owners at a valuation of $1.7 billion.
 With a TV deal and expansion in Australia, Asia, Europe, and new markets within the United States, the UFC has increased in popularity, and has achieved greater mainstream media coverage; the promotion brought in a total revenue of US$609 million in 2015, and its next domestic media rights agreement with ESPN was valued at $1.5 billion over a five-year term. 
</p>
                </div>
            </div>
        );
    }
}

export default History;