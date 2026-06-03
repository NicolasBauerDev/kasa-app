import { useState } from "react";
import "../styles/components/dropdown.scss";
import arrowUp from "../assets/arrow_up.svg";

export default function Dropdown({ title, children }) {
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
                    { children }
                </div>
            )}
        </div>
    );
}
