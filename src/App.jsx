import { useState, useCallback, useEffect } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const[charAllowed, setCharAllowed] = useState(false);
  const[password, setPassword] = useState("");

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if (numberAllowed){
      str += "0123456789";
    }
    if (charAllowed) str+="!@#$%^&*(){}:?><,./';[]'" ;

    for (let i=0; i < length; i++){
          const result = Math.floor(Math.random()*str.length + 1)
          pass += str[result]
          // pass += str.charAt(result)
    }

    setPassword(pass);

  }, [length, numberAllowed, charAllowed])

  useEffect(()=>{
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
       <h1 className='text-white text-4xl text-center mt-9 border '> Password Gernerator </h1>

       <div className= 'bg-gray-800 w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-600'>
          <h1 className='text-white text-center'>Your Password</h1>
          
          <div className='flex shadow rounded-lg overflow-hidden mb-4'>
                <input 
                  type="text"
                  value={password}
                  className='outline-none w-full py-1 px-3'
                  placeholder='Your new Random password😍'
                  readOnly
                />
                <button
                className='bg-blue-600 outline-none text-white px-3 py-0.5 shrink-0'
                >Copy</button>
          </div>

          <div className='flex text-sm gap-x-2'>

            <div className='flex items-center gap-x-1'>
              <input
               type="range"
               min={6}
               max={50}
               value={length}
               className='cursor-pointer' 
               onChange={(e)=>{setLength(e.target.value)}}
              />
                <label>Length: {length}</label>
            </div>

            <div className='flex items-center gap-x-1'>
              <input 
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {setNumberAllowed((prev)=>(!prev))}}
              />
                <label htmlFor='numberInput'>Number {numberAllowed}</label>
            </div>

            <div className='flex items-center gap-x-1'>
              <input 
              type="checkbox"
              defaultChecked={charAllowed}
              id='characterInput'
              onChange={() => {setCharAllowed((prev)=>(!prev))}}
              />
               <label htmlFor='characterInput'>Character {charAllowed}</label>
            </div>

          </div>




       </div>

    </>
  )
}

export default App 
