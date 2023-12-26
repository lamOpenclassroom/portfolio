import "../assets/style/project.scss";
import immo from "../assets/image/project/kasa.png";
import photograph from "../assets/image/project/Site photographe.jpg";
import resto1 from "../assets/image/project/Site Restaurant.jpg";
import resto from "../assets/image/project/site-restaurant-1.jpg"; 
import voyage from "../assets/image/project/site-voyagejpg.jpg";

function Project() {
    return (
        <div className="page-project">
            <h1>Mes Projets</h1>
            <label>Les technologies : </label>
            
            <select>
                <option>HTML/CSS</option>
                <option>HTML/CSS</option>
                <option>SASS</option>
                <option>REACT</option>
                <option>REACT/REDUX</option>
            </select>

            <section>
                <img alt="site location immobilière" src={immo}></img>
                <img alt="site photographe" src={photograph}></img>
                <img alt="site restaurant" src={resto1}></img>
                <img alt="site restaurant" src={resto}></img>
                <img alt="site voyage" src={voyage}></img>
                <img alt="site restaurant" src={resto1}></img>
                <img alt="site restaurant" src={resto}></img>
                <img alt="site voyage" src={voyage}></img>
            </section>
            
        </div>
    )
}

export default Project