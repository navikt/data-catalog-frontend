import { I18n } from 'react-i18nify';
import * as React from 'react';
import { ChangeEventHandler } from 'react';
import { FocusEventHandler } from 'react';
import { CodeList } from './types';

export const createOptionField = (
  text: string,
  value: string,
  data: CodeList[],
  isEdit: boolean = false
) => (
  <div key={text} className="row" style={{ marginBottom: '10px' }}>
    <div className={isEdit ? 'col-md-4 col-sm-12' : 'col-md-4 col-5'}>
      {I18n.t('dataCatalog.pages.mainPage.' + text)}
    </div>
    <div className={isEdit ? 'col-md-6 col-sm-12' : 'col-md-6 col-6'}>
      {isEdit ? (
        <select className="form-control" id={text}>
          <option>{value}</option>
          {data &&
            data.length >= 1 &&
            data.map((d: CodeList) => <option>{d.code}</option>)}
        </select>
      ) : (
        ': ' + value
      )}
    </div>
  </div>
);
export const createInputField = (
  text: string,
  value: string,
  handleChange: ChangeEventHandler,
  handleBlur: FocusEventHandler,
  isEdit: boolean = false
) => (
  <div key={text} className="row" style={{ marginBottom: '10px' }}>
    <div className={isEdit ? 'col-md-4 col-sm-12' : 'col-md-4 col-5'}>
      {I18n.t('dataCatalog.pages.mainPage.' + text)}
    </div>
    <div className={isEdit ? 'col-md-6 col-sm-12' : 'col-md-6 col-6'}>
      {isEdit ? (
        <input
          type="text"
          className="form-control"
          id={text}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      ) : (
        ': ' + value
      )}
    </div>
  </div>
);
export const createTextAreaField = (
  text: string,
  value: string,
  isEdit: boolean = false
) => (
  <div key={text} className="row" style={{ marginBottom: '10px' }}>
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
