import { Button } from "react-bootstrap";

import "./buttonComponent.css";

interface buttonType {
  btn: Array<string | any>
}

function ButtonComponent({
  btn: [
    text,
    classButton,
    id,
    event]
  }: buttonType) {
  return <Button
    className={classButton}
    id={id}
    onClick={({ target }) => event(target)
    }
  >
    {text}
  </Button>
}
  
export default ButtonComponent;