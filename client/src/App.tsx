import { FC, useState } from 'react'
import {Navbar, Welcome, Footer, Services, Transaction} from "./Component"
// import './App.css'
import "./index.css"

interface IApp {

}
const App:FC<IApp> = () => {
return (
  <div className ='min-h-screen'>
<div className='gradient-bg-welcome'>
  <Navbar />
  <Welcome />
</div>
<Services />
<Transaction />
<Footer />
  </div>
)
}
export default App;
