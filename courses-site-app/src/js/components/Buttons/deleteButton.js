import React, { Component } from "react";
import ReactDOM from "react-dom";

const deleteButton = (props) => {
  return (
    <button type="button" className="btn-sm btn-outline-danger" onClick={props.onClick}>Borrar</button>
  )
}

export default deleteButton