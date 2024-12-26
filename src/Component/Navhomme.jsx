
import AllProduct from "./AllProduct"
import WomenProduct from "./WomenProduct"
import MenProduct from "./MenProduct"
import KidsProduct from "./KidsProduct"
function Navhomme({Changincomponent}) {

  const handelAddPanier= ()=>{
      console.log("this is function")
  }


  return (
    <div>
<div className="pb-3">
  <div className="flex border-b border-[#E9DFCE] px-4 justify-between">
    <p
      className="flex flex-col items-center justify-center text-[#A18249] pb-[13px] pt-4 flex-1 relative group"
      onClick={()=>Changincomponent(<AllProduct  handeladdpanier={handelAddPanier} />)}
    >
      <p className="text-[#A18249] text-sm font-bold leading-normal tracking-[0.015em] group-hover:text-[#1C160C]">
        All Products
      </p>
      <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#019863] scale-x-0 group-hover:scale-x-100 transition-transform origin-center"></span>
    </p>

    <p
      className="flex flex-col items-center justify-center text-[#A18249] pb-[13px] pt-4 flex-1 relative group"
      onClick={()=>Changincomponent(<MenProduct/>)}
    >
      <p className="text-[#A18249] text-sm font-bold leading-normal tracking-[0.015em] group-hover:text-[#1C160C]">
      Men
      </p>
      <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#019863] scale-x-0 group-hover:scale-x-100 transition-transform origin-center"></span>
    </p>

    <p
      className="flex flex-col items-center justify-center text-[#A18249] pb-[13px] pt-4 flex-1 relative group"
      onClick={()=>Changincomponent(<WomenProduct/>)}
    >
      <p className="text-[#A18249] text-sm font-bold leading-normal tracking-[0.015em] group-hover:text-[#1C160C]">
      women
      </p>
      <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#019863] scale-x-0 group-hover:scale-x-100 transition-transform origin-center"></span>
    </p>

    <p
      className="flex flex-col items-center justify-center text-[#A18249] pb-[13px] pt-4 flex-1 relative group"
      onClick={()=>Changincomponent(<KidsProduct/>)}
    >
      <p className="text-[#A18249] text-sm font-bold leading-normal tracking-[0.015em] group-hover:text-[#1C160C]">
      kids
      </p>
      <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#019863] scale-x-0 group-hover:scale-x-100 transition-transform origin-center"></span>
    </p>
  </div>
</div>
{/* <Routes>
  <Route path="/" element={<AllProduct/>} />
  <Route path="/women" element={<WomenProduct/>} />
  <Route path="/Men" element={<MenProduct/>} />
  <Route path="/Kids" element={<KidsProduct/>} />
</Routes> */}
</div>

  )
}

export default Navhomme