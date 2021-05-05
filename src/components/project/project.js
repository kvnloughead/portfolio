import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import {
  ProjectContainer,
  Image,
  InfoContainer,
  Title,
  TechStack,
  TechItem,
  Description,
  Paragraph,
  Links,
  LinkContainer,
  Link,
  DemoLink,
} from './styles';

const Project = ({ data }) => (
  <ProjectContainer>
    <Image alt={data.title} src={data.image} />
    <InfoContainer>
      <Title>{data.title}</Title>
      <TechStack>
        {data.tech.map((item) => (
          <TechItem key={`${data.title}-${item}`}>{item}</TechItem>
        ))}
      </TechStack>
      <Description>
        {data.description.map((paragraph) => (
          <Paragraph key={paragraph}>{paragraph}</Paragraph>
        ))}
      </Description>

      <Links>
        <li>
          <DemoLink href={data.demoLink}>Demo</DemoLink>
        </li>
        {data.repos.map((repo) => (
          <LinkContainer key={repo.link}>
            <FontAwesomeIcon icon={faGithub} />
            <Link href={repo.link}>{`     ${repo.name}`}</Link>
          </LinkContainer>
        ))}
      </Links>
    </InfoContainer>
  </ProjectContainer>
);

export default Project;
