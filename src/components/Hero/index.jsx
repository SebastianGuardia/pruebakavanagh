import React from 'react'
import Typed from 'react-typed'
import MainLanding from '../img/mainlanding.png'
import PME from '../img/pme.png'
import Rapipago from '../img/rapipago.png'
import PagoFacil from '../img/pagofacil.png'
import { Link, Button, Element,animateScroll} from 'react-scroll'
import {motion} from "framer-motion"
import { homeAnimations,homeimgAnimation } from '../animation/animation'



const Hero = () => {
  return (
    <>
    <div id='home' className='bg-[url("./components/img/prueba.png")] bg-no-repeat bg-center bg-cover w-[100%] h-[100vh]'>
      <div className='w-full h-screen flex flex-col justify-between sm:py-[120px] '>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto z-20 '>
          <motion.div className='flex flex-col justify-center md:item-start w-full px-2 py-8 z-20  '
          variants={homeAnimations}
          transition={{delay:0.3,duration:0.6,type:"tween"}}> 
            <p className='text-2xl py-5 font-body font-semibold'>Hace más fácil tu:</p>
            <Typed strings={['Liquidación','Gestión','Balance anual','Día']}  typeSpeed={120} backSpeed={130} loop className=' py-3 md:text-6xl text-3xl text-white font-body font-extrabold'/>
            <p className='texl-xl'> Kavanagh Software es para vos. Aunque administres unos pocos consorcios o más de 100, nosotros tenemos una versión ideal para vos.</p>
            <div className='flex justify-center p-4 lg:justify-between gap-5'>
            <a href="#_" class="lg:relative lg:inline-flex lg:items-center lg:justify-start lg:px-10  lg:py-3 lg:overflow-hidden lg:font-medium lg:transition-all lg:bg-red-500 lg:rounded-xl group hidden">
            <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
            <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
            </span>
            <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
            <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white"><Link className='font-bold' to="sales" smooth={true} offset={-50} duration={500}>Empeza con tu demo</Link></span>
            </a>
            <a href="#_" class="relative inline-flex items-center justify-start md:px-[70px] px-10 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group">
            <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
            <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
            </span>
            <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
            <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white"><Link className='font-bold' to="contact" smooth={true} offset={-50} duration={500}>Contactanos</Link></span>
            </a>

            
            </div>
            
          </motion.div>
          <motion.div 
           transition={{delay:0.3,duration:0.6,type:"tween"}}
           variants={homeimgAnimation}>
              <img className=' md:w-full w-[80%] ' src={MainLanding} alt="mainlanding" />
          </motion.div>
          <div className='absolute z-20 flex flex-col pt-8 pb-3 bottom-[2%]  md:left-1/2 transform md:-translate-x-1/2 bg-white border border-slate-300 rounded-xl
          text-center shadow-xl w-full md:w-[700px] '>
            <p className='font-light font-body text-xl'>Compatible con:</p>
            <div className='flex justify-between flex-wrap px-4'>
              <img className='flex px-4 py-2 h-[40px] md:h-20 ' src={PME} alt="PME" />
              <img className='flex px-4 py-2 h-[45px] md:h-20 ' src={PagoFacil} alt="PagoFacil" />
              <img className='flex px-4 py-2 h-[45px] md:h-20 ' src={Rapipago} alt="Rapipago" />
            </div>
          </div>
        </div>
      </div>   
      </div>
    </>   
  )
}

export default Hero