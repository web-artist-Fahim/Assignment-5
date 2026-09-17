import {use} from 'react'
import Stacks from './Stacks'
export interface obj {
  id: string,
    name: string,
    category:string,
    description:string,
    icon: string,
    rating:number,
    difficulty: string,
    badge:string
}
interface mainProps {
  dataPromise:Promise<obj[]>
}

export default function Main({dataPromise}:mainProps) {

  const data = use(dataPromise);

  return (
    <>
      <main className="main-content">
        <h3 className="text-[36px] font-extrabold text-[#0F172A] ">Explore the <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">Technologies</span></h3>
        <p className ="font-normal  leading-6 text-[16px]  text-[#64748B] mt-2">Pick one technology per category to build your ideal stack.</p>


        <div className="section-wrapper">
          <section className="section-1 grid grid-cols-3 gap-4">
            <Stacks data = {data}></Stacks>
          </section>
          <section className="section-2"></section>
        </div>
      </main>
    </>
  )
}