import starFilled from "../assets/star_filled.svg";
import starEmpty from "../assets/star_empty.svg";
import "../styles/components/rating.scss";

export default function Rating({ rating }) {
    const MAX_RATING = 5;
    return (
        <div className="rating">
            {Array.from({ length: MAX_RATING }, (_, index) => (
                <img
                    className="rating-star"
                    key={index}
                    src={index < rating ? starFilled : starEmpty}
                    alt={index < rating ? "Filled star" : "Empty star"}
                />
            ))}
        </div>
    );
}
