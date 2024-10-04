import './index.css'
import { useState } from 'react';
import { Target, Todo } from '../../interfaces/interfaces';
import { addTodoToTarget } from '../../services/api';
import TodoItem from '../TodoItem/TodoItem';
import excluirIcon from '../../assets/excluir-icon.svg';
import editarIcon from '../../assets/editar-icon.svg';
import addIcon from '../../assets/add-icon.svg';
import voltarIcon from '../../assets/voltar-icon.svg';
import ButtonForm from '../ButtonForm/ButtonForm';

function TargetItem(props: { target: Target; onDelete: (id: number) => void }) {
    const { target, onDelete } = props;
    const [newTodoTitle, setNewTodoTitle] = useState('');
    const [isAddingTodo, setIsAddingTodo] = useState(false); 
    const todos = target.todos || [];

    const handleAddTodo = async () => {
        if (newTodoTitle.trim() === '') return;

        const newTodo: Todo = {
            id: Date.now(), 
            title: newTodoTitle,
            description: '', 
            isComplete: false,
            targetId: target.id, 
        };

        try {
            const addedTodo = await addTodoToTarget(target.id, newTodo);
            target.todos.push(addedTodo);
            setNewTodoTitle(''); 
            setIsAddingTodo(false); 
        } catch (error) {
            console.error('Erro ao adicionar todo:', error);
        }
    };

    return(
        <>
            <li key={props.target.id}>
                <div className='target'>
                    <div className='targetHeader'>
                        <div className='targetContent'>
                        <input type="checkbox" checked={props.target.isComplete} id={`checkbox-${props.target.id}`}/>
                        <label htmlFor={`checkbox-${props.target.id}`} className="custom-checkbox"></label>
                        <h3>{props.target.title}</h3>
                        </div>
                        <div className='targetButtons'>
                        <button onClick={() => onDelete(target.id)}><img src={excluirIcon} alt="" /></button>
                        <button><img src={editarIcon} alt="" /></button>
                        </div>
                    </div>
                    <p className='targetDescription'>{props.target.description}</p>
                    {todos.length > 0 ? (
                        <ul>
                            {todos.map((todo) => (
                                <TodoItem key={todo.id} todo={todo} />
                        ))}
                        </ul>
                    ) : (
                        <p className='noTodos'>Sem tarefas...</p>
                    )}
                    <div className="addTodo">
                        <button onClick={() => setIsAddingTodo(!isAddingTodo)} className='addButton'>
                            {isAddingTodo ? <img src={voltarIcon} alt=""/> : <img src={addIcon} alt=""/>}
                        </button>
                        {isAddingTodo && (
                            <div className='addTodoForm'>
                                <input
                                    type="text"
                                    value={newTodoTitle}
                                    placeholder="Título do toDo..."
                                    onChange={(e) => setNewTodoTitle(e.target.value)}
                                />
                                <ButtonForm conteudo='Adicionar' onClick={handleAddTodo}/>
                            </div>
                        )}
                    </div>
                </div>
            </li>
        </>
    )
}

export default TargetItem;