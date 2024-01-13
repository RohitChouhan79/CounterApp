import React from 'react'
import Card from "./components/Card"

const App = () => {
  return (
    <>
    {/* <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4 w-1/4'>Hey Its Talwind Test</h1> */}
    <div className='flex flex-row gap-4 justify-center items-center'>
    <Card username="anuska" bg_img="https://images.unsplash.com/photo-1631947430066-48c30d57b943?q=80&w=1916&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/> 
    <Card username="lado" bg_img="https://images.unsplash.com/photo-1606814893907-c2e42943c91f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    <Card username="kallo" bg_img="https://images.unsplash.com/photo-1635488640163-e5f6782cda6e?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/> 
    <Card username="cuty" bg_img="https://plus.unsplash.com/premium_photo-1673792686302-7555a74de717?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    </div>
    </>
  )
}

export default App