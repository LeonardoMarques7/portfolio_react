import fotoLeonardo from "../assets/image.png";
import foto1 from "../assets/img1.png";
import foto2 from "../assets/img2.png";
import foto3 from "../assets/img3.png";
import foto4 from "../assets/img4.png";
import foto5 from "../assets/img5.png";
import foto6 from "../assets/img6.png";
import foto7 from "../assets/img7.png";
import foto8 from "../assets/img8.png";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faInstagram,
    faTwitter,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import "../../index.css";

function Projetos() {
    return (
        <div className="projeto-contet">
            <div className="projeto-container-content" id="home">
                <figure>
                    <img
                        src={fotoLeonardo}
                        alt="FotoUser"
                        className="image-content banana"
                    />
                </figure>
                <FontAwesomeIcon icon="check-square" />
                <h2 className="title-content">Leonardo Marques</h2>
                <p className="text-contet">Desenvolvedor Front-end</p>
                <div className="redes-container-sobre">
                    <div className="icons-rede">
                        <a
                            href="https://www.linkedin.com/in/leonardo-emanuel-3695451a0/"
                            className="link-rede"
                            target="_blank"
                            rel="noopener noreferrer"
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
                            target="_blank"
                            rel="noopener noreferrer"
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
            <div className="projeto-content-projeto">
                <h1 className="title-sobre">Projetos</h1>
                <p>
                    Aqui estão alguns dos meus projetos.
                    <br />
                    Para ver mais acesse meu
                    <span className="btn btn-github">
                        {" "}
                        <a href="https://github.com/LeonardoMarques7">Github</a>
                    </span>
                    .
                </p>
                <div className="cards-container">
                    <div className="carroseul">
                        <a
                            className="card"
                            href="https://projeto-music.onrender.com/"
                        >
                            <img src={foto8} alt="" className="img-card" />
                            <span>Player de Música</span>
                        </a>
                        <a
                            className="card"
                            href="https://blog-fp.infinityfreeapp.com/"
                        >
                            <img src={foto1} alt="" className="img-card" />
                            <span>Blog</span>
                        </a>
                        <a
                            className="card"
                            href="https://leonardomarques7.github.io/Gerador_QR_Code/"
                        >
                            <img src={foto2} alt="" className="img-card" />
                            <span>Gerador de QR Corde</span>
                        </a>
                        <a
                            className="card"
                            href="https://leonardomarques7.github.io/Gerador_De_Senha/"
                        >
                            <img src={foto3} alt="" className="img-card" />
                            <span>Gerador de Senha</span>
                        </a>
                        <a
                            className="card"
                            href="https://leonardomarques7.github.io/Calculadora_IMC/"
                        >
                            <img src={foto4} alt="" className="img-card" />
                            <span>Calculadora de IMC</span>
                        </a>
                        <a
                            className="card"
                            href="https://leonardomarques7.github.io/Jao-wiki/"
                        >
                            <img src={foto5} alt="" className="img-card" />
                            <span>JÃO Wiki</span>
                        </a>
                        <a
                            className="card"
                            href="https://leonardomarques7.github.io/Form-WebCarSell/"
                        >
                            <img src={foto6} alt="" className="img-card" />
                            <span>Form WebCarSell</span>
                        </a>
                        <a
                            className="card"
                            href="https://github.com/LeonardoMarques7/Projeto_Pok-dex"
                        >
                            <img src={foto7} alt="" className="img-card" />
                            <span>Pokédex</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Projetos;
