import { useDispatch, useSelector } from "react-redux";
import Card from "../Layout/Card";
import { create } from "../Redux/Action/PanierAction";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AllProduct({ handeladdpanier }) {
  const stateProduct = useSelector((state) => state.ProductsList);
  const ProductPannier = useSelector((state) => state.Panier);
  const searchTerm = useSelector((state) => state.search);

  const dispatch = useDispatch();

  const allProducts = [
    ...(stateProduct.men || []),
    ...(stateProduct.women || []),
    ...(stateProduct.kids || []),
  ];

  // const filteredItems =
  //   searchTerm.trim() === ""
  //     ? allProducts
  //     : allProducts.filter((product) =>
  //         product.name.toLowerCase().includes(searchTerm.trim().toLowerCase())
  //       );

      const SearchData = searchTerm.dataSearcher;
      console.log(SearchData)

  const handelAddtopanier = (product) => {
    const { id } = product;
    const CheckExist = ProductPannier.find((product) => product.id === id);
    if (CheckExist) {
      // alert("This product is already in the Panier");
      toast.error('! This product is already in the Panier', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
    } else {
      dispatch(create(product));
      toast.success('Product Adeded To Pannier ', {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
    }

  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {SearchData.map((product) => (
          <Card
            key={product.id}
            product={product}
            handelAddtopanier={handelAddtopanier}
          />
        ))}
      </div>
      <ToastContainer />
    </>
  );
}

export default AllProduct;
