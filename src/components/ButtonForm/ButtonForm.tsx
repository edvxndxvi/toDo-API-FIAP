import './index.css'

function ButtonForm(props:{
    conteudo: string
}){
    return(
        <>
            <button className='buttonForm'>{props.conteudo}</button>
        </>
    )
}

export default ButtonForm