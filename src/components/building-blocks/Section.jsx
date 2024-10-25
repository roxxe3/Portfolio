/** @jsxImportSource theme-ui */
import React from 'react';
import MonthDayYear from './MonthDayYear';

const Section = ({ children, updatedAt, sx, ...rest }) => (
  <section
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      gap: 8,
      minHeight: '100%',
      maxWidth: '1000px',
      ...sx,
    }}
    {...rest}
  >
    {children}
    <MonthDayYear
      sx={{ fontStyle: 'italic', fontSize: 'smaller' }}
      date={updatedAt}
    >
      {(date) => `Last Updated: 25/10/2024`}
    </MonthDayYear>
  </section>
);

export default Section;
