import { Link } from "react-router-dom";
import "./style.css";

function Header() {
    return (
        <div className="nav">
            <ul className="nav-ul">
                <li className="nav-item">
                    <Link to="/" className="nav-link">
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/sobre" className="nav-link">
                        Sobre
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/projetos" className="nav-link">
                        Projetos
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/contato" className="nav-link">
                        Contato
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Header;
