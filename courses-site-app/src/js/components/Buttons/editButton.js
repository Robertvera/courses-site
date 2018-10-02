import React, { Component } from "react";
import ReactDOM from "react-dom";

const editButton = (props) => {
  return (
    <button type="button" className="btn-sm btn-outline-warning" onClick={props.onClick}>Editar</button>
  )
}

export default editButton