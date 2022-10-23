import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Automated datapack generation',
    Svg: require('../../../static/img/align_center-h.svg').default,
    description: (
      <>
        Generate detailed C & I documentation datapacks with minimal human intervention.
      </>
    ),
  },
  {
    title: 'Implement internal design standards as code',
    Svg: require('../../../static/img/bezier.svg').default,
    description: (
      <>
        Generated datapacks are guaranteed to conform to C & I standards based on a single configured template or through user interface.
      </>
    ),
  },
  {
    title: 'Single source of truth',
    Svg: require('../../../static/img/database.svg').default,
    description: (
      <>
        Only one document is populated with proposed equipment, eliminating uncertainty
        around where and if all design elements have been accounted for.
      </>
    ),
  },
  {
    title: 'Reduce technical uncertainty',
    Svg: require('../../../static/img/login.svg').default,
    description: (
      <>
        Software configuration files can be generated alongside datapacks to ensure consistant
        naming conventions and eliminate ambiguity.
      </>
    ),
  },
  {
    title: 'Evaluate configurations',
    Svg: require('../../../static/img/grid_3-1.svg').default,
    description: (
      <>
        Evaluate multiple vendor specific configurations for project feasibility based on supply chain constraints.
        Vendor proposed designs can be evaluated easily to ensure compliance and alignment with
        project scope and specifications.
      </>
    ),
  },
  {
    title: 'Extensible and Accessable',
    Svg: require('../../../static/img/globe.svg').default,
    description: (
      <>
        Cloud based tooling means that there are no IM access limitations and
        can be easily integrated into existing internal web applications.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
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
