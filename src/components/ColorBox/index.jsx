import React, { useState} from 'react';
import PropTypes from 'prop-types';

ColorBox.propTypes = {
    
};
//random color
function getRanDomColor(){
    const COLOR_LIST = ['deeppink','green', 'red','blue','black'];
    const randomIndex = Math.trunc(Math.random()* 5);
    return COLOR_LIST[randomIndex];
}

function ColorBox() {
    const initColor = localStorage.getItem('box-color') || 'deeppink';
    const [color, setcolor] = useState(initColor);
    //ham click zo de random color
    function handleBoxClick(){
        const newColor = getRanDomColor();
        setcolor(newColor);
        localStorage.setItem('box-color', newColor);
    }
    return (
        <div className= 'color-box'
        style= {{backgroundColor: color}} onClick={handleBoxClick}>
            Color Box
        </div>
    );
}

export default ColorBox; 