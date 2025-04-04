"use client";

import Nav from "../../components/nav";
import "./carton.css";
import Saved from "../../components/carton-sections";
import "../globals.css";
import { UserAuth } from "@/context/userContext";
import { useEffect, useState } from "react";
import { subscribeToCart } from "../api/cartService";

function Carton() {
    const [carton, setCarton] = useState([]);
    const { user } = UserAuth();

    useEffect(() => {
        if (!user?.email) return;

        const unsubscribe = subscribeToCart(user.email, setCarton);

        return () => unsubscribe();
    }, [user?.email]);

    return (
        <div className="bodyy">
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
                    <h3 className="subtitle">your saved opportunities</h3>
                </div>
                <div>
                    <img className="eggCount" src="/icons/eggCarton.png" />
                </div>
            </header>
            {carton.map((item) => (
                <Saved
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    due={item.due}
                    cost={item.cost}
                    type={item.type}
                />
            ))}
        </div>
    );
}

export default Carton;
