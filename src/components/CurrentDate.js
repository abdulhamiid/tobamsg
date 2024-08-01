import React from 'react';

const formatDate = (date) => {
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  return date.toLocaleDateString('en-GB', options);
};

const CurrentDate = () => {
  const today = new Date();
  return (
    <div>
      <p>{formatDate(today)}</p>
    </div>
  );
};

export default CurrentDate;
