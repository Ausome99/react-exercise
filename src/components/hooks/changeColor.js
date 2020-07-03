import React, { useState, useEffect } from 'react';

export default function colorChange() {
    const [textColor, updateColor] = useState("black");

    const newColor = () => {
       updateColor(document.querySelector("#colorInput").value)
    }
       

    return (
        <div>
            <h1 style={{color: textColor}}>Color Me!</h1>
            <input name="colorInput" id="colorInput" type="text" />
            <button onClick={() => newColor()}>Submit</button>
        </div>
    )
}