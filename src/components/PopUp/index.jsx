import React from 'react'

const PopUp = ({open, onClose}) => {

    if(!open) return null

  return (
        <div className='fixed w-[700px] h-full translate-x-[50%] translate-y-[-20%]  z-50 bg-black/50'>
        <p className='cursor-pointer text-right' onClick={onClose}>X</p>
        <div className=''>
        <form>
                        <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                            <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'> Nombre completo</label>
                                <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" placeholder='Ingresa tu nombre completo' />
                            </div>
                        </div>
                        <div className='flex flex-col py-2'>
                            <label className='uppercase text-sm py-2'>Email</label>
                            <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" placeholder='Ingresa tu mail' />
                        </div>
                        <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'>Telefono</label>
                                <input className='border-2 rounded-lg p-3 flex border-gray-300' type="tel" placeholder='Teléfono' />
                            </div>
                        <div className='flex flex-col py-2'>
                            <label className='uppercase text-sm py-2'>Indicanos tu versión</label>
                            <select className='border-2 rounded-lg p-3 flex bg-white border-gray-300' name="version" id="v" form="versiones">
                            <option value="Versión S">Versión S</option>
                            <option value="Versión M">Versión M</option>
                            <option value="Versión L">Versión L</option>
                            </select>
                        </div>
                        <div className='flex flex-col py-2'>
                            <label className='uppercase text-sm py-2'>Dejanos tu mensaje</label>
                            <textarea className='border-2 rounded-lg p-3 border-gray-300' rows={10}></textarea>
                        </div>
                        <a href="#_" class="relative inline-flex items-center justify-start md:px-10 px-1 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group">
                            <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4 ">
                            <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                            </span>
                            <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                            <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">Enviar</span>
                        </a>
                    </form>
        </div>
        
    </div>
  )
}

export default PopUp 