import React, { PropTypes } from 'react';
import SidebarHeading from './SidebarHeading';

const Education = ({ universities }) => (
  <section style={style.main}>
    <SidebarHeading align="left">+ EDUCATION</SidebarHeading>
    {universities.map(university => (
      <div style={{ paddingBottom: 10 }}>
        <div style={{
          ...style.text,
          fontWeight: 'bold',
        }}>{university.name}</div>
        <div>{university.degree}</div>
        <div style={style.text}>{university.duration}</div>
      </div>
    ))}
  </section>
);

const style = {
  main: {
    margin: '0.4rem 0 0 0',
  },
  text: {
    textAlign: 'left',
  },
};

Education.propTypes = {
  universities: PropTypes.array.isRequired,
};

export default Education;
