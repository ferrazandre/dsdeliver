import './style.css';
import {ReactComponent as LinkedinIcon} from "./linkedin2.svg"
import {ReactComponent as InstagramIcon} from "./instagram2.svg"
import {ReactComponent as GithubIcon} from "./gitgub.svg"

function Footer() {
    return (
       <footer className="main-footer">
          <div className="footer-direitos">
            <p>Todos os direitos reservados.</p>
          </div>
          <div className="footer-icons">
            <a href="https://www.linkedin.com/in/ferrazandre/" target="_new">
                <LinkedinIcon></LinkedinIcon>
            </a>
            <a href="https://www.instagram.com/andre.zzzz/" target="_new">
                <InstagramIcon></InstagramIcon>
            </a>
            <a href="https://github.com/ferrazandre" target="_new">
                <GithubIcon></GithubIcon>
            </a>
        </div>
       </footer>
    )
}

export default Footer;