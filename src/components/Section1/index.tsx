import "./styles.css"
import { Props } from "./interfaces";
import Produto from "../Produto";

const Section1 = (props : Props) =>  {
    return(
        <div className="">
            <Produto 
            title="Café com Deus pai"
            image="/cafe.webp"
            link="https://www.saraiva.com.br/cafe-com-deus-pai/p"
            ></Produto>

        </div>
    );
}
export default Section1;