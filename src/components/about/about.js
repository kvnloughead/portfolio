import * as React from 'react';

import { personalInfo, profilePic } from '../../config/resume-data';
import { colors } from '../../utils/constants';
import * as styles from './about.module.css';

const About = () => (
  <section id="about" className={styles.about} >
    <img className={styles.about__image} alt={personalInfo.name} src={profilePic} />
    <div className={styles.about__textContainer}>
      <h2 className={styles.about__title} style={{ color: colors.white }}>
        About Me
      </h2>
      <p className={styles.about__summary} style={{ color: colors.white }}>
        {personalInfo.summary}
      </p>
    </div>
  </section>
);

export default About;
