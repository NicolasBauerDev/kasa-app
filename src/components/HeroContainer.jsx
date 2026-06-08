import "../styles/components/hero-container.scss";
export default function HeroContainer({ children, imageSource, alt }) {
    return (
        <div className="overlay-hero">
            <img className="img-background" src={imageSource} alt={alt} />
            { children }
        </div>
    )
}