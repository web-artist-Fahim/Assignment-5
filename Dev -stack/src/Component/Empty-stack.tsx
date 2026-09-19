import type obj from "../Types/mainObj";
import type { Dispatch, SetStateAction } from "react";
export interface EmptyStackProps {
  prop: obj[],
  //  handleClick: (stackObj: obj) => void;
  setGetData: Dispatch<SetStateAction<obj[]>>

}

export default function EmptyStack({ prop, setGetData }: EmptyStackProps) {

  function handleRemove(obj: obj) {
    const removeItem = prop.filter((stackData) => stackData.id !== obj.id);
    setGetData(removeItem);
  }
  function removeAll() {
    setGetData([])
  }
  return (
    <div className=" p-6 border border-[#9da1a7] rounded-xl">
      <h3 className="font-bold text-[24px] leading-6 text-[#0F172A]">Your stack</h3>
      {prop.length === 0 ? <h3 className="text-[16px] text-[#94A3B8] my-3 font-normal">No technologies selected yet.</h3> : <h3 className="text-[16px] text-[#94A3B8] my-3 font-normal">{prop.length} technologies selected</h3>}
      <div className=" border border-grey-300 px-3.75 py-2 border-dashed rounded-[10px]">
        {prop.length === 0 ? <p className="text-[16px] text-[#94A3B8] my-2 font-normal">Your stack is empty.</p> : (
           <>
           {  prop.map((stack) => {
            return (<div>
              <div className="flex justify-between items-center p-2.5  border border-[#9da1a7]">
                <div className="frist p-1 pb-1">
                  <img className="w-7.5" src={stack.icon} alt={stack.name} />
                  <span>{stack.name}</span>
                  <span>{stack.category}</span>

                </div>
                <div className="second">
                  <button
                    className="p-1"
                    onClick={() => handleRemove(stack)}
                  > x 
                  </button>
                </div>
              </div>
            </div>)
          })};
        <button className =" w-full p-2.5 px-7.5 border cursor-pointer border-[#ED8C85] text-[14px] font-semibold text-[#D82C20] rounded-[10px] mt-2.5"
        onClick={removeAll}> 
        Remove all</button>
          </>)}
      </div>
    </div >
  )
}