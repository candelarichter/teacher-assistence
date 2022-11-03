import React, { Fragment } from "react";
//import "./styles/Login.css";
import Input from "./Input";
//import Boton from "./Boton"
//import {
  //  BrowserRouter as Router,
    //Routes,
    //Route,
    //Link
  //} from "react-router-dom";


export default function Login() {
    return (
        <div className="contenedor-login">
            <div className="centrar-login">
                <div>
                    <div>
                    <img src={require('./logo.png')} height={200} width={200} />
                        <form>
                            <p className="titulo-login">Inicio de Sesión</p>
                            <Input nombre="N° de empleado" placeh="Introduzca su n° de empleado"></Input>
                            <Input nombre="Contraseña" placeh="Introduzca su contraseña"></Input>
        
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}