
import './App.css';
import Calculadora from './componentes/Calculadora';
import ContadorLikes from './componentes/Contador/ContadorLikes';
import NombreUsuario from './componentes/Nombre/NombreUsuario';
import Mo from './componentes/modal/Mo';

function App() {
  return (
    <div className="App">
      <ContadorLikes/>
      <NombreUsuario/>
      <Mo/>
      <Calculadora/>
    </div>
  );
}

export default App;
