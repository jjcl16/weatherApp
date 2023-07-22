function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

// Imagen loader
//import images from "../images/pruebaa.jpeg";
export const imagesDay = importAll(require.context('./assets/images/day', false, /\.(png|jpe?g|svg)$/));
export const imagesNight = importAll(require.context('./assets/images/night', false, /\.(png|jpe?g|svg)$/));

//const imagesNames = Object.keys(images);