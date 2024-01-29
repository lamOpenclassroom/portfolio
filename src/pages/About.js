import imagePc from '../assets/image/hero.webp';
import imageIt from '../assets/image/IT.webp';
import "../assets/style/about.scss";

function About() {
    return (
        <main id="main-page">
            <section className='propos'>
                <img alt="un ordinateur" src={imagePc} />
                <div className='presentation'>
                    <h1>A Propos de moi</h1>
                    <p>Bienvenue dans ma sphère de développeur web.</p>
                    <p>Le fonctionnement des applications ou de simple sites vitrine m’a attiré vers le développement.</p>
                    <p> Ma curiosité m’a poussée à apprendre le code en autodidacte et ensuite m’a amenée vers une formation professionnelle qui vient d’être achevée.</p>
                    <p>J’ai fait le choix de me spécialiser sur du Frontend car le côté design d’un projet me passionne le plus et j’ai appris certaines technologies tel que HTML, CSS et Javascript.</p>
                </div>
            </section>
            
            <section className='parcours'>
                <img alt="représente le système d'information IT" src={imageIt} />

                <div className='presentation'>
                    <h1>Ma carrière</h1>
                    <p>J’étais technicien informatique système et réseau.
                    Grâce à cette expérience, j’ai acquis des compétences tels que l’analyse et le diagnostic des incidents informatique, la configuration et maintenance du matériel informatique, enfin la communication avec mon équipe et les clients.
                    </p>
                </div>
               
            </section>
            
        </main>
    )
}
export default About