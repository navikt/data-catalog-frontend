import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './styles/index.css';
import './styles/App.css';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);
registerServiceWorker();
