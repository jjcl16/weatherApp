import searchLocation from "./ApiSearchLocation";
import getCurrentWeather from "./ApiCurrentWeather";
import getForecast from "./Apiforecast";

export default function createDom(){
  const body = document.querySelector("body");
/** TOP */


  const top = document.createElement("div");
  top.setAttribute("id","top");
  body.appendChild(top);

  /** Location and switch selector container*/
  const locactionAndSwitchContainer = document.createElement("div");
  locactionAndSwitchContainer.setAttribute("id","locactionAndSwitchContainer");

  const input = document.createElement("input");
  input.setAttribute("id","location");
  input.setAttribute("placeholder","Location...");
  input.setAttribute("type","text");
  input.addEventListener("change", searchLocation);
  /** Switch Celsius Farenheit */
    const switchCF = document.createElement("div");
    switchCF.setAttribute("id", "switchCF");

    const switchSelector = document.createElement("div");
    switchSelector.setAttribute("id","switchSelector");    

    const switchCelsius = document.createElement("div");
    switchCelsius.setAttribute("id", "switchCelsius");
    switchCelsius.addEventListener("click", selectCelsius);
    switchCelsius.textContent = "C";

    const switchFarenheit = document.createElement("div");
    switchFarenheit.setAttribute("id", "switchFarenheit");
    switchFarenheit.addEventListener("click", selectFarenheit);
    switchFarenheit.textContent = "F";

    
    switchCF.appendChild(switchCelsius);
    switchCF.appendChild(switchSelector);
    switchCF.appendChild(switchFarenheit);

    locactionAndSwitchContainer.appendChild(input);
    locactionAndSwitchContainer.appendChild(switchCF);
  
  const selectionsContainer = document.createElement("div");
  selectionsContainer.setAttribute("id","selectionsContainer");
  top.appendChild(locactionAndSwitchContainer);
  top.appendChild(selectionsContainer);

/** DASHBOARD */
  const dashboard = document.createElement("div");
  dashboard.setAttribute("id","dashboard");
  body.appendChild(dashboard);
  /** Current info Container */
    const currentInfoContainer = document.createElement("div");
    currentInfoContainer.setAttribute("id","currentInfoContainer")
    const weatherDescription = document.createElement("div");
    weatherDescription.setAttribute("id","weatherDescription");
    const weatherImage = new Image();
    weatherImage.setAttribute("id","weatherImage")
    const location = document.createElement("div");
    location.setAttribute("id", "weatherLocation");
    const lastUpdate = document.createElement("div");
    lastUpdate.setAttribute("id", "lastUpdate");
    
    const temp = document.createElement("div");
    temp.setAttribute("id","temp");
 

    currentInfoContainer.appendChild(weatherImage);
    currentInfoContainer.appendChild(weatherDescription);
    currentInfoContainer.appendChild(temp);           
    currentInfoContainer.appendChild(location);
    currentInfoContainer.appendChild(lastUpdate);
    
  

    /** Rigth side info container */    
    const additionalInfo = document.createElement("div");
    additionalInfo.setAttribute("id", "additionalInfo");

    const realFeel = document.createElement("div");
    realFeel.setAttribute("id", "realFeel");
     
    const humidity = document.createElement("div");
    humidity.setAttribute("id", "humidity");
    const windDir = document.createElement("div");
    windDir.setAttribute("id", "windDir");
    const windVelocity = document.createElement("div");
    windVelocity.setAttribute("id", "windVelocity");

    additionalInfo.appendChild(realFeel);
    additionalInfo.appendChild(humidity);
    additionalInfo.appendChild(windDir);
    additionalInfo.appendChild(windVelocity);



 dashboard.appendChild(currentInfoContainer);
 dashboard.appendChild(additionalInfo);


/** FOOTER */
  const footer = document.createElement("div");
  footer.setAttribute("id","footer");
  body.appendChild(footer);


/** Default config */
  //then i think to implementate an ip location.
  localStorage.firstUrlLocation = "puerto-ordaz-bolivar-venezuela"; 
  switchSelector.value = "C"; //first celsius
  getCurrentWeather(localStorage.firstUrlLocation);
  getForecast(localStorage.firstUrlLocation);

}

function selectFarenheit(){
  const switchSelector = document.querySelector("#switchSelector");
  switchSelector.classList.add("farenheit");
  switchSelector.value = "F";
  getCurrentWeather(localStorage.lastLocationShowed);
}

function selectCelsius(){
  const switchSelector = document.querySelector("#switchSelector");
  switchSelector.value = "C";
  switchSelector.classList.remove("farenheit");
  getCurrentWeather(localStorage.lastLocationShowed);
}