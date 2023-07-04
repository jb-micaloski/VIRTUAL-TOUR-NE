import * as PANOLENS from "panolens";
import * as THREE from "three";
import React from "react";
import { Button } from "@mui/material";
import { useNavigate} from "react-router-dom";

const Pano = () => {

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/tour");
    window.location.reload();
  };

  const viewer = new PANOLENS.Viewer({
    container: document.querySelector("#home.content"),
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
          <model id="home" className="content"></model>
          <section className="title">
            <table>
              <thead>
                <tr>
                  <td>
                    <img
                      src="../images/brasaoNE.webp"
                      height="80vh"
                      alt="NE Brasil"
                    />
                  </td>
                  <td>
                    <header>
                      NAVIO-ESCOLA
                      <br />
                      BRASIL
                    </header>
                  </td>
                  <td>
                    <img
                      src="../images/brasaoMB.webp"
                      height="80vh"
                      alt="Marinha do Brasil"
                    />
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="3">
                      <Button variant="contained" onClick={handleButtonClick}>
                        INICIAR VISITA
                      </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </section>
      </main>
    </>
  );
};

export default Pano;
