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

export const createOptionFieldBoolean = (
  text: string,
  handleChange: ChangeEventHandler,
  handleBlur: FocusEventHandler,
  isEdit: boolean = false,
  code?: boolean | string
) => (
  <div key={text} className="row" style={{ marginBottom: '10px' }}>
    <div className={isEdit ? 'col-md-4 col-sm-12' : 'col-md-4 col-5'}>
      {I18n.t('dataCatalog.pages.mainPage.' + text)}
    </div>

    <div className={isEdit ? 'col-md-6 col-sm-12' : 'col-md-6 col-6'}>
      {isEdit ? (
        <select
          className="custom-select"
          id={text}
          onChange={handleChange}
          onBlur={handleBlur}
        >
          <option value={code ? 'true' : 'false'}>
            {code ? I18n.t('dataCatalog.words.yes') : I18n.t('dataCatalog.words.no')}
          </option>
          <option key={1} value="true">
            {I18n.t('dataCatalog.words.yes')}
          </option>
          <option key={0} value="false">
            {I18n.t('dataCatalog.words.no')}
          </option>
        </select>
      ) : code ? (
          ': ' + I18n.t('dataCatalog.words.yes')
      ) : (
          ': ' + I18n.t('dataCatalog.words.no')
      )}
    </div>
  </div>
);

export const createOptionField = (
  text: string,
  code: string,
  description: string,
  data: CodeList[],
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
        <select
          className="custom-select"
          id={text + '.code'}
          onChange={handleChange}
          onBlur={handleBlur}
        >
          <option value={code}>{description}</option>
          {data &&
            data.length >= 1 &&
            data.map((d: CodeList) => (
              <option key={d.code} value={d.code}>
                {d.description}
              </option>
            ))}
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
    <div
      key={text + 'label'}
      className={isEdit ? 'col-md-4 col-sm-12' : 'col-md-4 col-5'}
    >
      {I18n.t('dataCatalog.pages.mainPage.' + text)}
    </div>
    <div
      key={text + 'value'}
      className={isEdit ? 'col-md-6 col-sm-12' : 'col-md-6 col-6'}
    >
      {isEdit ? (
        <input
          type="text"
          className="form-control"
          key={text}
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
        <textarea
          id={text}
          key={text}
          className="form-control"
          rows={5}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      ) : (
        (isEdit ? '' : ' : ') + value
      )}
    </div>
  </div>
);
