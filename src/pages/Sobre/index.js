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
    faGitAlt
} from "@fortawesome/free-brands-svg-icons";

import {
    faWater,
} from "@fortawesome/free-solid-svg-icons"

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
                <div className="container-video">
                    <iframe 
                        className="video"
                        src="https://www.youtube.com/embed/RXRaZzDK8F0?si=iujxs2EeBxAOGu6e" 
                        title="YouTube video player" 
                        style={{ border: 0 }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                    ></iframe>
                </div>
                <h1 className="title-sobre">Sobre</h1>
                <p className="text-sobre">
                    Sou <b>Leonardo Marques</b>, apaixonado por programação e desenvolvimento front-end. Atualmente, sou <b>estudante de Ciência da Computação na UNIP</b>,
                    onde busco constantemente expandir meus conhecimentos na área de tecnologia. Além disso, sou formado em Técnico em Desenvolvimento de Sistemas pela <b>
                    Etec Fernando Prestes</b>, onde aprimorei minhas habilidades práticas. Estou sempre em busca de <b>aprendizado</b> e crescimento profissional.
                </p>
                <p className="text-sobre mt-2">
                    Minha jornada na programação começou como um fascínio que rapidamente se transformou em habilidade sólida.  
                    Com foco em desenvolvimento front-end, mergulho fundo em linguagens como <b>React</b>, JavaScript e PHP.  
                    Minha escola, a Etec Fernando Prestes, foi um ambiente inspirador onde expando meus <b>conhecimentos</b> e conexões na área.
                </p>
                <p className="text-sobre mt-2">
                    Além dos códigos no <b>GitHub</b>, busco equilíbrio entre estudos e momentos de descontração.  
                    Apreciar séries é uma pausa revigorante em meio à intensidade da programação. Meu objetivo é claro:  
                    transformar minha <b>paixão por tecnologia</b> em uma carreira promissora, sempre em constante crescimento e aprendizado.
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
                            <FontAwesomeIcon icon={faBootstrap} className="icon"/>
                        </div>
                    </a>
                    <a href="https://tailwindcss.com/">
                        <div className="box">
                            <FontAwesomeIcon icon={faWater} className="icon"/>
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
                    <a href="https://dart.dev/">
                        <div className="box">
                            <FontAwesomeIcon icon={fa-dart-lang} className="icon" />
                        </div>
                    </a>
                    <a href="https://git-scm.com/">
                        <div className="box">
                        <FontAwesomeIcon icon={faGitAlt} className="icon"/>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Sobre;
