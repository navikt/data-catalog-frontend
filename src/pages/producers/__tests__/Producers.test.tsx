import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Producers from '../Producers';

it('renders Producers page without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Producers />, div);
    ReactDOM.unmountComponentAtNode(div);
});
