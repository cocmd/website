import React from "react";
import styles from "./HomeFeatures.module.css";
import Fade from "react-reveal/Fade";
import {
  LightBulbIcon,
  ViewColumnsIcon,
  CalendarIcon,
  ShareIcon,
  CpuChipIcon,
  DocumentDuplicateIcon,
  QrCodeIcon,
  ViewfinderCircleIcon,
  CommandLineIcon,
  FlagIcon,
  FireIcon,
  PuzzlePieceIcon
} from '@heroicons/react/24/outline';
import Link from "@docusaurus/Link";
import { useOS } from "../hooks/useOS";
import BrowserOnly from "@docusaurus/BrowserOnly";
import { useScreenSize } from "../hooks/useScreenSize";
import Devs1 from '@site/static/img/dev_crazy.jpg';
import Devs2 from '@site/static/img/devs2_1.png';
import Devs3 from '@site/static/img/devs3.png';


export default function HomeFeatures() {
  const today = new Date().toLocaleDateString();
  const twoHours = new Date(
    new Date().getTime() + 1000 * 60 * 60 * 2
  ).toLocaleTimeString(undefined, { timeStyle: "short" });

  return (
    <div className={styles.container}>

  
        <div className={styles.heading}>
        <h2>What can you build?</h2>
      </div>
    <div className={styles["more-features-container"]} >
       
        <SmallFeature
          title="Scripts & Aliases"
          icon={
            <CommandLineIcon className={styles["small-feature-icon"]} />
          }
        >
          <p>
          
          Write and Share useful scripts and aliases for your terminal.


          </p>
        </SmallFeature>
        <SmallFeature
          title="Workflows"
          icon={
            <DocumentDuplicateIcon className={styles["small-feature-icon"]} />
          }
          delay={100}
        >
          <p>
            Create Day-to-day workflows and share them with your team.
            Oncall procedures, incident response, etc.
          </p>
        </SmallFeature>
        <SmallFeature
          title="Onboarding & Setup"
          icon={<QrCodeIcon className={styles["small-feature-icon"]} />}
          delay={200}
        >
          <p>
            Don't let your documentation get out of date.
            Write and maintain your setup and onboarding procedures as code.
            
          </p>
        </SmallFeature>
        
      </div>


      <Feature
      reversed
        main={
          <div className={styles["feature-card"]}>
            <img src={Devs1} />
          </div>
        }
        description={
          <FeatureDescription
            title="Motivation: Efficiency!"
            icon={<FlagIcon className={styles.icon} />}
          >
            <p>
              Use CoCMD to distribute CMD operations as code.
            
              <ul style={{marginTop: "50px"}}>
              <li>No more sending scripts over Slack</li>
              <li>No more outdated documentation for "cmd instructions"</li>
              <li>Project onboarding like a pro</li>
              <li>Full dev team collaboration 💪</li>
              </ul>
            </p>
          </FeatureDescription>
        }
      />
      <Feature
        main={
          <div className={styles["feature-card"]}>
            <img src={Devs2} />
          </div>
        }
        
        description={
          <FeatureDescription
            title="Vision: 10x Dev Experience"
            icon={<FireIcon className={styles.icon} />}
          >
            <p>
              <ul>
              <li><u>Community Projects:</u> Add your own CMD operations as Opensource. don't let people reinvent the wheel.</li>
              
              <li><u>Teams and Enterprises:</u> Use Git for internal projects and share CMD operations with your team.</li>
              </ul>
            </p>
          </FeatureDescription>
        }
      />
      
      
    </div>
  );
}

const FeatureDescription = ({ title, icon, children }) => {
  return (
    <div className={styles.description}>
      <div className={styles.heading}>
        {icon}
        <h3>{title}</h3>
      </div>
      {children}
    </div>
  );
};

const Feature = ({ main, description, reversed }) => {
  const { isLargeScreen } = useScreenSize();
  const shouldReverse = isLargeScreen && reversed;

  return (
    <div
      className={`${styles.feature} ${shouldReverse ? styles.reversed : ""}`}
    >
      <Fade left={!shouldReverse} right={shouldReverse}>
        <div className={styles.entry}>{main}</div>
      </Fade>
      <Fade right={!shouldReverse} left={shouldReverse}>
        <div className={styles.entry}>{description}</div>
      </Fade>
    </div>
  );
};

const SmallFeature = ({ title, icon, children, delay }) => {
  return (
    <Fade bottom delay={delay ?? 0}>
      <div className={styles["small-feature"]}>
        {icon}
        <h4>{title}</h4>
        {children}
      </div>
    </Fade>
  );
};

const SearchShortcut = () => {
  const { os } = useOS();

  return <> {os === "mac" ? "⌥" : "ALT"}+Space </>;
};
