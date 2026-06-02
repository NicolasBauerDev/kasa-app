import { NavLink } from "react-router";
import logo from "../assets/logo_kasa.svg";
import "../styles/components/navbar.scss";

export default function Navbar() {
    const links = [
        { name: "Accueil", path: "/" },
        { name: "À propos", path: "/about" },
    ];

    return (
        <nav className="navbar">
            <NavLink to="/">
                <img className="logo" src={logo} alt="Kasa" />
            </NavLink>
            <div className="nav-links">
                {links.map((link) => (
                    <NavLink
                        key={link.path}
                        to={link.path}
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }
                    >
                        {link.name}
                    </NavLink>
                ))}
            </div>
        </nav>
    );
}
