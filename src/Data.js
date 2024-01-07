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

import archi1 from "./assets/image/project/architecte/archi-1.PNG";
import archi2 from "./assets/image/project/architecte/archi-2.PNG";
import archi3 from "./assets/image/project/architecte/archi-3.PNG";
import archi4 from "./assets/image/project/architecte/archi-4.PNG";
import archi5 from "./assets/image/project/architecte/archi-5.PNG";

import photo1 from "./assets/image/project/sitePhoto/photo-1.PNG";
import photo2 from "./assets/image/project/sitePhoto/photo-2.PNG";
import photo3 from "./assets/image/project/sitePhoto/photo-3.PNG";
import photo4 from "./assets/image/project/sitePhoto/photo-4.PNG";
import photo5 from "./assets/image/project/sitePhoto/photo-5.PNG";

import bank1 from "./assets/image/project/siteBank/bank-1.PNG";
import bank2 from "./assets/image/project/siteBank/bank-2.PNG";
import bank3 from "./assets/image/project/siteBank/bank-3.PNG";
import bank4 from "./assets/image/project/siteBank/bank-4.PNG";

import event1 from "./assets/image/project/siteEvents/event-1.PNG";
import event2 from "./assets/image/project/siteEvents/event-2.PNG";
import event3 from "./assets/image/project/siteEvents/event-3.PNG";
import event4 from "./assets/image/project/siteEvents/event-4.PNG";
import event5 from "./assets/image/project/siteEvents/event-5.PNG";

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
        resume: "il s'agit d'un site d'agence de location à réaliser dans le cadre de ma formation",
        lienSite: "https://booki-site-ml.netlify.app/",
        lienGit: "https://github.com/lamOpenclassroom/booki",
    },
    {
        id: "16",
        techno: "REACT",
        name: "Portfolio d'un architecte",
        image: archi1,
        slider : 
        [
            archi1,
            archi2,
            archi3,
            archi4,
            archi5,
        ],
        resume: "il s'agit d'un site repésentant le portfolio d'un architecte d'intérieur",
        lienSite: "Néant",
        lienGit: "https://github.com/lamOpenclassroom/Portfolio-P6",
    },
    {
        id: "17",
        techno: "HTML/CSS",
        name: "site de photographe professionnel",
        image: photo1,
        slider : 
        [
            photo1,
            photo2,
            photo3,
            photo4,
            photo5,
        ],
        resume:"il s'agit d'un site de photographe professionnel dans le cadre de ma formation",
        lienSite: "https://lamopenclassroom.github.io/Optimisation-referencement/",
        lienGit: "https://github.com/lamOpenclassroom/Optimisation-referencement",
    },
    {
        id: "18",
        techno: "REACT",
        name: "site de voyage",
        image: bank1,
        slider : 
        [
            bank1,
            bank2,
            bank3,
            bank4,
        ],
        resume:"il s'agit d'un site de banque à réaliser dans le cadre de la formation",
        lienSite: "Neant",
        lienGit: "https://github.com/lamOpenclassroom/ArgentBank-website",
    },
    {
        id: "19",
        techno: "REACT",
        name: "site d'évenementiel",
        image: event1,
        slider: 
        [
            event1,
            event2,
            event3,
            event4,
            event5,
        ],
        resume: "il s'agit d'un site d'évenementiel dans le cadre de la formation",
        lienSite: "https://77events-debugging.netlify.app/",
        lienGit: "https://github.com/lamOpenclassroom/Debugge-site",
    },
]

