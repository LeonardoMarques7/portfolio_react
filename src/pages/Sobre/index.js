import fotoLeonardo from "../assets/image.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faInstagram,
    faTwitter,
    faLinkedin,
    faHtml5,
    faReact,
    faBootstrap,
    faJs,
    faPhp,
    faCss3,
} from "@fortawesome/free-brands-svg-icons";

function Sobre() {
    return (
        <div className="user-content-sobre">
            <div className="page-content-sobre" id="home">
                <figure>
                    <img
                        src={fotoLeonardo}
                        alt="FotoUser"
                        className="image-content banana"
                    />
                </figure>
                <h2 className="title-content">Leonardo Marques</h2>
                <p className="text-contet">Desenvolvedor Front-end</p>
                <div className="redes-container-sobre">
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
                            <FontAwesomeIcon icon={faGithub} className="icon" />
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
            <div className="sobre-content mt-2 mb-2">
                <h1 className="title-sobre">Sobre</h1>
                <p className="text-sobre">
                    Sou o Leonardo Marques, apaixonado por programação e
                    desenvolvimento front-end. Tenho seis irmãos e aprendi desde
                    cedo a valorizar as relações familiares. Estudo na Etec
                    Fernando Prestes, estou sempre imerso em projetos no GitHub
                    e busco transformar minha paixão em uma carreira promissora
                    na área de Ciências da Computação. Adoro aprender, assistir
                    séries para relaxar e estou determinado a crescer e evoluir
                    continuamente na minha jornada tecnológica.
                </p>
                <p className="text-sobre mt-2">
                    Minha jornada na programação começou como um fascínio que
                    rapidamente se transformou em habilidade sólida. Com foco em
                    desenvolvimento front-end, mergulho fundo em linguagens como
                    React, JavaScript e PHP. Minha escola, a Etec Fernando
                    Prestes, é um ambiente inspirador onde expando meus
                    conhecimentos e conexões na área.
                </p>
                <p className="text-sobre mt-2">
                    Sou estudante de <b>ciências da computação</b> na UNIP,
                    começando em janeiro/2025 e me formo em dezembro de 2028.
                </p>
                <p className="text-sobre mt-2">
                    Além dos códigos no GitHub, busco equilíbrio entre estudos e
                    momentos de descontração. Apreciar séries é uma pausa
                    revigorante em meio à intensidade da programação. Meu
                    objetivo é claro: transformar minha paixão por tecnologia em
                    uma carreira promissora, sempre em constante crescimento e
                    aprendizado.
                </p>
                <br />
                <p>Técnologias que tenho aprendido:</p>
                <div className="container-ling">
                    <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML">
                        <div className="box">
                            <FontAwesomeIcon icon={faHtml5} className="icon" />
                        </div>
                    </a>
                    <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript">
                        <div className="box">
                            <FontAwesomeIcon icon={faJs} className="icon" />
                        </div>
                    </a>
                    <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS">
                        <div className="box">
                            <FontAwesomeIcon icon={faCss3} className="icon" />
                        </div>
                    </a>
                    <a href="https://getbootstrap.com/">
                        <div className="box">
                            <FontAwesomeIcon
                                icon={faBootstrap}
                                className="icon"
                            />
                        </div>
                    </a>
                    <a href="https://www.php.net/">
                        <div className="box">
                            <FontAwesomeIcon icon={faPhp} className="icon" />
                        </div>
                    </a>
                    <a href="https://react.dev/">
                        <div className="box">
                            <FontAwesomeIcon icon={faReact} className="icon" />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Sobre;
