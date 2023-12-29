import { useState } from "react";
import "../assets/style/project.scss";
import { project } from '../Data'

function Project() {
    //const images = document.getElementsByTagName("img");
    const [valueSelect, setisValueSelect] = useState("Tous")

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
                {project.map((items) => (<img className={items.techno === valueSelect || valueSelect === "Tous" ? "visible" : "hidden"} alt={items.name} src={items.image}></img>))}
            </section>
        </div>
    )
}

export default Project