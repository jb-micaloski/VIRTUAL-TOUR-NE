import * as PANOLENS from "panolens";
import * as THREE from "three";
import React from "react";
import panoramasData from "../data/Data";

const Tour = () => {
  
  const viewer = new PANOLENS.Viewer({
    container: document.querySelector("#tour"),
    output: 'console',
    cameraFov: '105',
    speedLimit: '0.5',
  });


  const StartPosition = new THREE.Vector3(-4640.72, -67.58, 1836.12)

  const panoramas = panoramasData.map(data => {
    const panorama = new PANOLENS.ImagePanorama(data.url);

    panorama.addEventListener( 'enter-fade-start', function(){
      viewer.tweenControlCenter( StartPosition, 0 );
    }); // ACRESCENTAR LOOKATPOSITION ON DATA.JS

    data.infospots.forEach((infospotData) => {
      const position = infospotData.position;
      const infospot = new PANOLENS.Infospot(550,'../images/arrow.png');
      infospot.position.set(position[0], position[1], position[2]);
      infospot.addHoverText(infospotData.title);
      infospot.panoramaIndex = infospotData.index; // Adiciona a informação do índice do infospot no panorama
      panorama.add(infospot);
      infospot.addEventListener('click', function() {
        //VOLTAR AO INDICE NORMAL DEPOIS --> TIRAR O '-'x''!!!!!!!
        viewer.setPanorama(panoramas[infospot.panoramaIndex]); 
      }
      );
    });
  
    return panorama;
  });

  panoramas.forEach(panorama => {
    viewer.add(panorama);
    viewer.addUpdateCallback(function(){
    });
  });

  return (
    <>
    <model id="tour"/>
    </>
  );
};

export default Tour;