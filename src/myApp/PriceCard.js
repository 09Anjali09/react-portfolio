import React from 'react';
import "./stylePriceCard.css";
import { Link } from 'react-router-dom';
const PriceCard = () => {
  return (
    <>
    <div className='pricing'>
       <div className='card-container'>

        <div className='card'>
            <h3> - Basic - </h3>
            <span className='bar'></span>
            <p className='btc'>$ 100</p>
            <p> - 3 DAYS -</p>
            <p> - 5 PAGES -</p>
            <p> - Featured - </p>
            <p>- Responsive Design -</p>
                <Link to="/contact" className="btn">PURCHASE NOW</Link>
        </div>


        <div className='card'>
            <h3> - Premium - </h3>
            <span className='bar'></span>
            <p className='btc'>$ 300</p>
            <p> - 2 DAYS -</p>
            <p> - 3 PAGES -</p>
            <p> - Featured - </p>
            <p>- Responsive Design -</p>
                <Link to="/contact" className="btn">PURCHASE NOW</Link>
        </div>


        <div className='card'>
            <h3> - Basic - </h3>
            <span className='bar'></span>
            <p className='btc'>$ 100</p>
            <p> - 3 DAYS -</p>
            <p> - 6 PAGES -</p>
            <p> - Featured - </p>
            <p>- Responsive Design -</p>
                <Link to="/contact" className="btn">PURCHASE NOW</Link>
        </div>
       </div>
    </div>
    </>
  )
}

export default PriceCard
