//import { Console } from "console";
import DateTime from "node-datetime/src/datetime";
import {APIKEY_WEATHER_API} from "./ApiCreds";
import {imagesDay, imagesNight} from "./imageLoader";
import removeChilds from "./domHelpers";


export default async function getForecast(urlLocation){
  try{
    localStorage.lastLocationShowed = urlLocation;
    const valueToSearch = urlLocation;
    const urlSearchApi = "https://api.weatherapi.com/v1/forecast.json?key=" + APIKEY_WEATHER_API + "&q="+valueToSearch + "&days=3";
    //console.log({urlSearchApi});
    let response = await fetch(urlSearchApi, {
      'mode': 'cors',
      'headers': {
          'Access-Control-Allow-Origin': '*',
      }
  });
    //console.log({response});
    let forecast = await response.json();  
    renderForecast(forecast.forecast);
    renderCurrentWeather(forecast.current);
    renderLocation(forecast.location);
    //console.log(forecast.forecast);
  }catch (error){
    console.log(error)
  }  
}

async function renderCurrentWeather(currentWeather){
  try {
    //console.log(currentWeather);
    const switchSelector = document.querySelector("#switchSelector");
    const temp = document.querySelector("#temp");
    const weatherDescription = document.querySelector("#weatherDescription");
    const weatherImage = document.querySelector("#weatherImage"); 
    const lastUpdate = document.querySelector("#lastUpdate");
    const realFeel = document.querySelector("#realFeel");
    const humidity = document.querySelector("#humidity");
    const windDir = document.querySelector("#windDir");
    const windVelocity = document.querySelector("#windVelocity");
    
    humidity.textContent = `Humidity: ${currentWeather.humidity}%`;
    windDir.textContent = `Wind direction: ${currentWeather.wind_dir}`;
    windVelocity.textContent = `Wind direction: ${currentWeather.wind_kph} km/h`;

    if (switchSelector.value == "C"){
      temp.textContent = `${currentWeather.temp_c} ºC`;
      realFeel.textContent = `Feels like ${currentWeather.feelslike_c} ºC`;
    } else {
      temp.textContent = `${currentWeather.temp_f} ºF`;
      realFeel.textContent = `Feels like ${currentWeather.feelslike_f} ºF`;
    }

    // condition
    weatherDescription.textContent = currentWeather.condition.text;
    //update
    let datetime = require("node-datetime");
    let dt = datetime.create(currentWeather.lastUpdate);
    let formated = dt.format("d n H:M");
    lastUpdate.textContent = "Last update: " + formated;
    //image
    let ImageIcon = currentWeather.condition.icon;
    ImageIcon = ImageIcon.split("/");
    let imageSrc = "";

    if (currentWeather.is_day){
      imageSrc = await imagesDay[ImageIcon[ImageIcon.length - 1]].default;
    } else{
      imageSrc = await imagesNight[ImageIcon[ImageIcon.length - 1]].default;
    }
    weatherImage.src = imageSrc;
    //console.log("finish renderCurrentWeather");
  } catch (error) {
    console.log(error)
  }
  
}

function renderLocation(currentWeatherLocation){
  try{
    const location = document.querySelector("#weatherLocation");
    location.textContent = `${currentWeatherLocation.name}, ${currentWeatherLocation.country}.`;
  }catch (error){
    console.log(error);
  }
  
}

