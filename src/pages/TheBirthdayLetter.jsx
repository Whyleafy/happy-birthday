import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {StepLetters} from "../StepLetter.jsx";

function TheBirthdayLetter() {
    const navigate = useNavigate();
    const [popupImage, setPopupImage] = useState(null);
    const [step, setStep] = useState(1); // старт лучше с 1, если есть 1..4

    const next = () => setStep((s) => Math.min(s + 1, 4));
    const back = () => setStep((s) => Math.max(s - 1, 1));

    const openPopup = (imageSrc) => setPopupImage(imageSrc);
    const closePopup = () => setPopupImage(null);

    return (
        <div className="app">
            <StepLetters step={step} />
            <div style={{ display: "flex", gap: 8 }}>
                <button className="btn" onClick={back} disabled={step === 1}>
                    Назад
                </button>
                <button className="btn" onClick={next} disabled={step === 4}>
                    Вперед
                </button>
            </div>

            <div className="title">
                <p>А снизу мое самое любимео:)))</p>
            </div>

            <div className="img-btn">
                <button className="img-button" onClick={() => openPopup("img/vasya1.jpeg")}>
                    <img src="img/letter2.png" alt="letter" className="img-small" />
                    <span className="btn-text">тыкни</span>
                </button>
                <button className="img-button" onClick={() => openPopup("img/vasya2.jpeg")}>
                    <img src="img/letter2.png" alt="letter" className="img-small" />
                    <span className="btn-text">тык</span>
                </button>
            </div>

            <div className="img-btn">
                <button className="img-button" onClick={() => openPopup("img/vasya3.jpeg")}>
                    <img src="img/letter2.png" alt="letter" className="img-small" />
                    <span className="btn-text">тыкни</span>
                </button>
                <button className="img-button" onClick={() => openPopup("img/vasya4.jpeg")}>
                    <img src="img/letter2.png" alt="letter" className="img-small" />
                    <span className="btn-text">ТЫК</span>
                </button>
            </div>

            <button className="btn" onClick={() => navigate("/")}>
                Хочу заново
            </button>

            {popupImage && (
                <div className="popup-overlay" onClick={closePopup}>
                    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                        <img src={popupImage} alt="Popup" className="popup-image" />
                        <button className="close-btn" onClick={closePopup}>
                            X
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TheBirthdayLetter;
