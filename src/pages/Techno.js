import { frontend } from '../Data';
import { backend } from '../Data';
import  { autre } from '../Data'
import '../assets/style/techno.scss';

function Techno() {
    
    return (
        <div className="page-techno">
            <h1>Les technologies</h1>
            <section id='sectionTec'>
                <h2>Frontend</h2>
                <div className='flexImage'>
                    {frontend.map((item) => (
                        <div className='flexImage-title'>
                            <img key={item.id} alt="images" src={item.image}/>
                            <p>{item.name}</p>
                        </div>
                    ))}
                </div>
                <h2>Backend</h2>
                <div className='flexImage'>
                    {backend.map((item) => (
                        <div className='flexImage-title'>
                            <img key={item.id} alt="images" src={item.image}/>
                            <p>{item.name}</p>
                        </div>
                    ))}
                </div>
                <h2>Autres</h2>
                <div className='flexImage'> 
                    {autre.map((item) => (
                        <div className='flexImage-title'>
                            <img key={item.id} alt="images" src={item.image}/>
                            <p>{item.name}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Techno