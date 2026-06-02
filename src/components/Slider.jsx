import { useState } from "react";
import arrow_next from "../assets/arrow_next.svg";
import arrow_prev from "../assets/arrow_previous.svg";
import "../styles/components/slider.scss";

export default function Slider({ pictures }) {
    const [currentPictureIndex, setCurrentPictureIndex] = useState(0);
    const totalPictures = pictures.length;

    function goToNextPicture() {
        setCurrentPictureIndex((prevIndex) => (prevIndex + 1) % totalPictures);
    }

    function goToPreviousPicture() {
        setCurrentPictureIndex(
            (prevIndex) => (prevIndex - 1 + totalPictures) % totalPictures,
        );
    }

    return (
        <div className="slider">
            <img
                className="slider-picture"
                src={pictures[currentPictureIndex]}
                alt={`Slide ${currentPictureIndex + 1}`}
            />
            {totalPictures > 1 && (
                <>
                    <div className="slider-controls">
                        <button onClick={goToPreviousPicture}>
                            <img src={arrow_prev} alt="Previous" />
                        </button>
                        <button onClick={goToNextPicture}>
                            <img src={arrow_next} alt="Next" />
                        </button>
                    </div>
                    <div className="slider-counter">
                        {currentPictureIndex + 1}/{totalPictures}
                    </div>
                </>
            )}
        </div>
    );
}
