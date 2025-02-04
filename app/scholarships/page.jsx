import Nav from "../../components/nav";
import './scholarship.css';
import FButton from "../../components/filter-grid-button";

function scholarships() {
    return(
        <div>
            <Nav />
            <div className="H1-Div">
                <h1>scholarships</h1>
            </div>
            <div className="filter-gird">
                <FButton filter="Location"/>
                <FButton filter="GPA"/>
                <FButton filter="Fields of Study"/>
            </div>

        </div>
    )
}

export default scholarships;