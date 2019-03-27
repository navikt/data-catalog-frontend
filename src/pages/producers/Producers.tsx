import * as React from 'react';
import { I18n } from 'react-i18nify';

class Producers extends React.Component {
  public render() {
    return (
      <div>
        <h5>{I18n.t('dataCatalog.pages.producers.producers')}</h5>
        <hr style={{ height: '1px' }} />
          <div className="table-responsive">
              <table className="table table-striped table-sm">
                  <thead>
                  <tr>
                      <th>{I18n.t('dataCatalog.pages.mainPage.name')}</th>
                      <th>{I18n.t('dataCatalog.pages.mainPage.sourceOfRecord')}</th>
                  </tr>
                  </thead>
                  <tbody>
                      <tr key={1}>
                          <td>TPS</td>
                          <td>NAV</td>
                      </tr>
                      <tr key={2}>
                          <td>Aa-reg</td>
                          <td>NAV</td>
                      </tr>
                      <tr key={3}>
                          <td>INST</td>
                          <td>NAV</td>
                      </tr>
                      <tr key={4}>
                          <td>POPP</td>
                          <td>NAV</td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </div>
    );
  }
}

export default Producers;
