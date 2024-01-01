import { project } from "../Data"
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import Error from "./Error";
import "../assets/style/detail.scss"

function Detail() {
    const [dataUrl, setDataUrl] = useState();

    const { idDetail } = useParams();

    useEffect(() => 
                {const dataFind = project.find(obj => obj.id === idDetail);
                    setDataUrl(dataFind)  
                },[idDetail])
    
    if (!dataUrl) { return <Error /> }
    
    let name = dataUrl.name
    let description = dataUrl.resume
    let picture = dataUrl.image
    let linkSite = dataUrl.lienSite
    let linkGit = dataUrl.lienGit

    return (
        <div className="detail">

            <div className="picture-size">
                <img  alt={name} src={picture} />
            </div>
            
            <section className="section-info">
                <h1>Nom du projet : {name}</h1>
                <a href={linkSite} target="blank">Lien vers le site</a> 
                <br />
                <br/>
                <a href={linkGit} target="blank">Lien vers github</a> 
                <p>description : {description} </p>
            </section> 

       </div> 
    )
}

export default Detail