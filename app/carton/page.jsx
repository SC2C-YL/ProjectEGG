import Nav from "../../components/nav";
import "./carton.css"
import Saved from "../../components/carton-sections"
function carton() {
    return(
        <div className="body">
            <Nav />
            <header>
                <button className="addMoreBackground">
                    <div>
                        <img src="/icons/addMore.png" className="addMoreIcon" />
                    </div>
                    <div className="addMoreBox">
                        <h3 className="addMoreText">add more</h3>
                    </div>
                </button>
                <div className="titleContainer">
                <div className="title">
                    <h1 className="yourText">Your</h1>
                    <h1 className="cartonText">Carton</h1>
                </div>
                <h3 className="subtitle">your saved opportunties</h3>
                </div>
                <div>
                    <img src="/icons/eggCarton.png" />
                </div>
            </header>
            <Saved title="Title" description="DescriptionDescription + Description" due="closes 2/10" cost="$40"></Saved>
            <Saved title="Title" description="DescriptionDescription + Description" due="closes 2/10" cost="FREE"></Saved>
            <Saved></Saved>
        </div>
    )
}

export default carton;