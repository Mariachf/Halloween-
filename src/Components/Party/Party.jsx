import './Party.scss';
import Button from '../Button/Button';
import Logo from './img/abobora.png';
import Fantasma from './img/fantasma1.png';
import Morcego from './img/morcegos.png';

export default function Header() {
    return (
        <section className='background-party'>
          <div className='logo'>
                <img src={Logo} alt='Logo'/>
            </div> 
            <div className='party-text'>
                <img src={Morcego} alt='Mocergo' className='Morcego'/>
                <h1>Halloween</h1>
                <h2>PARTY 2025</h2>
                <p> Prepare-se para a noite mais assombrada do ano! </p>
                <div className='button'><Button type="Ingressos"/> <Button type="Detalhes"/></div>
               <img src={Fantasma} alt='Fantasma' className='Fantasma'/> 
            </div> 
        </section>
        
    );

};