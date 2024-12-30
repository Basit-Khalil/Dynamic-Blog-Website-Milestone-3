import React from 'react'
import Image from 'next/image' // Import Image from next/image

export default function AuthorCard() {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-12">
        <div className="flex items-center animation-fadeIn">
            <Image
              className='w-16 h-16 rounded-full mr-4 object-cover border-2 border-red-500'
              src='/images/profile.jpg'  // Path to your image
              alt='Author Image'
              width={64}  // Image width (16 * 4 = 64px)
              height={64} // Image height (16 * 4 = 64px)
              quality={100} // Optional: Set the image quality (1-100)
            /> 

            <div>
                <h3 className='text-xl font-bold'>Basit Khalil</h3>
                <p className='text-slate-500'>
                    {" "}
                    BBA-H | Web Developer | E-Commerce
                </p>
            </div>  
        </div>

        <p className='mt-4 text-black leading-relaxed'>
            Basit Khalil is learning web development and will share articles.
        </p>
        <div className='mt-4 flex space-x-3'>
            <a
            href='#'
            className='px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300'>
                LinkedIn 
            </a>

            <a
            href='#'
            className='px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300'>
                Github 
            </a>
        </div>
    </div>
  )
}

