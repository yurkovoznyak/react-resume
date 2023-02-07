import React from 'react';
import PropTypes from "prop-types";
import Link from '../ui/Link';

const Header = ({ firstName, lastName, program }) => {

  const { nickname, term } = program;

  return (
    <section style={style.main}>
      <h1 style={style.h1}>
        <span style={style.span}>{firstName.toUpperCase()}</span>
        <span style={style.span}>&nbsp;</span>
        <span style={style.span}>{lastName.toUpperCase()}</span>
      </h1>
      <span style={style.program}>
        {term} {nickname}
      </span>
    </section>
  );
};

const style = {
  main: {
    padding: '16px 0 1px 0',
    flex: '1 1 auto',
    fontSize: '1.6rem',
    // background: 'rgba(118, 136, 169, 0.125)',
    marginBottom: '-0.4em',
    height: '9rem',
  },
  h1: {
    color: 'rgb(21, 44, 85)',
    display: 'block',
    fontSize: '3.4rem',
  },
  program: {
    fontSize: '1.2rem',
    display: 'block',
    marginLeft: '5px',
    marginTop: '-6px',
    color: 'rgb(77, 100, 141)'
  },
  span: {
    display: 'inline-block',
  }
};

Header.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  program: PropTypes.object.isRequired,
};

export default Header;
