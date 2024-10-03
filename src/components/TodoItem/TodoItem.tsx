import './index.css'
import { Todo } from '../../interfaces/interfaces';
import excluirIcon from '../../assets/excluir-icon.svg';
import editarIcon from '../../assets/editar-icon.svg';

function TodoItem(props: {todo: Todo}){
    return(
        <>
            <li key={props.todo.id}>
                <div className='todo'>
                    <div className='todoHeader'>
                      <div className='todoContent'>
                        <input type="checkbox" checked={props.todo.isComplete} id={`checkbox-${props.todo.id}`}/>
                        <label htmlFor={`checkbox-${props.todo.id}`} className="custom-checkbox-todo"></label>
                        <h4>{props.todo.title}</h4>
                      </div>
                      <div className='todoButtons'>
                        <button><img src={excluirIcon} alt="" /></button>
                        <button><img src={editarIcon} alt="" /></button>
                      </div>
                    </div>
                    <p className='todoDescription'>{props.todo.description}</p>
                </div>
            </li>
        </>
    )
}

export default TodoItem;