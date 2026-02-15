import React from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBackground() {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: "#020617", // very dark blue (night sky)
          },
          fpsLimit: 60,
          particles: {
            number: {
              value: 250,
              density: {
                enable: true,
                area: 2000,
              },
            },
            color: {
              value: ["#ffffff", "#dbeafe", "#facc15"], // white stars, blue stars, yellow stars
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: 1,
              random: true,
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.3,
              },
            },
            size: {
              value: { min: 1, max: 2 },
            },
            move: {
              enable: true,
              speed: 0.2,
              direction: "none",
              random: true,
              straight: false,
              outModes: "out",
            },
          },
          // planets as big glowing particles
          emitters: [
            {
              position: { x: 20, y: 30 }, // top left
              rate: {
                delay: 9999, // only emit once
                quantity: 1,
              },
              particles: {
                shape: { type: "circle" },
                size: { value: 40 },
                color: { value: "#64ffda" }, // teal planet
                opacity: { value: 0.8 },
                move: { enable: false },
              },
            },
            {
              position: { x: 80, y: 70 }, // bottom right
              rate: {
                delay: 9999,
                quantity: 1,
              },
              particles: {
                shape: { type: "circle" },
                size: { value: 60 },
                color: { value: "#f472b6" }, // pink planet
                opacity: { value: 0.7 },
                move: { enable: false },
              },
            },
          ],
          detectRetina: true,
        }}
      />
    </div>
  );
}
