import * as React from 'react';
import * as ReactDOM from 'react-dom';
import AccessPolicies from '../AccessPolicies';

it('renders AccessPolicies page without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AccessPolicies />, div);
  ReactDOM.unmountComponentAtNode(div);
});
