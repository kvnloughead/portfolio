import * as React from 'react';

import Project from '../project/project';

import projects from '../../config/projects';
import * as styles from './projects.module.css';
import { colors } from '../../utils/constants';

const Projects = () => (
  <section id="projects" style={{ background: colors.white }} className={styles.projects}>
    <h2 style={{ color: colors.black }} className={styles.projects__title}>
      Projects
    </h2>
    <ul className={styles.projects__list}>
      {projects.map((project) => (
        <Project key={project.title} data={project} />
      ))}
    </ul>
  </section>
);

export default Projects;
