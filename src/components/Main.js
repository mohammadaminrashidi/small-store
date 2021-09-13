import react from "react";
import reactDom from "react-dom";
import Products from "./Products";

const Main=({products,onAdd})=>{
    //const p=products
   // console.log(products)
   const ShowProducts= products.map(p=>{
       return(
           <Products key={p.id} p={p} onAdd={onAdd}></Products>
       )
    })
    return (
        <main className=" block col-2">
            <h2>Products</h2>
            <div className="row">
               {ShowProducts}
            </div>
        </main>
    )
}
export default Main