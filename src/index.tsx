import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './styles/main.css';
// import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { AppContainer } from 'react-hot-loader';
import configStore from './configStore';
// import { I18n } from 'react-i18nify';

const history = createBrowserHistory();
const store = configStore(history);
const rootElement = document.getElementById('root') as HTMLElement;

const render = (Component: React.ComponentType) => {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <ConnectedRouter history={history}>
          <Component />
        </ConnectedRouter>
      </AppContainer>
    </Provider>,
    rootElement
  );
};

render(App);

// registerServiceWorker();
