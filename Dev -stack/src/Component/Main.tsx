import {use,useState} from 'react'
import Stacks from './Stacks'
import  type obj from "../Types/mainObj"
import EmptyStack from "./Empty-stack"
// react tostify
import { toast } from 'react-toastify';

interface mainProps {
  resolvedPromise:Promise<obj[]>
}


export default function Main({resolvedPromise}:mainProps) {
  
  const data = use(resolvedPromise);
  const [getData , setGetData] = useState<obj[]>([])

const  handleClick = (stackObj:obj):void =>{
  const addedItem =   getData.some((object)=>{
      return object.id === stackObj.id
     });
     if(addedItem){
       toast.error(`${stackObj.name} is already added to stack`)
       return 
     }else{
        setGetData([...getData,stackObj]);
        toast.success(`${stackObj.name} is added to stack`)
      }
  }
  return (
    <>
      <main className="main-content py-10 overflow-hidden">
        <div className = "py-7 overflow-hidden">
          <h3 className="text-[36px] font-extrabold text-[#0F172A] ">Explore the <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">Technologies</span></h3>
        <p className ="font-normal  leading-6 text-[16px]  text-[#64748B] mt-2">Pick one technology per category to build your ideal stack.</p>

        </div>

        <div className="section-wrapper grid gap-4 grid-cols-4">
          <section className="section-1 grid grid-cols-3 gap-3 col-span-3">
            {data.map((stack)=>{
              return (
                 <Stacks data = {stack} handleClick = {handleClick} key ={stack.id} ></Stacks>
              )
            })}
          </section>
          <section className="section-2">
            <EmptyStack prop = {getData} setGetData = {setGetData} />
          </section>
        </div>
      </main>
    </>
  )
}