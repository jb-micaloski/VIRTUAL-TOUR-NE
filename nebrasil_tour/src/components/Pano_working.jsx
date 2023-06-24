import * as PANOLENS from "panolens";
import React, { useEffect } from "react";

const urls = [
  "../images/comp/ne-beg-1.jpg",
  "../images/comp/ne-gm-1.jpg",
  "../images/comp/ne-gm-2.jpg",
];
const panoramas = urls.map(url => new PANOLENS.ImagePanorama(url));

const infospotPos = [
  "-4421.00, -281.67, 2297.30, 0",
  "-4990.44, -65.03, -133.62, 1",
  "4971.85, -49.09, -500.27, 2",
  // Add more positions here if needed
];

const infospotTitle = [
  "Sala de Estar dos Guardas-Marinha",
  "Sala de Estar dos Guardas-Marinha",
  "Convoo do NE Brasil",
  // Add more positions here if needed
];

const infospots = [];

for (let i = 0; i < infospotPos.length; i++) {
  const position = infospotPos[i].split(',').map(parseFloat);
  const infospot = new PANOLENS.Infospot(350, PANOLENS.DataImage.Arrow);
  infospot.position.set(position[0], position[1], position[2]);
  infospot.addHoverText(infospotTitle[i])
  infospots.push(infospot);
  panoramas[position[3]].add(infospot);
}


const viewer = new PANOLENS.Viewer({
  container: document.querySelector("#container"),
  output: 'console'
});

for (let i = 0; i < panoramas.length; i++) {
  viewer.add(panoramas[i]);
}

const Pano = () => {

  const handleInfospotClick = (i) => {
    if (i === 2) {
      i = -1;
    };
    viewer.setPanorama(panoramas[i+1]);
    console.log(i);
  };

  useEffect(() => {

    for (let i = 0; i < infospots.length; i++) {  
      infospots[i].addEventListener('click', () => handleInfospotClick(i));
    }
    return () => {
      for (let i = 0; i < infospots.length; i++) {
        infospots[i].removeEventListener('click', () => handleInfospotClick(i));
      }
    };
  }, [infospots]);

  return (
    <>
    <div id="container" />
    </>
  );
};

export default Pano;
