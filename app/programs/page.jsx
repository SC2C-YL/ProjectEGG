import Nav from "../../components/nav";
import Card from '../../components/program-grid';
import './programs.css';

function programs() {
    return(
        <div>
            <Nav />
            <div class="button-grid">
            <Card image="/icons/tutoring.png" path="./programs/tutoring" title="Tutoring" />
            <Card image='/icons/SAT.png' path="/programs/SAT" title="SAT" />
            <Card image='/icons/kids.png' path="/programs/kids" title="Kids" />
            <Card image='/icons/college.png' path="/programs/highschool" title="Highschool" />
            </div>
        </div>
    )
}
export default programs;