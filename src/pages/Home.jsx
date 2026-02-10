import React from "react";
import Typewriter from "typewriter-effect";
import {useNavigate} from "react-router-dom";
import "../App.css";

function Home() {
    const navigate = useNavigate();

    return (
        <div className="app">
            <div className="text-container">
                <div className="text">
                    <Typewriter
                        options={{
                            strings: ["С ДНЕМ Р0ЖДЕНИЯ ВАСЕНЬКА!!!! "],
                            autoStart: true,
                            loop: true,
                            delay: 100,
                            deleteSpeed: 50,
                        }}
                    />
                </div>
                <div className="floating-images">
                    <img className="floating-cats" src="/img/noize.png" alt="letter"/>
                    <img className="floating-vasya" src="/img/vasya-pixel.png" alt="letter"/>
                    <img className="floating-cats" src="/img/fonya.png" alt="letter"/>
                </div>
                <button className="btn" onClick={() => navigate("/letter")}>
                    ТblКни (づ｡◕‿‿◕｡)づ
                </button>
            </div>
        </div>
    );
}

export default Home;
