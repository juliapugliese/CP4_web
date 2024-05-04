import { Props } from "./interfaces";

const FormButton = (props: Props) => {
  return (
    <button
      className="form-button"
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export default FormButton;
