import type { NextPage } from 'next'
import { PostCard, PostWidget, Categories } from '../components';
import { FeaturedPosts } from '../sections';
import Head from 'next/head'
import Image from 'next/image'
import { getPosts } from '../services';

const Home: NextPage = ({ posts }) => {
 
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>The TeeDave Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeaturedPosts />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className='lg:col-span-8 col-span-1 grid gap-4 lg:grid-cols-2 lg:grid-rows-2'>
            {posts.map((post) => (
             <PostCard post={post.node} key={post.title}/>              
            ))}
            </div>
            <div className='lg:col-span-4 col-span-1'>
              <div className='lg:sticky relative top-8'>
                 <PostWidget />
                 <Categories />
              </div>
            </div>
         </div>  
         <div className=' border-t border-blue-40 p-5 pt-5 mt-7 text-center'>
         <span className='text-white'><span className='font-semibold'>TeeDave-</span> CopyRight © 2022 Timothy Austin. All Rights Reserved</span>   
         </div>
         </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts }
  }
}

export default Home
