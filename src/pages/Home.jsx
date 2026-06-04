import { getAllLogements } from "../utils/getLogements";
import { Link } from "react-router";
import "../styles/pages/home.scss";

export default function Home() {
    const logements = getAllLogements();
    console.log(logements);
    
    return (
        <div className="home">
            <div className="overlay-hero">
                <h1>Chez vous, partout et ailleurs</h1>
            </div>

            <div className="grid-logement">
                {logements.map((logement) => (
                    <Link to={`/logement/${logement.id}`}>
                        <div className="logement-card">
                            <img className="logement-cover" src={logement.cover} alt="" />
                            <h2 className="logement-title">
                                {logement.title}
                            </h2>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}