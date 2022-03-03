import { useEffect, useState } from 'react'
import { worker } from '../mocks/Browser'

import '../styles/App.css'

worker.start();
function App() {

 //windows . => to get emoji's

  //fetching data from mock server Api
  const getUsers = async () =>{
     const res = await fetch ('/products');
     const data = await res.json()
     console.log(data)
  }
  useEffect( ()=>{
   // call getUsers function
   getUsers()
  },[])
  return (
   <>

   </>
  )
}

export default App
