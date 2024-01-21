import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import IndexProjects from '@site/src/components/Projects';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <h1 className="hero__title">XavierMC Documentation</h1>
        <p className="hero__subtitle">Documentation for all projects under the XavierMC umbrella</p>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout title="Home">
      <HomepageHeader />
      <main>
        <IndexProjects />
      </main>
    </Layout>
  );
}
