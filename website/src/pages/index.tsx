import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';
import Logo from '@site/static/img/logo.svg';

export default function Home() {
  return (
    <Layout
      title="The WHY Loop"
      description="A reasoning method to turn goals into grounded actions — one WHY at a time.">
      
      <header className={styles.heroBanner}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Logo className={styles.heroLogo} />
          </div>
          <h1 className="hero__title">The WHY Loop</h1>
          <p className="hero__subtitle">
            A structured method to move from goals to grounded actions — through logic, iteration, and one powerful question.
          </p>
          <div className={styles.buttons}>
            <Link className="button button--secondary button--lg" to="/method">
              How It Works
            </Link>
            <span style={{ margin: '0 1rem' }}></span>
            <Link className="button button--secondary button--lg" to="/power">
              Why It Works
            </Link>
          </div>
        </div>
      </header>

      <main>

        <section className="container padding-vert--lg">
          <h2 className="text--center">The Core Structure</h2>
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
                <p>Explore what helps and what could fail — and why.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="container padding-vert--lg">
          <h2 className="text--center">Explore the WHY Loop</h2>
          <div className="row text--center">
            <div className="col col--4">
              <h4>The Method</h4>
              <p>Step-by-step breakdown of the WHY Loop structure.</p>
              <Link to="/method" className="button button--primary button--sm">Read More</Link>
            </div>
            <div className="col col--4">
              <h4>Why It Works</h4>
              <p>Why this simple method is so effective across domains.</p>
              <Link to="/power" className="button button--primary button--sm">Read More</Link>
            </div>
            <div className="col col--4">
              <h4>In Context</h4>
              <p>How it compares and complements other frameworks.</p>
              <Link to="/context" className="button button--primary button--sm">Read More</Link>
            </div>
          </div>
        </section>

        <section className="container padding-vert--lg">
          <h2 className="text--center">Case Studies</h2>
          <p className="text--center">See how the WHY Loop applies in coaching, education, crisis response, and career change.</p>
          <div className="text--center">
            <Link className="button button--secondary button--lg" to="/cases">
              View Examples
            </Link>
          </div>
        </section>

      </main>
    </Layout>
  );
}
