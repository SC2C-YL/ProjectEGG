import { removeItemFromCart } from "@/app/api/cartService";
import "../app/carton/carton.css"
import { UserAuth } from "@/context/userContext";

function Saved({title, description, due, cost}) {
    // function myFunction() {
    //     var popup = document.getElementById("myPopup");
    //     popup.classList.toggle("show");
    //   }
    const {user} = UserAuth()

    const handleDeleteCart = () => {
        removeItemFromCart(user?.email, title);
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
                        <button onClick={() => handleDeleteCart()}>Delete</button>
                        <img className = "Xlogo" src="/icons/Xmark.png" />
                    </div>
            </div>
            
        </div>
    )
}

export default Saved;