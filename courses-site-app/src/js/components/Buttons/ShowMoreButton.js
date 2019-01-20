import React from "react";
import './ShowMoreButton.scss'

const ShowMoreButton = (props) => {
  return (
    <button type="button" className="show-more" onClick={props.onClick}>Mostrar más</button>
  )
}

export default ShowMoreButton