import { getAllLogements } from "../utils/getLogements";
import { Link } from "react-router";
import HeroContainer from "../components/HeroContainer";
import heroImage from "../assets/home-hero-background.webp";
import "../styles/pages/home.scss";

export default function Home() {
    const logements = getAllLogements();

    return (
        <div className="home">
            <HeroContainer imageSource={heroImage} alt="Paysage de montagne">
                <h1>Chez vous, partout et ailleurs</h1>
            </HeroContainer>

            <div className="grid-logement">
                {logements.map((logement) => (
                    <Link key={logement.id} to={`/logement/${logement.id}`}>
                        <div className="logement-card">
                            <img
                                className="logement-cover"
                                src={logement.cover}
                                alt={logement.title}
                            />
                            <h2 className="logement-title">{logement.title}</h2>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
