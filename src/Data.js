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
import FIGMA from "./assets/image/logo-techno/FIGMA.png";

import immo from "./assets/image/project/siteKasa/kasa-1.PNG";
// import photograph from "./assets/image/project/Site photographe.jpg";
// import resto1 from "./assets/image/project/Site Restaurant.jpg";
import resto from "./assets/image/project/site-restaurant-1.jpg"; 
import voyage from "./assets/image/project/site-voyagejpg.jpg";

import kasa1 from "./assets/image/project/siteKasa/kasa-1.PNG";
import kasa2 from "./assets/image/project/siteKasa/kasa-2.PNG";
import kasa3 from "./assets/image/project/siteKasa/kasa-3.PNG";
import kasa4 from "./assets/image/project/siteKasa/kasa-4.PNG";
import kasa5 from "./assets/image/project/siteKasa/kasa-5.PNG";

import resto1 from "./assets/image/project/siteResto/resto-1.PNG";
import resto2 from "./assets/image/project/siteResto/resto-2.PNG";
import resto3 from "./assets/image/project/siteResto/resto-3.PNG";
import resto4 from "./assets/image/project/siteResto/resto-4.PNG";
import resto5 from "./assets/image/project/siteResto/resto-5.PNG";

import booki1 from "./assets/image/project/siteBooki/booki-1.PNG";
import booki2 from "./assets/image/project/siteBooki/booki-2.PNG";
import booki3 from "./assets/image/project/siteBooki/booki-3.PNG";
import booki4 from "./assets/image/project/siteBooki/booki-4.PNG";

export const frontend = [
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

export const backend = [
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

export const autre = [
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

export const project = [
    {
        id: "13",
        techno : "REACT",
        name:"Site location immobilière",
        image: kasa1,
        slider : 
        [
            kasa1,
            kasa2,
            kasa3,
            kasa4,
            kasa5,
        ],
        resume: "il s'agit d'un site de loc à réaliser dans le cadre de la formation",
        lienSite: "https://lam-project-kasa.netlify.app/",
        lienGit: "https://github.com/lamOpenclassroom/kasa",
    },
    {
        id: "14",
        techno: "HTML/CSS",
        name: "site de restaurant",
        image: resto1,
        slider : 
        [
            resto1,
            resto2,
            resto3,
            resto4,
            resto5,
        ],
        resume: "il s'agit d'un site pour photographe à réaliser dans le cadre de la formation",
        lienSite: "https://lamopenclassroom.github.io/Ohmyfood/",
        lienGit: "https://github.com/lamOpenclassroom/Ohmyfood",
    },
    {
        id: "15",
        techno: "REACT/REDUX",
        name: "site d'agence de location'",
        image: booki1,
        slider: 
            [
                booki1,
                booki2,
                booki3,
                booki4, 
            ],
        resume: "il s'agit d'un site pour commander asiatique à réaliser dans le cadre de la formation",
        lienSite: "a mettre sur github",
        lienGit: "a mettre sur github",
    },
    {
        id: "16",
        techno: "REACT",
        name: "site de recette marocaine",
        image: resto,
        resume: "il s'agit d'un site pour apprendre la gastronomie marocaine à réaliser dans le cadre de la formation",
        lienSite: "www.google.fr",
        lienGit: "github.fr",
    },
    {
        id: "17",
        techno: "SASS",
        name: "site de restaurant espagnol",
        image: resto,
        resume:"il s'agit d'un site pour commander espagnol à réaliser dans le cadre de la formation",
        lienSite: "www.google.fr",
        lienGit: "github.fr",
    },
    {
        id: "18",
        techno: "REACT",
        name: "site de voyage",
        image: voyage,
        resume:"il s'agit d'un site pour réserver un hôtel à réaliser dans le cadre de la formation",
        lienSite: "www.google.fr",
        lienGit: "github.fr",
    },
    {
        id: "19",
        techno: "REACT",
        name: "site de voyage",
        image: voyage,
        resume: "il s'agit d'un site pour réserver un gîte à réaliser dans le cadre de la formation",
        lienSite: "www.google.fr",
        lienGit: "github.fr",
    },
    {
        id: "20",
        techno: "SWAGGER",
        name: "Site Salle des fêtes",
        image: immo,
        resume: "il s'agit d'un site pour réserver une salle pour permettre au visiteur client d'organiser des événements, réaliser dans le cadre de la formation",
        lienSite: "www.google.fr",
        lienGit: "github.fr",
    },
]

