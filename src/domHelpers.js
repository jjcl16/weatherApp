export default function removeChilds(selector){
  const container = document.querySelector(selector);  
  while(container.childElementCount > 0){
    container.removeChild(container.lastChild);
  }  
}