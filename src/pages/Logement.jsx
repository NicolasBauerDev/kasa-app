import { useParams, Navigate } from "react-router";
import Slider from "../components/Slider";
import Dropdown from "../components/Dropdown";
import Tags from "../components/Tags";
import Rating from "../components/Rating";
import { getLogementById } from "../utils/getLogements";

import "../styles/pages/logement.scss";

export default function Logement() {
    const { id } = useParams();

    const logement = getLogementById(id);

    const logementNotFound = !logement;
    if (logementNotFound) {
        return <Navigate to="/404" />;
    }

    const {
        title: logementTitle,
        location: logementLocation,
        host: { name: logementHostName, picture: logementHostPicture },
        rating: logementRating,
        tags: logementTags,
        equipments: logementEquipments,
        description: logementDescription,
        pictures: logementPictures,
    } = logement;

    const logementHostNameParts = logementHostName.split(" ");
    const logementHostFirstName = logementHostNameParts[0];
    const logementHostLastName = logementHostNameParts.slice(1).join(" ");

    return (
        <div className="logement">
            <Slider pictures={logementPictures} />

            <div className="logement-header-rating">
                <div className="logement-header">
                    <h1 className="logement-title">{logementTitle}</h1>
                    <p className="logement-location">{logementLocation}</p>
                    <Tags tags={logementTags} />
                </div>

                <div className="logement-host-rating">
                    <div className="logement-host-name-picture">
                        <p className="logement-host">{logementHostFirstName} <br /> {logementHostLastName}</p>
                        <img src={logementHostPicture} alt={logementHostName} />
                    </div>
                    <Rating rating={Number(logementRating)} />
                </div>
            </div>

            <div className="logement-infos">
                <Dropdown title="Description">
                    {logementDescription}
                </Dropdown>
                <Dropdown title="Equipments">
                    {logementEquipments}
                </Dropdown>
            </div>
        </div>
    );
}
