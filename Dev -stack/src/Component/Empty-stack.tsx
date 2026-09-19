import type obj from "../Types/mainObj";
import type { Dispatch, SetStateAction } from "react";
import { FaXmark } from "react-icons/fa6";
import { toast } from 'react-toastify';

export interface EmptyStackProps {
  prop: obj[],
  //  handleClick: (stackObj: obj) => void;
  setGetData: Dispatch<SetStateAction<obj[]>>

}

export default function EmptyStack({ prop, setGetData }: EmptyStackProps) {

  function handleRemove(obj: obj) {
    const removeItem = prop.filter((stackData) => stackData.id !== obj.id);
    setGetData(removeItem);
    toast.error(`${obj.name} removed from stack`)
  }
  function removeAll() {
    setGetData([]);
    toast.error('All stack removed')
  }
  return (
    <div className=" p-6 border border-[#9da1a7] rounded-xl">
      <h3 className="font-bold text-[24px] leading-6 text-[#0F172A]">Your stack</h3>
      {prop.length === 0 ? <h3 className="text-[16px] text-[#94A3B8] my-3 font-normal">No technologies selected yet.</h3> : <h3 className="text-[16px] text-[#94A3B8] my-3 font-normal">{prop.length} technologies selected</h3>}
      <div >
        {prop.length === 0 ? <div className=" border border-grey-300 px-3.75 py-2 border-dashed rounded-[10px]">
          <p className="text-[16px] text-[#94A3B8] my-2 font-normal text-center p-4">Your stack is empty.</p>
        </div> : (
          <>
            {prop.map((stack) => {
              return (<div>
                <div key ={stack.id} className="flex justify-between items-center gap-1 p-2.5 my-2.5 border border-[#9da1a7] rounded-xl"> 
                  <div className="frist p-1 pb-1 flex justify-between items-center gap-2.5">
                    <img className="w-9.5" src={stack.icon} alt={stack.name} />
                    <div>
                      <span className=" font-bold  text-[#0F172A] text-[14px] mb-1.5">{stack.name}</span> <br />
                      <span className="text-[12px]  text-[#94A3B8] m-0.5 font-normal">{stack.category}</span>

                    </div>
                  </div>
                  <div className="second">
                    <button
                      className="p-1"
                      onClick={() => handleRemove(stack)}
                    > 
                    <FaXmark style = {{
                      color:'#94A3B8',
                      fontSize:'25px',
                      cursor:'pointer',
                      fontWeight:'400'

                    }} />

                    </button>
                  </div>
                </div>
              </div>)
            })}
            <button className=" w-full p-2.5 px-7.5 border cursor-pointer border-[#ED8C85] text-[14px] font-semibold text-[#D82C20] rounded-[10px] mt-2.5"
              onClick={removeAll}>
              Remove all</button>
          </>)}
      </div>
    </div >
  )
}