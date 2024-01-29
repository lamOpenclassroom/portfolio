import { Link } from "react-router-dom";
import { useState } from "react";
import "../assets/style/project.scss";
import { project } from '../Data';

function Project() {
    const [valueSelect, setisValueSelect] = useState("TOUS");

    function selectOption(e) {
        setisValueSelect(e.target.value)
    }

    return (
        <div className="page-project">
            <h1>Mes Projets</h1>

            <label>Les technologies : </label>
            
            <select onClick={selectOption} >  
                <option>TOUS</option>
                <option>HTML/CSS</option>
                <option>HTML/SASS</option>
                <option>REACT</option>
                <option>REACT/REDUX</option>
                <option>JAVASCRIPT/API</option>
                <option>SEO</option>
            </select>

            <section>
                {project.map((items) =>
                (items.techno === valueSelect || valueSelect === "TOUS" ?
                    <Link to={`/detail/` + items.url}>
                        <div id='flexImage-title' >     
                            <img  alt={items.name} src={items.image}/>
                            <p className="title-picture">{items.name}</p> 
                            <p className="modal">{items.resume}</p>      
                        </div>
                    </Link>
                : null))
                }  
            </section>
        </div>
    )
}

export default Project