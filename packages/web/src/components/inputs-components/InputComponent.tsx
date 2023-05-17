import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";

import "bootstrap/dist/css/bootstrap.min.css";
import "./inputComponent.css";

interface IInput {
  input: any
}

function InputComponent({
  input: [
    type,
    id,
    value,
    nivelText,
    eventFunc,
    prop,
    placeholder,
    nivel ]
}: IInput) {
  return (
    <>
      <Form.Label htmlFor={`${id}`}>
        <h6>{`${nivelText}`}</h6>
      </Form.Label>
      <Form.Control
        type={`${type}`}
        className="input-component"
        id={`${id}`}
        value={value}
        placeholder={ placeholder }
        onChange={(event) => eventFunc ? eventFunc(event, prop, nivel) : undefined}
      />
    </>
  );
}

InputComponent.propTypes = {
  input: PropTypes.any,
};

export default InputComponent;