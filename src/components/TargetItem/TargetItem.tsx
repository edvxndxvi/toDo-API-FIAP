import './index.css'
import { Target } from '../../interfaces/interfaces';
import TodoItem from '../TodoItem/TodoItem';
import excluirIcon from '../../assets/excluir-icon.svg';
import editarIcon from '../../assets/editar-icon.svg';
import addIcon from '../../assets/add-icon.svg';

function TargetItem(props: {target: Target}){
    const todos = props.target.todos || [];
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
                        <button><img src={excluirIcon} alt="" /></button>
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
                    <div className="addIcon"><img src={addIcon} alt=""/></div>
                </div>
            </li>
        </>
    )
}

export default TargetItem;