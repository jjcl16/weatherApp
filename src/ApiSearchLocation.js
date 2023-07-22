import {APIKEY_WEATHER_API} from "./ApiCreds";
import getCurrentWeather from "./ApiCurrentWeather";

function removeSidebarChilds(){
  const selectionsContainer = document.querySelector("#selectionsContainer");  
  while(selectionsContainer.childElementCount > 0){
    selectionsContainer.removeChild(selectionsContainer.lastChild);
  }  
}

export default async function searchWeatherLocation(e){
  try{    
    const selectionsContainer = document.querySelector("#selectionsContainer"); 
    selectionsContainer.classList.remove("deploy");
    removeSidebarChilds();
    const valueToSearch = e.target.value;
    const urlSearchApi = "http://api.weatherapi.com/v1/search.json?key=" + APIKEY_WEATHER_API + "&q="+valueToSearch;
    let response = await fetch(urlSearchApi, { mode: "cors"});
    let zones = await response.json();
    await insertZonesOnDom(zones);
  }catch (error){
    console.log(error)
  }  
}

async function insertZonesOnDom(zones){
  const selectionsContainer = document.querySelector("#selectionsContainer"); 
  selectionsContainer.classList.remove("deploy");
  try {    
    console.log(zones.length);
    console.log(zones);
    console.log("zones");
    await zones.forEach(zone => {
      const newElement = document.createElement("div");
      newElement.textContent = `${zone.name}, ${zone.region}, ${zone.country}.`;
      newElement.value = zone.url;
      newElement.classList.add("selection");
      newElement.addEventListener("click", callCurrentWeather);
      selectionsContainer.appendChild(newElement);
    });
    selectionsContainer.classList.add("deploy");
  } catch (error) {
    console.log(error)
  }  
  
}

async function callCurrentWeather(e){
  const valueToSearch = e.target.value;
  const searchBox = document.querySelector("#location");
  searchBox.value = "";
  const selectionsContainer = document.querySelector("#selectionsContainer");
  selectionsContainer.classList.remove("deploy");
  removeSidebarChilds();
  await getCurrentWeather(valueToSearch)
}

