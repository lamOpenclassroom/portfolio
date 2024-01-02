import { Link } from "react-router-dom";
import { useState } from "react";
import "../assets/style/project.scss";
import { project } from '../Data';

function Project() {
    const [valueSelect, setisValueSelect] = useState("Tous");

    function selectOption(e) {
        setisValueSelect(e.target.value)
        console.log(`"la valeur du state est :"${valueSelect}`)
    }

    return (
        <div className="page-project">
            <h1>Mes Projets</h1>

            <label>Les technologies : </label>
            
            <select onClick={selectOption} >  
                <option>Tous</option>
                <option>HTML/CSS</option>
                <option>SASS</option>
                <option>REACT</option>
                <option>REACT/REDUX</option>
                <option>SWAGGER</option>
            </select>

            <section>
                {project.map((items) =>
                (items.techno === valueSelect || valueSelect === "Tous" ?
                    <Link to={`/detail/` + items.id}>
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