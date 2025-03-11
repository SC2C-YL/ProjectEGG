"use client"

import Nav from "../../components/nav";
import "./carton.css"
import Saved from "../../components/carton-sections";
import "../globals.css"
import { doc, getDoc } from "firebase/firestore";
import { UserAuth } from "@/context/userContext";
import { db } from "@/firebase/config";
import { useEffect, useState } from "react";
import { getCartItems, subscribeToCart } from "../api/cartService";


function carton() {
    const [carton, setCarton] = useState([]);
    const { user } = UserAuth()
    useEffect(() => {
        if (user) {
            const fetchCart = async () => {
                const userEmail = user?.email;
                const unsubscribe = subscribeToCart(userEmail, setCarton);
                return () => unsubscribe();
            };

            fetchCart();
        }
    }, [user]);


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
                    <h3 className="subtitle">your saved opportunties</h3>
                </div>
                <div>
                    <img className="eggCount" src="/icons/eggCarton.png" />
                </div>
            </header>
            {carton.map((item) => (
                <Saved key={item.id} title={item.title} description={item.info} due={item.closeDate} cost={item.cost}></Saved>
            ))}
        </div>
    )
}

export default carton;