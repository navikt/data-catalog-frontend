import * as React from 'react';
import { I18n } from 'react-i18nify';

class DataLineage extends React.Component {
  public render() {
    return (
      <div>
        <h5>{I18n.t('dataCatalog.pages.dataLineage.dataLineage')}</h5>
        <hr style={{ height: '1px' }} />
        <div>{I18n.t('dataCatalog.words.pageDetails')}</div>
      </div>
    );
  }
}

export default DataLineage;
