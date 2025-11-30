import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  emoji: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Visual Enhancements',
    emoji: '🎨',
    description: (
      <>
        Advanced theming, automatic theme switching, enhanced UI components with
        consistent rounded borders, better statusline, and improved dashboard.
      </>
    ),
  },
  {
    title: 'Productivity Boosters',
    emoji: '🚀',
    description: (
      <>
        Smart buffer management, enhanced code navigation, better diagnostics,
        Git workflow improvements, and AI coding assistant support via Avante.
      </>
    ),
  },
  {
    title: 'Quality of Life',
    emoji: '⚙️',
    description: (
      <>
        Russian keyboard support, repeatable actions, auto-save to chezmoi,
        VSCode integration, and performance optimizations.
      </>
    ),
  },
];

function Feature({title, emoji, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <div style={{ fontSize: '4rem', margin: '1rem 0' }}>{emoji}</div>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
