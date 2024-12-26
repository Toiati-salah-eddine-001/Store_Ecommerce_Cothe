import { useSelector } from "react-redux"
import Card from "../Layout/Card"


function AllProduct({handeladdpanier}) {
  const stateProduct=useSelector(state=>state.ProductsList)

  

  const allProducts = [
    ...stateProduct.men,
    ...stateProduct.women,
    ...stateProduct.kids,
  ];
 
  console.log(allProducts)

  
  const handelAddtopanier = (product) => {
    const { id } = product;
    alert(id);
    if (typeof handeladdpanier === 'function') {
      handeladdpanier();
    } else {
      console.error("handeladdpanier is not a function!");
    }

  };

  // const shuffleArray = (array) => {
  //   return array.sort(() => Math.random() - 0.5);
  // };

  // const shuffelProduct=shuffleArray(allProducts);
  // console.log(shuffelProduct);

  return (
    <>
    <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-4">
      {/* <div>AllProduct</div> */}
      {allProducts.length > 0 ? (
        allProducts.map((product) => (
          <Card key={product.id} product={product} handelAddtopanier={handelAddtopanier}/>
        ))
      ) : (
        <p>No products available</p> // Message if no products are found
      )}
      </div>
    </>
  )
}

export default AllProduct