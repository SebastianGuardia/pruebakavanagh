import React from 'react'
import { CheckCircleIcon } from '@heroicons/react/outline'
import { Link, Button, Element,animateScroll} from 'react-scroll'
import {motion} from "framer-motion"
import { advantagesAnimation } from '../animation/animation'
import { useScroll } from '../useScroll'
import Ventajas from '../img/Spreadsheets-amico.png'


const Advantages = () => {
  const [element, controls] = useScroll();
  return (
    <div id='advantages' className=' w-full  bg-white py-16 px-4 bg-[url("./components/img/whybackground.png")] bg-no-repeat bg-auto '>
       <h1 className='lg:text-5xl text-3xl font-body font-bold py-5 text-purple-500 text-center '> EL SOFTWARE PARA OPTIMIZAR TU GESTIÓN</h1>
                <p className='text-xl py-4 text-center'>Otorgando una mayor transparencia a tu labor como administrador</p>
        <div className=' max-w-[1240px] mx-auto  lg:ml-[320px] grid md:grid-cols-3 py-4'>
            <div>
                <img className='w-[600px]' src={Ventajas} alt="/" />
            </div>

            <motion.div variants={advantagesAnimation} transition={{stiffness:5000}} ref={element}>
                    <ul className='w-full list-none drop-shadow-2xl '>
                        <li className='mb-1 lg:pl-8 pl-1 py-4 flex '><CheckCircleIcon className='h-8 flex align-middle text-purple-600 '/> Agilidad y simpleza</li>
                        <li className='mb-1 lg:pl-8 pl-1 py-4 flex '><CheckCircleIcon className='h-8 flex align-middle text-purple-600'/>Liquidación de sueldos</li>
                        <li className='mb-1 lg:pl-8 pl-1 py-4 flex '><CheckCircleIcon className='h-8 flex align-middle text-purple-600'/>Pago a proveedores</li>
                        <li className='mb-1 lg:pl-8 pl-1 py-4 flex '><CheckCircleIcon className='h-8 flex align-middle text-purple-600'/>Información contable integrada</li>
                        <li className='mb-1 lg:pl-8 pl-1 py-4 flex '><CheckCircleIcon className='h-8 flex align-middle text-purple-600'/>Envía tus liquidaciones por mail</li>
                        <li className='mb-1 lg:pl-8 pl-1 py-4 flex '><CheckCircleIcon className='h-8 flex align-middle text-purple-600'/>No produce anatocismo</li>
                    </ul>
                </motion.div>
                <motion.div variants={advantagesAnimation} transition={{stiffness:5000}}>
                    <ul className='w-full list-none drop-shadow-md'>
                        <li className='mb-1 pl-1 py-4 flex '><CheckCircleIcon className='h-8 text-purple-600'/> Agilidad y simpleza</li>
                        <li className='mb-1 pl-1 py-4 flex '><CheckCircleIcon className='h-8 flex align-middle text-purple-600'/>Liquidación de sueldos</li>
                        <li className='mb-1 pl-1 py-4 flex '><CheckCircleIcon className='h-8 flex align-middle text-purple-600'/>Pago a proveedores</li>
                        <li className='mb-1 pl-1 py-4 flex '><CheckCircleIcon className='h-8 flex align-middle text-purple-600'/>Información contable integrada</li>
                        <li className='mb-1 pl-1 py-4 flex '><CheckCircleIcon className='h-8 flex align-middle text-purple-600'/>Envía tus liquidaciones por mail</li>
                        <li className='mb-1 pl-1 py-4 flex '><CheckCircleIcon className='h-8 flex align-middle text-purple-600'/>No produce anatocismo</li>
                    </ul>
                </motion.div>
            
            
        </div>

    </div>
  )
}
export default Advantages