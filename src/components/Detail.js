import { project } from "../Data"
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import Error from "./Error";
import "../assets/style/detail.scss";

function Detail() {
    const [dataUrl, setDataUrl] = useState();

    const Return = () => {
        window.history.back()
    }

    const { idDetail } = useParams();

    useEffect(() => 
                {const dataFind = project.find(obj => obj.url === idDetail);
                    setDataUrl(dataFind)  
                },[idDetail])
    
    if (!dataUrl) { return <Error /> }
    
    let name = dataUrl.name
    let description = dataUrl.descript
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
        <div className="icon-detail">

            <div className="detail">
            
                <div className="picture-size">
                    
                    <div className="listPicture">
                        {myslider.map((item, index) => <img className={index === 0 ? "" : "hidden"} key={index} alt={name} src={item} />)}
                        <i onClick={right} className="fa-solid fa-chevron-right"></i>
                        <i onClick={left} className="fa-solid fa-chevron-left"></i>
                    </div>

                </div>
            
                <section className="section-info">
                    <h1>Projet : {name}</h1>
                    <p>Lien vers le site :</p>
                    <a href={linkSite} rel="noreferrer" target="_blank">{linkSite}</a>
                    <p>Lien vers github :</p>
                    <a href={linkGit} rel="noreferrer" target="_blank">Git</a>
                    <p>Description : {description} </p>
                </section> 

            </div> 
            
            <i onClick={Return} className="fa-solid return fa-arrow-left"></i>

        </div>
    )
}

export default Detail