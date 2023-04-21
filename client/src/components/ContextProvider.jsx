import React, { createContext } from 'react';

const Context = createContext({});
export const InternalProvider = ({ children, context }) => {
  return <Context.Provider value={context}>{children}</Context.Provider>;
};

export { Context };
