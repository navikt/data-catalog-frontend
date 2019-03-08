import * as React from 'react';
import * as ReactDOM from 'react-dom';
import DataCatalog from '../DataCatalog';

it('renders DataCatalog page without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DataCatalog />, div);
    ReactDOM.unmountComponentAtNode(div);
});
