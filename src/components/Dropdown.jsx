import { useState } from "react";
import "../styles/components/dropdown.scss";
import arrowUp from "../assets/arrow_up.svg";

export default function Dropdown({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);

    function toggleDropdown() {
        setIsOpen((prevState) => !prevState);
    }

    return (
        <div className="dropdown">
            <div className="dropdown-header" onClick={toggleDropdown}>
                <h2>{title}</h2>
                <img
                    src={arrowUp}
                    alt={isOpen ? "Close" : "Open"}
                    className={`dropdown-arrow ${isOpen ? "open" : "closed"}`}
                />
            </div>
            {isOpen && (
                <div className="dropdown-content">
                    {Array.isArray(content) ? (
                        <ul>
                            {content.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>{content}</p>
                    )}
                </div>
            )}
        </div>
    );
}