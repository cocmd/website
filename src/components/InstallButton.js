import React, { useMemo } from "react";
import styles from "./InstallButton.module.css";
import Link from "@docusaurus/Link";
import BrowserOnly from "@docusaurus/BrowserOnly";
import { useOS } from "../hooks/useOS";

function InstallButton() {
  const { os } = useOS();

  const { link, text, subtitle } = useMemo(() => {
    switch (os) {
      case "linux":
        return {
          link: "/docs/intro",
          text: "Not available for Linux (yet)",
          subtitle: "Available for MacOS",
        };
      case "mac":
        return {
          link: "/docs/intro",
          text: "Get Started on MacOS",
          subtitle: "",
        };
      case "win":
        return {
          link: "/docs/intro",
          text: "Not available for Windows (yet)",
          subtitle: "Available for MacOS",
        };
      default:
        return {
          link: "/docs/intro",
          text: "Get Started",
          subtitle: "Available for MacOS",
        };
    }
  }, [os]);

  return (
    <div className={styles.container}>
      <Link to={link} className="button button--primary button--lg">
          <span>{text}</span>
      </Link>
      <Link className={styles.subtitle} to="/install">
        {subtitle}
      </Link>
    </div>
  );
}

const Wrapper = () => {
  return (
    <BrowserOnly fallback={<div>Loading...</div>}>
      {() => InstallButton()}
    </BrowserOnly>
  );
};

export default Wrapper;
