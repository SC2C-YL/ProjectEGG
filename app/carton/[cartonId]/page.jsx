import Nav from "../../../components/nav";

function cartonDetails( {params} ) {
    return(
        <div>
            <Nav />
            <h1>cartonId</h1>
            <h1>carton</h1>
            <h1>carton</h1>
            <h1>carton</h1>
            <h1>carton</h1>
            <h1>carton</h1>
            <h1>cartonId</h1>
            <h1>details about carton {params.cartonId}</h1>
        </div>
    )
}

export default cartonDetails;