import React from 'react';
import SpinnerComponent from './SpinnerComponent/SpinnerComponent';

const SpinnerWrapper = WrapperComponent => {
  const translate = props => {
    return props.isLoading ? (
      <SpinnerComponent />
    ) : (
      <WrapperComponent {...props} />
    );
  };

  return translate;
};

export default SpinnerWrapper;
