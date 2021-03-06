import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import ProjectInfo from './ProjectInfo/ProjectInfo';

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

const Project = ({ data }) => {
  const HOME = process.env.PUBLIC_URL;

  return (
    <ProjectContainer>
      <div>
        <Title>{data.title}</Title>
        <TechStack>
          {data.tech.map((item) => (
            <TechItem key={`${data.title}-${item}`}>{item}</TechItem>
          ))}
        </TechStack>
        <Image alt={data.title} src={data.image} />
      </div>

      <InfoContainer>
        {data.markdown ? (
          <ProjectInfo data={data} />
        ) : (
          <Description>
            {data.description.map((paragraph) => (
              <Paragraph key={paragraph}>{paragraph}</Paragraph>
            ))}
          </Description>
        )}
        <Links>
          <li>
            {data.linkLabel && (
              <DemoLink
                href={`${data.internalLink ? HOME : ''}${data.demoLink}`}
              >
                {data.linkLabel}
              </DemoLink>
            )}
          </li>
          {data.repos &&
            data.repos.map((repo) => (
              <LinkContainer key={repo.link}>
                <FontAwesomeIcon icon={faGithub} />
                <Link href={repo.link}>{`     ${repo.name}`}</Link>
              </LinkContainer>
            ))}
        </Links>
      </InfoContainer>
    </ProjectContainer>
  );
};

export default Project;
