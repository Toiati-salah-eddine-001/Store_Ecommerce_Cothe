import { Routes, Route, Link } from "react-router-dom";
import Home from "../Component/Home";
import About from "../Component/About";
import Contact from "../Component/Contact";
import Pannier from "../Component/Pannier";
import { useState } from "react";
import { useSelector } from "react-redux";
import SearchBare from "./SearchBare";

function Headre() {
  const [ShowDropdown, setShowDropdown] = useState(false);
  const stateProduct = useSelector(state => state.ProductsList);
  const search = useSelector(state => state.search);
  const allProducts = [
    ...(Array.isArray(stateProduct.men) ? stateProduct.men : []),
    ...(Array.isArray(stateProduct.women) ? stateProduct.women : []),
    ...(Array.isArray(stateProduct.kids) ? stateProduct.kids : []),
  ];
  
  // const searchResult = allProducts.filter(product => product.name.toLowerCase().includes(search.toLowerCase()));

  const PanierListe = useSelector((state) => state.Panier);
  return (
    <div>
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#F4EFE6] px-10 py-3">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-4 text-[#1C160C]">
            <div className="size-4">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h2 className="text-[#1C160C] text-lg font-bold leading-tight tracking-[-0.015em]">
              T-Store
            </h2>
          </div>
          <div className="flex items-center gap-9">
            <Link
              className="text-[#1C160C] text-sm font-medium leading-normal hover:text-[#019863]"
              to="/"
              exact
            >
              Home
            </Link>
            <Link
              className="text-[#1C160C] text-sm font-medium leading-normal hover:text-[#019863]"
              to="/Shop"
            >
              Shop
            </Link>
            <Link
              className="text-[#1C160C] text-sm font-medium leading-normal hover:text-[#019863]"
              to="/About"
            >
              About
            </Link>
            <Link
              className="text-[#1C160C] text-sm font-medium leading-normal hover:text-[#019863]"
              to="/Contact"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="flex flex-1 justify-end gap-8">
          <label className="flex flex-col min-w-40 !h-10 max-w-64">
            <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
              <div
                className="text-[#A18249] flex border-none bg-[#F4EFE6] items-center justify-center pl-4 rounded-l-xl border-r-0"
                data-icon="MagnifyingGlass"
                data-size="24px"
                data-weight="regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
                </svg>
              </div>
              <SearchBare />
            </div>
          </label>
          <div className="flex gap-2 relative">
            {PanierListe.length > 0 && 
            <span
              className="absolute top-[-10px] left-[0px] flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-white text-xs font-bold z-10 p-1"
            >
              {PanierListe.length}
            </span>
          }
            <Link
              to="/Pannier"
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#019863] text-[#FFFFFF] text-sm font-bold leading-normal tracking-[0.015em]"
            >
              <span className="truncate">
                <i className="fa-solid fa-cart-shopping" />
              </span>
            </Link>
            <div className="relative inline-block">
              <button
                className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-[#F4EFE6] text-[#1C160C] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5"
                onClick={() => {
                  setShowDropdown((prev) => !prev);
                }}
              >
                <div
                  className="text-[#1C160C]"
                  data-icon="User"
                  data-size="20px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z" />
                  </svg>
                </div>
              </button>
              {ShowDropdown && (
                <div className="absolute right-0 mt-2 w-40 bg-[#F4EFE6] border border-[#A18249] rounded-xl shadow-lg z-50">
                  <a
                    href="/SignUp"
                    className="flex items-center gap-2 px-4 py-2 text-[#1C160C] hover:text-[#019863] hover:bg-[#EAE2D6] rounded-xl"
                  >
                    <i className="fa-solid fa-user-plus"></i> Sign Up
                  </a>
                  <a
                    href="/SignIn"
                    className="flex items-center gap-2 px-4 py-2 text-[#1C160C] hover:text-[#019863] hover:bg-[#EAE2D6] rounded-xl "
                  >
                    <i className="fa-solid fa-sign-in-alt"></i> Sign In
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Pannier" element={<Pannier />} />
      </Routes>
    </div>
  );
}

export default Headre;
