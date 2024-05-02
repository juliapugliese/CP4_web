import {PropsProduto} from './interfaces'
import "./styles.css"


const Produto = (props: PropsProduto) => {
    return( 
        <div className='produto'>
            <img src={props.image} alt='' />
            <p>{props.title}</p>
            <button><a href={props.link}>Comprar</a></button>
        </div>
    );
};

export default Produto;