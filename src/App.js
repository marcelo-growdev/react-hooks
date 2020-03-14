import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import Routes from './routes';
import GlobalStyle from './styles/global';

import { store, persitor } from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persitor}>
        <Routes />
        <GlobalStyle />
      </PersistGate>
    </Provider>
  );
}

export default App;
