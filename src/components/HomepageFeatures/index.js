import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [];

function Feature({ description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {}
        <div className={styles.featureSvg}></div>
      </div>
      <div className="text--center padding-horiz--md" style={{ background: 'white' }}>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

