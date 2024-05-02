import "./styles.css"
import { Props } from "./interfaces";

const ImgL = (props : Props) =>  {
    return(
        <div className="img-link">
            <img src={props.src} alt={props.alt} />
            <a href={props.link}/>
        </div>
    );
}
export default ImgL;