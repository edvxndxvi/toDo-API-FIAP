import './App.css'
import { useEffect, useState } from 'react';
import { Target } from './interfaces/interfaces';  
import { getData, postTarget, deleteTarget } from './services/api'; 
import ButtonForm from './components/ButtonForm/ButtonForm';
import TargetItem from './components/TargetItem/TargetItem';

function App() {
  const [targets, setTargets] = useState<Target[]>([]);

  const [title, setTitle] = useState(''); 

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    try {
      const addedTarget = await postTarget(title, "", false);
      setTargets((prevTargets) => [...prevTargets, addedTarget]);
      setTitle('');
    } catch (error) {
      console.error('Erro ao adicionar target:', error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteTarget(id);
      setTargets((prevTargets) => prevTargets.filter((target) => target.id !== id));
    } catch (error) {
      console.error('Erro ao deletar target:', error);
    }
  };

  useEffect(() => {
    getData(setTargets); 
    const intervalId = setInterval(() => {
      getData(setTargets); 
    }, 2000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <main>
        <h1>TODO LIST</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" name='title' placeholder='Arrumar a cama...' value={title} onChange={(e) => setTitle(e.target.value)}/>
          <ButtonForm conteudo='ADICIONAR' onClick={() => {}}/>
        </form>
        {targets.length > 0 ? (
          <ul>
            {targets?.map((target) => (
              <TargetItem key={target.id} target={target} onDelete={handleDelete}/>
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
