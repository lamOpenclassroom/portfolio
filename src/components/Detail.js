import { project } from "../Data"
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import Error from "./Error";
import "../assets/style/detail.scss";

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
    let linkSite = dataUrl.lienSite
    let linkGit = dataUrl.lienGit

    let myslider = dataUrl.slider
    
    
    
    
    
    let account = 0;
        
    function right() {
        const getPicture = document.querySelectorAll(".listPicture img");
        let lengthPicture = getPicture.length;

        account < lengthPicture - 1 ? account++ : account = 0;  
        
        for (let i = 0; i < lengthPicture; i++){
            (i === account) ? getPicture[i].classList.remove("hidden") : getPicture[i].classList.add("hidden");
            console.log(i)
        }
    }

    function left() {
        const getPicture = document.querySelectorAll(".listPicture img");
        let lengthPicture = getPicture.length;

        account > 0 ? account-- : account = lengthPicture - 1;
        
        for (let i = 0; i < lengthPicture; i++){
             (i === account) ? getPicture[i].classList.remove("hidden") : getPicture[i].classList.add("hidden");
        }
    }

    return (
        <div className="detail">

            <div className="picture-size">
                
                <div className="listPicture">
                    {myslider.map((item, index) => <img className={index === 0 ? "" : "hidden"} key={index} alt={name} src={item} />)}
                    <i onClick={right} className="fa-solid fa-chevron-right"></i>
                    <i onClick={left} className="fa-solid fa-chevron-left"></i>
                </div>

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