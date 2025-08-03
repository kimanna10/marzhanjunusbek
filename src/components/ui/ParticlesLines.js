"use client";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import { useEffect, useMemo, useState } from "react";

export default function ParticlesLines() {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "224C22", // или сделай прозрачным: "#00000000"
        },
        image: "radial-gradient(circle, #224C22, #122A12)",
        position: "center",
        repeat: "no-repeat",
        size: "cover",
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: "repulse",
          },
          onHover: {
            enable: false,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 10,
          },
          repulse: {
            distance: 100,
            duration: 0.1,
          },
        },
      },
      particles: {
        color: {
          value: "#E8FDE8",
        },
        move: {
          direction: "top",
          enable: true,
          outModes: {
            default: "out",
          },
          random: true,
          speed: 5,
          straight: false,
        },
        number: {
          density: {
            enable: false,
          },
          value: 500,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 20, max: 30 },
          animation: {
            enable: true,
            speed: 5,
            minimumValue: 1,
            sync: false,
          },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (init) {
    return (
      <div className="absolute top-0 left-0 w-full min-h-[300vh] -z-10">
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
      </div>
    );
  }
  return <></>;
}
