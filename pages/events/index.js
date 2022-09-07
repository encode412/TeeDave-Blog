// import React from 'react'
// import { baseUrl, fetchApi } from '../../utils/fetchApi';

// const Index = ({ matches }) => {
//     console.log({matches})
//   return (
//     <h1 className='text-3xl text-white text-center font-bold'>Upcoming Matches</h1>
//   )
// }

// export default Index

// export async function getStaticProps() {
//     const matchDates = await fetchApi(`${baseUrl}/soccer/matches-by-date?date='20220907' `)
    
//     return {
//       props: {
//         matches: matchDates?.hits,      
//     }
//   }
//   }