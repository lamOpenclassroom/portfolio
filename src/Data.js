import HTML from "./assets/image/logo-techno/html5.jpg";
import CSS from "./assets/image/logo-techno/css3.jpg";
import JAVA from "./assets/image/logo-techno/javascript.jpg";
import SASS from "./assets/image/logo-techno/sass.jpg";
import REACT from "./assets/image/logo-techno/react.jpg";
import REDUX from "./assets/image/logo-techno/redux.jpg";
import SWAGGER from "./assets/image/logo-techno/swagger-logo.png";
import MANGODB from "./assets/image/logo-techno/Mango DB.png";
import GITHUB from "./assets/image/logo-techno/GITHUB.png";
import WAKELET from "./assets/image/logo-techno/WAKELET.png";
import TRELLO from "./assets/image/logo-techno/trello-logo-1.2.jpg";
import FIGMA from "./assets/image/logo-techno/FIGMA.png"

import immo from "./assets/image/project/kasa.png";
import photograph from "./assets/image/project/Site photographe.jpg";
import resto1 from "./assets/image/project/Site Restaurant.jpg";
import resto from "./assets/image/project/site-restaurant-1.jpg"; 
import voyage from "./assets/image/project/site-voyagejpg.jpg";

const frontend = [
    {
        id: 1,
        name: "HTML",
        image: HTML,
    },
    {
        id: 2,
        name: "CSS",
        image: CSS,
    },
    {
        id: 3,
        name: "JAVASCRIPT",
        image: JAVA,
    },
    {
        id: 4,
        name: "SASS",
        image: SASS,
    },
    {
        id: 5,
        name: "REACT",
        image: REACT,
    },
    {
        id: 6,
        name: "REDUX",
        image: REDUX,
    }
    
];

const backend = [
    {
        id: 7,
        name: "SWAGGER",
        image: SWAGGER,
    },
    {
        id: 8,
        name: " MANGO DB",
        image: MANGODB,
    }
]

const autre = [
    {
        id: 9,
        name: "GITHUB",
        image: GITHUB,
    },
    {
        id: 10,
        name: "WAKELET",
        image: WAKELET,
    },
    {
        id: 11,
        name: "TRELLO",
        image: TRELLO,
    },
    {
        id: 12,
        name: "FIGMA",
        image: FIGMA,
    }
]

const project = [
    {
        id: 13,
        techno : "REACT",
        name:"Site location immobilière",
        image: immo,
    },
    {
        id: 14,
        techno: "HTML/CSS",
        name: "site de photographe",
        image: photograph,
    },
    {
        id: 15,
        techno: "REACT/REDUX",
        name: "site de restaurant asiatique",
        image: resto1,
    },
    {
        id: 16,
        techno: "REACT",
        name: "site de restaurant marocain",
        image: resto,
    },
    {
        id: 17,
        techno: "SASS",
        name: "site de restaurant espagnol",
        image: resto,
    },
    {
        id: 18,
        techno: "REACT",
        name: "site de voyage",
        image: voyage,
    },
    {
        id: 19,
        techno: "REACT",
        name: "site de voyage",
        image: voyage,
    },
    {
        id: 20,
        techno: "SWAGGER",
        name: "Site location immobilière",
        image: immo,
    },
]

export {frontend, backend, autre, project};

//tenter de mettre toutes les images dans un objet
