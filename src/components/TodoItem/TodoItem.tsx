import './index.css'
import { Todo } from '../../interfaces/interfaces';

function TodoItem(props: {todo: Todo}){
    return(
        <>
            <li>
                <div className='todo'>
                    <div className='todoHeader'>
                      <div className='todoContent'>
                        <input type="checkbox"/>
                        <h4>{props.todo.title}</h4>
                      </div>
                      <div className='todoButtons'>
                        <button>Excluir</button>
                        <button>Editar</button>
                      </div>
                    </div>
                    <p className='todoDescription'>{props.todo.description}</p>
                </div>
            </li>
        </>
    )
}

export default TodoItem;