import './fantasias.scss';
import Button from '../Button/Button'
import { useState } from 'react';

import Vampiro from './img/vampiro.png';
import Bruxa from './img/bruxa.png';
import Fantasma from './img/fantasma.png';
import Zumbi from './img/zumbi.png';
import Palhaço from './img/palhaco.png';
import Lobisomem from './img/lobisomem.png';

export default function Fantasia() {

    const cards = [
        { img: Vampiro, title: "Vampiro", desc: "Clássico e elegante" },
        { img: Bruxa, title: "Bruxa", desc: "Misteriosa e poderosa" },
        { img: Fantasma, title: "Fantasma", desc: "Assustador e simples" },
        { img: Zumbi, title: "Zumbi", desc: "Morto-vivo faminto" },
        { img: Palhaço, title: "Palhaço", desc: "Terrível e divertido" },
        { img: Lobisomem, title: "Lobisomem", desc: "Selvagem e feroz" },
    ];

    return (
        <section className='Fantasias' id='Fantasia'>
            <h2>Ideias de Fantasias</h2>
            <p className='text-fantasia'>
                Solte sua criatividade e venha caracterizado! Aqui estão algumas ideias para você arrasar na festa.
            </p>

            <section className='card-fantasia'>
                {cards.map((item, i) => (
                    <FlipCard key={i} {...item} />
                ))}
            </section>

            <article>
                <h3>🏆 Concurso de Fantasias!</h3>
                <p>Melhor fantasia ganha um prêmio especial! Prepare-se para competir.</p>
                <Button type="Fantasia" />
            </article>
        </section>
    );
}

function FlipCard({ img, title, desc }) {
    const [flip, setFlip] = useState(false);

    return (
        <div
            className="flip-card"
            onMouseEnter={() => setFlip(true)}
            onMouseLeave={() => setFlip(false)}
        >
            <div className={`flip-card-inner ${flip ? "flipped" : ""}`}>

                {/* Frente */}
                <div className="flip-card-front ">
                    <img src={img} alt={title} />
                </div>

                {/* Verso */}
                <div className="flip-card-back">
                    <h4>{title}</h4>
                    <p>{desc}</p>
                </div>

            </div>
        </div>
    );
}
