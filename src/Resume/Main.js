import React from 'react';
import PropTypes from "prop-types";
import Companies from './Companies';
import MainHeading from './MainHeading';
import Project from './Project';
import Section from '../ui/Section';

// http://paletton.com/#uid=13I0u0kllllaFw0g0qFqFg0w0aF

const Main = ({ profileDescription, companies, projects }) => (
  <section style={style.main}>
    <MainHeading title="+ Profile" />
    <Section color="rgb(77, 100, 141)">
      <ul style={{ padding: 0 }} dangerouslySetInnerHTML={{ __html: profileDescription }}/>
    </Section>
    <MainHeading title="+ Work Experience" />
    <Companies data={companies} />
    <MainHeading title="+ Projects" />
      {projects.map((project, key) => (
        <Section color="rgb(77, 100, 141)" key={key}>
          <Project
            name={project.name}
            tools={project.tools}
            achievements={project.achievements}
            link={project.link}
            key={key} />
        </Section>
      ))}
  </section>
);

const style = {
  main: {
    paddingRight: '1.25rem',
  },
};

Main.propTypes = {
  profileDescription: PropTypes.string.isRequired,
  companies: PropTypes.arrayOf(PropTypes.object).isRequired,
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Main;
