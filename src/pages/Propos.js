import imagePc from '../assets/image/hero.png'
import "../assets/style/propos.scss"

function Propos() {
    return (
        <main id="main-page">
            <section className='propos'>
                <img alt="un ordinateur" src={imagePc} />
                <div className='presentation'>
                    <h1>A Propos</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur incidunt sunt voluptatibus, minima vero saepe sed possimus doloribus consectetur doloremque iusto dolores assumenda nesciunt omnis vitae quos error. Odit quis natus tempore ea placeat accusantium aliquam suscipit, in, aperiam est nemo voluptatum nisi asperiores fuga rem deleniti voluptates facere animi.</p>
                </div>
            </section>
            
            <section className='propos'>
                <div>
                    <h2>Mon parcours professionnel</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum rem voluptate sapiente expedita molestias impedit saepe fuga harum doloribus facilis exercitationem, inventore qui dicta magni quas maiores. Earum illum non rem assumenda consectetur totam, itaque recusandae sint reiciendis officiis molestias incidunt! Eius iste commodi cum, neque minima expedita officiis vero omnis nemo optio ex, iusto corporis inventore quidem explicabo at odio exercitationem similique dolores! Illo officia facere quibusdam veniam saepe. Assumenda, provident, iure aut obcaecati voluptatum temporibus quo perspiciatis nemo dolores rem aspernatur quas ut, ipsum magnam doloremque sequi necessitatibus tempora nostrum amet numquam esse sit. Hic fuga repudiandae ipsum iste. Debitis ut quidem consequuntur et rem possimus, tenetur officia ducimus, velit accusantium aspernatur provident cupiditate optio quo maiores facere vel. Error repellat quas a culpa! Dignissimos magni explicabo aliquam.</p>
                </div>
            </section>
            
        </main>
    )
}
export default Propos