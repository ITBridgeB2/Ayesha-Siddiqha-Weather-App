import axios from 'axios';

const BASE_URL = 'http://localhost:9099'
// const SEARCH_URL ='http://localhost:9099/history'

const WeatherService = {
  // GET: Fetch weather data for a given city
  getWeatherByCity(city) {
    return axios.get(`${BASE_URL}/${city}`);
  }
  // postSearchHistory(cityName) {
  // return axios.post(`${SEARCH_URL}`, {
  //   city_name: cityName
  // });
}



export default WeatherService;
