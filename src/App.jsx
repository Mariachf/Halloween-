import './Styled/global.scss'; 
import Party from './Components/Party/Party';
import Event from './Components/EventData/event';
import Fantasias from './Components/Ideias/fantasias'
import Presença from './Components/ConfirmPresence/Presence';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <Party />
      <Event />
      <Fantasias/>
      <Presença />
      <Footer/>
    </>
  );
}

export default App;
