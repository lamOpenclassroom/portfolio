import '../assets/style/techno.scss';
import HTML from "../assets/image/logo-techno/html5.jpg";
import CSS from "../assets/image/logo-techno/css3.jpg";
import JAVA from "../assets/image/logo-techno/javascript.jpg";
import SASS from "../assets/image/logo-techno/sass.jpg";
import REACT from "../assets/image/logo-techno/react.jpg";
import REDUX from "../assets/image/logo-techno/redux.jpg";
import SWAGGER from "../assets/image/logo-techno/swagger-logo.png";
import MANGODB from "../assets/image/logo-techno/Mango DB.png";
import GITHUB from "../assets/image/logo-techno/GITHUB.png";
import WAKELET from "../assets/image/logo-techno/WAKELET.png";
import TRELLO from "../assets/image/logo-techno/trello-logo-1.2.jpg";


function Techno() {

    return (
        <div className="page-techno">
            <h1>Les technologies</h1>
            <section id='sectionTec'>
                <h2>Frontend</h2>
                <div className='flexImage'>
                    <img className='flexImage' alt="logo html" src={HTML} ></img>
                    <img alt="logo css" src={CSS}></img>
                    <img alt="logo javascript" src={JAVA}></img>
                    <img alt="logo sass" src={SASS}></img>
                    <img alt="logo react" src={REACT}></img>
                    <img alt="logo redux" src={REDUX}></img>
                </div>
                <h2>Backend</h2>
                <div className='flexImage'>
                    <img alt="logo swagger" src={SWAGGER}></img>
                    <img alt="logo mango DB" src={MANGODB}></img>
                </div>
                <h2>Autres</h2>
                <div className='flexImage'> 
                    <img alt="logo github" src={GITHUB}></img>
                    <img alt="logo wakelet" src={WAKELET}></img>
                    <img alt="logo trello" src={TRELLO}></img>
                </div>
            </section>
        </div>
    )
}

export default Techno