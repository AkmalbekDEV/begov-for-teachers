import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [state, setState] = useState([])
  const navigate = useNavigate()

  const getData = async () => {
    try {
      const response = await axios.get('https://aabd2a0302baf66f.mokky.dev/courses')
      setState(response.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className='flex items-center justify-center w-full h-screen'>
      <div className='grid gap-10'>
        <h1 className='text-5xl text-blue-600 text-center font-bold'>Guruhni tanlang</h1>
        <div className='max-sm:flex max-sm:justify-center'>
          <div className='flex flex-wrap w-[500px] max-sm:w-[300px] gap-5 justify-center'>
            {state.map((product) => {
              return (
                <div onClick={() => navigate(`/${product.href}`)} key={product.id} className='cursor-pointer hover:bg-blue-700 hover:shadow-md hover:shadow-blue-600 transition-all px-5 py-3 max-sm:flex max-sm:justify-center rounded-xl bg-blue-600'>
                  <h1 className='text-lg font-medium text-white'>{product.name}</h1>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home