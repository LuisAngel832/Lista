import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Item from "./ListaItem";
import './Lista.css'

const Lista = ()=>{
    const [Texto, setTexto] = useState('');
    const [Listas,setListas] = useState([])
    
    const handleChange= (e)=>{
        const value = e.target.value;
        setTexto(value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(Texto === ""){
            alert("No has ingresado nada intentalo de nuevo")
        }
        else{
            const NuevoElemento={
                texto:Texto,
                id:uuidv4()
            }
            const copiaLista = [...Listas]
            copiaLista.unshift(NuevoElemento);
            setListas(copiaLista);
            setTexto('')
        }
        
    }

    const Update=(id,nuevoTexto)=>{
        const copiaLista=[...Listas]
        const item = copiaLista.find((item)=>item.id === id);
        item.texto = nuevoTexto;
        setListas(copiaLista)

    }

    const Eliminar= (id)=>{
        const copiaLista =Listas.filter((item)=>item.id !== id)
        setListas(copiaLista);
    }
    return (
        <div className="container">
            <form  className='container__formulario' onSubmit={handleSubmit}>
                <input className="container__input" type="text" onChange={handleChange} value={Texto}/>
                <button className="container__button">Crear</button>
            </form>

            <ul className="lista-container">
                {
                    Listas.map(item=>(
                        <Item
                        key={item.id}
                        item={item}
                        onUpdate={Update}
                        onDelete={Eliminar}
                        />
                    ))
                }
            </ul>
        </div>

    )
}

export default Lista