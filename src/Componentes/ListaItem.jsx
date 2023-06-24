import { useState } from "react"

const Item = ({item,onUpdate,onDelete})=>{
    const [newTitle,setNewTitle] = useState(item.texto)
    const [esEditable, setEsEditable] = useState(false)

    const handleChange= (e)=>{
        setNewTitle(e.target.value)
    }

    const handleUpdate = ()=>{
        onUpdate(item.id,newTitle)
        setEsEditable(false)
    }

    const handleOnDelete = ()=>{
        onDelete(item.id)
    }


    return(
        <div >
        {esEditable?(
        <form  onSubmit={(e)=>e.preventDefault()}>
            <input className="container__input" onChange={handleChange} value={newTitle} type="text"/>
            <button className="container__button" onClick={handleUpdate}>Update</button>
        </form>)
        :( 
        <li className="lista__item"  > <span className="item__texto">{item.texto}</span>
            <button className="lista__button" onClick={()=>setEsEditable(true)}>Editar</button>
            <button className="lista__button1" onClick={handleOnDelete}>Eliminar</button>
        </li> )}
       </div>
    )
}

export default Item;