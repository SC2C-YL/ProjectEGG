"use client"
import {useState} from 'react';

function Position(Paid) {
    const [isActive, setIsActive] = useState(true);
    const toggleStyling = () => {
        setIsActive((prevState) => !prevState);
    }
    const container1 = {
        backgroundColor: isActive ? "#939393": "#FFE598",
        width: "20em",
        height: "25em",
        minWidth: "300px",
        borderRadius: "20px",
        marginTop: "2.4em",
        display: "flex",
        flexDirection: "column",
        
    }
    const grayAdd = {
        minWidth: "2.5em",
        minHeight: "2.5em",
         width: "1%",
        marginBottom: "-1em",
        position: "absolute",
    }
    const mainDiv = {
        marginBottom: "3em",
        
        
    }


    return(
        <div style={mainDiv} >
            <button className="grayAddContainer" onClick={toggleStyling}>
                <img className="grayAdd" src= {isActive ? "/icons/gray-add.png": "/icons/added.png"} />
            </button>
        <div style={container1}>
            <img className="img1" src="/images/black_Images.png" />
            <div>
                <div className="paidTag">Paid</div>
            </div>
            <h2 className="h2Title">TITLE</h2>
        </div>
        </div>
    )
}

export default Position;