import imagePc from '../assets/image/hero.png'
import "../assets/style/propos.scss"

function About() {
    return (
        <main id="main-page">
            <section className='propos'>
                <img alt="un ordinateur" src={imagePc} />
                <div className='presentation'>
                    <h1>A Propos</h1>
                    <p>Je sors tout juste d'une formation professionnelle dans le domaine du développement Web.
                        J'étais technicien informatique de base et j'ai fait le choix de faire cette reconversion.
                        J'ai toujours été curieux de savoir comment une application ou une simple page web fonctionnait.
                        D'abord j'ai commencé à me former en autodidacte pendant mon temps libre, et j'ai découvert qu'il y avait beaucoup
                        de langage de programmation. J'ai débuté sur du HTML et CSS, après je ne savais plus sur quel langage m'orienter,
                        tellement qu'il y a un nombre considérable de technologies avec des avis divers et variés.
                        Enfin j'ai décidé de me former chez OpenClassRoom qui connait mieux les technologies les plus utilisés et surtout les besoins
                        des entreprises.
                    </p>
                </div>
            </section>
            
            <section className='propos'>
                <div>
                    <h1>Mon parcours professionnel</h1>
                    <p>J'ai occupé le poste de technicien informatique système et réseau depuis 6 ans.</p>
                    <div className='bloc-soc'>
                        <p>Les sociétés : </p>
                        <div className='list-soc'>
                            <p>Stime DSI de 2015 - 2016, durée : 1 an</p>
                            <p>Econocom en 2017, durée : 5 mois </p>
                            <p>HP de 2017 - 2018, durée : 1 an et 2 mois</p>
                            <p>Proservia de 2018 - 2022, durée : 3 ans et 4 mois</p>
                        </div>
                    </div>
                    <p>Pour le compte des entreprises : </p>
                    <p>Les Mousquetaires, Dalkia, la SG, France télévision, SNCF, AG2R, La Mutuelle générale. </p>
                </div>
            </section>
            
        </main>
    )
}
export default About