import React from "react";
import Typewriter from "typewriter-effect";
import {useNavigate} from "react-router-dom"; 
import "../App.css";

function Letter() {
    const navigate = useNavigate();

    return (
        <div className="app">
            <div className="title">
                <Typewriter
                    options={{
                        strings: ["Письмецо для тебя"],
                        autoStart: true,
                        loop: true,
                        delay: 150,
                        deleteSpeed: 50
                    }}/>
            </div>
            <img style={{marginTop: "30px"}} className="floating-img" src="/img/letter.png" alt="letter" />
            <div>
                <button className="btn" onClick={() => navigate("/the-birthday-letter")}>0ткрой! (•̀ᴗ•́)و ̑̑</button>
            </div>
        </div>
    );
}

export default Letter;
