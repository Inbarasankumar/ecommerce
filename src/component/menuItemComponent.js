import React from 'react';

import './menuItem.scss';

const menuItem = ({title,linkURL,imageUrl , size})=>{
    return(
            <div className={`${size} menu-item`}>
                <div style={{backgroundImage:`url(${imageUrl})`}} className='background-image' ></div>
                <div className='content'>
                    <h1 className='title'>{title.toUpperCase()}</h1>
                    <h1 className='subtitle'>SHOP NOW</h1>
                </div>
            </div>
    )
}


export default menuItem;