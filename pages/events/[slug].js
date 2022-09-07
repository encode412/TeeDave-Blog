import React from 'react'
import Script from 'next/script'


const MatchDay = () => {
  
  return (
    <div>
      
      <h1 className='text-lg lg:text-3xl text-white text-center font-bold'>Match-Day Live!!</h1>
      
      <div className='flex justify-center align-center'>
        <iframe src="https://live.golkoralive.com/p/ksa1.html" className='border-solid border-4 h-52 lg:h-96'name="myiFrame" scrolling="no" frameBorder="1" marginHeight="0px" marginWidth="0px" width="1000px" allowfullscreen></iframe>
      </div>
      <div id="LB24_LIVE_CONTENT" data-eid="3134745359077635842"></div>
      <Script src="https://v.24liveblog.com/24.js" />
</div>
  )
}

export default MatchDay

