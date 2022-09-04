import React, { useState, useEffect} from 'react';
import Link from 'next/link';

import { getCategories } from '../services';


 
const Header = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories()
        .then((newCategories) => setCategories(newCategories))
        }, [])
  return (
    <div className='container mx-auto px-10 border-b border-blue-400 mb-8'>
        <div className='w-full inline-block py-8'>
            <div className='md:float-left block'>
            <Link href='/'>
                {/* <span  className='cursor-pointer font-bold text-4xl text-white'>TeeDave</span> */}
                <img src='/logo.png' width='30%' className='cursor-pointer' />
            </Link>            
            </div>
            
            <div className='hidden md:float-left md:contents'>
                {categories.map((category) => (
                    <Link key={category.slug} href={`/category/${category.slug}`}>
                        <span className='md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer'>
                            {category.name}
                            </span>
                    </Link>
                ))}
        </div>        
        </div>   
        <div className='flex items-center justify-center flex-col mt-0 text-white lg:-mt-12 title'>
        <span className='tracking-wide font-semibold text-sm font-semibold lg:text-5xl md:text-4xl'>Welcome to TeeDave's Blog</span><br />
        <p className='italic -mt-5 font-medium text-sm lg:text-xl md:text-xl'>bringing you the latest updates and more...</p>
        </div>     
    </div>
  )
}

export default Header