import "./styles.css"
import ImgL from "../Img-link";


const Navbar = () =>  {
    return(
        <header className="navbar">
            <div>
                <ImgL src="./logo.png" alt="" link=""/>
                <ul>
                    <li><a href="">Categorias</a></li>
                </ul>
                <img src="./search.svg" alt="" />
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