import react from "react";
import reactDom from "react-dom";


const Basket=({cartItem,onAdd,onRemove})=>{
    const itemsPrice=cartItem.reduce((a,b)=>a+b.price*b.count,0);
   // console.log(itemsPrice)
   const taxPrice=itemsPrice*0.14
   const shippingPrice=itemsPrice>2000 ? 0 : 50;
   const totalPrice=itemsPrice+taxPrice+shippingPrice
    return (
        <aside className="block col-1">
            <h2>Cart Items</h2>
            <div>
                {cartItem.length===0 ? <div>Cart is empty</div> :
                
                    cartItem.map((item)=>{
                       return(<div key={item.id} className="row">
                       <div className="col-2">{item.name}</div>
                       <div className="col-2 row">
                           <button onClick={()=>onAdd(item)} className="add">
                               +
                           </button>
                           <button onClick={()=>onRemove(item)} className="remove">
                               -
                           </button>
                       </div>
                       <div className="col-2 text-right">
                           {item.count} x ${item.price.toFixed(2)}
                       </div>
                       
                   </div>) 
                    })}
                   {cartItem.length!==0 ? <div>
                       <hr />
                       <div className="row">
                           <div className="col-2">items Price</div>
                           <div className="col-1">$:{itemsPrice}</div>
                       </div>
                       <div className="row">
                           <div className="col-2">tax Price</div>
                           <div className="col-1">$:{taxPrice}</div>
                       </div>
                       <div className="row">
                           <div className="col-2">shipping Price</div>
                           <div className="col-1">$:{shippingPrice}</div>
                       </div>
                       <div className="row">
                           <div className="col-2">total Price</div>
                           <div className="col-1">$:{totalPrice}</div>
                       </div>
                   </div> : ''}
            </div>
        </aside>
    )
}
export default Basket