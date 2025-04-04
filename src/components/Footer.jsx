import React from "react";
import logo from "../assets/Logo.png"; // Asegúrate de tener el logo en la ruta correcta
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='w-full bg-black text-white py-12'>
      {/* Fila superior */}
      <div className='w-11/12 md:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
        {/* Logo */}
        <div className='flex flex-col items-start md:items-center'>
          <img
            src={logo}
            alt='Logo'
            className='h-12 md:h-16 mb-4'
            loading='lazy'
          />
          <a
            href='mailto:mgmt@mariosaave.com'
            className='text-sm hover:text-green-500'>
            mgmt@mariosaave.com
          </a>
        </div>

        {/* Caja 1 */}
        <div className='flex items-start md:justify-center md:items-center'>
          <div className='text-left'>
            <ul className='text-sm space-y-2'>
              <li>
                <a href='/legal' className='hover:text-green-500'>
                  Legal
                </a>
              </li>
              <li>
                <a href='/politicas-cookies' className='hover:text-green-500'>
                  Políticas de cookies
                </a>
              </li>
              <li>
                <a
                  href='/politicas-privacidad'
                  className='hover:text-green-500'>
                  Políticas de privacidad
                </a>
              </li>
              <li>
                <a
                  href='/terminos-condiciones'
                  className='hover:text-green-500'>
                  Términos y condiciones
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Caja 2 - Redes sociales */}
        <div className='flex items-start md:justify-center md:items-center'>
          <div className='text-left md:text-center'>
            <h3 className='text-lg font-semibold mb-4'>Redes Sociales</h3>
            <div className='flex gap-4 text-2xl'>
              <a
                href='https://www.facebook.com/people/Mario-Saave/61573827956090/#'
                target='_blank'
                className='hover:text-blue-600'>
                <FaFacebookF />
              </a>
              <a
                href='https://www.instagram.com/mario.saave/'
                target='_blank'
                className='hover:text-pink-500'>
                <FaInstagram />
              </a>
              <a
                href='https://www.youtube.com/channel/UCvuT6Tv1x3jS5H53_BuzXrA'
                target='_blank'
                className='hover:text-red-500'>
                <FaYoutube />
              </a>
              <a
                target='_blank'
                href='https://www.tiktok.com/@mario.saave_'
                className='hover:text-black'>
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Fila inferior */}
      <div className='w-11/12 md:w-4/5 mx-auto mt-8 text-center'>
        <div className='rounded-lg'>
          <p className='text-sm mt-12'>
            Copyright 2025. Mario Saavedra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
