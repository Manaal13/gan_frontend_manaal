
import './App.css';
import Cupcake1 from './cupcake1.jpg'
import Cupcake2 from './cupcake2.png'
import Cupcake3 from './cupcake3.jpg'
import Blackforest from './Blackforest.jpg'
import Pineapplecake from './Pineapplecake.jpg'
import Redvelvet from './Redvelvet.webp'
import Chocolatetruffle from './Chocolatetruffle.jpeg'
import React from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
function App() {
  const [itemCount, setItemCount] = React.useState(0);
  const [items, setItems]=React.useState([]);
  const [bill, setBill]=React.useState(0);
  return (
    <div className="App" id="main">
      <header className="App-header">
      
      <div classname='Background'id="rectangle1"></div>
      <div classname='Product-heading' id='rectangle2'>
        <img classname='menu-image1' src={Cupcake1}/>
        <h1 classname='food-heading'>Products </h1>
        <img classname='menu-image2' src={Cupcake2}/>
        <h1 classname='food-heading'>Cake Class</h1>
        <img  classname='menu-image4' src={Cupcake3}/>
        <h1 classname='food-heading'>Recipes</h1>
        <Badge color="secondary" badgeContent={itemCount}>
          <ShoppingCartIcon onClick={()=>{
            console.log(items);
          }} />{" "}
        </Badge>
        <span>Total Bill: {bill} $</span>
 
      </div>
          
        {defaultOptions.map(cupcake=>
          (<div className="cards">
          <img className="cards__img" src={cupcake.image} />
          <div className="cards__overlay">
              <div className="card__title">{cupcake.name}</div>
              <div className="card__runtime">
              <div className="card__description">{cupcake.description}</div>
              <div className='addcart'>
              
     
  
    <div style={{ display: "block", padding: 30, color: "black" }}>
      
      <div>
        
        <ButtonGroup class="btn-group">
          <Button
            onClick={() => {
              setItemCount(Math.max(itemCount - 1, 0));
              if (bill-cupcake.price>=0) setBill(bill-cupcake.price);
              // setItems([...items,cupcake]);
              
            }}
          >
            {" "}
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            onClick={() => {
              setItemCount(itemCount + 1);
              setItems([...items,cupcake]);
              setBill(bill+cupcake.price);
            }}
          >
            {" "}
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      </div>
    </div>
  

           
                  <span className="card__rating">{cupcake.price} $<i className="fas fa-star" /></span>
                  
                  </div>
              </div>
              
          </div>
        </div>
          )
        )
}
        
      </header> 
    </div>
  );
}

export default App;


const defaultOptions = [{
  id:1,
  image: Redvelvet,
  name: "Red Velvet",
  description:"hello this cupcake",
  price: 15,
},
{
  id:2,
  image: Pineapplecake,
  name: "Pineapple Cake",
  description:"hello this cupcake",
  price: 17,
},{
  id:3,
  image:Chocolatetruffle,
  name: "Chocolate Truffle",
  description:"hello this cupcake",
  price: 21,
},{
  id:4,
  image: Blackforest,
  name: "Blackforest Pastry",
  description:"hello this cupcake",
  price: 25,
}]
