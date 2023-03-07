import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Stable & Bug-Free',
    Svg: require('@site/static/img/bugfix.svg').default,
    description: (
      <>
        Say goodbye to crashes and glitches. The settings & mods in the guide have been extensively tested.
      </>
    ),
  },
  {
    title: 'Tailor Your Experience',
    Svg: require('@site/static/img/custom.svg').default,
    description: (
      <>
        Customize your game however you want. Virtually all of the mods in the guide are optional.
      </>
    ),
  },
  {
    title: 'Community-Driven',
    Svg: require('@site/static/img/community.svg').default,
    description: (
      <>
        Created for TTW fans, by TTW fans. Join the <a href="https://discord.gg/taleoftwowastelands">TTW Discord</a> for guide help, or to learn to make your own mods!
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
