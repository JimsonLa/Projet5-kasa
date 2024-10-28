import React, { useState } from 'react';
import vector from '../assets/Vector.png';

const Collapse = ({title, details}) => {

const [isCollapse, setIsCollapse] = useState(true)

const toggleCollapse = () => {
    setIsCollapse(!isCollapse)
}

    return (

        <div className='collapse-container'>
            <div onClick={toggleCollapse} className='collapse'>
                <h3 className='collapse-title'>{title}</h3>
                <span className='collapse-icon'>{isCollapse ? <img src={vector} alt="chevron up" className='chevron-up' /> : <img src={vector} alt="chevron down" className='chevron-down' /> }</span>
            </div>

           
            <div className={`collapse-detail ${!isCollapse ? 'open' : ''}`}>{details}</div>

          
     
        </div>
        
    );
};
  
export default Collapse;