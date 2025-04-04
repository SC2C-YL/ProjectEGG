import Nav from "../../components/nav";
import "../globals.css";
import "./positions.css";
import FButton from "../../components/filter-grid-button";
import Position from "../../components/positions";
function Positions() {
    return(
        <div className="mainDiv">
            <Nav />
            <div className="H1-Div">
                <h1>Positions</h1>
            </div>
            <div className="filter-gird">
                <FButton filter="volunteer"/>
                <FButton filter="job type"/>
                <FButton filter="paid"/>
                <FButton filter="unpaid"/>
                <FButton filter="leadership"/>
            </div>
            <div className= "positions-container">
            <Position Title="Title" Type="volunteer"/>
            <Position Title="Title" Type="paid"/>
            <Position Title="Title" Type="unpaid"/>
            <Position Title="Title" Type="leadership"/>
            <Position Title="Title" Type="volunteer"/>
            <Position Title="Title" Type="paid"/>
            </div>
            
            

        </div>
    )
}

export default Positions;