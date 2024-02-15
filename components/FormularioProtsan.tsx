import React, { useState } from 'react';

function FormularioProtsan() {
    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Opción seleccionada: ${selectedOption}`);
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md sm:mx-2 mx-auto h-full sm:my-0 my-8 sm:p-3 p-2 border bg-gray-100">
            <div className='flex flex-col mb-4 text-center'>
                <span className='font-medium text-xl mb-2'>Pide el tuyo y empieza a ver los cambios en tu salud</span>
                <span>Envío gratis</span>
                <span>Pagas al recibir en tu domicilio</span>
            </div>

            <div className="flex items-center mb-4">
                <input
                    id="option1"
                    type="radio"
                    value="Opción 1"
                    checked={selectedOption === 'Opción 1'}
                    onChange={handleChange}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="option1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    1 unidad por $79.900
                </label>
            </div>
            <div className="flex items-center mb-4">
                <input
                    id="option2"
                    type="radio"
                    value="Opción 2"
                    checked={selectedOption === 'Opción 2'}
                    onChange={handleChange}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="option2" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    2 unidades por $129.900 - Ahorras $29.900
                </label>
            </div>
            <div className="flex items-center mb-4">
                <input
                    id="option3"
                    type="radio"
                    value="Opción 3"
                    checked={selectedOption === 'Opción 3'}
                    onChange={handleChange}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="option3" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Paga 2 lleva 3 por $159.800
                </label>
            </div>
            <div className='flex justify-center my-2'>
                <button type="submit" className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Enviar pedido
                </button>
            </div>

        </form>
    );
}

export { FormularioProtsan };