async function renderForecast(forecast){
  const rainChance = document.querySelector("#rainChance");
  const arrayOfForecast = forecast.forecastday;
  rainChance.textContent = `Rain chance: ${arrayOfForecast[0].day.daily_chance_of_rain}%`;
  const switchSelectorDH = document.querySelector("#switchSelectorDH");
  const dailyOrHours = switchSelectorDH.value;
  const forecastContainer = document.querySelector("#forecastContainer");
  const switchSelector = document.querySelector("#switchSelector");
  
  removeChilds("#forecastContainer");

  if (dailyOrHours == "D") {
    await  arrayOfForecast.forEach( (day) => {
      //console.log(day.day);
      const newDay = document.createElement("div");
      newDay.classList.add("forecastElement");

      const tempUmbral = document.createElement("div");
      tempUmbral.classList.add("tempUmbral");

      const rainChance = document.createElement("div");
      rainChance.classList.add("rainChance");
      rainChance.textContent = `Rain chance: ${day.day.daily_chance_of_rain}%`;

      let time = (day.date_epoch + 86400) * 1000 // add a day, and multiply per sencods
      let datetime = require("node-datetime");
      let newTime = new Date(time);
      let dt = datetime.create(newTime);
      let formated = dt.format("w d n");
      const date = document.createElement("div");
      date.classList.add("date");
      date.textContent = formated;

      const descrip = document.createElement("div");
      descrip.classList.add("descrip");
      descrip.textContent = day.day.condition.text;
      if( switchSelector.value == "C"){
        tempUmbral.textContent = ` ${day.day.maxtemp_c} - ${day.day.mintemp_c}  ºC`;
      }else if (switchSelector.value == "F"){
        tempUmbral.textContent = ` ${day.day.maxtemp_f} - ${day.day.mintemp_f}  ºF`;
      }      
      const image = new Image;
      image.src = "";

      let ImageIcon = day.day.condition.icon;
      ImageIcon = ImageIcon.split("/");
      const imageSrc = imagesDay[ImageIcon[ImageIcon.length - 1]].default;
      image.src = imageSrc;

      newDay.appendChild(date);
      newDay.appendChild(image);
      newDay.appendChild(descrip);
      newDay.appendChild(tempUmbral);
      newDay.appendChild(rainChance);
      forecastContainer.appendChild(newDay);
    } );

    //console.log("Daily");
  } else if (dailyOrHours == "H") {
    const now = new Date;
    const nowHours = now.getHours();

    for (let index = nowHours; index < 24; index++) {
      const hour = arrayOfForecast[0].hour[index];

      const newDay = document.createElement("div");
      newDay.classList.add("forecastElement");

      const tempUmbral = document.createElement("div");
      tempUmbral.classList.add("tempUmbral");

      const rainChance = document.createElement("div");
      rainChance.classList.add("rainChance");
      rainChance.textContent = `Rain chance: ${hour.chance_of_rain}%`


      //let time = (day.date_epoch + 86400) * 1000 // add a day, and multiply per sencods
      //let datetime = require("node-datetime");
      //let newTime = new Date(time);
      //let dt = datetime.create(newTime);
      //let formated = dt.format("d n");
      const date = document.createElement("div");
      date.classList.add("date");
      date.textContent = `${index}:00`;

      const descrip = document.createElement("div");
      descrip.classList.add("descrip");
      descrip.textContent = hour.condition.text;
      if( switchSelector.value == "C"){
        tempUmbral.textContent = ` ${hour.temp_c} ºC`;
      }else if (switchSelector.value == "F"){
        tempUmbral.textContent = ` ${hour.temp_f}  ºF`;
      }      
      const image = new Image;
      image.src = "";

      let ImageIcon = hour.condition.icon;
      ImageIcon = ImageIcon.split("/");
      let imageSrc;
      if (hour.is_day){
        imageSrc = await imagesDay[ImageIcon[ImageIcon.length - 1]].default;
      } else{
        imageSrc = await imagesNight[ImageIcon[ImageIcon.length - 1]].default;
      }
      image.src = imageSrc;

      newDay.appendChild(date);
      newDay.appendChild(image);
      newDay.appendChild(descrip);
      newDay.appendChild(tempUmbral);
      newDay.appendChild(rainChance);
      forecastContainer.appendChild(newDay);       
      
    }

    if( nowHours != 0 ){
      for (let index = 0; index < nowHours; index++) {
        const hour = arrayOfForecast[1].hour[index];
  
        const newDay = document.createElement("div");
        newDay.classList.add("forecastElement");
  
        const tempUmbral = document.createElement("div");
        tempUmbral.classList.add("tempUmbral");
  
        const rainChance = document.createElement("div");
        rainChance.classList.add("rainChance");
        rainChance.textContent = `Rain chance: ${hour.chance_of_rain}%`

        const date = document.createElement("div");
        date.classList.add("date");
        date.textContent = `${index}:00`;
  
        const descrip = document.createElement("div");
        descrip.classList.add("descrip");
        descrip.textContent = hour.condition.text;
        if( switchSelector.value == "C"){
          tempUmbral.textContent = ` ${hour.temp_c} ºC`;
        }else if (switchSelector.value == "F"){
          tempUmbral.textContent = ` ${hour.temp_f}  ºF`;
        }      
        const image = new Image;
        image.src = "";
  
        let ImageIcon = hour.condition.icon;
        ImageIcon = ImageIcon.split("/");
        let imageSrc;
        if (hour.is_day){
          imageSrc = await imagesDay[ImageIcon[ImageIcon.length - 1]].default;
        } else{
          imageSrc = await imagesNight[ImageIcon[ImageIcon.length - 1]].default;
        }
        image.src = imageSrc;
  
        newDay.appendChild(date);
        newDay.appendChild(image);
        newDay.appendChild(descrip);
        newDay.appendChild(tempUmbral);
        newDay.appendChild(rainChance);
        forecastContainer.appendChild(newDay);       
        
      }
    }

  }
}
