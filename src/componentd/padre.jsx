import React from "react";
import Hijo from "./hijo";
import { Button } from "@material-ui/core";
import { useState } from "react";
import App from '../App';
import { Children } from "react";


export default function Padre () {
    const [datos, establecedatos] = useState('');

    const PadreHijo = () => {
        establecedatos('Esta es xd')
    }
    return (
        <div className="app">
            <Children PadreHijo = {datos}/>
            <div className="Hijo">
                <Button color= 'secundary' primary onClick={() => PadreHijo()} >
                    xdxdxd
                </Button>
            </div>
        </div>
    )
}