import { I18n } from 'react-i18nify';
import * as React from 'react';
import { ChangeEventHandler } from 'react';
import { FocusEventHandler } from 'react';
import { CodeList } from './types';

function getLabel(description: string, code: string) {
  return description === code
    ? ': ' + description
    : ': ' + description + '(' + code + ')';
}

export const createOptionField = (
  text: string,
  code: string,
  description: string,
  data: CodeList[],
  isEdit: boolean = false
) => (
  <div key={text} className="row" style={{ marginBottom: '10px' }}>
    <div className={isEdit ? 'col-md-4 col-sm-12' : 'col-md-4 col-5'}>
      {I18n.t('dataCatalog.pages.mainPage.' + text)}
    </div>

    <div className={isEdit ? 'col-md-6 col-sm-12' : 'col-md-6 col-6'}>
      {isEdit ? (
        <select className="custom-select" id={text}>
          <option value={code}>{description}</option>
          {data &&
            data.length >= 1 &&
            data.map((d: CodeList) => <option value={d.code}>{d.description}</option>)}
        </select>
      ) : (
        getLabel(description, code)
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
    <div className={isEdit ? 'col-md-4 col-sm-12' : 'col-md-4 col-5'}>
      {I18n.t('dataCatalog.pages.mainPage.' + text)}
    </div>
    <div className={isEdit ? 'col-md-6 col-sm-12' : 'col-md-6 col-6'}>
      {isEdit ? (
        <textarea className="form-control" id={text} rows={5}>
          {value}
        </textarea>
      ) : (
        (isEdit ? '' : ' : ') + value
      )}
    </div>
  </div>
);
