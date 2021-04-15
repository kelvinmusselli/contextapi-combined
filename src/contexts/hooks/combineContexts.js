import React from 'react';

export const combineContexts = (...components) => {
  return components.reduce((AccumulatedComponents, CurrentComponent) => {
      return ({ children }) => {
          return (React.createElement(AccumulatedComponents, null,
              React.createElement(CurrentComponent, null, children)));
      };
  }, ({ children }) => React.createElement(React.Fragment, null, children));
};
