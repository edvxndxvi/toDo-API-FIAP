import './index.css'
import { Target } from '../../interfaces/interfaces';

function TargetItem(props: {target: Target}){
    return(
        <>
            <li>
                <div className='target'>
                    <div className='targetHeader'>
                        <div className='targetContent'>
                        <input type="checkbox"/>
                        <h3>{props.target.title}</h3>
                        </div>
                        <div className='targetButtons'>
                        <button>Excluir</button>
                        <button>Editar</button>
                        </div>
                    </div>
                    <p className='targetDescription'>{props.target.description}</p>
                    <ul>
                    </ul>
                </div>
            </li>
        </>
    )
}

export default TargetItem;