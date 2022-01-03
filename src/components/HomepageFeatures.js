import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
		page: '/docs/principles/basics',
    title: 'Principles',
    img: require('../../static/img/icons8-compass-100.png').default,
    description: (
      <>
        What is Web Accessibility?
      </>
    ),
  },
  {
		page: '/docs/get-started/color-contrast',
    title: 'Get Started',
    img: require('../../static/img/icons8-rocket-100.png').default,
		description: (
      <>
        How can you make an Accessibile app?
      </>
    ),
  },
  {
		page: '/docs/tools/checklist',
    title: 'Tools',
    img: require('../../static/img/icons8-tools-100.png').default,
		description: (
      <>
        Save time!
      </>
    ),
  },
  {
		page: '/docs/library/menu',
    title: 'Library',
    img: require('../../static/img/icons8-library-100.png').default,
		description: (
      <>
        Steal like an artist!
      </>
    ),
  },
];

function Feature({page, img, title, description}) {
  return (
    <a className={clsx('col col--6')} href={page}>
      <div className="text--center">
				<img src={img} />
        {/* <Svg className={styles.featureSvg} alt={title} /> */}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
				{ description && <p>{description}</p> }
      </div>
    </a>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      {/* <div className="container"> */}
      <div className={styles.container}>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
