import fotoLeonardo from "../assets/image.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faInstagram,
    faTwitter,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Home() {
    return (
        <main class="main-content">
            <div className="user-content">
                <div className="page-content" id="home">
                    <figure>
                        <img
                            src={fotoLeonardo}
                            alt="FotoUser"
                            className="image-content banana"
                        />
                    </figure>
                    <h1 className="title-content">Leonardo Marques</h1>
                    <p className="text-contet">Desenvolvedor Front-end</p>
                    <strong>leonardoemcs166@gmail.com</strong>
                    <p><i>(15) 99602-3560</i></p>
                    <div className="redes-container">
                        <div className="icons-rede">
                            <a
                                href="https://www.linkedin.com/in/leonardo-emanuel-3695451a0/"
                                className="link-rede"
                            >
                                <FontAwesomeIcon
                                    icon={faLinkedin}
                                    className="icon"
                                />
                            </a>
                        </div>
                        <div className="icons-rede">
                            <a
                                href="https://github.com/LeonardoMarques7"
                                className="link-rede"
                            >
                                <FontAwesomeIcon
                                    icon={faGithub}
                                    className="icon"
                                />
                            </a>
                        </div>
                        <div className="icons-rede">
                            <a
                                href="https://twitter.com/LeonardoMarks07"
                                className="link-rede"
                            >
                                <FontAwesomeIcon
                                    icon={faTwitter}
                                    className="icon"
                                />
                            </a>
                        </div>
                        <div className="icons-rede">
                            <a
                                href="https://www.instagram.com/leonardo_marques15/"
                                className="link-rede"
                            >
                                <FontAwesomeIcon
                                    icon={faInstagram}
                                    className="icon"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Home;
