import React from 'react';
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className='w-full text-slate-400 bg-base-100'>
      <article className=' py-4 max-w-6xl mx-auto'>
        <div className='grid grid-cols-3 my-8'>
          <div className='px-4 w-ful'>
            <h2 className='text-2xl font-semibold mb-8'>Alumni Portal</h2>
            <p className='text-justify'>
              is a website or app that connects former students of a school,
              college, or university. It can help you build a strong network,
              engage your alumni, and showcase your achievements.
            </p>
          </div>

          <div className='px-4 w-full'>
            <h2 className='inline-block text-2xl pb-4 mb-2 border-b-4 border-secondary w-full'>
              Company
            </h2>
            <ul className='leading-8'>
              <li>
                <Link to='/' className='hover:text-secondary'>
                  About Us
                </Link>
              </li>
              <li>
                <Link to='/' className='hover:text-secondary'>
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link to='/' className='hover:text-secondary'>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to='/' className='hover:text-secondary'>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className='px-4  w-full'>
            <div>
              <h2 className='inline-block text-2xl pb-4 mb-4 border-b-4 border-secondary w-full'>
                Connect With Us
              </h2>
            </div>
            <div className='flex flex-wrap gap-2'>
              <Link
                to='/'
                className='inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-secondary hover:border-blue-400'
              >
                <FaFacebookF />
              </Link>
              <Link
                to='/'
                className='inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-secondary hover:border-blue-400'
              >
                <FaTwitter />
              </Link>
              <Link
                to='/'
                className='inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-secondary hover:border-blue-400'
              >
                <FaInstagram />
              </Link>
              <Link
                to='/'
                className='inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-secondary hover:border-blue-400'
              >
                <FaGithub />
              </Link>
              <Link
                to='/'
                className='inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full hover:text-secondary hover:border-blue-400'
              >
                <FaYoutube />
              </Link>
            </div>
          </div>
        </div>
      </article>
      <article className='bg-base-300 py-4 text-gray-100'>
        <div className='max-w-6xl mx-auto px-4'>
          <div className='-mx-4 flex flex-wrap justify-between'>
            <p className='px-4 w-full text-center sm:w-auto sm:text-left'>
              Copyright © 2024
            </p>
            <p className='px-4 w-full text-center sm:w-auto sm:text-left'>
              Made with ❤️ Ryeact-dev.
            </p>
          </div>
        </div>
      </article>
    </footer>
  );
}
