import React from 'react';

const initialState = {
  theme: '',
  setTheme: color => {},
};

const ThemeContext = React.createContext(initialState);

export default ThemeContext;
