import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProductComponent = () => {
    return (
        <div className="max-w-[200px] min-w-[70] mt-4 bg-gray-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link href="#">
                <Image
                    className="rounded-t-lg cursor-pointer mx-auto"
                    src="/static/images/protsan.png"
                    alt=""
                    width={70} // Estas dimensiones serán ignoradas si usas layout="responsive"
                    height={70} // Estas dimensiones serán ignoradas si usas layout="responsive"
                    
                />
            </Link>
            <div className="border-solid px-2 pb-4 bg-gray-50">
                <Link href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white cursor-pointer">PROTSAN</h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Medicamento natural para la inflamación de la próstata.</p>
                <Link href="#">
                    <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer">
                        Mas información
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </div>
                </Link>
            </div>
        </div>




    );
}

export { ProductComponent };

