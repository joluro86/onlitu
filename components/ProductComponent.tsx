import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Definir un tipo para las props
interface ProductComponentProps {
    imageUrl: string;
    imageAlt: string;
    title: string;
    description: string;
    precio: string;
    linkHref: string;
    linkAs?: string; // Opcional, usando el signo de interrogación para indicar que esta prop es opcional
}

const ProductComponent: React.FC<ProductComponentProps> = ({ imageUrl, imageAlt, title, description, precio, linkHref, linkAs }) => {
    return (
        <div className="container_producto w-[200px] mx-auto mt-4 mb-2 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

            <Link href={linkHref} as={linkAs || linkHref} passHref>
                <div className="cursor-pointer">
                    <Image
                        className="rounded-t-lg"
                        src={imageUrl}
                        alt={imageAlt}
                        width={100}
                        height={100}
                        priority={true}
                        layout='responsive'
                    />
                </div>
            </Link>

            <div className="px-2 pb-2 bg-red-50">
                <Link href={linkHref} as={linkAs || linkHref} passHref>
                    <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-700 dark:text-white cursor-pointer">{title}</h5>
                </Link>
                <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">{description}</p>
                <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">{precio}</p>
                <Link href={linkHref} as={linkAs || linkHref} passHref>
                    <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer">
                        Saber más
                        <svg className="ml-2 w-3.5 h-3.5" aria-hidden="true" fill="none" viewBox="0 0 14 10" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </svg>
                    </div>
                </Link>
            </div>
        </div >
    );
}

export { ProductComponent };
