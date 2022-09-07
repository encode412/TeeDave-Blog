import React from 'react'


const MatchDay = () => {
  
  return (
    <div>
      
      <h1 className='text-lg lg:text-3xl text-white text-center font-bold'>Match-Day Live!!</h1>
      <div className='flex justify-center align-center'>
        <iframe src="https://live.golkoralive.com/p/ontime1.html" className='border-solid border-4 h-52 lg:h-96'name="myiFrame" scrolling="no" frameborder="1" marginheight="0px" marginwidth="0px" width="1000px" allowfullscreen></iframe>
      </div>
      <div id="LB24_LIVE_CONTENT" data-eid="3134745359077635842"></div>
<script src="https://v.24liveblog.com/24.js"></script>
</div>
  )
}

export default MatchDay

