import React from 'react'
import { Link, useParams } from 'react-router-dom'
import useTodo from '../hooks/useTodo'

function TodoDetail() {
    const {id} = useParams()
    const {data} = useTodo(id)

    console.log(data);
  return (
    <div className='min-h-[400px] flex flex-col items-center'>
        <h1 className='text-center text-2xl font-semibold'>{data.title}</h1>
        <p className='text-center mt-8'>{data.description}</p>
        <Link to={'/'} className='mt-auto py-2 px-8 rounded-md font-semibold text-white bg-green-400'>Back</Link>
    </div>
  )
}

export default TodoDetail