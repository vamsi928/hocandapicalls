import React from 'react';
import SpinnerWrapper from './SpinnerWrapper';

const DisplayGoodBye = props => {
  return (
    <div>
      <h3>GoodBye, Thanks for looking here!</h3>
    </div>
  );
};

export default SpinnerWrapper(DisplayGoodBye);
