import * as React from 'react';
import { I18n } from 'react-i18nify';

class Consumers extends React.Component {
  public render() {
    return (
      <div>
        <h5>{I18n.t('dataCatalog.pages.consumers.consumers')}</h5>
        <hr style={{ height: '1px' }} />
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th>Application name</th>
              <th>Information type</th>
              <th>Purposes</th>
            </tr>
          </thead>
          <tbody>
            <tr key={1}>
              <td>Pesys</td>
              <td>Sivilstand</td>
              <td>AP, UP, BP, OP</td>
            </tr>
            <tr key={2}>
              <td>Pesys</td>
              <td>Fnr.</td>
              <td>AP, UP, BP, OP</td>
            </tr>
            <tr key={3}>
              <td>Pesys</td>
              <td>Navn</td>
              <td>AP, UP, BP, OP</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Consumers;
