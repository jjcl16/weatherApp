import {APIKEY_WEATHER_API} from "./ApiCreds";

export default async function getForecast(urlLocation){
  try{
    localStorage.lastLocationShowed = urlLocation;
    const valueToSearch = urlLocation;
    const urlSearchApi = "http://api.weatherapi.com/v1/forecast.json?key=" + APIKEY_WEATHER_API + "&q="+valueToSearch + "&days=3";
    console.log({urlSearchApi});
    let response = await fetch(urlSearchApi, {
      'mode': 'cors',
      'headers': {
          'Access-Control-Allow-Origin': '*',
      }
  });
    console.log({response});
    let forecast = await response.json();  
    console.log({forecast});
  }catch (error){
    console.log(error)
  }  
}