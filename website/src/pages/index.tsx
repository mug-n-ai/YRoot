import React, { JSX } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

export default function Home(): JSX.Element {
  return (
    <Layout
      title="The WHY Loop"
      description="A reasoning method to turn goals into grounded actions — one WHY at a time.">
      <header className={styles.heroBanner}>
        <div className="container">
          <h1 className="hero__title">The WHY Loop</h1>
          <p className="hero__subtitle">From goals to grounded actions — one WHY at a time.</p>
          <div className={styles.buttons}>
            <Link className="button button--primary button--lg" to="/method">
              Explore the Method
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="container padding-vert--lg">
          <div className="row">
            <div className="col col--4">
              <div className="text--center">
                <img src="/img/goals.png" alt="Goal Icon" className={styles.featureIcon} />
                <h3>1. Goal</h3>
                <p>Clarify what you want to achieve and why it matters.</p>
              </div>
            </div>
            <div className="col col--4">
              <div className="text--center">
                <img src="/img/needs.png" alt="Needs Icon" className={styles.featureIcon} />
                <h3>2. Needs</h3>
                <p>Identify what must be true to reach your goal.</p>
              </div>
            </div>
            <div className="col col--4">
              <div className="text--center">
                <img src="/img/bifurcation.png" alt="Bifurcation Icon" className={styles.featureIcon} />
                <h3>3. Strategic Bifurcation</h3>
                <p>Explore helpful strategies and risks for each need.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="container padding-vert--lg">
          <h2 className="text--center">Why Choose the WHY Loop?</h2>
          <p className="text--center">Grounded logic. Transparent decisions. Adaptable across fields.</p>
          <div className="text--center">
            <Link className="button button--secondary button--lg" to="/context">
              The WHY Loop in Context
            </Link>
            <span style={{ margin: '0 1rem' }}></span>
            <Link className="button button--outline button--lg" to="/cases">
              See Case Studies
            </Link>
          </div>
        </section>

      </main>
    </Layout>
  );
}
