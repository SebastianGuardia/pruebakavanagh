import React from 'react'

const Company = (props) => {
  return (
    <div className='flex flex-col border-2 text-left rounded-3xl py-12 px-8 border-violet-500/60 '>
    <div>
        <div className='bg-pink-500 inline-flex w-20 p-2 rounded-full'>
            {props.icon}
        </div>
        <h3 className='text-xl font-body font-bold py-4'>{props.heading}</h3>
        <p>
            {props.text}
        </p> 
     </div>
    </div>
  )
}

export default Company