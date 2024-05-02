import "./styles.css"
import ImgL from "../Img-link";


const Navbar = () =>  {
    return(
        <header className="navbar">
            <div>
                <ImgL src="./logo.png" alt="" link=""/>
                <ul>
                    <li><a href="">Produtos</a></li>
                    <li><a href="">Papelaria artesanal</a></li>
                    <li><a href="">Sobre</a></li>
                </ul>
                <div className="pesquisa">
                    <input type="text" />
                    <img src="./search.svg" alt="" />
                </div>
                
            </div>
            <div>

                <ImgL src="./fav.svg" alt="" link="https://www.livrariadavila.com.br/" />
                <ImgL src="./person.svg" alt="" link="" />
                <ImgL src="./cart.svg" alt="" link="" />

                <button>
                    <a href="">Inscreva-se</a>
                </button>
            </div>
        </header>
    );
}
export default Navbar;