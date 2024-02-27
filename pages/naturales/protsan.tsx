import React from 'react'
import Image from 'next/image';
import { FormularioProtsan } from '@/components/FormularioProtsan';
import { WhatsAppButton } from '@/components/WhatsAppButton';
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
                        ¿No le rindes como antes a tu pareja?
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
            <h2 className='w-[90%] mx-auto sm:m-6 m-6 text-center text-slate-600 text-2xl font-semibold sm:text-2xl text-xl'>Protege y fortalece tu próstata con PROTSAN</h2>
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
                        <h4 className='text-cyan-600 text-center text-2xl font-semibold'>Componentes</h4>
                        <ul className='list-disc mx-4 mt-2'>
                            <li>Licopeno</li>
                            <li>Extracto de nispero</li>
                            <li>Tomate de Arbol</li>
                        </ul>
                        <p className='mt-2'>
                            El aporte nutricional de los componentes como el tomate de árbol que es una fuente rica en vitaminas A, B6, C y E, con alto contenido de hierro y potasio, ayuda a prevenir y desinflamar la próstata.
                        </p>
                        <p className='mt-2'>
                            Contiene antioxidantes que ayudan a reducir el colesterol; el licopeno reduce las probabilidades de cáncer de próstata, pulmón, estómago y vejiga.
                        </p>
                        <h5 className='mt-1 text-center mx-auto text-gray-600 font-semibold text-xl'>100% natural y eficaz</h5>
                    </div>
                </div>

            </div>
            <div className='sm:w-[500px] w-[95%] mx-auto sm:my-0 my-4 p-2 pt-0'>
                <div className="rounded-tl-[20px] rounded-br-[20px] w-full">
                    <h4 className='text-cyan-600 text-center text-2xl font-semibold mb-2'>Preguntas frecuentes</h4>
                    <h5 className='text-gray-600 text-xl text-center font-semibold'>¿En cuanto tiempo pueden verse los resultados?</h5>
                    <p className='mt-1 mb-2 text-justify'>
                        Algunos de los hombres que han usado Protsan han experimentado mejoría durante la primera semana. Otros tardan un poco mas dado que
                        cada organismo reacciona de manera diferente a los tratamientos. Es importante que se tome el medicamento tal como se le sugiere y que no lo interrumpa para un mejor efecto.

                    </p>
                    <h5 className='text-gray-600 text-xl text-center font-semibold'>¿Es realmente efectivo?</h5>
                    <p className='mt-1 mb-2 text-justify'>Protsan lleva varios años en el mercado y los testimonios de nuestros clientes son prueba contundente de los efectos positivos en su salud.  
                    </p>
                    <h5 className='text-gray-600 text-xl text-center font-semibold'>¿Tiene registro Invima?</h5>
                    <p className='text-justify'>Con sus ingredientes de alta calidad y evidencia cientifica Protsan cuenta con la aprobación de las entidades regulatorías.</p>
                    <p className='text-center text-green-700 font-semibold mt-2'>REGISTRO INVIMA RSA-003386-2017</p>
                    <p className='text-center text-green-700 font-semibold mb-2'>Laboratorios Biopronat S.A.S.</p>
                    <h5 className='text-gray-600 text-xl text-center font-semibold'>¿Se hacen envios a todo el pais?</h5>
                    <p className='mt-1 mb-2 text-justify'>Se hacen envios con pago contraentrega a todas las ciudades principales y a la mayoria de los municipios del pais.
                    </p>
                    <h5 className='text-gray-600 text-xl text-center font-semibold'>¿Que pasa si donde vivo no hay cobertura para pago contraentrega?</h5>
                    <p className='mt-1 mb-2 text-justify'>En estos casos puedes pagar de manera anticipada. Nuestro equipo de logística te suministrará todos los datos de envío. Las transportadoras mas usadas son Interrapidisimo y Envia.
                    </p>
                    <h5 className='text-gray-600 text-xl text-center font-semibold'>¿En cuantos días llega mi pedido?</h5>
                    <p className='mt-1 mb-2 text-justify'>Normalmente las transportadoras tardan entre 3 y 6 días hábiles en realizar las entregas.
                    </p>
                    <h5 className='text-gray-600 text-xl text-center font-semibold'>¿Tienes alguna otra inquietud? Haz click en la siguiente imagen</h5>
                    <WhatsAppButton imageUrl = '/static/images/whatsapImage.png' imageAlt='Escrirbir a whatsapp' phoneNumber="3176644669" message="Hola, estoy interesado en mas información sobre Protsan." />
                </div>

            </div>

        </div>

    )
}

export default protsan
