import React from 'react'
import contactoimg from '../img/contacto.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter,faInstagram, faWhatsapp, faSkype} from '@fortawesome/free-brands-svg-icons'
import {faEnvelopeCircleCheck} from '@fortawesome/free-solid-svg-icons'





const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-[90%] bg-auto bg-no-repeat sm:bg-cover bg-[url("./components/img/contactbg.png")] -z-10 '>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className='text-xl tracking-widest uppercase text-center py-4'>Contactanos</p>

            <div className='grid lg:grid-cols-5 gap-8'>
            {/* Izquierda */}
            <div className='col-span-3 lg:col-span-2 w-full h-full bg-white shadow-gray-400 rounded-xl p-4'>
                <div className='lg:p-4 h-full'>
                    <div>
                        <img className='rounded-xl hover:scale-105 ease-in duration-300 h-[320px]' src={contactoimg} alt="/" />
                    </div>
                    <div>
                        <h2 className='py-2'>Información General / Ventas</h2>
                        <p> <FontAwesomeIcon icon={faWhatsapp}/> +54 11 6091 3822</p>
                        <p> <FontAwesomeIcon icon={faWhatsapp}/> +54 9 11 3408 4105</p>
                        <p> <FontAwesomeIcon icon={faEnvelopeCircleCheck}/> ventas@kavanaghsoftware.com.ar</p>
                        <h2 className='py-4'>Centro de Soporte Técnico al Usuario</h2>
                        <p> <FontAwesomeIcon icon={faWhatsapp}/> +54 11 6091 9527 </p>
                        <p> <FontAwesomeIcon icon={faWhatsapp}/> +54 11 3221 4489</p>
                        <p> <FontAwesomeIcon icon={faEnvelopeCircleCheck}/> soporte@kavanaghsoftware.com.ar</p>
                        <p> <FontAwesomeIcon icon={faSkype}/> Kavanagh_soporte_1</p>
                        <p> <FontAwesomeIcon icon={faSkype}/> Kavanagh_soporte_2</p>
                    </div>
                    <p className='pt-8'>Nuestras redes sociales</p>
                    <div className='flex items-center justify-between py-4'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FontAwesomeIcon className='text-purple-600' icon={faFacebook}  />
                            
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FontAwesomeIcon className='text-purple-600' icon={faTwitter} />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 '>
                            <FontAwesomeIcon className='h-6 text-purple-600' icon={faInstagram} />
                            <a href="instagram"></a>
                        </div>
                    </div>
                </div>


                </div>
            {/* Derecha*/}
            <div className='col-span-3 w-full h-auto  shadow-gray-400 bg-white rounded-xl lg:p-4'>
                <div className='p-4'>
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

            </div>
        </div>
    </div>
  )
}

export default Contact