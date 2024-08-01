import React from 'react';

const formatDate = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
  return date.toLocaleDateString('en-GB', options);
};

const CurrentDate: React.FC = () => {
  const today = new Date();
  return (
    <div>
      <p>{formatDate(today)}</p>
    </div>
  );
};

export default CurrentDate;
