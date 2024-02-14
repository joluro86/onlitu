import React from 'react'
import Image from 'next/image';

const protsan = () => {
    return (
        <div className='max-w-[800px] mx-auto sm:p-2 h-full sm:pb-4 pb-4 prueba'>
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
                <div className='sm:w-1/2 w-[80%] mx-auto'>
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

        </div>
    )
}

export default protsan
