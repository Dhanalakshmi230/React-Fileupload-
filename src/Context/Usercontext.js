
import React, { createContext, useReducer } from 'react';
import { reducer, initialValue } from '../Reducer/Reducer';
const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  const contextValue = {
    state,
    dispatch
  };

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};

export { UserProvider, UserContext };
