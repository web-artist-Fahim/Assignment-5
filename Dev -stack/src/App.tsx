import Header from "./Component/Header.tsx";
import './App.css'
import Banner from "./Component/Banner.tsx";
import Main from "./Component/Main";
import {Suspense} from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const dataPromise = async () => {
  const res = await fetch('../data-in-json.json');
  const data = await res.json();
  return data
}

function App() {
  return (
     <div className="container">
      <Header></Header>
      <Banner></Banner>
      <Suspense>
        <Main dataPromise = {dataPromise()}></Main>
      </Suspense>
      <ToastContainer />
     </div>
  )
}

export default App