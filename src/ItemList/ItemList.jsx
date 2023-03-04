import React from 'react'
import Item from '../Item/Item'


// nada de logica, todo el html se renderiza
//la primera etiqueta del elemento, debe tener el key (id)

const ItemList = ({items}) => {
  return (
    <div>
        {
           items.map((element)=> {

            // todas las propiedades de element que viene del back
                return  <Item element={element} />
            })
        }

      
    </div>
  )
}

export default ItemList
