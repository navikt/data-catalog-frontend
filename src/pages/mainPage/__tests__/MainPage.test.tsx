import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MainPage from '../MainPage';

it('renders Main page without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MainPage />, div);
    ReactDOM.unmountComponentAtNode(div);
});
