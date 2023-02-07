import React from 'react';
import PropTypes from "prop-types";
import Company from './Company';

const Companies = ({ data: companies }) => (
  <div>
    {companies.map((company, key) => (
      <Company
        color={company.color}
        key={key}
        name={company.name}
        projects={company.projects}
        title={company.title}
        date={company.date}
        location={company.location}
        achievements={company.achievements} />
    ))}
  </div>
);

Companies.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Companies;
