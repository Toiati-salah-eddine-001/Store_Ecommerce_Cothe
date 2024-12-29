import { useDispatch, useSelector } from "react-redux";
import ItemsPanier from "../Layout/ItemsPanier";
import {AddQte , MinceQt , DeletProduct} from "../Redux/Action/PanierAction"
import { useState } from "react";

function Pannier() {
  // const [ActionOperation,setActionOperation]=useState({

  //   DeleteProductPanier,
  // })
  const ProductPannier = useSelector((state) => state.Panier);
  const dispatch = useDispatch()
  console.log(ProductPannier);

  const addQuntitée= (item) => {
    const {id , qte} = item;
    console.log(Number(id),qte);
    dispatch(AddQte(Number(id)))
    console.log('dazt ou nn')
  }
  const MinceProduct= (item) => {
    const {id } = item;
    console.log(Number(id));
    dispatch(MinceQt(Number(id)))
    console.log('Na9es Sf')
  }

  const DeleteProductPanier= (item) => {
    const {id } = item;
    console.log(Number(id));
    dispatch(DeletProduct(Number(id)))
    console.log('Delete Sf')
  }

  const TotalPrice = ()=>{
    const totale = ProductPannier.reduce((TotalPrice,Prod)=>{
      return TotalPrice + (Prod.qte * Prod.price)
    },0)
    return totale.toFixed(2) 
  }

  return (
    <>
      <div className="w-full mt-8 px-4 max-w-7xl mx-auto">
        {/* Product Row */}
        {ProductPannier.map((item)=>(
         <ItemsPanier key={item.id} item={item} AddQuantite={addQuntitée} MinceProduct={MinceProduct} DeleteProductPanier={DeleteProductPanier}  />  // on passe l'item directement au composant ItemsPanier pour afficher les détails du produit
        ))}
        {/* <ItemsPanier /> */}
      </div>
      {/* Total Price */}
      <div className="text-center mt-6">
        <p className="text-lg font-medium text-gray-800">Total Price: {TotalPrice()} $ </p>
      </div>
    </>
  );
}

export default Pannier;
