import React from "react";
import Particles from "react-tsparticles";

function BackgroundComponent() {
  return (
    <Particles
      options={{
        particles: {
          number: {
            value: 50,
          },
          size: {
            value: 3,
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
          },
        },
      }}
    />
  );
}

export default BackgroundComponent;
