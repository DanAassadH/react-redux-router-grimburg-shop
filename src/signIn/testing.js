/* testing stuff out */

x= clansList.includes(userClan.toLowerCase());    // check clan avialabilty
console.log("clan is available "+ x);

const clanIndex = clansList.indexOf(userClan.toLowerCase());  // find clan index
console.log("index of clan " + clanIndex);

const memberListLength = membersList[clanIndex].length;      //find total number of members of that clan   
console.log("Total members" + memberListLength);             // not needed yet

const y = membersList[clanIndex].includes(userName);     //  find if member exits
console.log("member is available " + y);

const memberIndex = membersList[clanIndex].indexOf(userName)     //  find index number of member
console.log("index of member " + memberIndex);

//  window.location.href='product';
/*
for (let i = 0; i < y; i++) {
console.log("This is member:  " + membersList[0][i]);
}*/

/*  try{

}
catch(err)
{

}*/

/*Aaron Barthel2:58 PM
<div class="inputGroup">
  <label ...></label>
  <input ... />
</div>
<div class="inputGroup">
  <label ...></label>
  <input ... />

  <p>My Error</p>
</div> */

/*

{
  TheAbsoluteZeros: {
    "clan": "TheAbsoluteZeros",
        "members": [
          "Danish",
          "Fahad",
          "Irwin",
          "Aaron"
        ]
  }
}  */

/*if(clans[USERINPUT] === undefined) {
  // NO USER
}
*/

/***const singleClan = clans["TheAbsoluteZeros"];
const membersList = singleClan.members; */
/*
{
  TheAbsoluteZeros: {
    "clan": "TheAbsoluteZeros",
        "members": [
          "Danish",
          "Fahad",
          "Irwin",
          "Aaron"
        ]
  },

  Clan2: {
    "clan": "Clan2",
      "members": [
        "Shawna",
      ]
  }
} 
*/


export default () => {
  const productsInCart1 = useSelector((state) => Object.values(state.cart));
  const allProducts = useSelector((state) => Object.values(state.products));

  const [productsInCart, setProductsInCart] = React.useState(productsInCart1);

  let subTotal = 0;
  let cartListArray=[];

    for (const element of productsInCart)  {
     const c = allProducts.find(xx => xx.id === element.productId);
      c["quantity"] = element.quantity; 
      subTotal = (c.price*c.quantity)+subTotal;
      cartListArray.push(c);
    }
  
  function DeleteProduct (id) {
    const newList = cartListArray.filter((item) => item.id !== id);
    setProductsInCart(newList);
   }//end checkout fn

  return (
    <div id="checkout-page">

    <h2>Your Cart</h2>

      {cartListArray.map((cartItem)=>{
          //  getchangeQuantity(cartItem.quantity)

           return(

          <ul className="products-listing">
          <li id="image-p"><img src={`/imgs/products/${cartItem.image}`} alt="" /></li>
          <li id="price-p">Unit Price: {cartItem.price}</li>
          <li id="quantity-p">Quantity: </li>
          <li id="remove-p">
            <input type="textbox" value={cartItem.quantity}
            ></input>
          </li>
          <li id="name-p">{cartItem.name}</li>
          
          <li id="remove-all">
            <input type="button" value="Remove Item" onClick={() => DeleteProduct(cartItem.id)} ></input>
          </li>
        </ul>

        );
      })}
     

      <ul id="sub-total">
        <li>Subtotal:</li>
        <li>
          <input type="text" value={`${subTotal} g`} ></input>
        </li>
      </ul>

      <input type="submit" value="Checkout" onClick={CheckOut}></input>
    </div>
  );
};

