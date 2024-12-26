import { useSelector } from "react-redux"
import Card from "../Layout/Card"

function MenProduct() {
  const MenProduct = useSelector(state=>state.ProductsList.men)
  console.log(MenProduct)
  return (
    <>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-4">
      {/* <div>AllProduct</div> */}
      {MenProduct.length > 0 ? (
        MenProduct.map((product) => (
          <Card key={product.id} product={product} />
        ))
      ) : (
        <p>No products available</p> 
      )}
      </div>
    </>
  )
}

export default MenProduct