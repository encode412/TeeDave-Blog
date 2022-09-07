import axios from 'axios';

export const baseUrl = 'https://livescore-football.p.rapidapi.com';


// export const fetchApi = async (url) => {
// const { data } = await axios.get((url), {
//     headers: {
//     'X-RapidAPI-Key': '3a71d71b16msh192b8a1b2c7d629p109b5fjsn7416da672680',
//     'X-RapidAPI-Host': 'livescore-football.p.rapidapi.com'
//   }
// })
// return data;
// }

const options = {
    method: 'GET',
    url: 'https://livescore-football.p.rapidapi.com/soccer/matches-by-date',
    params: {
      date: '20201017',
      league_code: 'premier-league',
      timezone_utc: '0:00',
      country_code: 'england'
    },
    headers: {
      'X-RapidAPI-Key': '3a71d71b16msh192b8a1b2c7d629p109b5fjsn7416da672680',
      'X-RapidAPI-Host': 'livescore-football.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
      console.log(response.data);
  }).catch(function (error) {
      console.error(error);
  });

