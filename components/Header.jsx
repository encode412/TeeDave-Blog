import React, { useState, useEffect} from 'react';
import Link from 'next/link';\
import Image from 'next/image';

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
                <Image src='/logo.png' width='30%' className='cursor-pointer' />
            </Link>            
            </div>
            
            <div className='flex items-center justify-center text-[8px] -mt-0.5 -mb-2.5 md:float-left lg:text-sm md:contents'>
                {categories.map((category) => (
                    <Link key={category.slug} href={category.name === 'Events' ? `/events/${category.slug}` : `/category/${category.slug}`}>
                        <span className='md:float-right mt-2 align-middle text-white ml-1 font-semibold cursor-pointer'>
                            {category.name}
                            </span>
                    </Link>
                ))}
        </div>        
        </div>   
        <div className='flex items-center justify-center flex-col mt-0 text-white -mt-6 lg:-mt-12 title'>
        <span className='tracking-[0.03rem] font-semibold w-max text-xl font-semibold lg:text-5xl md:text-4xl'>Welcome to TeeDave's Blog</span><br />
        <span className='-mt-[27px] font-medium text-[9px] w-max lg:text-xl md:text-xl'><span className='italic'>bringing you the latest news, gossip, trending topics, updates and more </span>😎</span>
        </div>     
    </div>
  )
}

export default Header