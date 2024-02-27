import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

// Definir un tipo para las props
interface WhatsAppButtonProps {
  phoneNumber: string;
  message: string;
  imageAlt: string;
  imageUrl: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ phoneNumber, message, imageAlt, imageUrl }) => {
  // Función para generar el URL de WhatsApp
  const generateWhatsAppURL = (): string => {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  };
  

  return (
    <div className='w-full text-center'>
      <Link
        href={generateWhatsAppURL()}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white hover:bg-green-300"
      >
        <div className="cursor-pointer w-[98%] sm:w-[95%]">
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
    </div>
  );
};

export { WhatsAppButton };
