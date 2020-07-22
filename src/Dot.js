import React from 'react';
import './Dot.css';

export default function Dot(props) {
    const dotSize = `${Math.floor(Math.random()*2)}em`
    const colors = ['#eb4034', '#d9bc1c', '#409111', '#34bf80', '#0fdbd5','#0f68db', '#544ac7', '#882fcc', '#d321d9', '#d11d7d', '#cc1830', '#360c12', '#160b30', '#370e40', '#62376b', '#235b6e', '#1fb52b', '#317036', '#a1c965', '#a67b26', '#a16020', 'white', 'silver']
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const dotProperties = { 
        position: 'relative',
        left: `${Math.floor(Math.random()*700)}px`,
        top: `${Math.floor(Math.random()*10)}px`,
        transition: 'all 3s ease-in-out',
        // boxShadow: `1px 1px 3px ${randomColor}`,
        height: `${dotSize}`,
        width: `${dotSize}`,
        backgroundColor: randomColor,
        borderRadius: '50%'
    }

    return(
        <div className='dot' style={dotProperties}></div>
    ) 
}