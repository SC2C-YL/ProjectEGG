import Nav from "../../..//components/nav";
import Programcard from '../../../components/programCard';

import '../programs.css';

function kids() {
    return(
        <div>
            <Nav />
            <div className="button-grid">
            <Programcard image="/images/B1C.png" path="https://b1c.org/academic-enrichment/" title="Building 1 Community" />
            <Programcard image='/images/Domus.png' path="https://domuskids.org/" title="Domus" />
            <Programcard image='/images/BGC.png' path="https://www.bgcastamford.org/" title="Boys and Girls Club" />
            
            </div>
        </div>
    )
}
export default kids;