"use client"

import {useState} from "react";
function FButton({filter}) {
    const [isActive, setIsActive] = useState(true);

    const fbutton = {
        marginLeft: "1rem",
        marginRight: "1rem",
       backgroundColor: isActive ? " #CDCDCD" : "#FFD966",
       borderRadius: "25px",
       padding: "1%",
       paddingLeft: "2%",
       paddingRight: "2%",
       fontWeight: "1000",
       fontSize: "1.5rem",
       color: isActive ? "#4C4646": "#AF8400",
       marginBottom: "1rem",
       
    }

    const toggleStyling = () => {
        setIsActive(prevState => !prevState)

    }

    return (
        <>
        <button style={fbutton} onClick={toggleStyling}>
            {filter}
        </button>
        </>
    )
}

export default FButton;