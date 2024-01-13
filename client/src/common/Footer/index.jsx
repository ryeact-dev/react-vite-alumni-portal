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
      <article className=' py-4  max-w-6xl mx-auto'>
        <div className='container px-4 mx-auto'>
          <div className='-mx-4 flex flex-wrap justify-between'>
            <div className='px-4 my-4 w-full xl:w-1/5'>
              <h2 className='text-2xl font-semibold mb-6'>Alumni Portal</h2>
              <p className='text-justify'>
                Tailwindow is a collection of UI Components created using
                Tailwind CSS Framework. The UI Components gives you all of the
                building blocks you need to build any designs without any
                annoying opinionated styles you have to fight to override.
              </p>
            </div>

            <div className='px-4 my-4 w-full sm:w-auto'>
              <div>
                <h2 className='inline-block text-2xl pb-4 mb-4 border-b-4 border-secondary'>
                  Company
                </h2>
              </div>
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
            <div className='px-4 my-4 w-full sm:w-auto'>
              <div>
                <h2 className='inline-block text-2xl pb-4 mb-4 border-b-4 border-secondary'>
                  Blog
                </h2>
              </div>
              <ul className='leading-8'>
                <li>
                  <Link to='/' className='hover:text-secondary'>
                    Getting Started With HTML and CSS
                  </Link>
                </li>
                <li>
                  <Link to='/' className='hover:text-secondary'>
                    What Is Flex And When to Use It?
                  </Link>
                </li>
                <li>
                  <Link to='/' className='hover:text-secondary'>
                    How TailwindCSS Can Help Your Productivity?
                  </Link>
                </li>
                <li>
                  <Link to='/' className='hover:text-secondary'>
                    5 Tips to Make Responsive Website
                  </Link>
                </li>
                <li>
                  <Link to='/' className='hover:text-secondary'>
                    See More
                  </Link>
                </li>
              </ul>
            </div>
            <div className='px-4 my-4 w-full sm:w-auto xl:w-1/5'>
              <div>
                <h2 className='inline-block text-2xl pb-4 mb-4 border-b-4 border-secondary'>
                  Connect With Us
                </h2>
              </div>
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
