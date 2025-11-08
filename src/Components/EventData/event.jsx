import './event.scss';
import Data from './img/Calendário.png';
import Time from './img/horas.png';
import Location from './img/Local.png';
import DressCode from './img/Dresscode.png';

export default function Main() {
    return (
        <section className='Datas' id='Datas'>
            <h2>Detalhes do Evento</h2>

            <section className='info'>
                <div>
                    <img src={Data} alt='Ícone de calendário' />
                    <p>Data</p>
                    <h3>31 de Outubro</h3>
                    <p>Quinta-feira</p>
                </div>
                <div>
                    <img src={Time} alt='Ícone de horário' />
                    <p>Horário</p>
                    <h3>20:00 - 02:00</h3>
                    <p>6 horas de terror</p>
                </div>
                <div>
                    <img src={Location} alt='Ícone de localização' />
                    <p>Local</p>
                    <h3>Casa Assombrada</h3>
                    <p>Rua do Medo, 666</p>
                </div> 
                <div>
                    <img src={DressCode} alt='Ícone de fantasia' />
                    <p>Dress Code</p>
                    <h3>Fantasias</h3>
                    <p>Obrigatório!</p>
                </div>  
            </section>
           
            
            
         </section>
    )
}