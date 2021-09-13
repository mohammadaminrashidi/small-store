import React from 'react'

export default function Products({p,onAdd}) {
   // console.log(p)
    return (
        <div>
            <img className="small" src={p.image} alt={p.name} />
            <h3>{p.name}</h3>
            <div>${p.price}</div>
            <div>
                <button onClick={()=>onAdd(p)}>Add To Cart</button>
            </div>
        </div>
    )
}
