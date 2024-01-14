import React, { useCallback, useEffect, useRef, useState } from 'react'

const App = () => {
  const [length, setlength] = useState(8)
  const [charAllowed, setcharAllowed] = useState(false)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [Password, setPassword] = useState("")
  const passref = useRef(null)
  const PasswordGenrator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="[]{}~!@#$%^&*_+:?><"
    for (let i = 1; i <=length; i++) {
      let Char=Math.floor(Math.random()*1*str.length)
      pass+=str.charAt(Char)

      setPassword(pass)
    }
  },[length,charAllowed,numberAllowed,setPassword])

  const copyPasswordClipboard =useCallback(()=>{
    passref.current?.select()
    window.navigator.clipboard.writeText(Password)
  },[Password])

  useEffect(()=>{
    PasswordGenrator()
  },[length,numberAllowed,charAllowed,PasswordGenrator])
  return (
    <>
    <div className=' h-screen w-screen bg-red-500 flex '>
      <div className=' w-full h-1/4 max-w-md max-h-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-400 bg-gray-700'>
      <h1 className=' text-center text-2xl my-2'>Password Genrator</h1>
        <div className=' flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={Password} className='outline-none w-full py-2 px-3' placeholder='password' readOnly ref={passref} />
          <button onClick={copyPasswordClipboard} className=' outline-none bg-blue-600 text-white px-3 py-0.5 shrink'>Copy</button>
        </div>
        <div className='flex  text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={100} value={length}  className=' cursor-pointer' onChange={(e)=>{setlength(e.target.value)}}/>
            <label >Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={numberAllowed} id='numberinput' onChange={()=>{setnumberAllowed((prev)=>!prev)}} />
            <label >Number</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={charAllowed} id='numberinput' onChange={()=>{setcharAllowed((prev)=>!prev)}} />
            <label >Character</label>
          </div>
        </div>
        
      </div>
    </div>
    </>
  )
}
 
export default App