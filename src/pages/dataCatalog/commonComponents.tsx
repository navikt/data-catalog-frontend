import { I18n } from 'react-i18nify';
import * as React from 'react';

export const createOptionField = (text: string, value: string, isEdit: boolean) => (
  <div className="row" style={{ marginBottom: '10px' }}>
    <div className="col-md-4">{I18n.t('dataCatalog.pages.mainPage.' + text)}</div>
    <div className="col-md-6">
      {isEdit ? (
        <select className="form-control" id={text}>
          <option>{value}</option>
        </select>
      ) : (
        ': ' + value
      )}
    </div>
  </div>
);
export const createInputField = (text: string, value: string, isEdit: boolean) => (
  <div className="row" style={{ marginBottom: '10px' }}>
    <div className="col-md-4">{I18n.t('dataCatalog.pages.mainPage.' + text)}</div>
    <div className="col-md-6">
      {isEdit ? (
        <input type="text" className="form-control" id={text} value={value} />
      ) : (
        ': ' + value
      )}
    </div>
  </div>
);
export const createTextAreaField = (text: string, value: string, isEdit: boolean) => (
  <div className="row" style={{ marginBottom: '10px' }}>
    <div className="col-md-3">
      {I18n.t('dataCatalog.pages.mainPage.' + text + (isEdit ? '' : ' : '))}
    </div>
    <div className="col-md-9">
      {isEdit ? (
        <textarea className="form-control" id={text} rows={5}>
          {value}
        </textarea>
      ) : (
        value
      )}
    </div>
  </div>
);
