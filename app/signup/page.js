import "./login.css";
import leftArrow from "../../icons/Left_Arrow.png";
function signIn() {
    return (
        <>
        <nav className = "Sign-In-Navbar">
            <img src = {leftArrow.src } className =" back-arrow"/>
        </nav>
        </>
    )
}

export default signIn;