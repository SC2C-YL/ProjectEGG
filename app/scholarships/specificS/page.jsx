import "../scholarship.css";
import Nav from "../../../components/nav";

function specificScholarship () {

return(
    <div >
        <Nav />
        <button className="Back2Page">Scholarships</button>
        <div className="SStitle">
        <h1 className="ScholarshipTitle">Blah Blah Blah Blah Blaj Scholarship</h1>
            <div>
                <h3 className="AddtoCart">Add to Cart</h3>
            </div>
        </div>
        <div className="deadlineContainer">
            <h3 className="deadline">Deadline Soon</h3>
        </div>
        <div className="InfoContainer">
            <div className="SSDetails">
                <div className="SStitleBox">
                    <h2 className="SSTitle">Scholarship Details</h2>
                </div>
                <div className="open-close">
                    <h4>OPENS: 10/02/2024</h4>
                    <h4>CLOSE: 10/03/2024</h4>
                </div>
                <p className="SStext">
                Blah BlaBlah Blah Blah Scholarship; Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah  Blah Blah Blah Scholarship; Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah h Blah Scholarship; Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah  Blah Blah Blah Scholarship; Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah
                </p>
                <div className="applyNowBox">
                    <h3 className="applyNow">Apply Now</h3>
                </div>
            </div>
            <div className="middleLineBox">
            <div className="middleLine">
            <div className="vl"></div>
            </div>
            </div>
            <div className="side-info">
                <div className="leftSideTitle">
                <h1 className="money">$10,000</h1>
                </div>
                <div className="basements-container">
                <ul className="basements">

                    <li>Essay required:                Yes</li>

                    <li>Merrit Based:                Yes  </li>

                    <li>Need Based:               Yes</li>
                    
                </ul>
                </div>
            </div>

        </div>
    </div>
)

}

export default specificScholarship;