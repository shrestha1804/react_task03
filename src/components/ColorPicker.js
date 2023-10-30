import React, { useState } from 'react'
import './style.css'

function ColorPicker() {

    const [currColor, setColor] = useState("pink")
    const newStyle = {
        backgroundColor: currColor,
    };

    const chooseColor = () => {
        document.getElementById("my_ul").hidden = false;
    }

    const alter_but =(e) => {
        document.getElementById("my_ul").hidden = true;
        setColor(e.target.style.backgroundColor);
    }

    return (
        <div id='my_div' style={newStyle}>
            <ul id='my_ul' hidden={true}>
                <li><button id='colButt' onClick={alter_but} style={{backgroundColor: "red"}}></button></li>
                <li><button id='colButt' onClick={alter_but} style={{ backgroundColor: "lime" }}></button></li>
                <li><button id='colButt' onClick={alter_but} style={{ backgroundColor: "blue" }}></button></li>
                <li><button id='colButt' onClick={alter_but} style={{ backgroundColor: "yellow" }}></button></li>
                <li><button id='colButt' onClick={alter_but} style={{ backgroundColor: "fuchsia" }}></button></li>
                <li><button id='colButt' onClick={alter_but} style={{ backgroundColor: "cyan" }}></button></li>
                <li><button id='colButt' onClick={alter_but} style={{ backgroundColor: "orange" }}></button></li>
                <li><button id='colButt' onClick={alter_but} style={{ backgroundColor: "purple" }}></button></li>
                <li><button id='colButt' onClick={alter_but} style={{ backgroundColor: "pink" }}></button></li>
                <li><button id='colButt' onClick={alter_but} style={{ backgroundColor: "green" }}></button></li>
                <li><button id='colButt' onClick={alter_but} style={{ backgroundColor: "coral" }}></button></li>
                <li><button id='colButt' onClick={alter_but} style={{ backgroundColor: "darkturquoise" }}></button></li>
                <li><button id='colButt' onClick={alter_but} style={{ backgroundColor: "saddlebrown" }}></button></li>
                <li><button id='colButt' onClick={alter_but} style={{ backgroundColor: "slateblue" }}></button></li>
                <li><button id='colButt' onClick={alter_but} style={{ backgroundColor: "silver" }}></button></li>
            </ul>
            <button type="button" id='pickButt'  onClick={chooseColor}>Pick a color</button>
        </div>
    )
}

export default ColorPicker
