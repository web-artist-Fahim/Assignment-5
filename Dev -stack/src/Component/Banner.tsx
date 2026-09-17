import './banner.css'
import banner from '../assets/banner-stack.png'
export default function Banner() {
  return (
    <div className='hero-section  pt-10  pb-10 overflow-hidden'>
      <div className="section-one">
        <h2 className="text-[60px] font-extrabold text-[#0F172A] ">Build Your Ideal</h2>
        <h2 className='text-6xl bg-linear-to-r from-[#D81B7E] via-[#7C3AED] to-[#FF5722] bg-clip-text text-transparent inline-block font-extrabold leading-14 tracking-[-1.5px] pb-8' >Development Stack</h2>
        <p className ="text-[18px] font-normal text-[#475569] mt-6 pb-16">Explore frontend, backend, database, and tooling options,
          compare them <br /> side by side, and put together the stack that fits your
          next project.</p>
         <button className='bg-linear-to-r from-[#F97316] to-[#D81B7E] border border-gray-300 rounded-xl p-4 pl-7.5 pr-7.5 text-[14px] text-amber-50 cursor-pointer '>Explore Technology </button>  <button className = "p-4 ml-2.5 text-[14px] text-black border border-[#374151] rounded-xl cursor-pointer pl-14 pr-14">Learn More</button>
      </div>
      <div className="section-two">
        <img width="480px" height="422px" src={banner} alt="" />
      </div>
    </div>
  )
}