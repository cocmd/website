import React from "react";
import styles from "./install.module.css";
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import Link from "@docusaurus/Link";
import { getStableVersion, getStableDownloadLink } from "@site/src/utils/versionUtils";

export default function Install() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="community for bash aliases, scripts and automations">
        <main>
    <div className={styles.container}>
      

      <div className={styles["install-section"]}>
        <h1>Installation</h1>
        <p>Select your operating system:</p>
        <div className={styles.targets}>
          <div className={styles.target}>
            <div className={styles.windows} />
            <h3>Windows</h3>
            <a
              className={styles.button}
              href={getStableDownloadLink("WIN_INSTALLER_DOWNLOAD_URL")}
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  getStableDownloadLink("WIN_INSTALLER_DOWNLOAD_URL")
                );
                window.location =
                  "/docs/install/win#problems-you-may-experience";
                window.focus();
              }}
            >
              Installer (64-bit)
            </a>
            <a
              className={styles.button}
              href={getStableDownloadLink("WIN_PORTABLE_DOWNLOAD_URL")}
              onClick={(e) => {
                e.preventDefault();
                window.open(getStableDownloadLink("WIN_PORTABLE_DOWNLOAD_URL"));
                window.location = "";
                window.focus();
              }}
            >
              Portable zip (64-bit)
            </a>
            <span>Version {getStableVersion()}</span>
          </div>
          <div className={styles.target}>
            <div className={styles.macos} />
            <h3>macOS</h3>
            <a
              className={styles.button}
              href={getStableDownloadLink("MAC_INTEL_DOWNLOAD_URL")}
              onClick={(e) => {
                e.preventDefault();
                window.open(getStableDownloadLink("MAC_INTEL_DOWNLOAD_URL"));
                window.location =
                  "/docs/install/mac/#problems-you-may-experience";
                window.focus();
              }}
            >
              Intel
            </a>
            <a
              className={styles.button}
              href={getStableDownloadLink("MAC_M1_DOWNLOAD_URL")}
              onClick={(e) => {
                e.preventDefault();
                window.open(getStableDownloadLink("MAC_M1_DOWNLOAD_URL"));
                window.location =
                  "/docs/install/mac/#problems-you-may-experience";
                window.focus();
              }}
            >
              M1 (Apple Silicon)
            </a>
            <span>Version {getStableVersion()}</span>
          </div>
          <div className={styles.target}>
            <div className={styles.linux} />
            <h3>Linux</h3>
            <Link
              className={styles.button}
              to="/docs/install/linux/#choosing-the-right-install-method"
            >
              X11
            </Link>
            <Link
              className={styles.button}
              to="/docs/install/linux/#choosing-the-right-install-method"
            >
              Wayland
            </Link>
            <Link to="/docs/install/linux/#find-the-right-version">
              Which version should you choose?
            </Link>
            <span>Version {getStableVersion()}</span>
          </div>
        </div>
      </div>

      
    </div>
    </main>
    </Layout>
  );
}
