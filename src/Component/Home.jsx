// import Headre from "../Layout/Headre"
// import { Routes , Route  } from "react-router-dom"
// import Card from "../Layout/Card"
import Navhomme from "./Navhomme"
import AllProduct from "./AllProduct"
// import WomenProduct from "./WomenProduct"
// import MenProduct from "./MenProduct"
// import KidsProduct from "./KidsProduct"
import { useState } from "react"

function Home() {
  const [Crurentcomponnent,setCrurentcomponnent]=useState(<AllProduct/>)

  const Changincomponent= (comp)=>{
    setCrurentcomponnent(comp)
  }
  
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#FFFFFF] group/design-root overflow-x-hidden" style={{ fontFamily: "\"Plus Jakarta Sans\", \"Noto Sans\", sans-serif" }}>
    <div className="layout-container flex h-full grow flex-col">
      {/* <Headre/> */}
      <div className="px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        {/* -----------Nav bar Homm --------- */}
          <Navhomme Changincomponent={Changincomponent} />
          {/* <Routes>
          <Route path="/" element={<AllProduct/>} />
          <Route path="/home/women" element={<WomenProduct/>} />
          <Route path="/Men" element={<MenProduct/>} />
          <Route path="/Kids" element={<KidsProduct/>} />
          </Routes> */}
          {Crurentcomponnent}
        {/* ------- end Nav Homme ----- */}
          {/* <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
            <Card/>
            <Card/>
            <Card/>
            <div className="flex flex-col gap-3 pb-3">
              <div className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-xl" style={{ backgroundImage: "url(\"https://cdn.usegalileo.ai/sdxl10/f526c1d8-78fe-43a2-ab01-293942ba1e66.png\")" }} />
              <div>
                <p className="text-[#1C160C] text-base font-medium leading-normal">Product 2</p>
                <p className="text-[#A18249] text-sm font-normal leading-normal">$20.00</p>
              </div>
            </div>
            <div className="flex flex-col gap-3 pb-3">
              <div className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-xl" style={{ backgroundImage: "url(\"https://cdn.usegalileo.ai/sdxl10/c4a0bc15-19ac-421d-aa84-095b77383eb2.png\")" }} />
              <div>
                <p className="text-[#1C160C] text-base font-medium leading-normal">Product 3</p>
                <p className="text-[#A18249] text-sm font-normal leading-normal">$30.00</p>
              </div>
            </div>
            <div className="flex flex-col gap-3 pb-3">
              <div className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-xl" style={{ backgroundImage: "url(\"https://cdn.usegalileo.ai/sdxl10/5bc33222-35b3-4b1a-8746-c9388c72a70d.png\")" }} />
              <div>
                <p className="text-[#1C160C] text-base font-medium leading-normal">Product 4</p>
                <p className="text-[#A18249] text-sm font-normal leading-normal">$40.00</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>00 
  </div>
  )
}

export default Home