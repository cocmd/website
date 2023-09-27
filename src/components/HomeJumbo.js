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
      <div className={styles.particles}>
     <Particles
            
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                // background: {
                //     color: {
                //         value: "#0d47a1",
                //     },
                // },
                fpsLimit: 60,
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
                        random: true,
                        speed: 1,
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
      </div>
      <div className={styles["content"]}>
        <div className={styles.headline}>
        {/* Add <span className={styles.highlight}>CMDOps</span> to Your Code Projects */}
        <div>Distributed</div>
        <div className={styles.highlight}>CMD Operations</div> <div>for Code Projects</div>
        </div>
        <Fade bottom delay={300}>
          <p className={styles.subtitle}>
            
            {/* Introducing <b>CMDOps</b> — <br/>effortless script sharing, streamlined workflows, and code-based setup */}
            Use <i>YAML</i> to describe actions, shortcuts etc in your codebase.
            <br/>CoCMD takes care that developers can use them in their <b>Command Line</b>.
          </p>
        </Fade>
        <Fade bottom delay={50}>
          <div className={styles["get-started-button"]}>
            <InstallButton />
          </div>
        </Fade>
      </div>
    </div>
  );
}
