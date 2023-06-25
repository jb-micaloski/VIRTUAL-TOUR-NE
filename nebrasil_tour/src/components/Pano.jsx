import * as PANOLENS from "panolens";
import * as THREE from "three";
import React from "react";
import {Button} from "@mui/material";

const Pano = () => {
  const viewer = new PANOLENS.Viewer({
    container: document.querySelector("#container"),
    output: "console",
    cameraFov: "105",
    speedLimit: "0.5",
    autoRotate: true,
    autoRotateSpeed: 0.25,
    autoRotateActivationDuration: 1,
    controlBar: false,
    horizontalView: true,
  });

  const StartPosition = new THREE.Vector3(-4711.94, 93.13, 1647.79);
  const panorama = new PANOLENS.ImagePanorama("../images/comp/ne-beg-1.jpg");
  panorama.addEventListener("enter-fade-start", function () {
    viewer.tweenControlCenter(StartPosition, 0);
  });
  viewer.add(panorama);

  return (
    <>
      <main>
        <section className="content">
          <section id="container" className="content">
              <section className="title">
                <table>
                <tr>
                    <td>
                      <img src="../images/brasaoNE.png" height="150px" alt="NE Brasil"/>
                    </td>
                    <td>
                      <header>NAVIO-ESCOLA<br />BRASIL</header>
                    </td>
                    <td>
                      <img src="../images/brasaoMB.png" height="150px" alt="Marinha do Brasil"/>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="3">
                      <Button variant='contained'>
                        Enter
                      </Button>
                    </td>
                  </tr>
                </table>
              </section>  
          </section>
        </section>
      </main>
    </>
  );
};

export default Pano;
