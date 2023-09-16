import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import TechnologiesSection from '@site/src/components/Techs';
import styles from './index.module.css';
import Terminal from '@site/src/components/Terminal';
import UseCases from '@site/src/components/UseCases';
import HomeJumbo from '@site/src/components/HomeJumbo';
import HomeFeatures from '@site/src/components/HomeFeatures';


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--secondary', styles.heroBanner)}>
      <div className="container center">
      
          <h1 className={styles.Title}>
            <div className={styles.Line}>
              <span>CMD&nbsp;</span>
              <span className={styles.important}>Knowledge&nbsp;</span>
              <span className={styles.fullsize}>/ </span>
            </div>
            <div className={styles.SecondLine}>
              <div className={styles.TaglineBlock}>
                <div className={styles.Line}>
                  {`{`}
                </div>
                <p className={styles.Tagline}>
                  Scripts, <br />Workflows <br />&amp; Aliases 
                </p>
                <div className={styles.Line}>
                  {`}`}
                </div>
              </div>
              <div className={styles.Line}>
                {/* <span></span> */}
                <span className={styles.important}>as&nbsp; Code</span>
              </div>
            </div>
          </h1>


        {/* <h1 className="hero__title">{siteConfig.title}</h1> */}
        {/* <div className={styles.titleWrapper}>
          <div className={styles.title2}>
            Terminal
          </div>
          <div className={styles.title}>
            Knowledge
          </div>
          <div className={styles.title2}>
            As Code
          </div>
        </div> */}


        {/* <div className={styles.terminal2}>
          <Terminal text={"pip install cocmd"}/>
        </div> */}
        
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="community for bash aliases, scripts and automations">
      {/* <HomepageHeader /> */}
      {/* <HeroFeatures/> */}

      {/* <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/intro">
            Read the Docs
          </Link>
      </div> */}

      <main>

      <HomeJumbo />
      <HomeFeatures />

      <TechnologiesSection />
      </main>
      {/* <a href="https://www.flaticon.com/free-icons/leadership" title="leadership icons">Leadership icons created by HAJICON - Flaticon</a> */}
    </Layout>
  );
}
