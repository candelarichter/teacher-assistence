import React from "react";
//import "./styles/Input.css";
//import { Row, Col} from "react-bootstrap";

export default function Input(props) {
    return (
        <div>
            <div className="contenedor">
            <div className="label">
            <label htmlFor="numero">{props.nombre}</label>
            </div>
            <div>
            <input className="input" type="text" id="numero" name="numero" placeholder={props.placeh} />
            </div>
            </div>
        </div>
    )
}