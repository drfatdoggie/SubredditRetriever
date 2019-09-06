import React from 'react';
import RedditApp from './src/RedditApp';
import configureStore from './src/store/configureStore';
import { Provider } from 'react-redux';

const store = configureStore()

export default function App() {
  return (
    <Provider store={store}>
      <RedditApp />
    </Provider>
  );
}