import React from 'react'
import PriceCard from './PriceCard'
import Scard from '../img/S.png'
import Mcard from '../img/M.png'
import Lcard from '../img/L.png'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { priceCardAnimation } from '../animation/animation'
import Popup from 'reactjs-popup';
import {faFilePdf,faDownload,faXmark} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PriceCardSection = () => {
  
  return (
    <div id='sales' className='w-full  px-4 pt-[60px] pb-4 bg-[url("./components/img/contactobg.png")] bg-no-repeat bg-cover' >
  
      <h2 className='text-center pb-20 font-body font-extrabold text-5xl'>Descarga tu demo y comenzá a liquidar tus expensas ahora</h2>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-10'>
        <div className='w-full border shadow-xl rounded-3xl flex flex-col bg-white p-4 my-6 gap-5 hover:scale-105 duration-300 '
    variants={priceCardAnimation}
    transition={{delay:0.03, type:"tween",duration:0.8}}>

    <img className='w-20 rounded-full mx-auto mt-[-2.5rem] bg-white' src={Scard} alt="/" />
    <p className='text-center text-xl font-bold'>Administraciones pequeñas y edificios.</p>
    <div className= 'text-center font-medium'>
        <p className='py-2 border-b border-black mx-8 mt-8'>Agilidad y simpleza</p>
        <p className='py-2 border-b mx-8 border-black'>Respaldo garantizado con Kavanagh Auto Backup</p>
        <p className='py-2 border-b mx-8 border-black'>Publicación de expensas online en nuestro propio servidor</p>
        <p className='py-2 pb-10 mx-8 '>Módulo de liquidación de sueldos de encargados Gratis</p>
    </div>
    <Popup
    trigger={<a href="#_" class="relative lg:inline-flex items-center justify-center :p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 lg:border-purple-500 rounded-xl shadow-md group hidden">
    <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
    <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
    </span>
    <span class="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Demo válida hasta fin de mes</span>
    <span class="relative invisible">Button Text</span>
  </a>}
    modal
    nested
  >
    {close => (
      <div className="text-lg">
                <div className='flex justify-end'>
        <FontAwesomeIcon className='text-purple-500 cursor-pointer text-left flex justify-end' icon={faXmark} onClick={close}></FontAwesomeIcon>
        </div>
        <div className="text-center text-lg font-body"> Completá el siguiente formulario, por favor, así podemos tener un registro y ponernos en contacto para conocer tu opinión sobre nuestro software. Gracias </div>
        <div className="w-[950px] px-[10px] py-[5px]">
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
                                <label className='uppercase text-sm py-2'>Empresa</label>
                                <input className='border-2 rounded-lg p-3 flex border-gray-300 w-[800px]' type="Empresa" placeholder='Empresa' />
                            </div>
                             <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'>Telefono*</label>
                                <input required className='border-2 rounded-lg p-3 flex border-gray-300 w-[800px]' type="tel" placeholder='Teléfono' />
                            </div>
                            <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'>Localidad</label>
                                <input className='border-2 rounded-lg p-3 flex border-gray-300 w-[800px]' type="text" placeholder='Localidad' />
                            </div>
                        <div className='flex flex-col py-2'>
                            <label className='uppercase text-sm py-2'>¿Cómo llegaste a nosotros?</label>
                            <select placeholder='Elegí una opción' className='border-2 rounded-lg p-3 flex bg-white border-gray-300 w-[800px]' name="comonosconociste" id="v" form="comonosconociste">
                            <option value="Buscador ">Buscador</option>
                            <option value="Grupos de Facebook">Grupos de Facebook</option>
                            <option value="Anuncios web">Anuncios web</option>
                            <option value="instagram">Instagram</option>
                            <option value="TwitterL">Twitter</option>
                            <option value="Publicidad gráfica">Publicidad gráfica</option>
                            <option value="Recomendación / Sugerencias conocido">Recomendación / Sugerencias conocido</option>
                            <option value="Liquidación confeccionada con Kavanagh Software">Liquidación confeccionada con Kavanagh Software</option>
                            <option value="Otra vía">Otra vía</option>
                            </select>
                            <div className='flex flex-col py-2'>
                            <label className='uppercase text-sm py-2'>Versión</label>
                            <select name="versionS" id="versionS" disabled="disabled" className='border-2 rounded-lg p-3 flex bg-white border-gray-300 w-[800px]'>
                            <option value="versionS ">S</option> 
                            </select>
                            </div>
                        </div>
                        <div className='flex justify-center align-middle'>
                        <a href="#_" class="relative inline-flex items-center justify-start md:px-10 px-1 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group">
                            <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4 ">
                            <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                            </span>
                            <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                            <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">Bajar demo versión S - Usuario: 1 - Contraseña: 1 </span>
                        </a>
                        </div>
                    </form>
        </div>

      </div>
    )}
  </Popup>


    <a href="http://www.kavanaghsoftware.com.ar/manuales/S/Gu%C3%ADa%20R%C3%A1pida%20Kavanagh%20Software%20XX%20-%20versi%C3%B3n%20S.pdf" target="_blank" download class="relative lg:inline-flex items-center justify-center :p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 lg:border-purple-500 rounded-xl shadow-md group hidden">
      <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
      <FontAwesomeIcon className='w-10' icon={faFilePdf}></FontAwesomeIcon>
      </span>
      <span class="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Guía rápida para auto-demostraciones en PDF</span>
      <span class="relative invisible">Button Text</span>
    </a>
</div>
<div className='w-full border shadow-xl rounded-3xl flex flex-col bg-white p-4 my-6 gap-5 hover:scale-105 duration-300 '>

    <img className='w-20 rounded-full mx-auto mt-[-2.5rem] bg-white' src={Mcard} alt="/" />
    <p className='text-center text-xl font-bold'>Administraciones medianas que buscan un software integral.</p>
    <div className= 'text-center font-medium'>
        <p className='py-2 border-b border-black mx-8 mt-8'>Mayor volumen de carga</p>
        <p className='py-2 border-b mx-8 border-black'>Manejo integral de cuentas bancarias y de proveedores</p>
        <p className='py-2 border-b mx-8 border-black'>Publicación de expensas online en nuestro propio servidor</p>
        <p className='py-2 pb-10 mx-8 '>Módulo de liquidación de sueldos de encargados Gratis</p>
    </div>
    <Popup
    trigger={<a href="#_" class="relative lg:inline-flex items-center justify-center :p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 lg:border-purple-500 rounded-xl shadow-md group hidden">
    <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
    <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
    </span>
    <span class="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Demo válida hasta fin de mes</span>
    <span class="relative invisible">Button Text</span>
  </a>}
    modal
    nested
  >
    {close => (
      <div className="text-lg">
                <div className='flex justify-end'>
        <FontAwesomeIcon className='text-purple-500 cursor-pointer text-left flex justify-end' icon={faXmark} onClick={close}></FontAwesomeIcon>
        </div>
        <div className="text-center text-lg font-body"> Completá el siguiente formulario, por favor, así podemos tener un registro y ponernos en contacto para conocer tu opinión sobre nuestro software. Gracias </div>
        <div className="w-[950x] px-[10px] py-[5px]">
        <form>
                        <div className='grid md:grid-cols-2 gap-4  py-2'>
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
                                <label className='uppercase text-sm py-2'>Empresa</label>
                                <input className='border-2 rounded-lg p-3 flex border-gray-300 w-[800px]' type="text" placeholder='Empresa' />
                            </div>
                                                    <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'>Telefono*</label>
                                <input className='border-2 rounded-lg p-3 flex border-gray-300 w-[800px]' type="tel" placeholder='Teléfono' />
                            </div>
                            <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'>Localidad</label>
                                <input className='border-2 rounded-lg p-3 flex border-gray-300 w-[800px]' type="text" placeholder='Localidad' />
                            </div>
                        <div className='flex flex-col py-2'>
                            <label className='uppercase text-sm py-2'>¿Cómo llegaste a nosotros?</label>
                            <select placeholder='Elegí una opción' className='border-2 rounded-lg p-3 flex bg-white border-gray-300 w-[800px]' name="comonosconociste" id="v" form="comonosconociste">
                            <option value="Buscador ">Buscador</option>
                            <option value="Grupos de Facebook">Grupos de Facebook</option>
                            <option value="Anuncios web">Anuncios web</option>
                            <option value="instagram">Instagram</option>
                            <option value="TwitterL">Twitter</option>
                            <option value="Publicidad gráfica">Publicidad gráfica</option>
                            <option value="Recomendación / Sugerencias conocido">Recomendación / Sugerencias conocido</option>
                            <option value="Liquidación confeccionada con Kavanagh Software">Liquidación confeccionada con Kavanagh Software</option>
                            <option value="Otra vía">Otra vía</option>
                            </select>
                            <div className='flex flex-col py-2'>
                            <label className='uppercase text-sm py-2'>Versión</label>
                            <select name="versionM" id="versionM" disabled="disabled" className='border-2 rounded-lg p-3 flex bg-white border-gray-300 w-[800px]'>
                            <option value="versionM ">M</option> 
                            </select>
                            </div>
                        </div>
                        <div className='flex align-middle justify-center'>
                        <a href="#_" class="relative inline-flex items-center justify-center md:px-10 px-1 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group">
                            <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4 ">
                            <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                            </span>
                            <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                            <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">Bajar demo versión M - Usuario: 1 - Contraseña: 1 </span>
                        </a>
                        </div>
                    </form>
        </div>

      </div>
    )}
  </Popup>


    <a href="http://www.kavanaghsoftware.com.ar/manuales/S/Gu%C3%ADa%20R%C3%A1pida%20Kavanagh%20Software%20XX%20-%20versi%C3%B3n%20S.pdf" target="_blank" download class="relative lg:inline-flex items-center justify-center :p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 lg:border-purple-500 rounded-xl shadow-md group hidden">
      <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
      <FontAwesomeIcon className='w-10' icon={faFilePdf}></FontAwesomeIcon>
      </span>
      <span class="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Guía rápida para auto-demostraciones en PDF</span>
      <span class="relative invisible">Button Text</span>
    </a>
</div>
<div className='w-full border shadow-xl rounded-3xl flex flex-col bg-white p-4 my-6 gap-5 hover:scale-105 duration-300 '
    variants={priceCardAnimation}
    transition={{delay:0.03, type:"tween",duration:0.8}}>

    <img className='w-20 rounded-full mx-auto mt-[-2.5rem] bg-white' src={Lcard} alt="/" />
    <p className='text-center text-xl font-bold'>Diseñada en Administraciones de más de 100 edificios.</p>
    <div className= 'text-center font-medium'>
        <p className='py-2 border-b border-black mx-8 mt-8'>Mayor nivel de seguridad</p>
        <p className='py-2 border-b mx-8 border-black'>Manejo integral de cuentas bancarias y de proveedores</p>
        <p className='py-2 border-b mx-8 border-black'>Desglose de datos para facturación de I.V.A. en expensas</p>
        <p className='py-2 pb-10 mx-8 '>Módulo de liquidación de sueldos de encargados Gratis</p>
    </div>
    <Popup
    trigger={<a href="#_" class="relative lg:inline-flex items-center justify-center :p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 lg:border-purple-500 rounded-xl shadow-md group hidden">
    <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
    <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
    </span>
    <span class="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Demo válida hasta fin de mes </span>
    <span class="relative invisible">Button Text</span>
  </a>}
    modal
    nested
  >
    {close => (
      <div className="text-lg">
                <div className='flex justify-end'>
        <FontAwesomeIcon className='text-purple-500 cursor-pointer text-left flex justify-end' icon={faXmark} onClick={close}></FontAwesomeIcon>
        </div>
        <div className="text-center text-lg font-body"> Completá el siguiente formulario, por favor, así podemos tener un registro y ponernos en contacto para conocer tu opinión sobre nuestro software. Gracias </div>
        <div className="w-[950px] px-[10px] py-[5px]">
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
                                <label className='uppercase text-sm py-2'>Empresa</label>
                                <input className='border-2 rounded-lg p-3 flex border-gray-300 w-[800px]' type="text" placeholder='Empresa' />
                            </div>
                                                    <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'>Empresa</label>
                                <input className='border-2 rounded-lg p-3 flex border-gray-300 w-[800px]' type="tel" placeholder='Teléfono' />
                            </div>
                            <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'>Localidad</label>
                                <input className='border-2 rounded-lg p-3 flex border-gray-300 w-[800px]' type="text" placeholder='Localidad' />
                            </div>
                        <div className='flex flex-col py-2'>
                            <label className='uppercase text-sm py-2'>¿Cómo llegaste a nosotros?</label>
                            <select placeholder='Elegí una opción' className='border-2 rounded-lg p-3 flex bg-white border-gray-300 w-[800px]' name="comonosconociste" id="v" form="comonosconociste">
                            <option value="Buscador ">Buscador</option>
                            <option value="Grupos de Facebook">Grupos de Facebook</option>
                            <option value="Anuncios web">Anuncios web</option>
                            <option value="instagram">Instagram</option>
                            <option value="TwitterL">Twitter</option>
                            <option value="Publicidad gráfica">Publicidad gráfica</option>
                            <option value="Recomendación / Sugerencias conocido">Recomendación / Sugerencias conocido</option>
                            <option value="Liquidación confeccionada con Kavanagh Software">Liquidación confeccionada con Kavanagh Software</option>
                            <option value="Otra vía">Otra vía</option>
                            </select>
                            <div className='flex flex-col py-2'>
                            <label className='uppercase text-sm py-2'>Versión</label>
                            <select name="versionL" id="versionL" disabled="disabled" className='border-2 rounded-lg p-3 flex bg-white border-gray-300 w-[800px]'>
                            <option value="versionL ">L</option> 
                            </select>
                            </div>
                        </div>
                        <div className='flex justify-center align-middle'>
                        <a href="#_" class="relative inline-flex items-center justify-start md:px-10 px-1 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group">
                            <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4 ">
                            <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                            </span>
                            <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                            <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">Bajar demo versión L - Usuario: 1 - Contraseña: 1                                                    
                            </span>
                        </a>
                        </div>
                    </form>
        </div>

      </div>
    )}
  </Popup>


    <a href="http://www.kavanaghsoftware.com.ar/manuales/S/Gu%C3%ADa%20R%C3%A1pida%20Kavanagh%20Software%20XX%20-%20versi%C3%B3n%20S.pdf" target="_blank" download class="relative lg:inline-flex items-center justify-center :p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 lg:border-purple-500 rounded-xl shadow-md group hidden">
      <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
      <FontAwesomeIcon className='w-10' icon={faFilePdf}></FontAwesomeIcon>
      </span>
      <span class="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Guía rápida para auto-demostraciones en PDF</span>
      <span class="relative invisible">Button Text</span>
    </a>
</div>

        </div>
        <div className='flex justify-center align-middle gap-7 py-5'>
          <a href="#_" class="relative inline-flex items-center justify-start md:px-[70px] px-10 py-3 overflow-hidden font-medium transition-all bg-purple-500 rounded-xl group">
            <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-purple-700 rounded group-hover:-mr-4 group-hover:-mt-4">
            <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
            </span>
            <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-purple-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
            <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">Actualiza a la última versión (solo para abonados)</span>
            </a>

            <a href="#_" class="relative inline-flex items-center justify-start md:px-[70px] px-10 py-3 overflow-hidden font-medium transition-all bg-purple-500 rounded-xl group">
            <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-purple-700 rounded group-hover:-mr-4 group-hover:-mt-4">
            <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
            </span>
            <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-purple-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
            <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white"><Link className='font-bold' to="/Productos" smooth={true} offset={-50} duration={500}>Conoce la diferencias entre los productos</Link></span>
            </a> 
        </div>    
    </div>
  )
}

export default PriceCardSection
