'use client'

import "./signup.css"
import Input from "../../components/input"
import { useState } from "react";
import { UserAuth } from "@/context/userContext";
import { useRouter } from "next/navigation";
function login() {
    const router = useRouter()
    const { createUser } = UserAuth();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = async () => {
        await createUser(email, password).then(() => {
            router.push("/");
        })
    }
    return (
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
                <Input h4="Your name" type="text" name="username" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <Input h4="email/username" type="email" name="username" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Input h4="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <div>
                    <button className="submit" type="submit" value="Submit" onClick={handleSubmit}>Submit</button>
                </div>
                <div className="orMovingDiv">
                    <h5>OR</h5>
                </div>
                <hr></hr>
                <button className="input">
                    <img src="/icons/google.png" className="googleIcon" />
                    <p>Create an account with Google</p>
                </button>
            </div>
        </div>
    )
}

export default login;