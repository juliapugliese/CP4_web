import "./styles.css"
import Botao from "../Botao";


const Navbar = () =>  {
    return(
        <header className="navbar">
            <div>
                <Botao img={<img src="./logo.png" alt="" />}link="./"/>
                <ul>
                    <li><a href="./produtos">Produtos</a></li>
                    <li><a href="./sobre">Sobre</a></li>
                    <li><a href="./contato">Contato</a></li>
                </ul>
                <div className="pesquisa">
                    <img src="./search.svg" alt="" />
                </div>
                
            </div>
            <div>

                <Botao img={<img src="./fav.svg" alt=""/>} link="https://www.jujubooks.com.br/" />
                <Botao img={<img src="./person.svg" alt=""/>} link="https://www.jujubooks.com.br/" />
                <Botao img={<img src="./cart.svg"  alt=""/>} link="https://www.jujubooks.com.br/" />

                <button>
                    <a href="">Inscreva-se</a>
                </button>
            </div>
        </header>
    );
}
export default Navbar;