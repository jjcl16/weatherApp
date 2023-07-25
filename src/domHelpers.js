export default function removeChilds(selector){
  const container = document.querySelector(selector);  
  while(container.childElementCount > 0){
    container.removeChild(container.lastChild);
  }  
}

export function removeDefaultEvents(){
  const allElements = document.querySelectorAll("div");
  allElements.forEach(element => {
    element.addEventListener("touch", function (e) {
      e.preventDefault();
  });
  });
}
