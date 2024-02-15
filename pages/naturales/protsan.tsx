import React from 'react'
import Image from 'next/image';
import { FormularioProtsan } from '@/components/FormularioProtsan';

const protsan = () => {
    return (
        <div className='max-w-[800px] mx-auto sm:p-2 h-full sm:pb-4 pb-4'>
            <h1 className='flex flex-col text-center sm:mb-6 my-6 mx-6 text-slate-600 text-3xl font-semibold'><span className='text-cyan-600'>Protsan</span><span>Tu aliado natural para una próstata saludable.</span></h1>
            <div className='sm:flex justify-center w-full]'>
                <div className='flex flex-col w-[95%] text-center text-lg gap-1 mb-4 font-medium'>
                    <span className=''>
                        ¿Te levantas muchas veces al baño durante la noche?
                    </span>
                    <span>
                        ¿Sientes dolor para orinar?
                    </span>
                    <span>
                        ¿Orinas a chorritos y goteo constante?
                    </span>
                    <span>
                        ¿ No le rindes como antes a tu pareja?
                    </span>
                    <span className='text-xl m-6 text-danger'>
                        ¡Puede ser la Próstata inflamada!
                    </span>
                </div>
                <div className='sm:w-1/2 w-[95%] mx-auto'>
                    <Image
                        className="rounded-tl-[20px] rounded-br-[20px] w-full"
                        src='/static/images/protsan2.png'
                        alt=''
                        width={100}
                        height={100}
                        priority={true}
                        layout='responsive'
                    />
                </div>
            </div>
            <h2 className='w-[90%] mx-auto sm:m-6 m-6 text-center text-slate-600 text-3xl font-semibold sm:text-3xl text-xl'>Protege y fortalece tu próstata con PROTSAN</h2>
            <div className='sm:flex justify-center gap-2 w-full]'>
                <div className='sm:w-1/2 w-[95%] mx-auto sm:my-0 my-4'>
                    <Image
                        className="rounded-tl-[20px] rounded-br-[20px] w-full"
                        src='/static/images/beneficios_protsan.png'
                        alt=''
                        width={100}
                        height={100}
                        priority={true}
                        layout='responsive'
                    />
                </div>
                <div className='sm:w-1/2 w-[95%] mx-auto sm:my-0 my-4'>
                    <FormularioProtsan />
                </div>
            </div>
            <div className='sm:flex justify-center gap-2 w-full] sm:my-4'>
                <div className='sm:w-1/2 w-[95%] mx-auto sm:my-0 my-4'>
                    <Image
                        className="rounded-tl-[20px] rounded-br-[20px] w-full"
                        src='/static/images/como_tomar_protsan.png'
                        alt=''
                        width={100}
                        height={100}
                        priority={true}
                        layout='responsive'
                    />
                </div>
                <div className='sm:w-1/2 w-[95%] mx-auto sm:my-0 my-4 p-2'>
                    <div className="rounded-tl-[20px] rounded-br-[20px] w-full px-4">
                        <h5 className='text-center'>Componentes</h5>
                        <ul>
                            <li>Licopeno</li>
                            <li>Extracto de nispero</li>
                            <li>Tomate de Arbol</li>
                            <li>
                                El aporte nutricional de los componentes como el tomate de árbol que es una fuente rica en vitaminas A, B6, C y E, con alto contenido de hierro y potasio, ayuda a prevenir y desinflamar la próstata.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default protsan
