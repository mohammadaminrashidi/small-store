import react,{useState} from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import Data from './Data';
function App () {
  const products=Data;
  let [cartItem,setcartItem]=useState([]);
   
  
  
  const onAdd=(item)=>{
    //console.log(item)
    const InfoCartt = cartItem
    let exist = false;
    InfoCartt.forEach((i) => {
          if (i.id === item.id) {
            exist = true;
            i.count++;
          }
        });
        if (!exist) {
              InfoCartt.push({ ...item, count: 1 });
            }
           //console.log(InfoCartt)
            setcartItem([...InfoCartt]);
          }
         const onRemove=(item)=>{
           //console.log(item)
            const exist =cartItem.find((x)=> x.id===item.id)
           // console.log(exist)
            if(exist.count==1){
              setcartItem(cartItem.filter((x)=>x.id!==item.id))
            }
            else{
              setcartItem(
                cartItem.map((x)=>x.id===item.id ?{...exist,count:exist.count -1}:x)
              );
            }
         }
    return (
      <div className="App">
        <Header cartSelected={cartItem.length}></Header>
        <div className='row'>
        <Main products={products} onAdd={onAdd}></Main>
        <Basket cartItem={cartItem} onAdd={onAdd} onRemove={onRemove}></Basket>
        </div>
      </div>
    );
    
  }
  // console.log(products)
  


export default App;
