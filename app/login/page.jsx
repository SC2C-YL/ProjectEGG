import "./login.css";
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
                        <h5>OR</h5>
                    </div>
                    <hr></hr>
                </div>
                <div className="bottomButtons">
                    <button className="bottomButton">
                        <p>new user?</p>
                        <p>Create an account</p>
                    </button>
                    <button className="bottomButton2">
                        <div>
                        <img src="/icons/google.png" className="googleIcon"></img>
                        </div>
                        <p>sign in with google</p>
                    </button>
                </div>
                
            </div>
        </div>
        </>
    )
}

export default signUp;