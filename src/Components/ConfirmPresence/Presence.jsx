import './Presence.scss';
import Button from '../Button/Button';

export default function Presença () {
    return(
        <section className='Presenca' id='Presenca'>
            <h2>Confirme seu Comparecimento</h2>
            <p>Não perca a festa mais assustadora do ano! Confirme já sua presença.</p>

            <form >
                <fieldset>
                    <div className='label-preseca'>
                        <label for="name">👤 Nome Completo *</label>
                        <input type="Text" id='name' name='name' minlength="4" size="85" required placeholder='Seu nome assombrado...'/>
                    </div>
                    <div className='label-preseca'>
                        <label for="email">📧 Email *</label>
                        <input type="email" id='email' name='email'  size="85" pattern=".+@gmail\.com" required placeholder='seu@gmail.com'/>
                    </div>

                    <div className='label-preseca'>
                        <label for="numPessoas">
                            👥 Número de Convidados
                        </label>
                            <select id="numPessoas" name="numPessoas"  className='numPessoas' required>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3+</option>
                            
                            </select>
                    </div>

                    <div className='label-preseca'>
                        <label for="fantasia">🎭 Sua Fantasia</label>
                        <input type="text" id='fantasia' size="85" name='fantasia' required placeholder='Vampiro, Bruxa, Zumbi...'/>
                    </div>

                    <div className='label-preseca'>
                        <label for="mensagem">💬 Mensagem (opcional)</label>
                        <textarea
                             id="mensagem"
                                maxLength={100}
                                minLength={10}
                                
                                rows="5"
                                cols="87"
                                style={{ resize: "none" }}
                        ></textarea>
                       
                    </div>
                     <Button type="Enviar"/>
                </fieldset>
                
            </form>
    
           <p>
            Dúvidas? Entre em contato:
           </p>
        </section>
    )
}