

function Card() {
  return (
<div className="group flex flex-col gap-3 pb-3">
  <div
    className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-xl transition-transform group-hover:scale-105"
    style={{
      backgroundImage:
        'url("https://cdn.usegalileo.ai/sdxl10/c035d4fc-66d4-4403-90ae-c0bd0b5cee00.png")',
    }}
  ></div>
  <div className="bg-white group-hover:bg-[#F5F1E8] p-4 rounded-xl transition-colors">
    <p className="text-[#1C160C] text-base font-medium leading-normal">Product 1</p>
    <p className="text-[#A18249] text-sm font-normal leading-normal">$10.00</p>
  </div>
</div>

  )
}

export default Card