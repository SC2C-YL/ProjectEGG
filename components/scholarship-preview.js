"use client"

import { useState } from "react";
import Link  from "next/link";
function ScholarshipPreview({ possibleDeadline, Title, Info, Odate, Cdate}) {

    const [isActive, setIsActive] = useState(true);
    const scholarBoxStyle={
        backgroundColor:isActive ? " #4C4646" : "#F1C232",
        marginTop: "1rem",
        marginLeft: "1rem",
        minWidth: "160px",
        maxWidth: "22%",
        borderRadius: "16px",
        display: "flex",
        flexDirection: "column",
        height: "30rem",
        minHeight: "30rem",
    };
    const titleBox={
        backgroundColor: isActive ? " #939393" : "#AF8400",
        }
    const scholarTitle={
        fontWeight: "bolder",
        fontSize: "1.5rem",
        padding:".5rem",
        paddingLeft: "1rem",
        color: isActive ? "black":"white",
    }
    const scholarInfoBox={
        backgroundColor:isActive ? "#CDCDCD":"#FFE598",
        height: "100%",
        borderRadius: "0px 0px 16px 16px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    }
    const scholarInfoText={
        margin:"10px",
        paddingLeft: ".5rem",
        color: isActive ? "black" : "white",
    }
    const Line= {
    paddingBottom:".1em",
    marginBottom: "1em",
    backgroundColor: isActive ? "black" : "white",
    width: "90%",
    }
    const Bolder={
        fontWeight: "bolder",
        color: isActive ? "black": "white",
    }
    const toggleStyling = () => {
        setIsActive((prevState) => !prevState);
    };
    const Apply = {
    backgroundColor: isActive ? "#939393" : "#AF8400",
    padding:".5rem",
    borderRadius: "16px",
    display: "flex",
    justifyContent: "center",
    width: "30%",
    minWidth: "80px",
    color: isActive ? "black" : "white",
    }

    return (
            <div style={scholarBoxStyle}>
                <div className={'deadline-box'}>
                    <h3 className="deadline-text">{possibleDeadline}</h3>
                </div>
                <div style={titleBox}>
                    <h2 style={scholarTitle}>{Title}</h2>
                    <button className="addScholarship" onClick={toggleStyling}>
                    <img src={isActive ? "/icons/addScholarship.png" :"/icons/addedScholarship.png" } className ="grayPlus"/>
                    </button>
                </div>
                <div style={scholarInfoBox}>
                    <p style={scholarInfoText}>{Info}</p>
                    <div>
                        <div style={{display:"flex",justifyContent:"center" }}>
                        <div style={Line}></div>
                        </div>
                        <div className="Sdates">
                            <h3 style={Bolder}>Open Date</h3>
                            <h4 style={Bolder}>{Odate}</h4>
                        </div>
                        <div className="Sdates">
                            <h3 style={Bolder}>Close Date</h3>
                            <h4 style={Bolder}>{Cdate}</h4>
                        </div>
                        <div className="Apply-box">
                            <Link href="/scholarships/specificS" style={Apply}>
                                <button>Apply</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default ScholarshipPreview;