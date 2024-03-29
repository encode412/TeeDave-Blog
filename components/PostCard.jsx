import React from 'react';
import moment from 'moment';
import Link from 'next/link';


const PostCard = ({ post }) => {
  
  return (
    <div className='bg-white shadow-lg rounded-lg p-0 lg:p-4 pb-10'>
      <div className='px-5 pt-5 lg:pt-0 lg:px-0'>
      <div className='relative overflow-hidden shadow-md pb-80 mb-2.5'>
        <img 
        src={post.featuredImage.url}
        alt={post.excerpt}
        className='object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg  transition duration-700 hover:scale-125 hover:cursor-pointer'
        />
        </div>       
        <h1 className='transition duration-700 text-center mb-1.5 cursor-pointer hover:text-pink-600 hover:underline text-[18px] font-semibold'>
          <Link href={`/post/${post.slug}`}>
          {post.title}
          </Link>
        </h1>
        <div className='block lg:flex text-center items-center justify-center mb-1.5 w-full'>
          <div className='flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8'>
            <img 
            alt={post.author.name}
            height='30px'
            width='30px'
            src={post.author.photo.url}
            className='align-middle rounded-full'
            />
            <p className='inline align-middle text-gray-700 ml-2 text-xs font-semibold'>{post.author.name}</p>
          </div>
          <div className='font-medium text-gray-700'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>
                {moment(post.createdAt).format('MMM DD, YYYY')}
              </span>
          </div>
        </div>
        <p className='text-center text-sm text-gray-700 font-medium px-4 lg:px-4 mb-4'>{post.excerpt}</p>
        <div className='text-center'>
          <Link href={`/post/${post.slug}`}>
          <span className='transition duration-500 transform hover:-translate-y-1 inline-block bg-pink-600 text-sm font-medium rounded-full text-white px-4 py-2.5 cursor-pointer'>
            Continue Reading
          </span>
          </Link>
          </div>
    </div>
    </div>
    
  )
}

export default PostCard