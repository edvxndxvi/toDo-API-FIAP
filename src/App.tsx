import './App.css'
import { useEffect, useState } from 'react';
import { Target } from './interfaces/interfaces';  
import { getData, postData } from './services/api'; 
import ButtonForm from './components/ButtonForm/ButtonForm';

function App() {
  const [targets, setTargets] = useState<Target[] | undefined>([]); 
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
        <ul>
          
        </ul>
      </main>
    </>
  )
}

export default App
