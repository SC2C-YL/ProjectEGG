import "./signup.css"
import Input from "../../components/input"
function login() {

    return(
        <div>
            <nav>
            <div>
                <img src="/icons/logo.png" />
            </div>
        </nav>
        <div className="first-half">
            <h1 className="title">Everyone Gets Greatness</h1>
            <h2 className="signIn">Sign Up</h2>
            <div></div>
            <form>
                    <Input h4="Your name" type="text" name="username" />
                    <Input h4="email/username" type="text" name="username" />
                    <Input h4="password" type="password" />
                <div>
                    <input className="submit" type="submit" value="Submit" />
                </div>
                <div className="orMovingDiv">
                        <h5>OR</h5>
                    </div>
                <hr></hr>
                <button className="input">
                    <img src="/icons/google.png" className="googleIcon"/>
                    <p>Create an account with Google</p>
                </button>
                </form>
        </div>
        </div>
    )
}

export default login;