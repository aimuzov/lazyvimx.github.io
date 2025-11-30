import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import Translate, { translate } from "@docusaurus/Translate";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/getting-started"
          >
            <Translate id="homepage.getStarted">Get Started</Translate>
          </Link>
          <Link
            className="button button--outline button--lg margin-left--md"
            to="https://github.com/aimuzov/LazyVimx"
          >
            <Translate id="homepage.viewOnGitHub">View on GitHub</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={translate({
        id: "homepage.title",
        message: "lazyvimx - Enhanced LazyVim Configuration",
        description: "The homepage title",
      })}
      description={translate({
        id: "homepage.description",
        message:
          "Enhanced LazyVim configuration with extensive customizations, UI improvements, and workflow optimizations",
        description: "The homepage description",
      })}
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
