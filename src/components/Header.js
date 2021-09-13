import react from "react";
import reactDom from "react-dom";


const Header=({cartSelected})=>{
    return (
        <header className="row block center">
            <div>
                <a href="#/">
                    <h1>Shopping Cart</h1>
                </a>
            </div>
            <div >
                <a  href="#/cart">
                    Cart :{''}
                    {cartSelected ? (
                        <button className="badge">{cartSelected}</button>
                    ) : ('')}
                </a> 
                <a href="#/SignIn">SignIn</a>
            </div>
        </header>
    )
}
export default Header