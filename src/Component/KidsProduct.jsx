
import { useDispatch, useSelector } from "react-redux";
import Card from "../Layout/Card";
import {create}from "../Redux/Action/PanierAction"

function KidsProduct() {
  const KidsProducts = useSelector(state => state.ProductsList.kids || []); 
  const dispatch = useDispatch()

   const handelAddtopanier = (product) => {
      // const { id } = product;
      // alert(id);
      // if (typeof handeladdpanier === 'function') {
      //   handeladdpanier(id);
      // } else {
      //   console.error("handeladdpanier is not a function!");
      // }
      dispatch(create(product)); // Dispatch action to add product to the panier
      console.log("Product added to the panier");
  
    };

  return (
    <>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-4">
        {KidsProducts.length > 0 ? (
          KidsProducts.map((product) => (
            <Card key={product.id} product={product}  handelAddtopanier={handelAddtopanier}/>
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </>
  );
}

export default KidsProduct;