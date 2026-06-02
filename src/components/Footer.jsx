import "../styles/components/footer.scss";
import logoLight from "../assets/logo_light.svg";
export default function Footer() {
    return (
        <footer>
            <img src={logoLight} alt="Kasa Logo Blanc" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}