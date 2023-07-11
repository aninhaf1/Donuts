import { useState } from 'react';
import StyledGlobal, {CorFundo} from './StyledGlobal'
import Home from './paginas/Home/Home'
import Detalhes from './paginas/Detalhes/Detalhes';

function App() {
  const [trocarDePagina, setTrocarDePagina] = useState('0')

  const changePage = (change) =>{
    setTrocarDePagina(change)
  }

  return (
    <>
    <CorFundo>
      <StyledGlobal/>

      {trocarDePagina === '0'? (
        <Home pagina={()=> changePage('0')}/>
      ): (
        <Detalhes pagina={()=> changePage('1')}/>
      )}
      
    </CorFundo>
    </>
  );
}

export default App;
