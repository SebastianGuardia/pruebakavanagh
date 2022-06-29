import React from 'react'
import Scard from '../img/S.png'
import Mcard from '../img/M.png'
import Lcard from '../img/L.png'
import { Link } from 'react-router-dom'
import 'tw-elements'
import { priceCardAnimation } from '../animation/animation'
import Popup from 'reactjs-popup';
import {faFilePdf,faDownload,faXmark} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ProductsCards = () => {
  
  return (
    <div id='sales' className='w-full  px-4 pt-[160px] pb-4 bg-[url("./components/img/contactobg.png")] bg-no-repeat bg-auto' >
  
      <h2 className='text-center pb-20 font-body font-extrabold text-5xl'>Descarga tu demo y comenzá a liquidar tus expensas ahora</h2>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-10 '>
        <div className='w-full border shadow-xl rounded-3xl flex flex-col bg-white p-4 my-6 gap-10 hover:scale-105 duration-300'
    variants={priceCardAnimation}
    transition={{delay:0.03, type:"tween",duration:0.8}}>

    <img className='w-20 rounded-full mx-auto mt-[-2.5rem] bg-white' src={Scard} alt="/" />
    <p className='text-center text-xl font-bold'>Administraciones pequeñas y edificios.</p>
    <div className= 'text-center font-medium'>
    <div class="accordion" id="accordionExample" className='py-5'>
  <div class="accordion-item bg-white border border-gray-200">
    <h2 class="accordion-header mb-0" id="headingOne">
      <button class=" accordion-button relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-center bg-white  border-0
        rounded-none   transition  focus:outline-none collapsed
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="False"
        aria-controls="collapseOne">
        Ventas </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse " aria-labelledby="headingOne"
      data-bs-parent="#accordionExample">
      <div class="py-4 px-5">
        <p className='text-lg line-through'>$ 61.555</p><p>20 off</p>
        <p className='text-5xl font-body font-bold'>$ 49.245</p>
        <p className='text-sm'>Incluye I.V.A.</p>
      </div>
      <div class="accordion-item bg-white border border-gray-200">
        <h2 id="headingTwo">
      <button class=" accordion-button  relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0
        rounded-none transition focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
        aria-controls="collapseTwo">
        Abono Manteniemiento
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
      data-bs-parent="headingOne">
      <div class="accordion-body py-4 px-5">
        <h2 className='text-5xl font-bold font-body'>$ 3.948 x mes</h2>
        <p className='text-sm'>Precio final</p>
        <h2 className='underline text-xl font bold'>Te permite liquidar hasta 99 consorcios de 999 UF's cada uno</h2>
        <p className='py-1' >Incluye:</p>
        <p className='py-1' >» Soporte ilimitado por teléfono(*)</p>
        <p className='py-1' >» Soporte ilimitado por mail(*)</p>
        <p className='py-1' >» Soporte ilimitado por Skype(*)</p>
        <p className='py-1' >» Soporte ilimitado vía FTP(*)Kavanagh Auto Backup</p>
        <p className='py-1' >» Envío ilimitado de expensas por Kavanagh Auto Mail</p>
        <p className='py-1' >» Publicación ilimitada de expensas online en nuestro propio servidor</p>
        <p className='py-1' >» Generación de códigos QR</p>
        <p className='py-1' >» Reinstalaciones del software</p>
        <p className='py-1' >» Modificación de plantillas</p>
        <p className='py-1' >» Actualizaciones periódicas</p>
        <p className='py-1' >(*)De lunes a viernes de 11 a 17</p>
      </div>
      </div>
      </div>
      <div class="accordion-item bg-white border border-gray-200">
        <h2 id="headingThree">
      <button class=" accordion-button  relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0
        rounded-none transition focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
        aria-controls="collapseThree">
        Máquinas adicionales
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
      data-bs-parent="headingOne">
      <div class="accordion-body py-4 px-5">
        <h2 className='text-3xl font-body font-bold'>+ 15% c/u</h2>
        <p className='text-sm font-body'>del precio de venta</p>
        <h2 className='text-3xl font-body font-bold'>+ 15% c/u</h2>
        <p className='text-sm font-body'>del precio del abono de mantenimiento mensual</p>
      </div>
      </div>
      </div>
      <div class="accordion-item bg-white border border-gray-200">
        <h2 id="headingFour">
      <button class=" accordion-button  relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0
        rounded-none transition focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false"
        aria-controls="collapseFour">
        Kavanagh Auto BackUp
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
      data-bs-parent="headingOne">
      <div class="accordion-body py-4 px-5">
        <h2 className='text-3xl font-body font-bold' >$ 2,05 x Mb.</h2>
        <p className='text-sm font-body'>para copias menores a 100 Mb.</p>
        <h2 className='text-3xl font-body font-bold'>$ 1,45 x Mb.</h2>
        <p className='text-sm font-body'>para copias mayores a 100 Mb.</p>
      </div>
      </div>
      </div>
      <div class="accordion-item bg-white border border-gray-200">
        <h2 id="headingFive">
      <button class=" accordion-button  relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0
        rounded-none transition focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false"
        aria-controls="collapseFive">
        Kavanagh Auto Mail
      </button>
    </h2>
    <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive"
      data-bs-parent="headingOne">
      <div class="accordion-body py-4 px-5">
        <h2 className='text-3xl font-body font-bold' >Ilimitado</h2>
        <p className='text-sm font-body'>para abonados</p>
      </div>
      </div>
      </div>
      <div class="accordion-item bg-white border border-gray-200">
        <h2 id="headingSix">
      <button class=" accordion-button  relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0
        rounded-none transition focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false"
        aria-controls="collapseTwo">
        Publicación de expensas online
      </button>
    </h2>
    <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix"
      data-bs-parent="headingOne">
      <div class="accordion-body py-4 px-5">
        <h2 className='text-3xl font-body font-bold'>Ilimitada</h2>
        <p className='text-sm font-body'>para abonados</p>
      </div>
      </div>
      </div>
    </div>
    </div>
    </div>
    <div class="accordion" id="accordionExamplec">
  <div class="accordion-item bg-white border border-gray-200">
    <h2 class="accordion-header mb-0" id="headingSeven">
      <button class=" accordion-button relative flex items-center w-full py-4 pb-4 px-5 text-base text-gray-800 text-center bg-white  border-0
        rounded-none   transition  focus:outline-none collapsed
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="False"
        aria-controls="collapseSeven">
        Alquiler </button>
    </h2>
    <div id="collapseSeven" class="accordion-collapse collapse " aria-labelledby="headingSeven"
      data-bs-parent="#accordionExamplec">
      <div class="py-4 px-5">
        <p className='text-5xl font-bold font-body'>$ 9.870 x mes</p>
        <p className='text-sm'>Precio final</p>
        <p className='underline text-xl font bold'>$ Te permite liquidar hasta 99 consorcios de 999 UF's cada uno</p>
        <p className='py-1'>Incluye:</p>
        <p className='py-1'>» Soporte ilimitado por teléfono(*)</p>
        <p className='py-1'>» Soporte ilimitado por mail(*)</p>
        <p className='py-1'>» Soporte ilimitado por Skype(*)</p>
        <p className='py-1'>» Soporte ilimitado vía FTP(*)Kavanagh Auto Backup</p>
        <p className='py-1'>» Envío ilimitado de expensas por Kavanagh Auto Mail</p>
        <p className='py-1'>» Publicación ilimitada de expensas online en nuestro propio servidor</p>
        <p className='py-1'>» Generación de códigos QR</p>
        <p className='py-1'>» Reinstalaciones del software</p>
        <p className='py-1'>» Modificación de plantillas</p>
        <p className='py-1'>» Actualizaciones periódicas</p>
        <p className='py-1 text-sm'>(*)De lunes a viernes de 11 a 17</p>
      </div>
      <div class="accordion-item bg-white border border-gray-200">
        <h2 id="headingEight">
      <button class=" accordion-button  relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0
        rounded-none transition focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false"
        aria-controls="collapseEight">
        Máquinas adicionales
      </button>
    </h2>
    <div id="collapseEight" class="accordion-collapse collapse" aria-labelledby="headingEight"
      data-bs-parent="headingSeven">
      <div class="accordion-body py-4 px-5">
        <h2 className='text-3xl font-body font-bold'>+ 15% c/u</h2>
        <p className='text-sm font-body'>del alquiler mensual</p>
      </div>
      </div>
      </div>
      <div class="accordion-item bg-white border border-gray-200">
        <h2 id="headingNine">
      <button class=" accordion-button  relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0
        rounded-none transition focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false"
        aria-controls="collapseNine">
        Kavanagh Auto BackUp
      </button>
    </h2>
    <div id="collapseNine" class="accordion-collapse collapse" aria-labelledby="headingNine"
      data-bs-parent="headingSeven">
      <div class="accordion-body py-4 px-5">
        <h2 className='text-3xl font-body font-bold'>+ 15% c/u</h2>
        <p className='text-sm font-body'>del alquiler mensual</p>
      </div>
      </div>
      </div>
      <div class="accordion-item bg-white border border-gray-200">
        <h2 id="headingTen">
      <button class=" accordion-button  relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0
        rounded-none transition focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false"
        aria-controls="collapseTen">
        Kavanagh Auto Mail
      </button>
    </h2>
    <div id="collapseTen" class="accordion-collapse collapse" aria-labelledby="headingTen"
      data-bs-parent="headingSeven">
      <div class="accordion-body py-4 px-5">
        <h2 className='text-3xl font-body font-bold'>Ilimitado</h2>

      </div>
      </div>
      </div>
      <div class="accordion-item bg-white border border-gray-200">
        <h2 id="headingEleven">
      <button class=" accordion-button  relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0
        rounded-none transition focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false"
        aria-controls="collapseEleven">
        Públicacion de expensas online
      </button>
    </h2>
    <div id="collapseEleven" class="accordion-collapse collapse" aria-labelledby="headingEleven"
      data-bs-parent="headingSeven">
      <div class="accordion-body py-4 px-5">
        <h2 className='text-3xl font-body font-bold'>Ilimitada</h2>
        
      </div>
      </div>
      </div>
      
      
    </div>
    </div>
    </div>
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
                                <label className='uppercase text-sm py-2'>Telefono</label>
                                <input className='border-2 rounded-lg p-3 flex border-gray-300 w-[800px]' type="tel" placeholder='Teléfono' />
                            </div>
                            <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'>Localidad</label>
                                <input className='border-2 rounded-lg p-3 flex border-gray-300 w-[800px]' type="tel" placeholder='Localidad' />
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
                        </div>
                        <div className='flex flex-col py-2'>
                        <label className='uppercase text-sm py-2'>Versión</label>
                        <select name="versionS" id="versionS" disabled="disabled" className='border-2 rounded-lg p-3 flex bg-white border-gray-300 w-[800px]'>
                        <option value="versionS ">S</option> 
                        </select>

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
<div className='w-full border shadow-xl rounded-3xl flex flex-col bg-white p-4 my-6 gap-10 hover:scale-105 duration-300 '
    variants={priceCardAnimation}
    transition={{delay:0.03, type:"tween",duration:0.8}}>

    <img className='w-20 rounded-full mx-auto mt-[-2.5rem] bg-white' src={Mcard} alt="/" />
    <p className='text-center text-xl font-bold'>Administraciones medianas que buscan un software integral.</p>
    <div className= 'text-center font-medium'>
    <div className= 'text-center font-medium'>
    <div class="accordion" id="accordionExamples" className='py-5'>
  <div class="accordion-item bg-white border border-gray-200">
    <h2 class="accordion-header mb-0" id="headingOnea">
      <button class=" accordion-button relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-center bg-white  border-0
        rounded-none   transition  focus:outline-none collapsed
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOnea" aria-expanded="False"
        aria-controls="collapseOnea">
        Ventas </button>
    </h2>
    <div id="collapseOnea" class="accordion-collapse collapse " aria-labelledby="headingOnea"
      data-bs-parent="#accordionExamplea">
      <div class="py-4 px-5">
        <p className='text-lg line-through'>$ 128.200</p><p>20 off</p>
        <p className='text-5xl font-body font-bold'>$ 102.560</p>
        <p className='text-sm'>Incluye I.V.A.</p>
      </div>
      <div class="accordion-item bg-white border border-gray-200">
        <h2 id="headingTwoa">
      <button class=" accordion-button  relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0
        rounded-none transition focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwoa" aria-expanded="false"
        aria-controls="collapseTwoa">
        Abono Manteniemiento
      </button>
    </h2>
    <div id="collapseTwoa" class="accordion-collapse collapse" aria-labelledby="headingTwoa"
      data-bs-parent="headingOnea">
      <div class="accordion-body py-4 px-5">
        <h2 className='text-5xl font-bold font-body'>$ 8.159 x mes</h2>
        <p>Precio final</p>
        <h2 className='underline text-xl font bold'>Te permite liquidar hasta 99 consorcios de 999 UF's cada uno</h2>
        <p className='py-1'>Incluye:</p>
        <p className='py-1'>» Soporte ilimitado por teléfono(*)</p>
        <p className='py-1'>» Soporte ilimitado por mail(*)</p>
        <p className='py-1'>» Soporte ilimitado por Skype(*)</p>
        <p className='py-1'>» Soporte ilimitado vía FTP(*)Kavanagh Auto Backup</p>
        <p className='py-1'>» Envío ilimitado de expensas por Kavanagh Auto Mail</p>
        <p className='py-1'>» Publicación ilimitada de expensas online en nuestro propio servidor</p>
        <p className='py-1'>» Generación de códigos QR</p>
        <p className='py-1'>» Reinstalaciones del software</p>
        <p className='py-1'>» Modificación de plantillas</p>
        <p className='py-1'>» Actualizaciones periódicas</p>
        <p className='py-1 text-sm'>(*)De lunes a viernes de 11 a 17</p>
      </div>
      </div>
      </div>
      <div class="accordion-item bg-white border border-gray-200">
        <h2 id="headingThreea">
      <button class=" accordion-button  relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0
        rounded-none transition focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThreea" aria-expanded="false"
        aria-controls="collapseThreea">
        Máquinas adicionales
      </button>
    </h2>
    <div id="collapseThreea" class="accordion-collapse collapse" aria-labelledby="headingThreea"
      data-bs-parent="headingOnea">
      <div class="accordion-body py-4 px-5">
        <h2 className='text-3xl font-body font-bold'>+ 15% c/u</h2>
        <p className='text-sm font-body'>del precio de venta</p>
        <h2 className='text-3xl font-body font-bold'>+ 15% c/u</h2>
        <p className='text-sm font-body'>del precio del abono de mantenimiento mensual</p>
      </div>
      </div>
      </div>
      <div class="accordion-item bg-white border border-gray-200">
        <h2 id="headingFoura">
      <button class=" accordion-button  relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0
        rounded-none transition focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseFoura" aria-expanded="false"
        aria-controls="collapseFoura">
        Kavanagh Auto BackUp
      </button>
    </h2>
    <div id="collapseFoura" class="accordion-collapse collapse" aria-labelledby="headingFoura"
      data-bs-parent="headingOnea">
      <div class="accordion-body py-4 px-5">
        <h2 className='text-3xl font-body font-bold'>$ 2,05 x Mb.</h2>
        <p className='text-sm font-body'>para copias menores a 100 Mb.</p>
        <h2 className='text-3xl font-body font-bold'>$ 1,45 x Mb.</h2>
        <p className='text-sm font-body'>para copias mayores a 100 Mb.</p>
      </div>
      </div>
      </div>
      <div class="accordion-item bg-white border border-gray-200">
        <h2 id="headingFivea">
      <button class=" accordion-button  relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0
        rounded-none transition focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseFivea" aria-expanded="false"
        aria-controls="collapseFivea">
        Kavanagh Auto Mail
      </button>
    </h2>
    <div id="collapseFivea" class="accordion-collapse collapse" aria-labelledby="headingFivea"
      data-bs-parent="headingOnea">
      <div class="accordion-body py-4 px-5">
        <h2 className='text-3xl font-body font-bold' >Ilimitado</h2>
        <p className='text-sm font-body'>para abonados</p>
      </div>
      </div>
      </div>
      <div class="accordion-item bg-white border border-gray-200">
        <h2 id="headingSixa">
      <button class=" accordion-button  relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0
        rounded-none transition focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseSixa" aria-expanded="false"
        aria-controls="collapseTwo">
        Publicación de expensas online
      </button>
    </h2>
    <div id="collapseSixa" class="accordion-collapse collapse" aria-labelledby="headingSixa"
      data-bs-parent="headingOnea">
      <div class="accordion-body py-4 px-5">
        <h2 className='text-3xl font-body font-bold'>Ilimitada</h2>
        <p className='text-sm font-body'>para abonados</p>
      </div>
      </div>
      </div>
    </div>
    </div>
    </div>
    <div class="accordion" id="accordionExample">
  <div class="accordion-item bg-white border border-gray-200">
    <h2 class="accordion-header mb-0" id="headingSevena">
      <button class=" accordion-button relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-center bg-white  border-0
        rounded-none   transition  focus:outline-none collapsed
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseSevena" aria-expanded="False"
        aria-controls="collapseSevena">
        Alquiler </button>
    </h2>
    <div id="collapseSevena" class="accordion-collapse collapse " aria-labelledby="headingSevena"
      data-bs-parent="#accordionExample">
      <div class="py-4 px-5">
        <p className='text-5xl font-bold font-body'>$ 20.397 x mes</p>
        <p className='text-sm'>Precio final</p>
        <p className='underline text-xl font bold'>$ Te permite liquidar hasta 99 consorcios de 999 UF's cada uno</p>
        <p className='py-1'>Incluye:</p>
        <p className='py-1'>» Soporte ilimitado por teléfono(*)</p>
        <p className='py-1'>» Soporte ilimitado por mail(*)</p>
        <p className='py-1'>» Soporte ilimitado por Skype(*)</p>
        <p className='py-1'>» Soporte ilimitado vía FTP(*)Kavanagh Auto Backup</p>
        <p className='py-1'>» Envío ilimitado de expensas por Kavanagh Auto Mail</p>
        <p className='py-1'>» Publicación ilimitada de expensas online en nuestro propio servidor</p>
        <p className='py-1'>» Generación de códigos QR</p>
        <p className='py-1'>» Reinstalaciones del software</p>
        <p className='py-1'>» Modificación de plantillas</p>
        <p className='py-1'>» Actualizaciones periódicas</p>
        <p className='py-1 text-sm'>(*)De lunes a viernes de 11 a 17</p>
      </div>
      <div class="accordion-item bg-white border border-gray-200">
        <h2 id="headingEighta">
      <button class=" accordion-button  relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0
        rounded-none transition focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseEighta" aria-expanded="false"
        aria-controls="collapseEighta">
        Máquinas adicionales
      </button>
    </h2>
    <div id="collapseEighta" class="accordion-collapse collapse" aria-labelledby="headingEighta"
      data-bs-parent="headingSevena">
      <div class="accordion-body py-4 px-5">
        <h2 className='text-3xl font-body font-bold'>+ 15% c/u</h2>
        <p className='text-sm font-body'>del alquiler mensual</p>
      </div>
      </div>
      </div>
      <div class="accordion-item bg-white border border-gray-200">
        <h2 id="headingNinea">
      <button class=" accordion-button  relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0
        rounded-none transition focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseNinea" aria-expanded="false"
        aria-controls="collapseNinea">
        Kavanagh Auto BackUp
      </button>
    </h2>
    <div id="collapseNinea" class="accordion-collapse collapse" aria-labelledby="headingNinea"
      data-bs-parent="headingSevena">
      <div class="accordion-body py-4 px-5">
        <h2 className='text-3xl font-body font-bold'>+ 15% c/u</h2>
        <p className='text-sm font-body'>del alquiler mensual</p>
      </div>
      </div>
      </div>
      <div class="accordion-item bg-white border border-gray-200">
        <h2 id="headingTena">
      <button class=" accordion-button  relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0
        rounded-none transition focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTena" aria-expanded="false"
        aria-controls="collapseTena">
        Kavanagh Auto Mail
      </button>
    </h2>
    <div id="collapseTena" class="accordion-collapse collapse" aria-labelledby="headingTena"
      data-bs-parent="headingSevena">
      <div class="accordion-body py-4 px-5">
        <h2 className='text-3xl font-body font-bold'>Ilimitado</h2>

      </div>
      </div>
      </div>
      <div class="accordion-item bg-white border border-gray-200">
        <h2 id="headingElevena">
      <button class=" accordion-button  relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0
        rounded-none transition focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseElevena" aria-expanded="false"
        aria-controls="collapseElevena">
        Públicacion de expensas online
      </button>
    </h2>
    <div id="collapseElevena" class="accordion-collapse collapse" aria-labelledby="headingElevena"
      data-bs-parent="headingSevena">
      <div class="accordion-body py-4 px-5">
        <h2 className='text-3xl font-body font-bold'>Ilimitada</h2>
        
      </div>
      </div>
      </div>
      
      
    </div>
    </div>
    </div>
    </div>
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
                                <label className='uppercase text-sm py-2'>Telefono</label>
                                <input className='border-2 rounded-lg p-3 flex border-gray-300 w-[800px]' type="tel" placeholder='Teléfono' />
                            </div>
                            <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'>Localidad</label>
                                <input className='border-2 rounded-lg p-3 flex border-gray-300 w-[800px]' type="text" placeholder='Localidad' />
                            </div>
                        <div className='flex flex-col py-2'>
                            <label className='uppercase text-sm py-2'>Indicanos tu versión</label>
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
<div className='w-full border shadow-xl rounded-3xl flex flex-col bg-white p-4 my-6 gap-10 hover:scale-105 duration-300 '>

    <img className='w-20 rounded-full mx-auto mt-[-2.5rem] bg-white' src={Lcard} alt="/" />
    <p className='text-center text-xl font-bold'>Diseñada en Administraciones de más de 100 edificios.</p>
    <div className= 'text-center font-medium'>
    <div className= 'text-center font-medium'>
    <div class="accordion" id="accordionExampleb" className='py-5'>
  <div class="accordion-item bg-white border border-gray-200">
    <h2 class="accordion-header mb-0" id="headingOneb">
      <button class=" accordion-button relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-center bg-white  border-0
        rounded-none   transition  focus:outline-none collapsed
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOneb" aria-expanded="False"
        aria-controls="collapseOneb">
        Ventas </button>
    </h2>
    <div id="collapseOneb" class="accordion-collapse collapse " aria-labelledby="headingOneb"
      data-bs-parent="#accordionExampleb">
      <div class="py-4 px-5">
        <p className='text-lg line-through'>$ 191.375</p><p>20 off</p>
        <p className='text-5xl font-body font-bold'>$ 153.100</p>
        <p className='text-sm'>Incluye I.V.A.</p>
      </div>
      <div class="accordion-item bg-white border border-gray-200">
        <h2 id="headingTwob">
      <button class=" accordion-button  relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0
        rounded-none transition focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwob" aria-expanded="false"
        aria-controls="collapseTwob">
        Abono Manteniemiento
      </button>
    </h2>
    <div id="collapseTwob" class="accordion-collapse collapse" aria-labelledby="headingTwob"
      data-bs-parent="headingOneb">
      <div class="accordion-body py-4 px-5">
        <h2 className='text-5xl font-bold font-body'>$ 12.893 x mes</h2>
        <p className='text-sm'>Precio final</p>
        <h2 className='underline text-xl font bold' >Te permite liquidar hasta 99 consorcios de 999 UF's cada uno</h2>
        <p className='py-1'>Incluye:</p>
        <p className='py-1'>» Soporte ilimitado por teléfono(*)</p>
        <p className='py-1'>» Soporte ilimitado por mail(*)</p>
        <p className='py-1'>» Soporte ilimitado por Skype(*)</p>
        <p className='py-1'>» Soporte ilimitado vía FTP(*)Kavanagh Auto Backup</p>
        <p className='py-1'>» Envío ilimitado de expensas por Kavanagh Auto Mail</p>
        <p className='py-1'>» Publicación ilimitada de expensas online en nuestro propio servidor</p>
        <p className='py-1'>» Generación de códigos QR</p>
        <p className='py-1'>» Reinstalaciones del software</p>
        <p className='py-1'>» Modificación de plantillas</p>
        <p className='py-1'>» Actualizaciones periódicas</p>
        <p className='py-1 text-sm'>(*)De lunes a viernes de 11 a 17</p>
      </div>
      </div>
      </div>
      <div class="accordion-item bg-white border border-gray-200">
        <h2 id="headingThreeb">
      <button class=" accordion-button  relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0
        rounded-none transition focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThreeb" aria-expanded="false"
        aria-controls="collapseThreeb">
        Máquinas adicionales
      </button>
    </h2>
    <div id="collapseThreeb" class="accordion-collapse collapse" aria-labelledby="headingThreeb"
      data-bs-parent="headingOneb">
      <div class="accordion-body py-4 px-5">
        <h2 className='text-3xl font-body font-bold'>+ 15% c/u</h2>
        <p className='text-sm font-body'>del precio de venta</p>
        <h2 className='text-3xl font-body font-bold'>+ 15% c/u</h2>
        <p className='text-sm font-body'>del precio del abono de mantenimiento mensual</p>
      </div>
      </div>
      </div>
      <div class="accordion-item bg-white border border-gray-200">
        <h2 id="headingFourb">
      <button class=" accordion-button  relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0
        rounded-none transition focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseFourb" aria-expanded="false"
        aria-controls="collapseFourb">
        Kavanagh Auto BackUp
      </button>
    </h2>
    <div id="collapseFourb" class="accordion-collapse collapse" aria-labelledby="headingFourb"
      data-bs-parent="headingOneb">
      <div class="accordion-body py-4 px-5">
        <h2 className='text-3xl font-body font-bold'>$ 2,05 x Mb.</h2>
        <p className='text-sm font-body'>para copias menores a 100 Mb.</p>
        <h2 className='text-3xl font-body font-bold'>$ 1,45 x Mb.</h2>
        <p className='text-sm font-body'>para copias mayores a 100 Mb.</p>
      </div>
      </div>
      </div>
      <div class="accordion-item bg-white border border-gray-200">
        <h2 id="headingFiveb">
      <button class=" accordion-button  relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0
        rounded-none transition focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseFiveb" aria-expanded="false"
        aria-controls="collapseFiveb">
        Kavanagh Auto Mail
      </button>
    </h2>
    <div id="collapseFiveb" class="accordion-collapse collapse" aria-labelledby="headingFiveb"
      data-bs-parent="headingOneb">
      <div class="accordion-body py-4 px-5">
        <h2 className='text-3xl font-body font-bold' >Ilimitado</h2>
        <p className='text-sm font-body'>para abonados</p>
      </div>
      </div>
      </div>
      <div class="accordion-item bg-white border border-gray-200">
        <h2 id="headingSixb">
      <button class=" accordion-button  relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0
        rounded-none transition focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseSixb" aria-expanded="false"
        aria-controls="collapseTwob">
        Publicación de expensas online
      </button>
    </h2>
    <div id="collapseSixb" class="accordion-collapse collapse" aria-labelledby="headingSixb"
      data-bs-parent="headingOneb">
      <div class="accordion-body py-4 px-5">
        <h2 className='text-3xl font-body font-bold'>Ilimitada</h2>
        <p className='text-sm font-body'>para abonados</p>
      </div>
      </div>
      </div>
    </div>
    </div>
    </div>
    <div class="accordion" id="accordionExample">
  <div class="accordion-item bg-white border border-gray-200">
    <h2 class="accordion-header mb-0" id="headingSevenb">
      <button class=" accordion-button relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-center bg-white  border-0
        rounded-none   transition  focus:outline-none collapsed
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseSevenb" aria-expanded="False"
        aria-controls="collapseSevenb">
        Alquiler </button>
    </h2>
    <div id="collapseSevenb" class="accordion-collapse collapse " aria-labelledby="headingSevenb"
      data-bs-parent="#accordionExample">
      <div class="py-4 px-5">
        <p className='text-5xl font-bold font-body'>$ 32.232 x mes</p>
        <p className='text-sm'>Precio final</p>
        <p className='underline text-xl font bold'>$ Te permite liquidar hasta 99 consorcios de 999 UF's cada uno</p>
        <p className='py-1'>Incluye:</p>
        <p className='py-1'>» Soporte ilimitado por teléfono(*)</p>
        <p className='py-1'>» Soporte ilimitado por mail(*)</p>
        <p className='py-1'>» Soporte ilimitado por Skype(*)</p>
        <p className='py-1'>» Soporte ilimitado vía FTP(*)Kavanagh Auto Backup</p>
        <p className='py-1'>» Envío ilimitado de expensas por Kavanagh Auto Mail</p>
        <p className='py-1'>» Publicación ilimitada de expensas online en nuestro propio servidor</p>
        <p className='py-1'>» Generación de códigos QR</p>
        <p className='py-1'>» Reinstalaciones del software</p>
        <p className='py-1'>» Modificación de plantillas</p>
        <p className='py-1'>» Actualizaciones periódicas</p>
        <p className='py-1 text-sm'>(*)De lunes a viernes de 11 a 17</p>
      </div>
      <div class="accordion-item bg-white border border-gray-200">
        <h2 id="headingEightb">
      <button class=" accordion-button  relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0
        rounded-none transition focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseEightb" aria-expanded="false"
        aria-controls="collapseEightb">
        Máquinas adicionales
      </button>
    </h2>
    <div id="collapseEightb" class="accordion-collapse collapse" aria-labelledby="headingEightb"
      data-bs-parent="headingSevenb">
      <div class="accordion-body py-4 px-5">
        <h2 className='text-3xl font-body font-bold'>+ 15% c/u</h2>
        <p className='text-sm font-body'>del alquiler mensual</p>
      </div>
      </div>
      </div>
      <div class="accordion-item bg-white border border-gray-200">
        <h2 id="headingNineb">
      <button class=" accordion-button  relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0
        rounded-none transition focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseNineb" aria-expanded="false"
        aria-controls="collapseNineb">
        Kavanagh Auto BackUp
      </button>
    </h2>
    <div id="collapseNineb" class="accordion-collapse collapse" aria-labelledby="headingNineb"
      data-bs-parent="headingSevenb">
      <div class="accordion-body py-4 px-5">
        <h2 className='text-3xl font-body font-bold'>+ 15% c/u</h2>
        <p className='text-sm font-body'>del alquiler mensual</p>
      </div>
      </div>
      </div>
      <div class="accordion-item bg-white border border-gray-200">
        <h2 id="headingTenb">
      <button class=" accordion-button  relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0
        rounded-none transition focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTenb" aria-expanded="false"
        aria-controls="collapseTenb">
        Kavanagh Auto Mail
      </button>
    </h2>
    <div id="collapseTenb" class="accordion-collapse collapse" aria-labelledby="headingTenb"
      data-bs-parent="headingSevenb">
      <div class="accordion-body py-4 px-5">
        <h2 className='text-3xl font-body font-bold'>Ilimitado</h2>

      </div>
      </div>
      </div>
      <div class="accordion-item bg-white border border-gray-200">
        <h2 id="headingElevenb">
      <button class=" accordion-button  relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0
        rounded-none transition focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseElevenb" aria-expanded="false"
        aria-controls="collapseElevenb">
        Públicacion de expensas online
      </button>
    </h2>
    <div id="collapseElevenb" class="accordion-collapse collapse" aria-labelledby="headingElevenb"
      data-bs-parent="headingSevenb">
      <div class="accordion-body py-4 px-5">
        <h2 className='text-3xl font-body font-bold'>Ilimitada</h2>
        
      </div>
      </div>
      </div>
      
      
    </div>
    </div>
    </div>
    </div>
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
        </div>    
    </div>
  )
}

export default ProductsCards
