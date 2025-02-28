import Nav from "../../..//components/nav";
import Programcard from '../../../components/programCard';

import '../programs.css';

function Hscard() {
    return(
        <div>
            <Nav />
            <div class="button-grid">
            <Programcard image="/images/B1C.png" path="https://b1c.org/employ/skills-development-classes/" title="Building 1 Community" />
            <Programcard image='/images/DAE.png' path="https://www.transformnhv.org/youth-programming" title="District Arts & Education" />
            <Programcard image='/images/F5.png' path="https://futurefive.org/high-school/" title="Future 5" />
            </div>
        </div>
    )
}
export default Hscard;