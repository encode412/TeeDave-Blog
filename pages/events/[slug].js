import React, { useState, useEffect } from 'react';
import Script from 'next/script';
import { getMatchLinks } from '../../services';


const MatchDay = () => { 
  const [matchLink, setMatchLink] = useState([]);
  console.log(matchLink)
    useEffect(() => {
        getMatchLinks()
        .then((match) => setMatchLink(match))
        }, []);
        

  return (
    <div>      
      <h1 className='text-lg lg:text-3xl text-white text-center font-bold'>Match-Day Live!!!</h1>        
          {matchLink.map((m) => 
          <div key={m.name} className='flex flex-col justify-center items-center'>
            <div className='text-lg lg:text-3xl text-white font-bold'>{m.name}</div>
          <iframe  src={m.slug} className='border-solid border-4 h-[34rem] lg:h-96'name="myiFrame" scrolling="no" frameBorder="1" marginHeight="0px" marginWidth="0px" width="1000px" allowFullScreen></iframe>
          </div>
          )}              
      {matchLink.map((m) =>                     
      <div key={m.name} id="LB24_LIVE_CONTENT" data-eid={m.blogId}></div>
      )} 
      <Script src="https://v.24liveblog.com/24.js" />
</div>
  )
}

export default MatchDay

// export async function getStaticProps() {
//   const match = await getMatchLink();

//   return {
//     props: { match },
//   };
// }
// export async function getStaticPaths() {
//   const matches = await getMatchLinks();
  
//   return {
//     paths: matches.map(({ slug }) => ({ params: { slug } })),
//     fallback: true,
//   };  
// }
