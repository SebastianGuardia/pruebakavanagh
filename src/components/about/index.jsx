import React from 'react'
import {ServerIcon,CloudDownloadIcon, CashIcon, MailIcon} from '@heroicons/react/outline'
import AboutCard from './AboutCard'

const About = () => {
  return (
    <div id='about' className='w-full bg-zinc-100 text-center'>
        <div className='max-w mx-auto px-4 py-16'>
            <div>
                <h1 className='py-4 font-body font-extrabold text-5xl'>Porque Elegir Kavanagh?</h1>
                <p className='py-4 text-xl'>Kavanagh hace el trabajo por vos</p>
            <div className='grid sm:grid-cols-4 grid-cols-2 gap-4'>
            <AboutCard icon={<ServerIcon className='w-20'/>} heading='Contamos con nuestro propio servidor' text='Con Kavanagh Software podés publicar de manera completamente ilimitada y gratuita tus liquidaciones de expensas en nuestro PROPIO servidor permitiéndoles a tus consorcistas acceder de manera sencilla apuntando al código QR desde cualquier dispositivo.'/>
            <AboutCard icon={<CloudDownloadIcon className='w-20'/>} heading='Protegé tu información con Kavanagh Auto Backup' text='Con Kavanagh Auto Backup (KAB, para los amigos) vas a poder mantener tu información permanentemente a resguardo en nuestro propio servidor realizando copias de seguridad completamente automatizadas.KAB es programable!Indicale qué días y en qué horario querés que se ejecute y KAB se encargará del resto.'/>
            <AboutCard icon={<CashIcon className='w-20'/>} heading='No pierdas nunca ningún gasto' text='Kavanagh Software también te permite incluir en la publicación todos los comprobantes respaldatorios de los gastos realizados en el mes para que también puedan ser verificados por los consorcistas, otorgando una mayor transparencia a tu labor como Administrador.'/>
            <AboutCard icon={<MailIcon className='w-20'/>} heading='Enviá tus expensas por mail con KAM' text='Kavanagh Auto Mail es un servicio único y exclusivo de Kavanagh Software que te permite enviar tus liquidaciones en formato PDF'/>
            
                </div>  
            </div>    
        </div>
    </div>
        
    )
}

export default About