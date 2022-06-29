import React from 'react'
import companykavangh from '../img/companykavanagh.png'

const Company = () => {
  return (
    <div id='company' className='w-full bg-white py-16 px-4 bg-[url("./components/img/companybackground.png")]'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={companykavangh} alt="/" />
            <div className='flex flex-col justify-center'>
                <p className=''></p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-body font-bold py-2'>¿Qué es Kavanagh Group? </h1>
                <p>Kavanagh Group nace con la necesidad de optimizar y gestionar todas las tareas de los administradores. Esta sociedad se compromete a seguir creciendo  contando hoy en día con más de 100 administraciones</p>
            </div>
        </div>
    </div>
  )
}

export default Company