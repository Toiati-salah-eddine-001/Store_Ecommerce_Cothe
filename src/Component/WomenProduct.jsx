import { useDispatch, useSelector } from "react-redux"
import Card from "../Layout/Card"
import {create}from "../Redux/Action/PanierAction"

function WomenProduct() {
  const searchTerm = useSelector((state) => state.search);
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
   const SearchData = searchTerm.dataSearcher;
   const SeatchOnlyWomane = SearchData.filter((product) => product.name.includes("Women's"))
  return (
    <>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {/* <div>AllProduct</div> */}
      {SeatchOnlyWomane.length > 0 ? (
        SeatchOnlyWomane.map((product) => (
          <Card key={product.id} product={product} handelAddtopanier={handelAddtopanier}/>
        ))
      ) : (
        <p>No products available</p> 
      )}
      </div>
    </>
  )
}

export default WomenProduct