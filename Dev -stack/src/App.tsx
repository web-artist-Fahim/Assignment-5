import Header from "./Component/Header.tsx";
import './App.css'
import Banner from "./Component/Banner.tsx";
import Main from "./Component/Main";
import {Suspense} from 'react';
import Footer from "./Component/Footer";
// React tostify 




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
     </div>
  )
}

export default App