import HTML from "./assets/image/logo-techno/html5.jpg";
import CSS from "./assets/image/logo-techno/css3.jpg";
import JAVA from "./assets/image/logo-techno/javascript.jpg";
import SASS from "./assets/image/logo-techno/sass.jpg";
import REACT from "./assets/image/logo-techno/react.jpg";
import REDUX from "./assets/image/logo-techno/redux.jpg";
import SWAGGER from "./assets/image/logo-techno/swagger-logo.jpg";
import MANGODB from "./assets/image/logo-techno/Mango DB.jpg";
import GITHUB from "./assets/image/logo-techno/GITHUB.png";
import WAKELET from "./assets/image/logo-techno/WAKELET.jpg";
import TRELLO from "./assets/image/logo-techno/trello-logo-1.2.jpg";
import FIGMA from "./assets/image/logo-techno/FIGMA.jpg";

import kasa1 from "./assets/image/project/siteKasa/kasa-1.webp";
import kasa2 from "./assets/image/project/siteKasa/kasa-2.webp";
import kasa3 from "./assets/image/project/siteKasa/kasa-3.webp";
import kasa4 from "./assets/image/project/siteKasa/kasa-4.webp";
import kasa5 from "./assets/image/project/siteKasa/kasa-5.webp";

import resto1 from "./assets/image/project/siteResto/resto-1.webp";
import resto2 from "./assets/image/project/siteResto/resto-2.webp";
import resto3 from "./assets/image/project/siteResto/resto-3.webp";
import resto4 from "./assets/image/project/siteResto/resto-4.webp";
import resto5 from "./assets/image/project/siteResto/resto-5.webp";

import booki1 from "./assets/image/project/siteBooki/booki-1.webp";
import booki2 from "./assets/image/project/siteBooki/booki-2.webp";
import booki3 from "./assets/image/project/siteBooki/booki-3.webp";
import booki4 from "./assets/image/project/siteBooki/booki-4.webp";

import archi1 from "./assets/image/project/architecte/archi-1.webp";
import archi2 from "./assets/image/project/architecte/archi-2.webp";
import archi3 from "./assets/image/project/architecte/archi-3.webp";
import archi4 from "./assets/image/project/architecte/archi-4.webp";
import archi5 from "./assets/image/project/architecte/archi-5.webp";

import photo1 from "./assets/image/project/sitePhoto/photo-1.webp";
import photo2 from "./assets/image/project/sitePhoto/photo-2.webp";
import photo3 from "./assets/image/project/sitePhoto/photo-3.webp";
import photo4 from "./assets/image/project/sitePhoto/photo-4.webp";
import photo5 from "./assets/image/project/sitePhoto/photo-5.webp";

import bank1 from "./assets/image/project/siteBank/bank-1.webp";
import bank2 from "./assets/image/project/siteBank/bank-2.webp";
import bank3 from "./assets/image/project/siteBank/bank-3.webp";
import bank4 from "./assets/image/project/siteBank/bank-4.webp";

import event1 from "./assets/image/project/siteEvents/event-1.webp";
import event2 from "./assets/image/project/siteEvents/event-2.webp";
import event3 from "./assets/image/project/siteEvents/event-3.webp";
import event4 from "./assets/image/project/siteEvents/event-4.webp";
import event5 from "./assets/image/project/siteEvents/event-5.webp";

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
        name: "Site location immobilière",
        url: "kasa",
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
        descript : "L'objectif étant de refaire un site de location d'appartement pour particulier en utilisant du javascript et React. Ce projet m'a permis de découvrir ce framework",
    },
    {
        id: "14",
        techno: "HTML/SASS",
        name: "site de restaurant",
        url: "ohmyfood",
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
        descript: "Dans ce projet il fallait intégrer la version mobile du site. J’ai découvert les animations CSS et le préprocesseur SASS qui est interprété par le CSS.Il s’agit d’un site  qui répertorie les menus de restaurants gastronomiques. En plus des systèmes classiques de réservation, les clients pourront composer le menu de leur repas pour que les plats soient prêts à leur arrivée. "
    },
    {
        id: "15",
        techno: "HTML/CSS",
        name: "site d'agence de location",
        url: "booki",
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
        descript: "Le but du projet est de développer un site Internet qui permette aux usagers de trouver des hébergements et des activités dans la ville de leur choix.Je suis chargé d'intégrer l'interface du site avec du code HTML et CSS.",
    },
    {
        id: "16",
        techno: "JAVASCRIPT/API",
        name: "Portfolio d'un architecte",
        url: "sophieBluel-architecte",
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
        descript: "Dans ce projet il fallait créer la page de présentation des travaux à partir d’un HTML déjà existant, en récupérant des données via une API.Coder complétement la page connexion avec la gestion des messages d’erreur et la redirection vers la page d’accueil lors de la connexion.Créer une modale pour ajouter ou supprimer des éléments.Le but principal étant de travailler sur Javascript pour obtenir un site dynamique et communiquer des données avec une API."  
    },
    {
        id: "17",
        techno: "SEO",
        name: "site de photographe professionnel",
        url: "ninaCarducci-photographe",
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
        descript : "Pour ce projet, j’avais un site de photographe professionnel déjà tout fait, ma mission était d’améliorer l’optimisation du site pour qu’il est plus de visibilité dans les moteurs de recherche.Donc il fallait respecter des critères tels que les performances, l’accessibilité, les balises sémantiques et le référencement (SEO)."
    },
    {
        id: "18",
        techno: "REACT/REDUX",
        name: "site de voyage",
        image: bank1,
        url: "argentBank",
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
        descript: "Il s’agit d’une banque en ligne et ma mission était de développer cette application avec REACT à partir d’un HTML statique et du CSS.L’utilisateur peut visiter la page d’accueil, il peut se connecter et se déconnecter du système.Il peut voir uniquement les informations relatives à son compte.Enfin il a la possibilité de modifier son pseudo.J’ai utilisé la technologie REDUX pour l’interface utilisateur et j’y ai découvert la base de données MANGO DB."
    },
    {
        id: "19",
        techno: "REACT",
        name: "site d'évenementiel",
        image: event1,
        url: "77Events",
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
        descript: "Pour ce projet ma mission était de débugger le site donc l'objectif 0 erreur à la fin. Enfin je devais réalier une fonctionnalité tel que le filtre des événements."
    },
]

