import { useState } from "react";
import GifSectComp from "./GifSectComp";

const NuevaEntComp = () => {
    useState([""]);
    function Upload(){
        alert("Subiendo...");
    }
    return (
        <>
            <label htmlFor="Nuevo">Cuentame: Cómo te fue hoy??</label>
            <input type="text" name="Nuevo" id="" />
            <button><img src="" alt="Add" /></button>
            <GifSectComp> </GifSectComp>
            <button onClick={Upload}>Subir</button>
        </>
    )
}
export default NuevaEntComp;