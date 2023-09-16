import React from "react";
import { useCallback } from "react";

import styles from "./HomeJumbo.module.css";
import Fade from "react-reveal/Fade";
import InstallButton from "./InstallButton";
import Particles from "react-particles";
import { useScreenSize } from "../hooks/useScreenSize";
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

export default function HomeJumbo() {
  const { isLargeScreen } = useScreenSize();

  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);

  return (
    <div className={styles.container}>
     <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                // background: {
                //     color: {
                //         value: "#0d47a1",
                //     },
                // },
                fpsLimit: 30,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ba96ff",
                    },
                    links: {
                        color: "ba96ff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 40,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "triangle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
      <div className={styles["content"]}>
        <div className={styles.headline}>
          CMD knowledge as code
        </div>
        <Fade bottom delay={300}>
          <p className={styles.subtitle}>
            <b>Tired of typing the same sentences</b> over and over? <br />
            Discover the incredible power of a full-blown text expander.
          </p>
        </Fade>
        <Fade bottom delay={700}>
          <div className={styles["get-started-button"]}>
            <InstallButton />
          </div>
        </Fade>
      </div>
    </div>
  );
}
