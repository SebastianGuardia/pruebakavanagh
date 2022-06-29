import React from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { ChevronDoubleRightIcon, ChevronDoubleLeftIcon } from "@heroicons/react/outline";


export default function MyApp() {
    return (
        <div className='bg-[url("./components/img/testimonialsbackground.png")] bg-auto bg-no-repeat'>
            <div className=' xl:px-20 px-8 py-20 2xl:mx-auto 2xl:container relative '>
                <CarouselProvider interval={5000} isPlaying={true}  naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={2}>
                    <h1 className="text-5xl font-bold xl:block hidden leading-tight text-gray-800 text-center">¿Qué opinan los administradores sobre nosotros?</h1>
                    <Slider>
                        <Slide index={0} tabIndex="null">
                        <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xl:px-20 px-10 py-20 gap-8">
                        <div className="group w-full bg-white relative flex flex-col items-center hover:bg-purple-700 cursor-pointer shadow-xl border-2 rounded-lg md:p-12 p-6 ">
                    <div className="text-gray-600 group-hover:text-white flex flex-col items-center">
                        <svg width={26} height={27} viewBox="0 0 26 27" fill="none">
                            <g clipPath="url(#clip0)">
                                <path d="M25.2578 14.3309H19.2969C19.3988 9.55819 20.6309 9.01642 22.1785 8.86178L22.7753 8.78051V3.53242L22.0874 3.57292C20.0666 3.69783 17.8323 4.09805 16.3417 6.11965C15.035 7.89183 14.459 10.7871 14.459 15.2316V23.4673H25.2578V14.3309Z" fill="currentColor" />
                                <path d="M11.48 23.4673V14.3309H5.59859C5.70049 9.55819 6.89283 9.01642 8.44042 8.86178L8.99749 8.78051V3.53242L8.34931 3.57292C6.32844 3.69783 4.07421 4.09805 2.5836 6.11965C1.27707 7.89183 0.681147 10.7871 0.681147 15.2316V23.4673H11.48Z" fill="currentColor" />
                            </g>

                        </svg>
                        <p className="xl:w-80 text-lg leading-normal text-center mt-4">"Por ser emprendedores y perseverantes, por su paciencia y compromiso con los clientes, se ha visto recompensado su esfuerzo a través de estos 20 años de empeño y permanencia. Que continúen los éxitos. ¡¡¡Feliz aniversario!!!”</p>
                    </div>
                    <div className="text-white group-hover:text-purple-700 absolute bottom-0 -mb-6">
                    </div>
                    <div className="flex flex-col items-center justify-center mt-[5rem]">
                    <p className="text-base leading-4 text-center text-gray-900">Administración Ugarte</p>
                </div>
                </div>
                
                <div className="group w-full bg-white relative flex flex-col items-center hover:bg-purple-700 cursor-pointer shadow-xl border-2 rounded-lg md:p-12 p-6 ">
                    <div className="text-gray-600 group-hover:text-white flex flex-col items-center">
                        <svg width={26} height={27} viewBox="0 0 26 27" fill="none">
                            <g clipPath="url(#clip0)">
                                <path d="M25.2578 14.3309H19.2969C19.3988 9.55819 20.6309 9.01642 22.1785 8.86178L22.7753 8.78051V3.53242L22.0874 3.57292C20.0666 3.69783 17.8323 4.09805 16.3417 6.11965C15.035 7.89183 14.459 10.7871 14.459 15.2316V23.4673H25.2578V14.3309Z" fill="currentColor" />
                                <path d="M11.48 23.4673V14.3309H5.59859C5.70049 9.55819 6.89283 9.01642 8.44042 8.86178L8.99749 8.78051V3.53242L8.34931 3.57292C6.32844 3.69783 4.07421 4.09805 2.5836 6.11965C1.27707 7.89183 0.681147 10.7871 0.681147 15.2316V23.4673H11.48Z" fill="currentColor" />
                            </g>

                        </svg>
                        <p className="xl:w-80 text-lg leading-normal text-center mt-4">"Tuvimos la suerte de conocer a Kavanagh Software en el año 2012. La primer sorpresa fue encontrarnos con gente amable, dispuesta a colaborar y siempre con respuestas creativas. Nuestros mejores deseos en este aniversario. De verdad son una gran empresa”</p>
                    </div>
                    <div className="text-white group-hover:text-purple-700 absolute bottom-0 -mb-6">
                    </div>
                   <div className="flex flex-col items-center justify-center mt-[5rem]">
                    <p className="text-base leading-4 text-center text-gray-900">Pago Mi Expensas</p>
                </div>
                </div>
                </div>
                        </Slide>
                        <Slide index={1}>
                        <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xl:px-20 px-10 py-20 gap-8">
                        <div className="group w-full bg-white relative flex flex-col items-center hover:bg-purple-700 cursor-pointer shadow-xl border-2 rounded-lg md:p-12 p-6 ">
                    <div className="text-gray-600 group-hover:text-white flex flex-col items-center">
                        <svg width={26} height={27} viewBox="0 0 26 27" fill="none">
                            <g clipPath="url(#clip0)">
                                <path d="M25.2578 14.3309H19.2969C19.3988 9.55819 20.6309 9.01642 22.1785 8.86178L22.7753 8.78051V3.53242L22.0874 3.57292C20.0666 3.69783 17.8323 4.09805 16.3417 6.11965C15.035 7.89183 14.459 10.7871 14.459 15.2316V23.4673H25.2578V14.3309Z" fill="currentColor" />
                                <path d="M11.48 23.4673V14.3309H5.59859C5.70049 9.55819 6.89283 9.01642 8.44042 8.86178L8.99749 8.78051V3.53242L8.34931 3.57292C6.32844 3.69783 4.07421 4.09805 2.5836 6.11965C1.27707 7.89183 0.681147 10.7871 0.681147 15.2316V23.4673H11.48Z" fill="currentColor" />
                            </g>

                        </svg>
                        <p className="xl:w-80 text-lg leading-normal text-center mt-4">"En su XX aniversario, hacemos votos para que el fruto de vuestros esfuerzos continúe garantizando el éxito por el que trabajan cada día. FELICIDADES EN VUESTRO ANIVERSARIO.”</p>
                    </div>
                    <div className="text-white group-hover:text-purple-700 absolute bottom-0 -mb-6">
                    </div>
                    <div className="flex flex-col items-center justify-center mt-[5rem]">
                    <p className="text-base leading-4 text-center text-gray-900">Administración 2000</p>
                </div>
                
                </div>
                
                <div className="group w-full bg-white relative flex flex-col items-center hover:bg-purple-700 cursor-pointer shadow-xl border-2 rounded-lg md:p-12 p-6 ">
                    <div className="text-gray-600 group-hover:text-white flex flex-col items-center">
                        <svg width={26} height={27} viewBox="0 0 26 27" fill="none">
                            <g clipPath="url(#clip0)">
                                <path d="M25.2578 14.3309H19.2969C19.3988 9.55819 20.6309 9.01642 22.1785 8.86178L22.7753 8.78051V3.53242L22.0874 3.57292C20.0666 3.69783 17.8323 4.09805 16.3417 6.11965C15.035 7.89183 14.459 10.7871 14.459 15.2316V23.4673H25.2578V14.3309Z" fill="currentColor" />
                                <path d="M11.48 23.4673V14.3309H5.59859C5.70049 9.55819 6.89283 9.01642 8.44042 8.86178L8.99749 8.78051V3.53242L8.34931 3.57292C6.32844 3.69783 4.07421 4.09805 2.5836 6.11965C1.27707 7.89183 0.681147 10.7871 0.681147 15.2316V23.4673H11.48Z" fill="currentColor" />
                            </g>

                        </svg>
                        <p className="xl:w-80 leading-normal text-center text-lg mt-4">"Nuestro agradecimiento a Kavanagh Software por permitirnos formar parte de ese grupo humano que nos hace más simples las tareas. Felicidades y que sigan los éxitos!!!”</p>
                    </div>
                    <div className="text-white group-hover:text-purple-700 absolute bottom-0 -mb-6 ">
                    </div>
                                    <div className="flex flex-col items-center justify-center mt-[5rem] hover:text-white text-white">
                    <p className="leading-4 text-center text-gray-900">Administración Galván</p>
                </div>
                </div>
                </div>
                        </Slide>
                    </Slider>
                    <div className="flex items-center mt-8">
                        <ButtonBack className="cursor-pointer " role="button" aria-label="previous slide">
                            <ChevronDoubleLeftIcon className="w-7 text-purple-500"/>
                        </ButtonBack>

                        <ButtonNext role="button" aria-label="next slide" className="cursor-pointer ml-2">
                        <ChevronDoubleRightIcon className="w-7 text-purple-500"/>
                        </ButtonNext>
                    </div>
                </CarouselProvider>
            </div>
        </div>
    );
}
