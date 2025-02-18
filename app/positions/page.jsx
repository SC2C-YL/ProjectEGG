import Nav from "../../components/nav";
import "../globals.css";
import "./positions.css";
import FButton from "../../components/filter-grid-button";
function Positions() {
    return(
        <div>
            <Nav />
            <div className="H1-Div">
                <h1>Positions</h1>
            </div>
            <div className="filter-gird">
                <FButton filter="volenteer"/>
                <FButton filter="job type"/>
                <FButton filter="paid"/>
                <FButton filter="unpaid"/>
                <FButton filter="leadership"/>
            </div>
        </div>
    )
}

export default Positions;