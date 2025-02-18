import "./signup.css";
import Input from "../../components/input"
function signUp() {
    return (
        <>
        <nav>
            <div>
                <img src="/icons/logo.png" />
            </div>
        </nav>
        <div className="first-half">
            <h1 className="title">Everyone Gets Greatness</h1>
            <h2 className="signIn">Sign In</h2>
            <div>
                <form>
                    <Input h4="email/username" type="text" name="username" />
                    <Input h4="password" type="password" />
                <div>
                    <input className="submit" type="submit" value="Submit" />
                </div>
                </form>
                <div>
                    <div className="orMovingDiv">
                        <h5>or</h5>
                    </div>
                    <hr></hr>
                </div>
                <div className="bottomButtons">
                    <div className="bottomButton">
                        <p>new user? Create an account</p>
                    </div>
                    <div className="bottomButton2">
                        <img></img>
                        <p>sign in with google</p>
                    </div>
                </div>
                
            </div>
        </div>
        </>
    )
}

export default signUp;