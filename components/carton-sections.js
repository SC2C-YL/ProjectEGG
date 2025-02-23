import "../app/carton/carton.css"

function Saved({title, description, due, cost}) {
    function myFunction() {
        var popup = document.getElementById("myPopup");
        popup.classList.toggle("show");
      }

    return(
        <div className="container">
            <div className="half-container">
            <div>
                <img className="IMG" src="/images/black_images.png" />
            </div>
            <div className="info">
                <h1 className="STitle">{title}</h1>
                <h3 className="SDesc">{description}</h3>
                <div>
                    <button className="enter">{due}</button>
                </div>
            </div>
            </div>
            <div className="sec-Half-container">
                <h1 className="cost">{cost}</h1>
                    <div className="xdiv">
                        <img className = "Xlogo" src="/icons/Xmark.png" />
                    </div>
            </div>
            
        </div>
    )
}

export default Saved;