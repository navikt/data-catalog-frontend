import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MainPage from '../MainPage';

const props = () => ({
  pathName: 'test',
  store: {}
});

it('renders Main page without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MainPage {...props} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
