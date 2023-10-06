import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { MemoryRouter as Router } from 'react-router-dom';

/* Redux */
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { useMemo, useState } from 'react';
import reducers from './reducers';
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

import Application from './components/Application';
import ThemeContext from './Context/ThemeContext';
import { GlobalProvider } from './Context/GlobalContext';
import './styles/main.scss';

// Create main element
const mainElement = document.createElement('div');
mainElement.id = 'root';
document.body.appendChild(mainElement);

const App = () => {
  const [theme, setTheme] = useState('dark');
  const value = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>
      <Provider store={store}>
        <AppContainer>
          <Router>
            <Application />
          </Router>
        </AppContainer>
      </Provider>
    </ThemeContext.Provider>
  );
};

ReactDOM.render(
<GlobalProvider>
  <App />
</GlobalProvider>,
  mainElement,
);
