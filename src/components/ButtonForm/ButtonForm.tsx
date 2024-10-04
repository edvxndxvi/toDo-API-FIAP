import './index.css';

function ButtonForm(props: { conteudo: string; onClick: () => void }) {
    return (
        <button className='buttonForm' onClick={props.onClick}>
            {props.conteudo}
        </button>
    );
}

export default ButtonForm;