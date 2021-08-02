import './style.css';
import {ReactComponent as MainImage} from './main.svg';
import Footer from '../Footer';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
       <div className="home-container">
           <div className="home-content">
                <div className="home-actions">
                    <h1 className="home-title">Faça o seu pedido <br></br> 
                        que entregamos <br></br> 
                        para você!
                    </h1>
                    <h3 className="home-subtitle">Escolha seu pedido e em poucos minutos <br></br>
                     levaremos na sua porta
                    </h3>
                    <Link to="/orders" className="home-btn-order">FAZER PEDIDO</Link>
                </div>
                <div className="home-image">
                    <MainImage></MainImage>
                </div>
           </div>
       </div>
       <Footer></Footer>
       </>
    )
}

export default Home;