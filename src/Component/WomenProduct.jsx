import { useSelector } from "react-redux"
import Card from "../Layout/Card"

function WomenProduct() {
  const WomeenProduct = useSelector(state=>state.ProductsList.women)
  console.log(WomeenProduct)
  return (
    <>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-4">
      {/* <div>AllProduct</div> */}
      {WomeenProduct.length > 0 ? (
        WomeenProduct.map((product) => (
          <Card key={product.id} product={product} />
        ))
      ) : (
        <p>No products available</p> 
      )}
      </div>
    </>
  )
}

export default WomenProduct