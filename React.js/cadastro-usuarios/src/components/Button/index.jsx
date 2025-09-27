import { Button } from "./styles";
import propTypes from "prop-types";

function DefaultButton({children, theme, ...props}) {
    // console.log(props)
    console.log(theme)
    //console.log(children)
  return (
<Button  {...props} theme = {theme}> {children}</Button>
)
}

  DefaultButton.propTypes = {
    children: propTypes.node.isRequired,
    theme: propTypes.string
  }

export default DefaultButton;