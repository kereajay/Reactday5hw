import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Data } from './Data'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [count, setCount] = useState(0)
  const  [pcount , setPcount] = useState([])
  const generatepara=()=>{
    if(count<=0){
      toast.warning("can not generate zero paragraph",{
        position:"top-center",
        autoClose:1500
      });
    }
    else if(count>8){
      toast.error("Please enter a number that is less than 8",{
        position:"top-center",
        autoClose:1500
      });
      return
    }
 
    setPcount(Data.slice(0,count))


  }
  
 

  return (
    <>
    <ToastContainer/>
    <div className='text-center mt-10' > 
      <h1 className='text-3xl font-bold text-red-800 '>TIRED OF BORING LOREM IPSUM?</h1>
      <br />
      <label htmlFor="Paragraph" className='mr-5 text-2xl'>Paragraph</label>
      <input type="text" value={count} onChange={(e)=>setCount(e.target.value)}  className='border-2 border-black'/>
      <button className='p-2 border-2 bg-orange-400 rounded-xl text-white ml-5' onClick={generatepara} >Generate</button>
      {
        pcount.map((para)=>{
          return(
            <>
            <p className='text-xl mt-5 w-[60%] m-auto text-red-900 shadow-2xl gap-5 p-4'>{para.para}</p>
            <br /> 
            <br />
            </>
          )
          
        })
      
      }
    </div>
      
    </>
  )
}

export default App
