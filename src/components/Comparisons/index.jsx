import React from 'react'
import Scard from '../img/S.png'
import Mcard from '../img/M.png'
import Lcard from '../img/L.png'
import { CheckIcon } from '@heroicons/react/outline'

const Comparison = () => {
  return (
    <div className='flex align-middle justify-center'>
   <table className='w-[70%] pl-11 border rounded-lg'>
    <thead className='bg-purple-50 border-b-2 border-purple-300 rounded-xl'>
        <tr>
            <th className='p-1 text-lg text-gray-700 '>FUNCIONES Y CARACTERÍSTICAS VERSIONES FULL(*)</th>
            <th className='p-1 text-lg text-gray-700'><img className='w-10 rounded-lg' src={Scard} alt="" /></th>
            <th className='p-1 text-lg text-gray-700'><img className='w-10 rounded-lg' src={Mcard} alt="" /></th>
            <th className='p-1 text-lg text-gray-700'><img className='w-10 rounded-lg' src={Lcard} alt="" /></th>
        </tr>
    </thead>
    <tbody>
        <td className='p-1 text-lg text-gray-700'>Cantidad de edificios</td>
        <td className='p-1 text-lg text-gray-700'>Hasta 99</td>
        <td className='p-1 text-lg text-gray-700'>Hasta 99</td>
        <td className='p-1 text-lg text-gray-700'>Más de 100</td> 
    </tbody>
    <tbody className='bg-purple-200'>
        <td className='p-1 text-lg text-gray-700' >Datos completos de edificios y unidades funcionales</td>
        <td className='p-1 text-lg text-gray-700' ><CheckIcon className='w-7 text-purple-700'/></td>
        <td className='p-1 text-lg text-gray-700' ><CheckIcon className='w-7 text-purple-700'/></td>
        <td className='p-1 text-lg text-gray-700' ><CheckIcon className='w-7 text-purple-700'/></td>
    </tbody>
    <tbody>
        <td className='p-1 text-lg text-gray-700'>Porcentuales por edificio</td>
        <td className='p-1 text-lg text-gray-700'>Hasta 99</td>
        <td className='p-1 text-lg text-gray-700'>Hasta 99</td>
        <td className='p-1 text-lg text-gray-700'>Hasta 99</td>
    </tbody>
    <tbody className='bg-purple-200'>
        <td className='p-1 text-lg text-gray-700'>Fondos a administrar por edificio</td>
        <td className='p-1 text-lg text-gray-700'>Hasta 99</td>
        <td className='p-1 text-lg text-gray-700'>Hasta 99</td>
        <td className='p-1 text-lg text-gray-700'>Hasta 99</td>
    </tbody>
    <tbody>
        <td className='p-1 text-lg text-gray-700'>Asistente para nuevos edificios</td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
    </tbody>
    <tbody className='bg-purple-200'>
        <td className='p-1 text-lg text-gray-700'>Datos completos de cuentas bancarias y proveedores</td>
        <td className='p-1 text-lg text-gray-700'></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
    </tbody>
    <tbody className>
        <td className='p-1 text-lg text-gray-700'>Vinculación edificios - cuentas bancarias</td>
        <td className='p-1 text-lg text-gray-700'></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
    </tbody>
    <tbody className='bg-purple-200'>
        <td className='p-1 text-lg text-gray-700'>Liquidación y edición de liquidaciones de expensas</td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
    </tbody>
    <tbody>
        <td className='p-1 text-lg text-gray-700'>Liquidaciones extraordinarias</td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
    </tbody>
    <tbody className='bg-purple-200'>
        <td className='p-1 text-lg text-gray-700'>Ingreso de cobranzas y adelantos de expensas en efectivo</td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
    </tbody>
    <tbody >
        <td className='p-1 text-lg text-gray-700'>Importación automática de cobranzas y adelantos por sistemas electrónicos</td>
        <td className='p-1 text-lg text-gray-700'></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
    </tbody>
    <tbody className='bg-purple-200'>
        <td className='p-1 text-lg text-gray-700'>Ingreso de cobranzas y adelantos de expensas en cheques</td>
        <td className='p-1 text-lg text-gray-700'></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
    </tbody>
    <tbody >
        <td className='p-1 text-lg text-gray-700'>Compatible Pago Mi Expensa, Expensas Pagas, Rapipago y Pago Fácil</td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
    </tbody>
    <tbody className='bg-purple-200'>
        <td className='p-1 text-lg text-gray-700'>Manejo de deudas judiciales</td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
    </tbody>
    <tbody>
        <td className='p-1 text-lg text-gray-700'>Órdenes de trabajo</td>
        <td className='p-1 text-lg text-gray-700'></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
    </tbody>
    <tbody className='bg-purple-200'>
        <td className='p-1 text-lg text-gray-700'>Seguimiento de facturas de proveedores</td>
        <td className='p-1 text-lg text-gray-700'></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
    </tbody>
    <tbody >
        <td className='p-1 text-lg text-gray-700'>Órdenes de pago</td>
        <td className='p-1 text-lg text-gray-700'></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
    </tbody>
    <tbody className='bg-purple-200'>
        <td className='p-1 text-lg text-gray-700'>Movimientos de caja</td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
    </tbody>
    <tbody >
        <td className='p-1 text-lg text-gray-700'>Movimientos bancarios</td>
        <td className='p-1 text-lg text-gray-700'></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
    </tbody>
    <tbody className='bg-purple-200'>
        <td className='p-1 text-lg text-gray-700'>Personalización de rubros y gastos predefinidos</td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
    </tbody>
    <tbody >
        <td className='p-1 text-lg text-gray-700'>Personalización de formato de liquidaciones</td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
    </tbody>
    <tbody className='bg-purple-200'>
        <td className='p-1 text-lg text-gray-700'>Configuración de usuarios / permisos</td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
    </tbody>
    <tbody >
        <td className='p-1 text-lg text-gray-700'>Liquidación de sueldos de encargados</td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
    </tbody>
    <tbody className='bg-purple-200'>
        <td className='p-1 text-lg text-gray-700'>Compatible con Mis Expensas del G.C.B.A.</td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
    </tbody>
    <tbody>
        <td className='p-1 text-lg text-gray-700'>KAB (Kavanagh Auto Backup)</td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
    </tbody>
    <tbody className='bg-purple-200'>
        <td  className='p-1 text-lg text-gray-700'>KAM (Kavanagh Auto Mail)</td>
        <td  className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
        <td  className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
        <td  className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
    </tbody>
    <tbody >
        <td className='p-1 text-lg text-gray-700'>Publicación online de expensas en nuestro propio servidor</td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
    </tbody>
    <tbody className='bg-purple-200'>
        <td className='p-1 text-lg text-gray-700'>Acceso a liquidaciones online por código QR impreso en liquidaciones desde cualquier dispositivo</td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
    </tbody>
    <tbody >
        <td className='p-1 text-lg text-gray-700' >Soporte técnico por telefono, email, Skype, FTP</td>
        <td className='p-1 text-lg text-gray-700' ><CheckIcon className='w-7 text-purple-700'/></td>
        <td className='p-1 text-lg text-gray-700' ><CheckIcon className='w-7 text-purple-700'/></td>
        <td className='p-1 text-lg text-gray-700' ><CheckIcon className='w-7 text-purple-700'/></td>
    </tbody>
    <tbody className='bg-purple-200'>
        <td className='p-1 text-lg text-gray-700'>Manejo de retenciones</td>
        <td className='p-1 text-lg text-gray-700'></td>
        <td className='p-1 text-lg text-gray-700'></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
    </tbody>

    <tbody >
        <td  className='font-bold'>LISTADOS</td>
        <td className='p-1 text-lg text-gray-700'> </td>
        <td className='p-1 text-lg text-gray-700'> </td>
        <td className='p-1 text-lg text-gray-700'> </td>
    </tbody>
    <tbody className='bg-purple-200'>
        <td className='p-1 text-lg text-gray-700'>Datos completos de edificios y unidades funcionales</td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
    </tbody>
    <tbody >
        <td className='p-1 text-lg text-gray-700'>Unidades funcionales por monto de expensas y m2(AFIP)</td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
    </tbody>
    <tbody className='bg-purple-200'>
        <td className='p-1 text-lg text-gray-700'>Datos completos de cuentas bancarias y proveedores</td>
        <td className='p-1 text-lg text-gray-700'></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
    </tbody>
    <tbody>
        <td className='p-1 text-lg text-gray-700'>Saldos de unidades funcionales</td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
    </tbody>
    <tbody className='bg-purple-200'>
        <td className='p-1 text-lg text-gray-700'>Cobranzas por fecha, edificio, unidad funcional</td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
    </tbody>
    <tbody>
        <td className='p-1 text-lg text-gray-700'>Adelantos a descontar de futuras expensas</td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
    </tbody>
    <tbody className='bg-purple-200'>
        <td className='p-1 text-lg text-gray-700'>Resúmenes de cuenta de unidades funcionales</td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
    </tbody>
    <tbody>
        <td className='p-1 text-lg text-gray-700'>Antigüedad deudores</td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
    </tbody>
    <tbody className='bg-purple-200'>
        <td className='p-1 text-lg text-gray-700'>Ránking deudores</td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
    </tbody>
    <tbody>
        <td className='p-1 text-lg text-gray-700'>Recálculo de deudas de unidades funcionales</td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
    </tbody>
    <tbody className='bg-purple-200'>
        <td className='p-1 text-lg text-gray-700'>Mantenimiento en el edificio o unidad funcional</td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
    </tbody>
    <tbody>
        <td className='p-1 text-lg text-gray-700'>Cartas documento automáticas</td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
    </tbody>
    <tbody className='bg-purple-200'>
        <td className='p-1 text-lg text-gray-700'>Movimientos bancarios</td>
        <td className='p-1 text-lg text-gray-700'></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
    </tbody>
    <tbody className=''>
        <td className='p-1 text-lg text-gray-700'>Movimientos de caja</td>
        <td className='p-1 text-lg text-gray-700'></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
    </tbody>
    <tbody className='bg-purple-200'>
        <td className='p-1 text-lg text-gray-700'>Saldos de cuentas bancarias</td>
        <td className='p-1 text-lg text-gray-700'></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
    </tbody>
    <tbody className=''>
        <td className='p-1 text-lg text-gray-700'>Saldos de proveedores</td>
        <td className='p-1 text-lg text-gray-700'></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
    </tbody>
    <tbody className='bg-purple-200'>
        <td className='p-1 text-lg text-gray-700'>Resúmenes de cuentas bancarias</td>
        <td className='p-1 text-lg text-gray-700'></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
    </tbody>
    <tbody className=''>
        <td className='p-1 text-lg text-gray-700'>Resumenes de cuenta de proveedores</td>
        <td className='p-1 text-lg text-gray-700'></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
    </tbody>
    <tbody className='bg-purple-200'>
        <td className='p-1 text-lg text-gray-700'>Facturas a pagar</td>
        <td className='p-1 text-lg text-gray-700'></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
    </tbody>
    <tbody className=''>
        <td className='p-1 text-lg text-gray-700'>Facturas a liquidar</td>
        <td className='p-1 text-lg text-gray-700'></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
    </tbody>
    <tbody className='bg-purple-200'>
        <td className='p-1 text-lg text-gray-700'>Pagos realizados a proveedores</td>
        <td className='p-1 text-lg text-gray-700'></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
    </tbody>
    <tbody className=''>
        <td className='p-1 text-lg text-gray-700'>Listados de caja</td>
        <td className='p-1 text-lg text-gray-700'></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
    </tbody>
    <tbody className='bg-purple-200'>
        <td className='p-1 text-lg text-gray-700'>Libro diario del edificio</td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
    </tbody>
    <tbody className=''>
        <td className='p-1 text-lg text-gray-700'>Libro de cheques</td>
        <td className='p-1 text-lg text-gray-700'></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
    </tbody>
    <tbody className='bg-purple-200'>
        <td className='p-1 text-lg text-gray-700'>Libro I.V.A. compras y ventas</td>
        <td className='p-1 text-lg text-gray-700'></td>
        <td className='p-1 text-lg text-gray-700'></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
    </tbody>
    <tbody className=''>
        <td className='p-1 text-lg text-gray-700'>Retenciones efectuadas</td>
        <td className='p-1 text-lg text-gray-700'></td>
        <td className='p-1 text-lg text-gray-700'></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
    </tbody>
    <tbody className='bg-purple-200'>
        <td className='p-1 text-lg text-gray-700'>Datos para facturación de expensas</td>
        <td className='p-1 text-lg text-gray-700'></td>
        <td className='p-1 text-lg text-gray-700'></td>
        <td className='p-1 text-lg text-gray-700'><CheckIcon className='w-7 text-purple-700'/></td>
    </tbody>
    
   </table>
   </div>

  )
}

export default Comparison