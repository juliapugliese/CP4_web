import { Props } from "./interfaces";
import "./styles.css"

const FormInput = (props: Props) => {
  return (
    <div className="form-input">
      <label>{props.label}</label>
      <input
        className={props.inputclassname}
        type="text"
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default FormInput;
