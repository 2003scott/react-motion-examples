import { motion } from 'framer-motion'
import { useState } from 'react'

const variants = {
  add : {
    backgroundColor : '#333',
    color : '#aaa',
    scale : 0.8,
    rotate : 360,
    transition : {
      duration : 0.8
    }
  },
  event : {
    backgroundColor : '#999',
    color : '#000',
    scale : 1.1
  }
}

function App() {

  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col items-center justify-center h-[100vh] gap-5'>
      <motion.div
      drag
      dragConstraints={{
        top : -50,
        left : -50,
        right : 50,
        bottom : 50
      }}
      animate={count % 2 === 0 ? 'add' : 'event'}
      variants={variants}
      className='bg-white w-28 h-28 rounded-md flex items-center justify-center'>
        <h1 className='font-bold text-2xl'>{count}</h1>
      </motion.div>
      <button onClick={() =>setCount(count => count + 1)} className='bg-blue-800 p-5 rounded-xl text-xl font-bold text-white'>
        Click
      </button>
    </div>
  )
}

export default App
