import React, {PropTypes} from 'react';

const Container = ({children}) => (
    <div style={style}>
      {children}
    </div>
);

const width = 1000;
const height = 11 / 8.5 * width;

const style = {
  width: `${width}px`,
  height: `${height}px`,
  margin: '0 auto',
  fontFamily: '\'Open Sans\', sans-serif',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap'
};

export default Container;
