import Header from "./Component/Header.tsx";
import './App.css'
import Banner from "./Component/Banner.tsx";
import Main from "./Component/Main";
import {Suspense} from 'react';
import Footer from "./Component/Footer";
// React tostify 
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';



const dataPromise = async () => {
  const res = await fetch('/data-in-json.json');
  const data = await res.json();
  return data
}
const resolvedPromise = dataPromise();
function App() {

  return (
     <div className="container">
      <Header></Header>
      <Banner></Banner>
      <Suspense fallback={<p>loading....</p>}>
        <Main resolvedPromise = {resolvedPromise}></Main>
      </Suspense>
      <Footer></Footer>
       <ToastContainer position="top-right" autoClose={2000}></ToastContainer>
     </div>
  ) 
}

export default App