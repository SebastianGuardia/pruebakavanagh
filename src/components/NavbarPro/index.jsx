import React, {useState} from 'react'
import {MenuIcon, XIcon} from '@heroicons/react/outline'
import {Link} from 'react-router-dom'



const NavbarPro = () => {

  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  const [color, setColor] = useState(false)
  const handleClose = () => setNav(!nav)

  const changeBackground = ()  => {
    if(window.scrollY >= 90){
      setColor(true);
    }else{
      setColor(false);
    }
  } 
  window.addEventListener('scroll', changeBackground)
  return (
    <div className='w-screen h-15 bg-[url("./components/img/prueba.png")] shadow-xl fixed z-40 border-black' >
        <div className='p-1 flex justify-between items-center w-full h-full'>
            <h1 className='w-full text-3xl text-black font-semibold mr-4 sm:text-4xl px-4 font-body'>KAVANAGH GROUP SRL</h1>
            <ul className='hidden md:flex justify-between'>
            <li className='font-body font-medium cursor-pointer hover:text-white hover:scale-125 ease-in duration-300'><Link to="/">Contacto</Link></li>
              <li className='font-body font-medium cursor-pointer hover:text-white hover:scale-125 ease-in duration-300'><Link to="/">Ventajas</Link></li>
              <li className='font-body font-medium cursor-pointer hover:text-white hover:scale-125 ease-in duration-300'><Link to="/" >Compañia</Link></li>
              <li className='font-body font-medium cursor-pointer hover:text-white hover:scale-125 ease-in duration-300'><Link to="/" >Productos</Link></li>
              <li className='font-body font-medium cursor-pointer hover:text-white hover:scale-125 ease-in duration-300'><Link to="/" >Inicio</Link></li>       
            </ul>
          <div className='hidden md:flex pr-4'>
          <a href="#_" class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-purple-600 rounded-xl group">
          <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-purple-800 rounded group-hover:-mr-4 group-hover:-mt-4">
          <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
          </span>
          <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-purple-700 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
          <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">Ingresar</span>
          </a>
          </div>
          <div className='md:hidden' onClick={handleClick}>
              {!nav ? <MenuIcon className='w-10'/> : <XIcon className='w-10'/>}
            
          </div>
        </div>

    <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200  w-full px-8'}>
         <li className='font-body font-medium cursor-pointer border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="/" >Inicio</Link></li>
         <li className='font-body font-medium cursor-pointer border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="/" >Ventajas</Link></li>
         <li className='font-body font-medium cursor-pointer border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="/" >Compañia</Link></li>
         <li className='font-body font-medium cursor-pointer border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="/" >Productos</Link></li>
         <li className='font-body font-medium cursor-pointer border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="/" >Contacto</Link></li>

        <div>
          <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4'>Iniciar Sesion</button>
        </div>
    </ul>
    </div>
    
  )
}

export default NavbarPro