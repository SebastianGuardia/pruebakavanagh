import React, {useState} from 'react'
import { useScroll } from '../useScroll'
import {motion} from "framer-motion"
import { priceCardAnimation } from '../animation/animation'
import { DownloadIcon, DocumentDownloadIcon } from '@heroicons/react/outline'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


const PriceCard = (props) => {
  const [element, controls] = useScroll();

  const [openPopUp, setOpenPopUp] = useState(false)

  return (
    
    <motion.div className='w-full border shadow-xl rounded-3xl flex flex-col bg-white p-4 my-6 gap-5 'ref={element}
    variants={priceCardAnimation}
    animate={controls}
    transition={{delay:0.03, type:"tween",duration:0.8}}>

    <img className='w-20 rounded-full mx-auto mt-[-2.5rem] bg-white' src={props.img} alt="/" />
    <h2 className='text-xl font-bold text-center py-4'> {props.title}</h2>
    <p className='text-center text-xl font-bold'>{props.subtitle}.</p>
    <div className= 'text-center font-medium'>
        <p className='py-2 border-b border-black mx-8 mt-8'>{props.qualone}</p>
        <p className='py-2 border-b mx-8 border-black'>{props.qualtwo}</p>
        <p className='py-2 border-b mx-8 border-black'>{props.qualthree}</p>
        <p className='py-2  mx-8 '>{props.qualfour}</p>
    </div>
    <Popup
    trigger={<a href="#_" class="relative lg:inline-flex items-center justify-center :p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 lg:border-purple-500 rounded-xl shadow-md group hidden">
    <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
    <DocumentDownloadIcon className='w-7'></DocumentDownloadIcon>
    </span>
    <span class="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Guía rápida para auto-demostraciones en PDF</span>
    <span class="relative invisible">Button Text</span>
  </a>}
    modal
    nested
  >
    {close => (
      <div className="text-lg">
        <button className="text-purple-500 bg-white rounded-full flex text-right" onClick={close}>&times;
        </button>
        <div className="text-center text-lg font-body"> Completá el siguiente formulario, por favor, así podemos tener un registro y ponernos en contacto para conocer tu opinión sobre nuestro software. Gracias </div>
        <div className="w-screen px-[10px] py-[5px]">
        <form>
                        <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                            <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'> Nombre completo*</label>
                                <input required className='border-2 rounded-lg p-3 flex border-gray-300 w-[800px]' type="text" placeholder='Ingresa tu nombre completo' />
                            </div>                          
                            
                        </div>
                        <div className='flex flex-col py-2'>
                            <label className='uppercase text-sm py-2'>Email*</label>
                            <input required className='border-2 rounded-lg p-3 flex border-gray-300 w-[800px]' type="email" placeholder='Ingresa tu mail' />
                        </div>
                        <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'>Telefono</label>
                                <input className='border-2 rounded-lg p-3 flex border-gray-300 w-[800px]' type="tel" placeholder='Teléfono' />
                            </div>
                                                    <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'>Telefono</label>
                                <input className='border-2 rounded-lg p-3 flex border-gray-300 w-[800px]' type="tel" placeholder='Teléfono' />
                            </div>
                        <div className='flex flex-col py-2'>
                            <label className='uppercase text-sm py-2'>Indicanos tu versión</label>
                            <select className='border-2 rounded-lg p-3 flex bg-white border-gray-300 w-[800px]' name="version" id="v" form="versiones">
                            <option value="Versión S">Versión S</option>
                            <option value="Versión M">Versión M</option>
                            <option value="Versión L">Versión L</option>
                            </select>
                        </div>
                        
                        <div className='flex flex-col py-2'>
                            <label className='uppercase text-sm py-2'>Dejanos tu mensaje</label>
                            <textarea className='border-2 rounded-lg p-3 border-gray-300 w-[800px]' rows={5}></textarea>
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
    )}
  </Popup>


    <a href="http://www.kavanaghsoftware.com.ar/manuales/S/Gu%C3%ADa%20R%C3%A1pida%20Kavanagh%20Software%20XX%20-%20versi%C3%B3n%20S.pdf" target="_blank" download class="relative lg:inline-flex items-center justify-center :p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 lg:border-purple-500 rounded-xl shadow-md group hidden">
      <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
      <DocumentDownloadIcon className='w-7'></DocumentDownloadIcon>
      </span>
      <span class="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Guía rápida para auto-demostraciones en PDF</span>
      <span class="relative invisible">Button Text</span>
    </a>
</motion.div>
  )
}

export default PriceCard