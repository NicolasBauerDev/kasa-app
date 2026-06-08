import { Link } from "react-router";
import "../styles/pages/not-found.scss";
export default function NotFound() {
    return (
        <div className="notfound">
            <h1 className="notfound-title">404</h1>
            <h2 className="notfound-subtitle">Oups! La page que vous demandez n'existe pas.</h2>
            <Link to="/" className="back-to-home">Retourner sur la page d’accueil</Link>
        </div>
    );
}