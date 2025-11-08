import './Button.module.scss';

import Fantasma from './img/fantasma.png';
import Ingressos from './img/bilhete.png';

function scrollToId(id) {
  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: "smooth" });
}

export default function Button({type}) {
    return (
        <section className='button-group'>

            { type === "Ingressos" && ( 
                <button 
                         onClick={() => scrollToId("Presenca")}
                    >
                    <img src={Ingressos} alt='ingressos'/>
                    CONFIRMAR PRESENÇA
                </button>
                )}

           {type == "Detalhes" && (
                <button 
                    onClick={() => scrollToId("Datas")}
                > 
                <img src={Fantasma} alt='Fantasma' />
                VER DETALHES
                </button>
            )}


            
           {type === "Fantasia" && (
                <label>
                <button type="button" onClick={() => document.getElementById("envioFantasia").click()}>
                    📸 ENVIAR FANTASIA
                </button>
                <input
                    id="envioFantasia"
                    name="fantasia"
                    style={{ display: "none" }}
                    type="file"
                    required
                    accept="image/*"
                />
                </label>
            )}

            {type === "Enviar" && (
                <label>
                    <button type="button" className='enviar' onClick={() => document.getElementById("envio").click()}>
                       <input
                        type="submit"
                        value="🎃 CONFIRMAR PRESENÇA AGORA!"
                        className='enviar'
                        style={{
                            border: "none",
                            
                            background: "none",
                            cursor: "pointer",
                            
                        }}
                    />  
                    </button>

                   
                </label>
            )}
        </section>
    );
}