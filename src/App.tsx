import './App.css'
import { useEffect, useState } from 'react';
import { Target } from './interfaces/interfaces';  
import { getData, postData } from './services/api'; 
import ButtonForm from './components/ButtonForm/ButtonForm';
import TargetItem from './components/TargetItem/TargetItem';

function App() {
  const [targets, setTargets] = useState<Target[]>([]);
  useEffect(() => {
    getData(setTargets);
  }, []);
  return (
    <>
      <main>
        <h1>TODO LIST</h1>
        <form>
          <input type="text" placeholder='Arrumar a cama...'/>
          <ButtonForm conteudo='ADICIONAR'/>
        </form>
        {targets.length > 0 ? (
          <ul>
            {targets?.map((target) => (
              <TargetItem key={target.id} target={target} />
            ))}
          </ul>
        ) : (
          <h4 className='noTargets'>Lista de Targets Vazia...</h4>
        )}
      </main>
    </>
  )
}

export default App
