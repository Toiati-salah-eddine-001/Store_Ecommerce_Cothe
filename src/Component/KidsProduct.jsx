// import { useSelector } from "react-redux"
// import Card from "../Layout/Card"

// function KidsProduct() {
//   const KidsProducts = useSelector(state=>state.kids)
//   console.log(KidsProducts)
//   console.log("buuug")
//   return (
//     <>
//         <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-4">
//       {/* <div>AllProduct</div> */}
//       {KidsProducts.length > 0 ? (
//         KidsProducts.map((product) => (
//           <Card key={product.id} product={product} />
//         ))
//       ) : (
//         <p>No products available</p> 
//       )}
//       </div>
//     </>
//   )
// }

// export default KidsProduct



import { useSelector } from "react-redux";
import Card from "../Layout/Card";

function KidsProduct() {
  const KidsProducts = useSelector(state => state.ProductsList.kids || []); 

  return (
    <>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-4">
        {KidsProducts.length > 0 ? (
          KidsProducts.map((product) => (
            <Card key={product.id} product={product} />
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </>
  );
}

export default KidsProduct;