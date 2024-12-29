import { useDispatch, useSelector } from "react-redux";
import Card from "../Layout/Card";
import { create } from "../Redux/Action/PanierAction";
import { useEffect, useState } from "react";
// import { useContext } from "react"
// import { ProductSearchContext } from "../Layout/Headre"

function AllProduct({ handeladdpanier, searchResult = [] }) {
  const stateProduct = useSelector((state) => state.ProductsList);
  const ProductPannier = useSelector((state) => state.Panier);
  const dispatch = useDispatch();

  const [FiterP, setFilterP] = useState(searchResult || []);

  useEffect(() => {
    setFilterP(searchResult);
  }, [searchResult]);

  // const Searchata = useContext(ProductSearchContext);
  // const {search}=Searchata;
  // console.log(search)

  const allProducts = [
    ...stateProduct.men,
    ...stateProduct.women,
    ...stateProduct.kids,
  ];
  // const DataFitredProduct= ()=>{
  //   if(search){
  //     return allProducts.filter(product=>product.name.toLowerCase().includes(search.toLowerCase()))
  //   }
  //   return allProducts;
  // }
  // const productsToDisplay = () => {
  //   return allProducts.filter((product) => {
  //     return search.toLowerCase() == ""
  //       ? allProducts
  //       : product.name.toLowerCase().includes(search.toLowerCase());
  //   });
  // };
  // const CheckSearch = productsToDisplay()
  // console.log(CheckSearch)

  console.log("this is allpage " + searchResult);

  const handelAddtopanier = (product) => {
    const { id } = product;
    // alert(id);
    // if (typeof handeladdpanier === 'function') {
    //   handeladdpanier(id);
    // } else {
    //   console.error("handeladdpanier is not a function!");
    // }
    // dispatch(create(product)); // Dispatch action to add product to the panier

    const CheckExist = ProductPannier.find((product) => product.id === id);
    if (CheckExist) {
      alert("This product is already in the Panier");
    } else {
      dispatch(create(product));
      // console.log("Product added to the panier");
    }
  };

  // const shuffleArray = (array) => {
  //   return array.sort(() => Math.random() - 0.5);
  // };

  // const shuffelProduct=shuffleArray(allProducts);
  // console.log(shuffelProduct);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Random index
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  };

  const shuffledProducts = shuffleArray(allProducts);

  return (
    <>
      <div className="grid grid-cols-[repeat(5,minmax(158px,1fr))] gap-4">
        {FiterP.length > 0 ? (
          FiterP.map((product) => (
            <Card
              key={product.id}
              product={product}
              handelAddtopanier={handelAddtopanier}
            />
          ))
        ) : (
          allProducts.map((product) => (
            <Card
              key={product.id}
              product={product}
              handelAddtopanier={handelAddtopanier}
            />
          ))
        )}
      </div>
    </>
  );

AllProduct.propTypes = {
  handeladdpanier: PropTypes.func,
  searchResult: PropTypes.arrayOf(PropTypes.object),
};
}

export default AllProduct;
